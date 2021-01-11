<template>
  <div class="container">
    <div class="search-form">
      <form method="get" action="https://google.com/search?">
        <input class="inp" name="q" type="search" placeholder="Search"
          autofocus autocomplete='off' accesskey="s">
      </form>
    </div>
    <div class="block-bookmarks">
      <div class="block-bookmarks-cols">
        <a href="http://vk.com" target="_blank">vk</a>
        <a href="http://github.com" target="_blank">github</a>
        <a href="http://youtube.com" target="_blank">youtube</a>
      </div>
      <div class="block-bookmarks-cols">
        <a href="https://reddit.com/" target="_blank">reddit</a>
        <a href="https://www.twitch.tv/" target="_blank">twitch</a>
        <a href="https://www.instagram.com/" target="_blank">instagram</a>
      </div>
    </div>
    <div class="block-apps">
      <div class="block-apps-cols">
      </div>
      <div class="block-apps-cols">
      </div>
      <div class="block-apps-cols">
      </div>
      <div class="block-apps-cols">
      </div>
      <div class="block-apps-cols">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-size: 1.3rem;
  margin-top: 300px;
  display: grid;
  grid-template-columns: 20% 55% 20%;
  grid-gap: 30px;
}
.container > div {
  grid-column-start: 2;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.block-bookmarks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

}
.block-bookmarks-cols {
  display: grid;
  grid-gap: 20px;
}
.block-apps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  // border: 2px solid gray;
  width: 100%;
  height: 100px;
}
.block-apps-cols {
  // border: 2px solid gray;
}
.block-bookmarks-cols> a {
  margin: 0% 30%;
}
a {
  color: #B6B6B6;
  text-align: center;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: #C3C634;
}
.container > div {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.inp {
  width: 100%;
  font-size: 1.3rem;
  height: 40px;
  color: #B6B6B6;
  background: transparent;
  transition: border-color 0.2s;
  border: 2px solid gray;
  padding: 10px;
  box-sizing: border-box;
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
