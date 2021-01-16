<!--
  TODO
  18 line - Разобраться с закрытием модального нажатием на любую область вне окна
-->

<template>
  <main>
    <div class="theme-gruvbox">
      <settings-modal
        v-if="isModalSettingsVisible"
        @closeModal="closeSettingsModals"
      />
      <div
        class="bg_layer"
        @click="isModalSettingsVisible ? closeSettingsModals : testMethod"
        v-bind:style="{ 'z-index': isModalSettingsVisible ? '21' : '0' }"
      ></div>
      <div class="settings-button">
        <a href="#"
          @click="showSettingsModals"
        >
          <font-awesome-icon far class="fa-2x" icon="cog" />
        </a>
      </div>
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
import SettingsModal from '@/components/SettingsModal.vue';
import ChrApps from '@/components/ChrApps.vue';
import BlockBookmarks from '@/components/Bookmarks.vue';

export default {
  name: 'App',
  components: {
    SearchField,
    ChrApps,
    BlockBookmarks,
    SettingsModal,
  },
  data() {
    return {
      isModalSettingsVisible: false,
    };
  },
  computed: {},
  methods: {
    showSettingsModals() {
      this.isModalSettingsVisible = true;
    },
    closeSettingsModals() {
      this.isModalSettingsVisible = false;
    },
    testMethod() {
      console.log('testMethod');
    },
  },
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
.settings-button {
  display: block;
  position: fixed;
  top: 30px;
  z-index: 20;
  right: 5px;
  width: 5%;
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
