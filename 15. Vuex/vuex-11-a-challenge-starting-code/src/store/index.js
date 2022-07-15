import { createStore } from 'vuex';

import rootGetters from './getters';
import rootMutations from './mutations';
import rootActions from './actions';

import cartModules from './modules/cart/index';
import productsModules from './modules/products/index';

const store = createStore({
  modules: {
    cart: cartModules,
    products: productsModules,
  },
  state: {
    isLoggedIn: false,
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
});

export default store;
