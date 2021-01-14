<template>
  <div class="container">
    <search-field/>
    <block-bookmarks/>
    <chr-apps/>
  </div>
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

<style>
body {
  background-color: #333333;
}
.container {
  font-size: 1.3rem;
  margin-top: 15%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-gap: 30px;
}
.container > div {
  grid-column-start: 2;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
a {
  color: #B6B6B6;
  text-align: center;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: #C3C634;
}
</style>
