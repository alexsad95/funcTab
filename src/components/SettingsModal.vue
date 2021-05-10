<template>
  <div class="settings-modal">
    <a href="#" class="closeIcon" @click="closeSettingsModal">
      <font-awesome-icon icon="times" />
    </a>
    <div class="tab-container">
      <div class="tab-row">
        <div @click="switchSettings('general')" class="tablink general active">General</div>
        <div @click="switchSettings('other')" class="tablink other">Other</div>
      </div>

      <div id="general" class="tab-container-body settings" :style="{ fontFamily: FONT_STATE }">
        <div class="theme">
          <h4>Theme</h4>
          <select @change="switchTheme($event)" :value="themes" :style="{ fontFamily: FONT_STATE }">
            <option>aether</option>
            <option>arch</option>
            <option>carbon</option>
            <option>dark</option>
            <option>gruvbox-dark</option>
            <option>gruvbox-light</option>
            <option>joker</option>
            <option>matrix</option>
            <option>monokai</option>
            <option>nord</option>
            <option>paper</option>
          </select>
        </div>
        <div class="font">
          <h4>Font</h4>
          <select @change="switchFonts($event)" :value="fonts" :style="{ fontFamily: FONT_STATE }">
            <option>Bedstead</option>
            <option>Firacode</option>
            <option>Hermit</option>
            <option>Iosevka</option>
            <option>Mononoki</option>
          </select>
        </div>
        <div class="size">
          <h4>Size</h4>
          <input
            type="number"
            id="font-size"
            name="quantity"
            min="17"
            max="26"
            @change="switchSize($event)"
            :value="size"
            :style="{ fontFamily: FONT_STATE }"
          />
        </div>
        <div class="bookmarks">
          <h4>Links panel</h4>
          <div @click="changeComponentsExample" class="button">Change</div>
        </div>
      </div>
      <div id="other" class="tab-container-body settings" style="display: none">
        <h3>Other</h3>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SettingsModal',
  computed: {
    ...mapGetters(['THEME_STATE', 'FONT_STATE', 'SIZE_STATE']),

    themes: {
      get() {
        return this.THEME_STATE;
      },
      set(newTheme) {
        this.THEME_STATE = newTheme;
      },
    },

    fonts: {
      get() {
        return this.FONT_STATE;
      },
      set(newFont) {
        this.FONT_STATE = newFont;
      },
    },

    size: {
      get() {
        return this.SIZE_STATE;
      },
      set(newSize) {
        this.SIZE_STATE = newSize;
      },
    },
  },
  methods: {
    ...mapActions(['changeThemes', 'changeFonts', 'changeSize', 'closeModal', 'changeComponents']),

    closeSettingsModal() {
      this.closeModal('isModalSettingsVisible');
    },

    changeComponentsExample() {
      this.closeModal('isModalSettingsVisible');
      this.changeComponents();
    },

    switchTheme(event) {
      this.changeThemes(event.target.value);
    },

    switchFonts(event) {
      this.changeFonts(event.target.value);
    },

    switchSize(event) {
      this.changeSize(event.target.value);
    },

    switchSettings(settingName) {
      const tabline = document.getElementsByClassName('tablink');
      const x = document.getElementsByClassName('settings');

      for (const elem of x) {
        elem.style.display = 'none';
      }
      document.getElementById(settingName).style.display = 'block';

      for (const tab of tabline) {
        tab.classList.remove('active');
      }
      document.getElementsByClassName(settingName)[0].className = `tablink ${settingName} active`;
    },
  },
};
</script>

<style lang="scss" src="../../public/scss/settingsModal.scss"></style>
