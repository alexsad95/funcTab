<template>
  <div class="blocks" :style="{ gridTemplateColumns: `repeat(${BLOCK_STATE.cols}, 1fr)` }">
    <div class="blocks-bookmarks" v-for="(blocks, index) in BLOCK_STATE.value" :key="index">
      <p class="text" :style="{ fontSize: `${SIZE_STATE - 3}px` }">
        {{ blocks.name }}
      </p>
      <div class="blocks-bookmarks-cols" v-for="(links, index) in blocks.value" :key="index">
        <a :href="links.href">{{ links.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BlockBookmarks',
  computed: {
    ...mapGetters(['SIZE_STATE', 'BLOCK_STATE']),
  },
  methods: {},
};
</script>

<style lang="scss" scoped src="../../public/scss/bookmarks.scss"></style>
