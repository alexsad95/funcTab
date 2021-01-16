<template>
  <div class="block-apps">
    <div class="block-apps-cols">
      <br>
      <a
        style="margin: 30px;"
        href="#"
        @click="bookmarksMethod()"
      >Test</a>
    </div>
    <div class="block-apps-cols">
    </div>
    <div class="block-apps-cols">
    </div>
    <div class="block-apps-cols">
    </div>
    <div class="block-apps-cols">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChrApps',
  methods: {
    bookmarksMethod() {
      chrome.bookmarks.getTree((bookmarks) => this.printBookmarks(bookmarks));
    },
    printBookmarks(bookmarks) {
      console.log('bookmarks: ', bookmarks);
      bookmarks.forEach((bookmark) => {
        if (bookmark.children) {
          console.log('folder name: ', bookmark.title);
          this.printBookmarks(bookmark.children);
        }
      });
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
@import '../../public/themesAndFonts';
.block-apps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  border-radius: 4px;
  width: 100%;
  height: 100px;
  @include themify($themes) {
    border: 2px solid themed('textColor');
    &-cols {
      border: 2px solid themed('textColor');
    }
  }
}
</style>
