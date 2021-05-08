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
    blockState: {},
    urlValue: '',
    nameValue: '',
  }),
  created() {
    this.blockState = JSON.parse(JSON.stringify(this.BLOCK_STATE));
    this.urlValue = this.BOOKMARKS_URL_STATE;
    this.nameValue = this.BOOKMARKS_NAME_STATE;
  },
  computed: {
    ...mapGetters([
      'FONT_STATE',
      'SIZE_STATE',
      'BLOCK_STATE',
      'BOOKMARKS_URL_STATE',
      'BOOKMARKS_NAME_STATE',
    ]),
  },
  methods: {
    ...mapActions(['closeModal', 'saveLinksChanges', 'changeStateBlocks']),
    close() {
      this.closeModal('isChangeFormVisible');
    },
    changeUrl(event) {
      console.log('changeUrl: ', event.target.value);
      this.urlValue = event.target.value;
    },
    changeName(event) {
      console.log('changeName: ', event.target.value);
      this.nameValue = event.target.value;
    },
    saveLink() {
      console.log('url: ', this.urlValue);
      console.log('name: ', this.nameValue);
      console.log('blockState: ', this.blockState.value);
    },
  },
};
</script>

<style lang="scss" scoped src="../../public/scss/formForChange.scss"></style>
