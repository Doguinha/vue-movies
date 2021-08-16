Vue.component("shoppingcart-navbar", {
  template: `<v-toolbar dark>
    <v-toolbar-title 
        class='d-none d-sm-flex' 
        style='cursor:pointer'
        v-on:click="this.store.setPage('home')">        
        Vue Movies
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn>
        <v-icon class="mr-2">mdi-shopping</v-icon>
        Sacola
    </v-btn>
    <v-btn>
        <v-icon class="mr-2">mdi-account</v-icon>
        Identificação
    </v-btn>
    <v-btn>
        <v-icon class="mr-2">mdi-truck</v-icon>
        Entrega
    </v-btn>
   </v-toolbar>`,
});
