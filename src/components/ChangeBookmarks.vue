<template>
  <div>
    <!-- Blocks with links -->

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
          <a
            href="#"
            class="column-drag-handle icons-info"
            :style="{ fontSize: `${SIZE_STATE - 8}px` }"
            data-title="Move block"
          >
            <font-awesome-icon icon="arrows-alt" />
          </a>
          <a
            href="#"
            :style="{ fontSize: `${SIZE_STATE - 8}px` }"
            class="change icons-info"
            data-title="Change block"
            @click="changeLink(link.text)"
          >
            <font-awesome-icon icon="edit" />
          </a>
          <a
            href="#"
            :style="{ fontSize: `${SIZE_STATE - 8}px` }"
            class="remove icons-info"
            data-title="Remove block"
            @click="removeLink(link.text)"
          >
            <font-awesome-icon icon="trash-alt" />
          </a>
          {{ blocks.name }}
        </p>

        <!-- Links -->

        <Container
          group-name="trello"
          drag-handle-selector=".column-drag-handle"
          :get-child-payload="getChildPayload"
          @drag-start="handleDragLinkStart($event, blocks.name)"
          @drop="handleDropLink($event, blocks.name)"
        >
          <Draggable v-for="(link, index) in blocks.value" :key="index">
            <div class="blocks-bookmarks-cols">
              <a
                href="#"
                class="column-drag-handle link icons-info"
                :style="{ fontSize: `${SIZE_STATE - 8}px` }"
                data-title="Move link"
              >
                <font-awesome-icon icon="arrows-alt" />
              </a>
              <a
                href="#"
                :style="{ fontSize: `${SIZE_STATE - 8}px` }"
                class="change link icons-info"
                @click="changeLink(link.text)"
                data-title="Change link"
              >
                <font-awesome-icon icon="edit" />
              </a>
              <a
                href="#"
                :style="{ fontSize: `${SIZE_STATE - 8}px` }"
                class="remove link icons-info"
                @click="removeLink(blocks.name, link.text, index)"
                data-title="Remove link"
              >
                <font-awesome-icon icon="trash-alt" />
              </a>
              {{ link.text }}
            </div>
          </Draggable>
        </Container>
      </Draggable>
    </Container>
    <div class="actions-block">
      <a href="#" @click="saveChanges" class="icons-info" data-title="Save all change">
        <font-awesome-icon icon="save" />
      </a>
      <a href="#" @click="closeChanges" class="icons-info" data-title="Cancel changes">
        <font-awesome-icon icon="window-close" />
      </a>
    </div>
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
    ...mapActions(['changeStateBlocks', 'closeChangeComponents']),
    changeLink(link) {
      console.log('changeLink__:', link);
    },
    removeLink(blockName, linkName, index) {
      this.blockState.value.find((block) => block.name === blockName).value.splice(index, 1);
    },
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
      this.closeChangeComponents();
    },
    closeChanges() {
      this.closeChangeComponents();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../public/themesAndFonts';
.blocks {
  display: grid !important;
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
      padding: 5px 0 0 9px;
      cursor: move;
    }
    .change {
      color: themed('textColor');
      float: left;
      padding: 5px 0 0 5px;
      cursor: pointer;
    }
    .remove {
      color: themed('textColor');
      float: left;
      padding: 5px 0 0 5px;
      cursor: pointer;
    }
    .link {
      padding: 5px 0 0 5px;
    }
  }
}
</style>
