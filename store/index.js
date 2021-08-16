var store = {
  debug: false,
  state: {
    cartItens: [],
    movies: [],
    tvs: [],
    persons: [],
    pages: ["home", "shoppingcart"],
    page: "home",
  },
  setMovies(newValue) {
    if (this.debug) console.log("setMovies triggered with", newValue);
    this.state.movies = newValue;
  },
  setPersons(newValue) {
    if (this.debug) console.log("setPersons triggered with", newValue);
    this.state.persons = newValue;
  },
  setTvs(newValue) {
    if (this.debug) console.log("setTvs triggered with", newValue);
    this.state.tvs = newValue;
  },
  setCartItens(newValue) {
    if (this.debug) console.log("setCartItensAction triggered", newValue);
    this.state.cartItens = newValue;
  },
  setPage(newValue) {
    if (this.debug) console.log("setPage triggered", newValue);
    this.state.page = newValue;
  },
};
