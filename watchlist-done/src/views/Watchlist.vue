<template>
  <div class="watchlist">
    <b-table :items="w.products" :fields="fields">
      <template slot="action" slot-scope="productToRemove">
        <b-button @click.prevent="removeProduct(productToRemove.item)" size="sm" class="mr-2">
          Remove
        </b-button>
      </template>
    </b-table>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import watchlist, {Watchlist} from "../store/models/watchlist";
  import {Product} from "../store/models/product";

  @Component({})
  export default class Home extends Vue {
    private w: Watchlist = watchlist.watchlist;
    private fields: String[] = ["id", "name", "price", "action"];

    public removeProduct(productToRemove: Product) {
      watchlist.removeProduct({'product': productToRemove});
      watchlist.dispatchSaveWatchlist();
    }
  }
</script>
