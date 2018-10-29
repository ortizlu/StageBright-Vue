<template>
  <div id="app">
    <Splashscreen />
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
