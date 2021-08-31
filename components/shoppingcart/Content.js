Vue.component("shoppingcart-content", {
  computed: {
    cartItens() {
      return getShoppingCart();
    },
  },
  methods: {
    goOn() {
      if (store.state.cartItens.length > 0) {
        store.setPage("account");
      } else {
        store.setNotificationMessage({
          showSnackBar: true,
          message: "Sua sacola está vazia! Adicione itens!",
          timeout: 2000,
        });
      }
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
                v-on:click='goOn'
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
