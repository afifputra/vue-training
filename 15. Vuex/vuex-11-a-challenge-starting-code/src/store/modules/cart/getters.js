export default {
  allCart: (state) => {
    return state.cart;
  },
  cartTotal: (state) => {
    return state.cart.total.toFixed(2);
  },
  qtyCart: (state) => {
    return state.cart.qty;
  },
};
