const movie = {
  namespaced: true,
  state: () => ({
    movies: [],
  }),
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    async searchMovies(context, textSearch) {
      const movies = await getSearchedMovies(textSearch);
      context.commit("setMovies", movies);
    },
    async setTrending(context) {
      const movies = await getTrending();
      context.commit("setMovies", movies);
    },
  },
};
