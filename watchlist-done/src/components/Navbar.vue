<template>
  <b-navbar toggleable="sm" type="dark" variant="danger">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Fuksshop</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="/">Products</b-nav-item>
        <b-nav-item href="#/watchlist">Watchlist</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class extends Vue {
  }
</script>

<style scoped>
</style>
