<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import Home from './views/Home';

export default {
  /*components: {
    Home
  },*/
}
</script>

<style lang="scss">

// font set
@import "./scss/_variables";
* {
  font-family: $main-font;
  font-size: 1.2rem;
}

// reset css
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  
}
</style>
