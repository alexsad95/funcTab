<template>
  <div class="search-form">
    <form method="get" action="https://google.com/search?">
      <input class="inp" name="q" type="search" placeholder="Search"
        autofocus autocomplete='off' accesskey="s">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchField',
  computed: {
  },
};
</script>

<style lang="scss" scoped>
.inp {
  color: #B6B6B6;
  padding: 10px;
  background: transparent;
  font-size: 1.3rem;
  width: 100%;
  height: 40px;
  transition: border-color 0.2s;
  box-sizing: border-box;
  border: 2px solid gray;
  border-radius: 4px;
  outline: none;
}
.inp[type=search]:focus {
  border: 2px solid #B6B6B6;
  border-radius: none;
}
.inp[type="search"]::-webkit-search-cancel-button {
  display: none;
}
</style>
