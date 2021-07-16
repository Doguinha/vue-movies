var app = new Vue({
  el: "#app",
  data: {
    movies: [],
  },
  created() {
    var vm = this;
    getMovies("Titanic").then(function (movies) {
      vm.movies = movies;
    });
  },
});
