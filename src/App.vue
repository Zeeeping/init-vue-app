<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>
<style lang="scss">
@import 'assets/css/common/common.scss';
@import 'assets/css/common/animate.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $theme_color;
  margin-top: 60px;
}

</style>
