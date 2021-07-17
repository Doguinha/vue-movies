var app = new Vue({
  el: "#app",
  data: {
    movies: [],
  },
  methods: {
    async searchMovies(textSearch) {
      this.movies = await getSearchedMovies(textSearch);
    },
  },
  async created() {
    this.movies = await getTrending();
  },
});
