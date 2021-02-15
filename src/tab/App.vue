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
        <a href="#" @click="testFuncOn" class="icons-info" data-title="Test button">
          <font-awesome-icon icon="grimace" />
        </a>
        <a href="#" @click="toogleModal" class="icons-info" data-title="Settings">
          <font-awesome-icon icon="cog" />
        </a>
      </div>
      <div class="container">
        <search-field />

        <change-block-bookmarks v-if="COMPONENTS_CHANGE_STATE" />
        <block-bookmarks v-else />
        <!-- <chrome-apps /> -->
      </div>
    </div>
  </main>
</template>

<script>
import SearchField from '@/components/SearchField.vue';
import SettingsModal from '@/components/SettingsModal.vue';
// import ChromeApps from '@/components/ChromeApps.vue';
import BlockBookmarks from '@/components/Bookmarks.vue';
import ChangeBlockBookmarks from '@/components/ChangeBookmarks.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    SearchField,
    // ChromeApps,
    BlockBookmarks,
    ChangeBlockBookmarks,
    SettingsModal,
  },
  computed: {
    ...mapGetters([
      'FONT_STATE',
      'SIZE_STATE',
      'THEME_STATE',
      'MODAL_SETTINGS_STATE',
      'COMPONENTS_CHANGE_STATE',
    ]),
  },
  methods: {
    ...mapActions(['changeModal']),
    toogleModal() {
      this.changeModal();
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
@import '../../public/themesAndFonts';
body {
  margin: 0;
}

html,
body,
input,
select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
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
.icons-info:hover::after {
  @include themify($themes) {
    content: attr(data-title);
    position: absolute;
    z-index: 21;
    margin-left: 5px;
    margin-top: 10px;
    background: themed('backgroundColor');
    color: themed('textColor');
    border: 1px solid themed('textColor');
    border-radius: 2px;
    font-size: 13px;
    padding: 5px 10px;
    pointer-events: none;
  }
  .actions-block {
    position: fixed;
    top: 10px;
    left: 5px;
  }
}
</style>
