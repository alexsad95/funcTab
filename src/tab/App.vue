<template>
  <main>
    <div class="theme-gruvbox">
      <div class="container">
        <search-field/>
        <block-bookmarks/>
        <chr-apps/>
      </div>
    </div>
  </main>
</template>

<script>
import SearchField from '@/components/SearchField.vue';
import ChrApps from '@/components/ChrApps.vue';
import BlockBookmarks from '@/components/Bookmarks.vue';

export default {
  name: 'App',
  components: { SearchField, ChrApps, BlockBookmarks },
};
</script>

<style lang="scss">
@import '../../public/themesAndFonts';
body {
  margin: 0;
}
html, body {
  height: 100%;
}
main {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex: 1;
  }
}
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  padding-left: 15%;
  padding-right: 15%;
  & > div {
    grid-column-start: 2;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  @include themify($themes) {
    background-color: themed('backgroundColor');
  }
}
a {
  text-align: center;
  text-decoration: none;
  @include themify($themes) {
    color: themed('textColor');
    &:hover {
      text-decoration: none;
      color: themed('hoverColor');
    }
  }
}
</style>
