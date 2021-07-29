var store = {
  debug: true,
  state: {
    movies: [],
    cartItens: [],
  },
  setMovies(newValue) {
    if (this.debug) console.log("setMoviesAction triggered with", newValue);
    this.state.movies = newValue;
  },
  setCartItens(newValue) {
    if (this.debug) console.log("setCartItensAction triggered", newValue);
    this.state.cartItens = newValue;
  },
};
