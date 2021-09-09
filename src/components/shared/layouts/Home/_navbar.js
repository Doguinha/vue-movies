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
  mixins: [isUserAutenticatedMixin],
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
        this.loading = false;
      }
    },
  },
  template: `
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class='d-none d-sm-flex'>Vue Movies</v-toolbar-title>
        <v-form v-on:submit.prevent="onSearch" class='flex-grow-1 justify-center ml-sm-12 mr-sm-4 mx-2'>  
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
        <v-menu open-on-hover offset-y v-if='this.isUserAuthenticated()'>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class='mr-sm-8 mx-xs-2'
              text
              plain
              x-small
              v-bind="attrs"
              v-on="on">
              Hello, {{user.name}}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item link v-on:click="this.store.setPage('shipping')">
              <v-icon>mdi-account</v-icon>
              <span class='text-caption pl-2'>My account</span>
            </v-list-item>
            <v-list-item link v-on:click="this.store.setPage('shipping')">
              <v-icon>mdi-gift</v-icon>
              <span class='text-caption pl-2'>My orders</span>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link v-on:click="this.logout">
              <span class='text-caption'>Not {{user.name}}? <span class='text-caption text-decoration-underline'>Logout</span></span>
            </v-list-item>
          </v-list>
        </v-menu>
        <div class='mx-4' v-else>
          <p class='text-caption ma-0'>
            Bem vindo ;)
          </p>
          <v-btn text plain x-small class='pa-0' v-on:click="this.store.setPage('account')">
           Entre ou cadastre-se
          </v-btn>
        </div>
        <v-badge overlap bottom offset-x="30" offset-y="18" v-bind:content="cartItensCount">
          <v-btn v-on:click="this.store.setPage('shoppingcart')">
            <v-icon>mdi-shopping</v-icon>
          </v-btn>
        </v-badge>
      </v-toolbar>
    `,
});
