const cart = {
  namespaced: true,
  state: () => ({
    cartItems: [],
  }),
  mutations: {
    addToCart(state, item) {
      if (!state.cartItems.some((cartItem) => cartItem.item.id === item.id)) {
        state.cartItems.push({
          quantity: 1,
          item: item,
        });
      } else {
        state.cartItems = state.cartItems.map((cartItem) => {
          if (cartItem.item.id === item.id) {
            const cartItemResul = {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
            return cartItemResul;
          }
          return cartItem;
        });
      }
    },
  },
  actions: {
    addToCart(context, movie) {
      context.commit("addToCart", movie);
    },
  },
  getters: {
    cartItemsCount(state) {
      return state.cartItems.length;
    },
    cartItemById: (state) => (itemId) => {
      return state.cartItems.find((cartItem) => cartItem.item.id === itemId);
    },
    exemploRecebendoGettersParametro(state, getters) {
      return getters.cartItemsCount > 0 ? "Has Items" : "Empty";
    },
  },
};
