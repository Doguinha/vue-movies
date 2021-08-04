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
      this.movies = await getSearchedMovies(this.textSearch);
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
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              md="3"
              v-for='movie in movies' 
              v-bind:key='movie.id'>
                <vuetify-moviecard v-bind:movie='movie'></vuetify-moviecard>
            </v-col>    
          </v-row>  
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                md="3"
                v-for='tv in tvs' 
                v-bind:key='tv.id'>
                  <vuetify-moviecard v-bind:movie='tv'></vuetify-moviecard>
              </v-col>    
            </v-row>  
          </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              md="3"
              v-for='person in persons' 
              v-bind:key='person.id'>
                <vuetify-moviecard v-bind:movie='person'></vuetify-moviecard>
            </v-col>    
          </v-row>  
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  `,
});
