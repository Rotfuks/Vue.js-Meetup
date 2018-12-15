import {RootState} from '../store';
import {BareActionContext, getStoreBuilder} from 'vuex-typex';
import {Product} from '@/store/models/product';

export class Watchlist {
  public products: Product[];

  public constructor() {
    this.products = [];
  }
}

export interface WatchlistState {
  watchlist: Watchlist;
}

const initialWatchlistState: WatchlistState = {watchlist: new Watchlist()};
const b = getStoreBuilder<RootState>().module('watchlist', initialWatchlistState);

// getters
const numberOfProductsGetter = b.read((state) => state.watchlist.products.length, 'NumberOfProducts');
const watchlistGetter = b.read((state) => state.watchlist, 'watchlistGetter');

// mutations
function addProduct(state: WatchlistState, payload: { product: Product }) {
  if (state.watchlist.products.filter(
    (p) => p.id === payload.product.id).length === 0) {
    state.watchlist.products.push(payload.product);
  }
}

function removeProduct(state: WatchlistState, payload: { product: Product }) {
  state.watchlist.products =
    state.watchlist.products.filter((value) => payload.product !== value);
}

function setWatchlist(state: WatchlistState, payload: { products: Product[] }) {
  state.watchlist.products = payload.products;
}

// action
async function saveWatchlist(context: BareActionContext<WatchlistState, RootState>) {
  localStorage.setItem('watchlist', JSON.stringify(watchlist.watchlist));
}

async function readWatchlist(context: BareActionContext<WatchlistState, RootState>) {
  watchlist.setWatchlist(JSON.parse(localStorage.getItem('watchlist') || ''));
}


// state
const stateGetter = b.state();

// exported "basket" module interface
const watchlist = {
  // state
  get state() {
    return stateGetter();
  },

  // getters (wrapped as real getters)
  get numberOfProducts() {
    return numberOfProductsGetter();
  },
  get watchlist() {
    return watchlistGetter();
  },

  // mutations
  addProduct: b.commit(addProduct),
  removeProduct: b.commit(removeProduct),
  setWatchlist: b.commit(setWatchlist),

  // actions
  dispatchSaveWatchlist: b.dispatch(saveWatchlist),
  dispatchReadWatchlist: b.dispatch(readWatchlist),
};

export default watchlist;
