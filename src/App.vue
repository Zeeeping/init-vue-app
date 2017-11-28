<template>
  <div id="app">
    <header-nav class=""></header-nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  props: {},
  computed: {},
  components: {},
  watch: {
    $route(to, from) {
      this.init()
    }
  },
  methods: {
    init() {},
    getBanner() {
      this.api_banner_getList({ data: { abc: 12 } }).then(res => {
        console.log(res)
      })
    }
  },
  created() {},
  mounted() {}
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
  margin-top: r(20px);
}

</style>
