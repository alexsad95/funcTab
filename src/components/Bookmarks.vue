<template>
  <div class="block-bookmarks">
    <div class="block-bookmarks-cols">
      <a href="http://vk.com" target="_blank">vk</a>
      <a href="http://github.com" target="_blank">github</a>
      <a href="http://youtube.com" target="_blank">youtube</a>
    </div>
    <div class="block-bookmarks-cols">
      <a href="https://reddit.com/" target="_blank">reddit</a>
      <a href="https://www.twitch.tv/" target="_blank">twitch</a>
      <a href="https://www.instagram.com/" target="_blank">instagram</a>
    </div>
    <div class="block-bookmarks-cols">
      <a href="https://reddit.com/" target="_blank">reddit</a>
      <a href="https://www.twitch.tv/" target="_blank">twitch</a>
      <a href="https://www.instagram.com/" target="_blank">instagram</a>
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
  grid-gap: 30px;
}
.block-bookmarks-cols {
  display: grid;
  grid-gap: 20px;
}
.block-bookmarks-cols > a {
  margin: 0% 30%;
}
</style>
