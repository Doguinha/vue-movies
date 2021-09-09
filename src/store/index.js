var store = {
  debug: true,
  state: {
    cartItens: [],
    movies: [],
    tvs: [],
    persons: [],
    user: { name: "Douglas" },
    page: "home",
    notificationMessage: {
      show: false,
      timeout: -1,
      message: "",
      type: "",
      level: "warning",
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
    this.state.notificationMessage.show = newValue.show;
    this.state.notificationMessage.message = newValue.message;
    this.state.notificationMessage.type = newValue.type
      ? newValue.type
      : this.state.notificationMessage.type;
    this.state.notificationMessage.timeout = newValue.timeout
      ? newValue.timeout
      : this.state.notificationMessage.timeout;
    this.state.notificationMessage.level = newValue.level
      ? newValue.level
      : this.state.notificationMessage.level;
  },
  setUser(newValue) {
    if (this.debug) console.log("setUser triggered", newValue);
    this.state.user = newValue;
  },
};
