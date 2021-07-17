var app = new Vue({
  el: "#app",
  data: {
    config: null,
    movies: [],
  },
  methods: {
    searchMovies(textSearch) {
      var vm = this;
      getSearchedMoviesAPI(textSearch).then(function (movies) {
        vm.movies = movies.map((movie) => {
          const movieImg = {
            ...movie,
            url_image: movie.poster_path
              ? `${vm.config.images.secure_base_url}${
                  vm.config.images.poster_sizes.filter(
                    (size) => size === "w185"
                  )[0]
                }/${movie.poster_path}`
              : "",
          };
          return movieImg;
        });
      });
    },
  },
  created() {
    var vm = this;
    getConfigurationAPI().then(function (config) {
      vm.config = config;
    });
    getTrendingAPI().then(function (movies) {
      vm.movies = movies.map((movie) => {
        const movieImg = {
          ...movie,
          url_image: movie.poster_path
            ? `${vm.config.images.secure_base_url}${
                vm.config.images.poster_sizes.filter(
                  (size) => size === "w185"
                )[0]
              }/${movie.poster_path}`
            : "",
        };
        return movieImg;
      });
    });
  },
});
