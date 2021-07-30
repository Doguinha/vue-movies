var app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    sharedState: store.state,
  },
  async mounted() {
    store.setMovies(await getTrending());
  },
});
