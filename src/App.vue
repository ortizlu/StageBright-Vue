<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Splashscreen from './components/Splashscreen.vue'

export default {
  name: 'app',
  components: {
    Splashscreen
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
