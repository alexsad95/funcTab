<template>
  <div class="search-form">
    <form method="get" action="https://google.com/search?">
      <input
        class="inp"
        name="q"
        type="search"
        placeholder="Search"
        autofocus
        autocomplete="off"
        accesskey="s"
        :style="{ fontFamily: FONT_STATE, fontSize: SIZE_STATE + 'px' }"
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchField',
  computed: {
    ...mapGetters(['FONT_STATE', 'SIZE_STATE']),
  },
};
</script>

<style lang="scss" src="../../public/scss/searchField.scss"></style>
