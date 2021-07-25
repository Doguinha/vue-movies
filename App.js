const store = new Vuex.Store({
  state: {
    movies: [],
    cartItems: [],
  },
  mutations: {
    //sempre sincronas e acessadas apenas pelas actions
    setMovies(state, movies) {
      state.movies = movies;
    },
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
    async searchMovies(context, textSearch) {
      const movies = await getSearchedMovies(textSearch);
      context.commit("setMovies", movies);
    },
    async setTrending(context) {
      const movies = await getTrending();
      context.commit("setMovies", movies);
    },
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
});

var app = new Vue({
  el: "#app",
  store,
  async created() {
    this.$store.dispatch("setTrending");
  },
});
