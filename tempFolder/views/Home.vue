<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchField msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchField from '@/components/SearchField.vue';

export default {
  name: 'Home',
  components: {
    SearchField,
  },
};
</script>
