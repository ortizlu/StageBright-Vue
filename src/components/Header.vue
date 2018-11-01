<template>
<b-navbar toggleable="md" type="dark" variant="info">

<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

<b-navbar-brand href="#">StageBright</b-navbar-brand>

<b-collapse is-nav id="nav_collapse">

  <b-navbar-nav>
    <b-nav-item href="#">Login</b-nav-item>
    <b-nav-item href="#">Signup</b-nav-item>
  </b-navbar-nav>

  <!-- Right aligned nav items -->
  <b-navbar-nav class="ml-auto">


    <b-nav-item-dropdown right>
      <!-- Using button-content slot -->
      <template slot="button-content">
        <em>User</em>
      </template>
      <b-dropdown-item href="#">Profile</b-dropdown-item>
      <b-dropdown-item href="#">Signout</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>

</b-collapse>
</b-navbar>
</template>

<style scoped>
nav {
  background-color: #202124 !important;
}

nav h1 {
  color: white;
  font-size: 2rem;
}
</style>