<template>
  <main>
    <div
      :class="'theme-' + THEME_STATE"
      :style="{ fontFamily: FONT_STATE, fontSize: SIZE_STATE + 'px' }"
    >
      <transition name="fade">
        <settings-modal v-if="MODAL_SETTINGS_STATE" />
      </transition>
      <div
        class="bg_layer"
        @click="toogleModal"
        :style="{ 'z-index': MODAL_SETTINGS_STATE ? '21' : '0' }"
      ></div>
      <div class="settings-button">
        <a href="#" @click="testFuncOn">
          <font-awesome-icon icon="grimace" />
        </a>
        <a href="#" @click="toogleModal">
          <font-awesome-icon icon="cog" />
        </a>
      </div>
      <div class="container">
        <search-field />
        <block-bookmarks />
        <!-- <chr-apps /> -->
      </div>
    </div>
  </main>
</template>

<script>
import SearchField from '@/components/SearchField.vue';
import SettingsModal from '@/components/SettingsModal.vue';
// import ChrApps from '@/components/ChrApps.vue';
import BlockBookmarks from '@/components/Bookmarks.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    SearchField,
    // ChrApps,
    BlockBookmarks,
    SettingsModal,
  },
  computed: {
    ...mapGetters([
      'FONT_STATE',
      'SIZE_STATE',
      'THEME_STATE',
      'MODAL_SETTINGS_STATE',
    ]),
  },
  methods: {
    ...mapActions([
      'changeModal',
      'testFunc',
    ]),
    toogleModal() {
      this.changeModal();
    },
    testFuncOnasd() {
      this.testFunc();
    },
    testFuncOn() {
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
};
</script>

<style lang="scss">
@import "../../public/themesAndFonts";
body {
  margin: 0;
}

html, body, input, select {
  height: 100%;
  width: 100%;
  font-family: 'Iosevka';
  font-weight: normal;
}
main {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div {
    display: contents;
    flex: 1;
  }
}
.bg_layer {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  & .show {
    z-index: 21;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.settings-button {
  display: block;
  position: fixed;
  top: 30px;
  z-index: 20;
  right: 5px;
  width: 10%;
  height: 5%;
  @include themify($themes) {
    background-color: themed('backgroundColor');
  }
}
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 15;
  align-items: center;
  justify-content: center;
  padding-left: 15%;
  padding-right: 15%;
  & > div {
    grid-column-start: 2;
    width: 100%;
  }
  @include themify($themes) {
    background-color: themed('backgroundColor');
  }
}
a {
  text-align: center;
  text-decoration: none;
  padding: 0px 5px;
  @include themify($themes) {
    color: themed('textColor');
    &:hover {
      text-decoration: none;
      color: themed('hoverColor');
    }
  }
}
</style>
