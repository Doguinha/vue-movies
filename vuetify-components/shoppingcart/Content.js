Vue.component("shoppingcart-content", {
  computed: {
    cartItens() {
      return getShoppingCart();
    },
  },
  data() {
    return {
      showSnackBar: false,
      timeout: -1,
      message: "",
    };
  },
  methods: {
    toggleSnackBar(conf) {
      this.showSnackBar = conf.show;
      this.message = conf.message;
      this.timeout = conf.timeout;
    },
    closeSnackBar() {
      this.showSnackBar = false;
    },
  },
  template: `
    <v-main>
        <v-container>
            <shoppingcart-navbar></shoppingcart-navbar>
            <shoppingcart-item 
              v-for='item in this.cartItens'v-bind:key='item.item.id'
              v-bind:itemCart='item'
              v-on:toggleSnackBar='toggleSnackBar'>
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
        <my-snackbar
          v-bind:show="showSnackBar"
          v-bind:message="message"
          v-bind:timeout="timeout"
          v-on:closeSnackBar='closeSnackBar'>
        </my-snackbar>  
    </v-main>
    `,
});
