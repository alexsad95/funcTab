<template>
  <div class="block-apps">
    <div class="block-apps-cols"></div>
    <div class="block-apps-cols"></div>
    <div class="block-apps-cols"></div>
    <div class="block-apps-cols"></div>
    <div class="block-apps-cols"></div>
  </div>
</template>

<script>
export default {
  name: 'ChromeApps',
  methods: {},
  computed: {},
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
    border: 1px solid themed('textColor');
    &-cols {
      border: 1px solid themed('textColor');
    }
  }
}
</style>
