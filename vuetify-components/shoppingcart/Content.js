Vue.component("shoppingcart-content", {
  computed: {
    cartItens() {
      return getShoppingCart();
    },
  },
  template: `
    <v-main>
        <v-container>
            <shoppingcart-navbar></shoppingcart-navbar>
            <shoppingcart-item 
              v-for='item in this.cartItens'v-bind:key='item.item.id'
              v-bind:itemCart='item'>
            </shoppingcart-item>
            <div class="d-flex justify-end">
              <v-btn
                color="error"
                class="ma-2 white--text">
                Continuar
                <v-icon right dark>
                  mdi-arrow-right-circle
                </v-icon>
              </v-btn>
            </div>
        </v-container>
    </v-main>
    `,
});
