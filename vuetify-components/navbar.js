Vue.component("vuetify-navbar", {
  data() {
    return {
      textSearch: "",
      movies: [],
      tvs: [],
      persons: [],
    };
  },
  async mounted() {
    this.movies = await getTrending();
  },
  methods: {
    async onSearch() {
      if (this.textSearch) {
        switch (this.tab) {
          case 1: {
            this.tvs = await getSearched(this.textSearch, "tv");
            return;
          }
          case 2: {
            this.persons = await getSearched(this.textSearch, "person");
            return;
          }
          default: {
            this.movies = await getSearched(this.textSearch, "movie");
            return;
          }
        }
      }
    },
    async onGetTrending(mediaType) {
      switch (this.tab) {
        case 1: {
          this.tvs = await getTrending((mediaType = "tv"));
          return;
        }
        case 2: {
          this.persons = await getTrending((mediaType = "person"));
          return;
        }
        default: {
          this.movies = await getTrending((mediaType = "movie"));
          return;
        }
      }
    },
  },
  template: `
  <v-card>
    <v-toolbar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Vue Movies</v-toolbar-title>
      <v-text-field
        type="text"
        v-model='textSearch'
        class="mx-16"
        dense
        hide-details
        label="Pesquisar"
        solo-inverted
        append-icon="mdi-magnify"
        v-on:click:append="onSearch">
      </v-text-field>
    </v-toolbar>
  </v-card>
  `,
});
