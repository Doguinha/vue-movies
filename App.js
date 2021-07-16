var app = new Vue({
  el: "#app",
  data: {
    movies: [],
  },
  template: `
      <movie-list v-bind:movies='movies'></movie-list>
    `,
  created() {
    var vm = this;
    getMovies("Titanic").then(function (movies) {
      vm.movies = movies;
    });
  },
});
