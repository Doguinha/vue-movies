Vue.component("home-content", {
  computed: {
    movies() {
      return store.state.movies;
    },
    persons() {
      return store.state.persons;
    },
    tvs() {
      return store.state.tvs;
    },
  },
  async mounted() {
    if (store.state.movies.length === 0) {
      store.setMovies(await getTrending());
    }
    if (store.state.tvs.length === 0) {
      store.setTvs(await getTrending((mediaType = "tv")));
    }
    if (store.state.persons.length === 0) {
      store.setPersons(await getTrending((mediaType = "person")));
    }
  },
  template: `
    <div>
      <home-mediatype v-bind:medias='movies'>
        <strong>Movies</strong>
      </home-mediatype>
      <home-mediatype v-bind:medias='movies'>
        <strong>Tv Series</strong>
      </home-mediatype>
      <home-mediatype v-bind:medias='tvs'>
        <strong>Tv Series</strong>
      </home-mediatype>
      <home-mediatype v-bind:medias='persons'>
        <strong>Actors</strong>
      </home-mediatype>
    </div>
    `,
});
