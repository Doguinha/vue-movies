Vue.component("home-navbar", {
  data() {
    return {
      textSearch: "",
      loading: false,
    };
  },
  computed: {
    cartItensCount() {
      return getShoppingCartCount();
    },
  },
  methods: {
    async onSearch() {
      store.setNotificationMessage({
        ...store.state.notificationMessage,
        show: false,
      });
      this.loading = true;
      if (this.textSearch) {
        let found = false;
        const moviesSearched = await getSearched(this.textSearch);
        const tvsSearched = getSearched(this.textSearch, "tv");
        const personSearched = await getSearched(this.textSearch, "person");
        if (moviesSearched.length > 0) {
          store.setMovies(moviesSearched);
          found = true;
        }
        if (tvsSearched.length > 0) {
          found = true;
          store.setTvs(tvsSearched);
        }
        if (personSearched.length > 0) {
          found = true;
          store.setPersons(personSearched);
        }
        if (!found) {
          store.setNotificationMessage({
            show: true,
            message: "Nenhum resultado encontrado!",
            level: "warning",
            type: "alert",
          });
        }
      }
      this.loading = false;
    },
  },
  template: `<v-toolbar>
        <v-row align='center' justify='space-between'>
          <v-col cols='2'>
            <v-icon 
              v-on:click="$emit('toggleMenu')" 
              class='mt-n1'>
              mdi-menu
            </v-icon>
            <h1 class='d-inline-flex text-h6 pl-2'>Vue Movies</h1>
          </v-col>
          <v-col cols='6'>
            <v-form v-on:submit.prevent="onSearch">  
              <v-text-field
                type="text"
                v-model='textSearch'
                v-bind:loading='loading'
                v-bind:disabled='loading'
                dense
                hide-details
                label="Pesquisar"
                solo-inverted
                append-icon="mdi-magnify"
                v-on:click:append="onSearch">
              </v-text-field>
            </v-form>
          </v-col>
          <v-col cols='2'>
            <div class='d-flex justify-end'>
              <home-usermenu class='pr-2'/>
              <v-badge overlap bottom offset-x="30" offset-y="18" v-bind:content="cartItensCount">
                <v-btn v-on:click="this.store.setPage('shoppingcart')">
                  <v-icon>mdi-shopping</v-icon>
                </v-btn>
              </v-badge>
            </div>  
          </v-col>
        </v-row>
      </v-toolbar>
    `,
});
