<template>
  <div class="home-container">
    <Header></Header>
    <div class="home-photo">
      <h1 class="text-light large">Stagebright</h1>
      <h2 class="text-light medium">Showcase yourself</h2>
      <router-link to="/home" class="btn btn-dark btn-lg mt-3">Welcome</router-link>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Splashscreen',
  components: {
    Header
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.text-light {
  color: white;
}

* {
  margin: 0;
  padding: 0;
}

/* nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #343a40;
  min-height: 77px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

nav h1 {
  color: white;
} */

.home-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a413a0b054159dd7840130c25e6dbdf&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  /* opacity: 0.7; */
  z-index: -3;
  flex-direction: column;
}

.home-container {
  background-color: #16191b;
}

.large {
  font-size: 6rem;
}

.medium {
  font-size: 2rem;
}

.btn {
  background-color: #343a40;
  border-color: #343a40;
  font-size: 24px;
  padding: 10px 15px;
  margin-top: 20px;
  border-radius: 5px;
}

.btn:hover {
  background-color: #23272b;
  border-color: #1d2124;
}
</style>