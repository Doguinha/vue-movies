const getShoppingCart = () => {
  if (!store.state.cartItens.length) {
    let shop_cart = localStorage.getItem("shop_cart");
    if (shop_cart) {
      const shoppingCart = JSON.parse(shop_cart);
      setShoppingCart(shoppingCart);
    }
  }
  return store.state.cartItens;
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
