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
    notificationMessage() {
      return store.state.notificationMessage;
    },
  },
  async mounted() {
    store.setMovies(await getTrending());
    store.setTvs(await getTrending((mediaType = "tv")));
    store.setPersons(await getTrending((mediaType = "person")));
  },
  template: `
  <v-main>
    <v-container>
      <v-row>
          <v-col class="mt-2" cols="12">
            <strong>Movies</strong>
          </v-col>
          <v-col cols="12">
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for='movie in movies' v-bind:key='movie.id'>
                <home-itemcard v-bind:item='movie'></home-itemcard>
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
                <home-itemcard v-bind:item='tv'></home-itemcard>
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
                <home-itemcard v-bind:item='person'></home-itemcard>
              </v-slide-item>
            </v-slide-group> 
          </v-col>
      </v-row>      
    </v-container> 
  </v-main>
    `,
});
