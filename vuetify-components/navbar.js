Vue.component("vuetify-navbar", {
  data() {
    return {
      textSearch: "",
      notFound: false,
    };
  },
  computed: {
    cartItensCount() {
      return store.state.cartItens.length.toString();
    },
  },
  methods: {
    async onSearch() {
      if (this.textSearch) {
        const moviesSearched = await getSearched(this.textSearch);
        if (moviesSearched.length > 0) {
          this.notFound = false;
          store.setMovies(moviesSearched);
        } else {
          this.notFound = true;
        }
        const tvsSearched = getSearched(this.textSearch, "tv");
        if (tvsSearched.length > 0) {
          store.setTvs(tvsSearched);
        }
        const personSearched = await getSearched(this.textSearch, "person");
        if (personSearched.length > 0) {
          store.setPersons(personSearched);
        }
      }
    },
  },
  template: `
  <v-card>
    <v-toolbar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class='d-none d-sm-flex'>Vue Movies</v-toolbar-title>
      <v-form v-on:submit.prevent="onSearch" class='flex-grow-1 justify-center'>  
        <v-text-field
          type="text"
          v-model='textSearch'
          class="mx-sm-16 mx-2"
          dense
          hide-details
          label="Pesquisar"
          solo-inverted
          append-icon="mdi-magnify"
          v-on:click:append="onSearch">
        </v-text-field>
      </v-form>
      <v-badge
        overlap
        bottom
        offset-x="30"
        offset-y="18"
        v-bind:content="cartItensCount">
        <v-btn>
          <v-icon>mdi-shopping</v-icon>
        </v-btn>
      </v-badge>
    </v-toolbar>
  `,
});
