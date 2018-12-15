<template>
  <b-form @submit.prevent="addToWatchlist">
    <b-card class="product-grid"
            :title="product.name"
            :img-src="product.image"
            :img-alt="product.name"
            img-top>
        <p class="card-text">
            {{product.description}}
        </p>
        <b-button type="submit" variant="danger">{{computedPrice}} €</b-button>
    </b-card>
  </b-form>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Product} from "../store/models/product";
    import watchlist from '../store/models/watchlist';

    @Component
    export default class extends Vue {
        @Prop() product: Product;

        get computedPrice() {
          return this.product.price.toFixed(2);
        }

        public addToWatchlist() {
          console.log(this.product);
          watchlist.addProduct({'product': this.product});
          watchlist.dispatchSaveWatchlist();
        }
    }
</script>

<style scoped>
</style>
