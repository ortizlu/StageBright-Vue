<template>
  <div class="Splashscreen">
    {{title}}
    <p>{{user.firstName}}</p>
    <p v-text="user.firstName"></p>
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
        }
      }
    }
  }
</script>

<style scoped>
</style>