Vue.component("vuetify-navbar", {
  data() {
    return {
      textSearch: "",
      tab: null,
    };
  },
  computed: {
    movies() {
      return store.state.movies;
    },
  },
  methods: {
    async onSubmit() {
      store.setMovies(await getSearchedMovies(this.textSearch));
    },
  },
  template: `
  <v-card>
    <v-toolbar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Vue Movies</v-toolbar-title>
      <v-text-field
        append-icon="mdi-microphone"
        class="mx-16"
        flat
        hide-details
        label="Pesquisar"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>

      <template v-slot:extension>
        <v-tabs v-model="tab">
          <v-tab>
            Films
          </v-tab>
          <v-tab>
            Tv Series
          </v-tab>
          <v-tab>
            Actors
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <vuetify-moviecard v-for='movie in movies' v-bind:movie='movie' v-bind:key='movie.id'></vuetify-moviecard>
      </v-tab-item>
      <v-tab-item>
      </v-tab-item>
      <v-tab-item>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  `,
});
