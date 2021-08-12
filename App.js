var app = new Vue({
  el: "#app",
  vuetify: new Vuetify({
    theme: {
      dark: true,
      themes: {
        light: {
          primary: "#3f51b5",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c",
        },
        dark: {
          primary: "#3f51b5",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c",
          anchor: "#8c9eff",
        },
      },
    },
  }),
  data: {
    sharedState: store.state,
  },
  async mounted() {
    store.setMovies(await getTrending());
    store.setTvs(await getTrending((mediaType = "tv")));
    store.setPersons(await getTrending((mediaType = "person")));
  },
});
