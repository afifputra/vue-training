export default {
  allCart: (state) => {
    return state.cart;
  },
  cartTotal: (state) => {
    if (state.cart.items.length > 0) {
      const total = state.cart.items.reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
      }, 0);
      const finalTotal = total.toFixed(2);
      return finalTotal;
    } else {
      return 0;
    }
    // return state.cart.total.toFixed(2);
  },
  qtyCart: (state) => {
    return state.cart.qty;
  },
};
