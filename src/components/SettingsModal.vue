<template>
  <div class="settings-modal">
    <a href="#"
      @click="closeModal"
    >
      <font-awesome-icon far class="fa-2x" icon="times" />
    </a>
    <div class="modal-header">
      <span>Modal header</span>
    </div>
    <div class="modal-content">
      <span>Modal content</span>
    </div>
    <div class="modal-footer">
      <span>Modal footer</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SettingsModal',
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
  computed: {
  },
};
</script>

<style lang="scss">
@import '../../public/themesAndFonts';
.settings-modal {
  position: absolute;
  background: #fff;
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
    border: 1px solid themed('textColor');
    background-color: themed('backgroundColor');
    color: themed('textColor');
    & a {
      position: absolute;
      right: 15px;
      top: 10px;
    }
    & div {
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
