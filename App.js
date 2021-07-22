const store = new Vuex.Store({
  state: {
    movies: [],
    cartItens: [],
  },
  mutations: {
    async searchMovies(state, textSearch) {
      state.movies = await getSearchedMovies(textSearch);
    },
    async setTrending(state) {
      state.movies = await getTrending();
    },
    addToCart(state, item) {
      if (
        state.cartItens.filter((cartItem) => cartItem.item.id === item.id)
          .length === 0
      ) {
        state.cartItens.push({
          quantity: 1,
          item: item,
        });
      } else {
        state.cartItens = state.cartItens.map((cartItem) => {
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
});

var app = new Vue({
  el: "#app",
  store,
  async created() {
    store.commit("setTrending");
  },
});
