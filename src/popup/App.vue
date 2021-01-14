<template>
  <search-field />
</template>

<script>
import SearchField from '@/components/SearchField.vue';

export default {
  name: 'App',
  components: { SearchField },
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
