<template>
  <div class="form-for-change-bookmarks">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FormForChange',
  computed: {
    ...mapGetters(['FONT_STATE', 'SIZE_STATE']),
  },
};
</script>

<style lang="scss" scoped src="../../public/scss/formForChange.scss"></style>
