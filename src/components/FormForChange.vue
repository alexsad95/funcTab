<template>
  <div class="form-for-change-bookmarks">
    <div class="buttonWrapper">
      <div class="button">From bookmarks</div>
    </div>
    <form class="change_bookmark_form">
      <input
        class="inp"
        name="linkName"
        autocomplete="off"
        placeholder="links name"
        :value="nameValue"
        @input="changeName"
        autofocus
        :style="{ fontFamily: FONT_STATE, fontSize: SIZE_STATE + 'px' }"
      />
      <input
        class="inp"
        name="linkUrl"
        autocomplete="off"
        placeholder="links url"
        :value="urlValue"
        @input="changeUrl"
        :style="{ fontFamily: FONT_STATE, fontSize: SIZE_STATE + 'px' }"
      />
    </form>
    <div class="panel-button">
      <div @click="saveLink" class="button">Save</div>
      <div @click="close" class="button">Close</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FormForChange',
  data: () => ({
    urlOldValue: '',
    urlValue: '',
    nameValue: '',
    blockName: '',
    blockState: {},
    index: 0,
  }),
  created() {
    const {
      url, name, blockName, blockState, index,
    } = this.BOOKMARKS_CHANGE_STATE;

    this.urlValue = url;
    this.urlOldValue = url;
    this.nameValue = name;
    this.blockName = blockName;
    this.blockState = blockState;
    this.index = index;
  },
  computed: {
    ...mapGetters(['FONT_STATE', 'SIZE_STATE', 'BLOCK_STATE', 'BOOKMARKS_CHANGE_STATE']),
  },
  methods: {
    ...mapActions(['closeModal', 'saveLinksChanges', 'changeStateBlocks']),

    async close() {
      await this.closeModal('isChangeFormVisible');
    },

    changeUrl(event) {
      this.urlValue = event.target.value;
    },

    changeName(event) {
      this.nameValue = event.target.value;
    },

    async saveLink() {
      const currLink = this.blockState.value.find((block) => block.name === this.blockName).value[
        this.index
      ];

      if (!this.urlValue) {
        currLink.href = this.urlOldValue;
      } else {
        currLink.href = this.urlValue;
      }

      currLink.text = this.nameValue;
      this.blockState.value.find((block) => block.name === this.blockName).value[
        this.index
      ] = currLink;

      await this.close();
    },
  },
};
</script>

<style lang="scss" scoped src="../../public/scss/formForChange.scss"></style>
