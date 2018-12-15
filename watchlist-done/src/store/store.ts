import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import {getStoreBuilder} from 'vuex-typex';
import {ProductState} from '@/store/models/product';
import {WatchlistState} from '@/store/models/watchlist';

export interface RootState
{
    products: ProductState;
    watchlist: WatchlistState;
}

Vue.use(Vuex);
const store: Store<RootState> = getStoreBuilder<RootState>().vuexStore();
export default store;
