Vue.component("shoppingcart-content", {
  computed: {
    cartItens() {
      console.log(JSON.stringify(store.state.cartItens));
      return store.state.cartItens;
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
        </v-container>
    </v-main>
    `,
});
