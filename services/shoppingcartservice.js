const getShoppingCart = () => {
  if (store.state.cartItens.length > 0) {
    return store.state.cartItens;
  } else {
    let shop_cart = localStorage.getItem("shop_cart");
    if (shop_cart) {
      return JSON.parse(shop_cart);
    }
  }
  return [];
};

const setShoppingCart = (shoppingCart) => {
  localStorage.setItem("shop_cart", JSON.stringify(shoppingCart));
  store.setCartItens(shoppingCart);
};

const getShoppingCartCount = () => {
  return getShoppingCart().length.toString();
};

const removeCartItem = (itemCart) => {
  const newCartItems = getShoppingCart().filter(
    (cartItem) => cartItem.item.id !== itemCart.item.id
  );
  setShoppingCart(newCartItems);
};
