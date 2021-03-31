<template>
  <div class="form-for-change-bookmarks">
    <div class="buttonWrapper">
      <div class="button">From bookmarks</div>
    </div>
    <form class="change_bookmark_form">
      <input
        class="inp"
        name="q"
        placeholder="links name"
        autofocus
        :style="{ fontFamily: FONT_STATE, fontSize: SIZE_STATE + 'px' }"
      />
      <input
        class="inp"
        name="q"
        placeholder="links url"
        :style="{ fontFamily: FONT_STATE, fontSize: SIZE_STATE + 'px' }"
      />
    </form>
    <div class="panel-button">
      <div class="button">Save</div>
      <div @click="close" class="button">Close</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FormForChange',
  computed: {
    ...mapGetters(['FONT_STATE', 'SIZE_STATE']),
  },
  methods: {
    ...mapActions(['closeModal']), // 'saveLinksChanges',
    close() {
      this.closeModal('isChangeFormVisible');
    },
  },
};
</script>

<style lang="scss" scoped src="../../public/scss/formForChange.scss"></style>
