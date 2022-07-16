export default {
  addProductToCart: (context, productId) => {
    const product = context.rootGetters['products/allProducts'];
    const selectedProduct = product.find((p) => p.id === productId);
    context.commit('addProductToCart', selectedProduct);
  },
  removeProductFromCart: (context, productId) => {
    context.commit('removeProductFromCart', productId);
  },
};
