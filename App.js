var app = new Vue({
  el: "#app",
  data: {
    sharedState: store.state,
  },
  async mounted() {
    store.setMovies(await getTrending());
  },
});
