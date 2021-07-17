var app = new Vue({
  el: "#app",
  data: {
    movies: [],
    cartitens: [],
  },
  methods: {
    async searchMovies(textSearch) {
      this.movies = await getSearchedMovies(textSearch);
    },
    addToCart(item) {
      if (
        this.cartitens.filter((cartItem) => cartItem.item.id === item.id)
          .length === 0
      ) {
        this.cartitens.push({
          quantity: 1,
          item: item,
        });
      } else {
        this.cartitens = this.cartitens.map((cartItem) => {
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
  async created() {
    this.movies = await getTrending();
  },
});
