Vue.component("vuetify-navbar", {
  data() {
    return {
      textSearch: "",
      tab: null,
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
    },
    async onGetTrending(mediaType) {
      switch (mediaType) {
        case "tv": {
          this.tvs = await getTrending(mediaType);
          return;
        }
        case "person": {
          this.persons = await getTrending(mediaType);
          return;
        }
        default: {
          this.movies = await getTrending(mediaType);
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
      <v-form v-on:submit.prevent='onSearch'>
        <v-text-field
          v-model='textSearch'
          append-icon="mdi-microphone"
          class="mx-16"
          flat
          hide-details
          label="Pesquisar"
          prepend-inner-icon="mdi-magnify"
          solo-inverted>
        </v-text-field>
      </v-form/>
      <template v-slot:extension>
        <v-tabs v-model="tab"
          align-with-title>
          <v-tab v-on:click='onGetTrending("movie")'>
            Films
          </v-tab>
          <v-tab v-on:click='onGetTrending("tv")'>
            Tv Series
          </v-tab>
          <v-tab v-on:click='onGetTrending("person")'>
            Actors
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <vuetify-content-tabitem v-bind:data='movies'></vuetify-content-tabitem>
      </v-tab-item>
      <v-tab-item>
        <vuetify-content-tabitem v-bind:data='tvs'></vuetify-content-tabitem>
      </v-tab-item>
      <v-tab-item>
        <vuetify-content-tabitem v-bind:data='persons'></vuetify-content-tabitem>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  `,
});
