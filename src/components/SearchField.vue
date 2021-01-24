<template>
  <div class="search-form">
    <form method="get" action="https://google.com/search?">
      <input class="inp" name="q" type="search" placeholder="Search"
        autofocus autocomplete='off' accesskey="s"
        :style="{fontFamily: FONT_STATE, fontSize: SIZE_STATE + 'px'}"
        >
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchField',
  computed: {
    ...mapGetters([
      'FONT_STATE',
      'SIZE_STATE',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '../../public/themesAndFonts';
.inp {
  padding: 10px;
  background: transparent;
  width: 100%;
  height: 40px;
  transition: border-color 0.2s;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  outline: none;
  @include themify($themes) {
    background-color: themed('anotherBackgroundColor');
    color: themed('hoverColor');
    border: 0px solid themed('textColor');
    &::-moz-placeholder {
      color: themed('textColor');
      opacity: 1;
    }
    &::-ms-input-placeholder {
      color: themed('textColor');
    }
    &::-webkit-input-placeholder {
      color: themed('textColor');
    }
    &[type=search]::placeholder {
      text-align: center;
    }
    &[type=search]:placeholder-shown {
      text-align: left;
    }
    &[type=search]:focus {
      border: 1px solid themed('hoverColor');
      border-radius: none;
    }
    &[type=search]::-webkit-search-cancel-button {
      display: none;
    }
  }
}
</style>
