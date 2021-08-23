var store = {
  debug: true,
  state: {
    cartItens: [],
    movies: [],
    tvs: [],
    persons: [],
    user: {},
    page: "shoppingcart",
    notificationMessage: {
      showSnackBar: false,
      timeout: -1,
      message: "",
    },
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
  setNotificationMessage(newValue) {
    if (this.debug) console.log("setNotificationMessage triggered", newValue);
    this.state.notificationMessage.showSnackBar = newValue.show;
    this.state.notificationMessage.message = newValue.message;
    this.state.notificationMessage.timeout = newValue.timeout;
  },
};
