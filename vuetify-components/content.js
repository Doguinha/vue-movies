Vue.component("vuetify-content", {
  computed: {
    cartItens() {
      return store.state.cartItens;
    },
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
