Vue.component("shop-layout", {
  computed: {
    page() {
      return store.state.page;
    },
    shopArea() {
      return ["shoppingcart", "account", "shipping"].includes(this.page);
    },
  },
  template: `<v-main v-if='shopArea'>
        <v-container>
            <shop-navbar></shop-navbar>
            <shoppingcart-content v-if="page === 'shoppingcart'"></shoppingcart-content>
            <account-content v-if="page === 'account'"></account-content>
            <shipping-content v-if="page === 'shipping'"></shipping-content>
        </v-container>
    </v-main>`,
});
