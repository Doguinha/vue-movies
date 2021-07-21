const store = new Vuex.Store({
  state: {
    movies: [],
    cartItens: [],
  },
  mutations: {
    async searchMovies(textSearch) {
      state.movies = await getSearchedMovies(textSearch);
    },
    async setTrending() {
      state.movies = await getTrending(textSearch);
    },
    addToCart(item) {
      if (
        state.cartItens.filter((cartItem) => cartItem.item.id === item.id)
          .length === 0
      ) {
        state.cartItens.push({
          quantity: 1,
          item: item,
        });
      } else {
        state.cartItens = this.cartItens.map((cartItem) => {
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
  methods: {
    async searchMovies(textSearch) {
      store.commit("searchMovies", await getSearchedMovies(textSearch));
    },
    addToCart(item) {
      store.commit("addToCart", item);
    },
  },
  async created() {
    store.commit("setTrending");
  },
});
