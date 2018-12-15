<template>
  <div class="home row">
    <b-row>
      <b-col cols="6" sm="4" md="3" v-for="p in allProducts">
        <product-grid :product="p"></product-grid>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import ProductGrid from "../components/ProductGrid";
  import products, {Product} from "../store/models/product";

  @Component({
    components: {
      ProductGrid,
    },
  })
  export default class Home extends Vue {
    private allProducts: Product[] = products.allProducts;

  }
</script>
<style scoped>
  .home {
    padding: 10px 30px;
  }
</style>
