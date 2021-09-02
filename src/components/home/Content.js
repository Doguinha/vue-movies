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
    store.setMovies(await getTrending());
    store.setTvs(await getTrending((mediaType = "tv")));
    store.setPersons(await getTrending((mediaType = "person")));
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
