<template>
  <div>
    <Container
      orientation="horizontal"
      drag-handle-selector=".column-drag-handle"
      :get-child-payload="getChildPayload"
      @drop="handleDropBlock($event)"
      class="blocks"
      :style="{ gridTemplateColumns: `repeat(${blockState.cols}, 1fr)` }"
    >
      <Draggable class="blocks-bookmarks" v-for="(blocks, index) in blockState.value" :key="index">
        <p class="text" :style="{ fontSize: `${SIZE_STATE - 3}px` }">
          <span :style="{ fontSize: `${SIZE_STATE}px` }" class="column-drag-handle">&#x2630;</span>
          {{ blocks.name }}
        </p>
        <Container
          group-name="trello"
          drag-handle-selector=".column-drag-handle"
          :get-child-payload="getChildPayload"
          @drag-start="handleDragLinkStart($event, blocks.name)"
          @drop="handleDropLink($event, blocks.name)"
        >
          <Draggable v-for="(links, index) in blocks.value" :key="index">
            <div class="blocks-bookmarks-cols">
              <span class="column-drag-handle link">&#x2630;</span>
              {{ links.text }}
            </div>
          </Draggable>
        </Container>
      </Draggable>
    </Container>
    <a href="#" @click="saveChanges">
      <font-awesome-icon icon="save" />
    </a>
    <a href="#" @click="closeChanges">
      <font-awesome-icon icon="window-close" />
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Container, Draggable } from 'vue-smooth-dnd';

export default {
  name: 'ChangeBlockBookmarks',
  data: () => ({
    blockState: {},
    draggingLink: {},
  }),
  components: {
    Container,
    Draggable,
  },
  created() {
    this.blockState = JSON.parse(JSON.stringify(this.BLOCK_STATE));
  },
  computed: {
    ...mapGetters(['SIZE_STATE', 'BLOCK_STATE']),
  },
  methods: {
    ...mapActions(['changeStateBlocks', 'changeComponents']),
    handleDropBlock(dropResult) {
      const { removedIndex, addedIndex } = dropResult;
      const movedBlock = this.blockState.value.splice(removedIndex, 1);
      this.blockState.value.splice(addedIndex, 0, movedBlock[0]);
    },
    handleDragLinkStart(dragResult, blockName) {
      const { payload, isSource } = dragResult;
      if (isSource) {
        this.draggingLink = {
          nameBlock: blockName,
          index: payload.index,
          link: this.blockState.value.find((block) => block.name === blockName).value[
            payload.index
          ],
        };
      }
    },
    handleDropLink(dropResult, blockName) {
      const { removedIndex, addedIndex } = dropResult;
      if (this.draggingLink.nameBlock === blockName && removedIndex === addedIndex) return;
      if (removedIndex !== null) {
        this.blockState.value
          .find((block) => block.name === blockName)
          .value.splice(removedIndex, 1);
      }
      if (addedIndex !== null) {
        this.blockState.value
          .find((block) => block.name === blockName)
          .value.splice(addedIndex, 0, this.draggingLink.link);
      }
    },
    getChildPayload(index) {
      return { index };
    },
    saveChanges() {
      this.changeStateBlocks(this.blockState);
      this.changeComponents();
    },
    closeChanges() {
      this.changeComponents();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../public/themesAndFonts';
.blocks {
  display: grid;
  margin: 2% 0%;
  @include themify($themes) {
    background-color: themed('anotherBackgroundColor');
    &-bookmarks {
      border: 1px solid themed('textColor');
      background-color: themed('anotherBackgroundColor');
      border-radius: 2px;
      text-align: center;
      &-cols {
        background-color: themed('backgroundColor');
        border: 1px solid themed('textColor');
        border-radius: 2px;
        margin: 1% 1%;
        color: themed('textColor');
      }
    }
    .text {
      color: themed('hoverColor');
    }
    .column-drag-handle {
      color: themed('textColor');
      float: left;
      padding: 0 0 0 2%;
      cursor: move;
    }
    .link {
      padding: 0 0 0 1%;
    }
  }
}
</style>
