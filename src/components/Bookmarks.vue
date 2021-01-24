<template>
  <div class="block-bookmarks">
    <div class="block-bookmarks-cols">
      <a href="http://vk.com">vk</a>
      <a href="http://github.com">github</a>
      <a href="http://youtube.com">youtube</a>
    </div>
    <div class="block-bookmarks-cols">
      <a href="https://reddit.com/">reddit</a>
      <a href="https://www.twitch.tv/">twitch</a>
      <a href="https://www.instagram.com/">instagram</a>
    </div>
    <div class="block-bookmarks-cols">
      <a href="https://www.codota.com/code/javascript">codotaJsSearch</a>
      <a href="https://monkeytype.com/">monkeytype</a>
      <a href="https://sideprojectlist.co/">sideProjectList</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockBookmarks',
  computed: {
  },
};
</script>

<style lang="scss" scoped>
.block-bookmarks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 5% 0%;
  &-cols {
    display: grid;
    grid-gap: 20px;
  }
}
</style>
