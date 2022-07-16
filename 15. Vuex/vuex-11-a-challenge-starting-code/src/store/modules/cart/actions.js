export default {
  addProductToCart: (context, products) => {
    context.commit('addProductToCart', products);
  },
  removeProductFromCart: (context, productId) => {
    context.commit('removeProductFromCart', productId);
  },
};
