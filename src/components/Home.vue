<template>
<div class="home">
  <Header></Header>
    <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false">
    <slide>
      <div class="image">
      <div class="image-text">
          <h3>My Picture</h3>
          <p>By: Orange Girl</p>
        </div>
      </div>
    </slide>
    <slide>
    <div class="image">
      <div class="image-text">
          <h3>My Picture</h3>
          <p>By: Orange Girl</p>
        </div>
      </div>
    </slide>
  </carousel>
</div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      posts: []
    }
  },

  created() {
    axios
      .get('http://localhost:8081/home', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        this.posts = response.data
      })
  }
}
</script>

<style>
  .home {
    margin-top: 77px;
  }

.image {
  background-image: url('https://images.unsplash.com/photo-1540971747891-114758ab4a90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29943cc8315050b8b03195bd3d4ea104&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height:calc(100vh - 77px);
}

.image-text {
  color: white;
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
}

.VueCarousel-dot-button {
    width: 20px;
    height: 20px;
    background: rgb(0, 0, 0);
}
</style>

