<template>
  <div class="Splashscreen">
    <input type="text" v-model="title"><br>
    <span v-html="title"></span>
    <p>{{user.firstName}}</p>
    <p v-if="showName">{{user.lastName}}</p>
    <p v-else>Deer</p>
    <p v-text="user.firstName"></p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Splashscreen',
    data() {
      return {
        title: '<h1>Hello world</h1>',
        user: {
          firstName: 'John',
          lastName: 'Doe'
        },
        showName: true,
        items: [{
            title: 'Item One'
          },
          {
            title: 'Item Two'
          },
          {
            title: 'Item Three'
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>