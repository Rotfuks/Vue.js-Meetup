<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
    import {Component, Vue} from "vue-property-decorator";
    import Navbar from './components/Navbar';
    import watchlist from "./store/models/watchlist";

    @Component({
        components: {
            Navbar,
        },
    })
    export default class extends Vue {
      created() {
        watchlist.dispatchReadWatchlist();
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
