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

<style lang="scss" src="../../public/scss/app.scss"></style>
