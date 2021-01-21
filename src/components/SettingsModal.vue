<template>
  <div class="settings-modal">
    <a href="#" class="closeIcon" @click="toogleModal">
      <font-awesome-icon far class="fa-2x" icon="times" />
    </a>
    <div class="tab-container">
      <div class="tab-row">
        <div @click="switchSettings('general')" class="tablink general active">General</div>
        <div @click="switchSettings('components')" class="tablink components">Components</div>
        <div @click="switchSettings('other')" class="tablink other">Other</div>
      </div>

      <div id="general" class="tab-container-body settings">
        <div class="theme">
          <h4>Theme</h4>
          <select @change="switchTheme($event)" :value="theme">
            <option>gruvbox-dark</option>
            <option>gruvbox-light</option>
          </select>
        </div>
        <div class="font">
          <h4>Font</h4>
          <select>
            <option>Ioveska</option>
            <option>Mononoki</option>
          </select>
        </div>
        <div class="size">
          <h4>Size</h4>
          <input
            type="number"
            id="font-size"
            name="quantity"
            min="8"
            max="20"
            value="14"
          >
        </div>
      </div>

      <div id="components" class="tab-container-body settings" style="display:none">
        <h3>Components</h3>
      </div>

      <div id="other" class="tab-container-body settings" style="display:none">
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
    ...mapGetters([
      'THEME_STATE',
      'MODAL_SETTINGS_STATE',
    ]),
    theme: {
      get() {
        return this.THEME_STATE;
      },
      set(newTheme) {
        this.THEME_STATE = newTheme;
      },
    },
  },
  methods: {
    ...mapActions([
      'changeTheme',
      'changeModal',
    ]),
    toogleModal() {
      this.changeModal();
    },
    switchTheme(event) {
      this.changeTheme(event.target.value);
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

<style lang="scss">
@import '../../public/themesAndFonts';
.settings-modal {
  position: absolute;
  opacity: 1;
  z-index: 9999;
  height: 400px;
  width: 600px;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -200px;
  border-radius: 4px;
  @include themify($themes) {
    background-color: themed('backgroundColor');
    color: themed('textColor');
    & .tab-container {
      font-size: 1.0rem;
    }
    & .closeIcon {
      position: absolute;
      right: 15px;
      top: 10px;
    }
    & .tab-row {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: .2rem;
      grid-area: buttons;
      margin: 30px 40px;
      text-align: center;
    }
    & .tablink {
      cursor: pointer;
      border-radius: 3px;
      margin: 0px 10px;
      padding: 5px 20px;
      background-color: themed('anotherBackgroundColor');
      color: themed('textColor');
    }
    .active {
      background-color: themed('anotherColor');
      color: themed('backgroundColor');
    }
    & .tab-container-body {
      padding: 0px 40px;
    }
    & .tab-container-body .font, .theme, .size {
      display: grid;
      grid-auto-flow: column;
      gap: 0.2rem;
      margin: 0px 30px;
      height: 35px;
      text-align: left;
      grid-template-columns: 100px 200px 0px;
    }
    & .tab-container-body .size {
      display: grid;
      grid-auto-flow: column;
      gap: 0.2rem;
      margin: 0px 30px;
      text-align: left;
      grid-template-columns: 100px 80px 0px;
    }
    & .tab-container-body select, & .tab-container-body input {
      font-size: 1.0rem;
      height: 25px;
      margin: 15px;
      color: themed('textColor');
      background-color: themed('backgroundColor');
      border-radius: 2px;
      border: 1px solid themed('textColor');
      outline-color: themed('hoverColor');
      outline: none;
      box-shadow: none;
      &:focus {
        border: 1px solid themed('hoverColor');
      }
      select option:hover {
        background: linear-gradient(#000000, #000000);
        background-color: #000000 !important;
        color: #ffed00 !important;
      }
    }
  }
}
</style>
