Vue.component("shoppingcart-navbar", {
  template: `<v-toolbar dark>
    <v-toolbar-title class='d-none d-sm-flex'>Vue Movies</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn>
        <v-icon>mdi-shopping</v-icon>
        Sacola
    </v-btn>
    <v-btn>
        <v-icon>mdi-account</v-icon>
        Identificação
    </v-btn>
    <v-btn>
        <v-icon>mdi-truck</v-icon>
        Entrega
    </v-btn>
   </v-toolbar>`,
});
