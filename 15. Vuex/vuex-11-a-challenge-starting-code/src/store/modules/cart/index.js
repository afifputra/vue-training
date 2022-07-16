import cartGetters from './getters';
import cartMutations from './mutations';
import cartActions from './actions';

export default {
  namespaced: true,
  state: {
    cart: { items: [], total: 0, qty: 0 },
  },
  getters: cartGetters,
  mutations: cartMutations,
  actions: cartActions,
};
