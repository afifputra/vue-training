export default {
  addProductToCart: (context, products) => {
    context.commit('addProductToCart', products);
  },
};
