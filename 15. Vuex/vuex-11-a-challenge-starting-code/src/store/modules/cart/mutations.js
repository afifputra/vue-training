export default {
  addProductToCart: (state, products) => {
    const productInCartIndex = state.cart.items.findIndex(
      (item) => item.id === products.id
    );
    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
    } else {
      state.cart.items.push({
        id: products.id,
        title: products.title,
        description: products.description,
        image: products.image,
        price: products.price,
        qty: 1,
      });
    }
    state.cart.qty++;
    state.cart.total += products.price;
  },
  removeProductFromCart: (state, productId) => {
    const productInCartIndex = state.cart.items.findIndex(
      (item) => item.id === productId
    );
    const productData = state.cart.items[productInCartIndex];
    if (productData.qty > 1) {
      state.cart.items[productInCartIndex].qty--;
    } else {
      state.cart.items.splice(productInCartIndex, 1);
    }
    state.cart.qty--;
    state.cart.total -= productData.price;
  },
};
