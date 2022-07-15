export default {
  addProductToCart: (state, products) => {
    console.log(products);
    return;
    // const productInCartIndex = state.cart.items.findIndex(
    //   (item) => item.id === products.id
    // );
    // if (productInCartIndex >= 0) {
    //   state.cart.items[productInCartIndex].qty++;
    // } else {
    //   state.cart.items.push({
    //     id: products.id,
    //     name: products.name,
    //     price: products.price,
    //     qty: 1,
    //   });
    // }
    // state.cart.qty++;
    // state.cart.total += products.price;
  },
  removeProductFromCart: () => {},
  cartTotal: (state) => {
    return state.cart.total.toFixed(2);
  },
};
