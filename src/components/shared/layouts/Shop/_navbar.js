Vue.component("shop-navbar", {
  computed: {
    page() {
      return store.state.page;
    },
  },
  template: `<v-toolbar>
    <v-toolbar-title 
        class='d-none d-sm-flex' 
        style='cursor:pointer'
        v-on:click="this.store.setPage('home')">        
        Vue Movies
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-bind:disabled="this.page !== 'shoppingcart'">
        <v-icon class="mr-2">mdi-shopping</v-icon>
        Sacola
    </v-btn>
    <v-btn v-bind:disabled="this.page !== 'account'">
        <v-icon class="mr-2">mdi-account</v-icon>
        Identificação
    </v-btn>
    <v-btn v-bind:disabled="this.page !== 'shipping'">
        <v-icon class="mr-2">mdi-truck</v-icon>
        Entrega
    </v-btn>
   </v-toolbar>`,
});
