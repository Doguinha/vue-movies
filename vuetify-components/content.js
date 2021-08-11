Vue.component("vuetify-content", {
  data() {
    return {
      movies: [],
      tvs: [],
      persons: [],
    };
  },
  async mounted() {
    this.movies = await getTrending();
    this.tvs = await getTrending((mediaType = "tv"));
    this.persons = await getTrending((mediaType = "person"));
  },
  methods: {
    async onSearch() {
      console.log("submit");
      this.tvs = await getSearched(this.textSearch, "tv");
      this.persons = await getSearched(this.textSearch, "person");
      this.movies = await getSearched(this.textSearch, "movie");
    },
    async onGetTrending(mediaType) {
      this.tvs = await getTrending((mediaType = "tv"));
      this.persons = await getTrending((mediaType = "person"));
      this.movies = await getTrending((mediaType = "movie"));
    },
  },
  template: `
  <v-main>
    <v-container>
      <v-row>
          <v-col class="mt-2" cols="12">
            <strong>Movies</strong>
          </v-col>
          <v-col cols="12" >
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for='movie in movies' v-bind:key='movie.id'>
                <vuetify-itemcard v-bind:item='movie'></vuetify-itemcard>
              </v-slide-item>
            </v-slide-group> 
          </v-col>
      </v-row>
      <v-row>
          <v-col class="mt-2" cols="12">
            <strong>Tv Series</strong>
          </v-col>
          <v-col cols="12" >
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for='tv in tvs' v-bind:key='tv.id'>
                <vuetify-itemcard v-bind:item='tv'></vuetify-itemcard>
              </v-slide-item>
            </v-slide-group> 
          </v-col>
      </v-row>
      <v-row>
          <v-col class="mt-2" cols="12">
            <strong>Actors</strong>
          </v-col>
          <v-col cols="12" >
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for='person in persons' v-bind:key='person.id'>
                <vuetify-itemcard v-bind:item='person'></vuetify-itemcard>
              </v-slide-item>
            </v-slide-group> 
          </v-col>
      </v-row>      
    </v-container>
  </v-main>
    `,
});
