Vue.component("vuetify-navbar", {
  data() {
    return {
      textSearch: "",
    };
  },
  computed: {
    cartItensCount() {
      return store.state.cartItens.length.toString();
    },
  },
  methods: {
    async onSearch() {},
  },
  template: `
  <v-toolbar dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Vue Movies</v-toolbar-title>
    <v-form v-on:submit.prevent="onSearch">  
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
    </v-form>
    <v-spacer></v-spacer>
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
