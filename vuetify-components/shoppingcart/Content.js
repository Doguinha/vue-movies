Vue.component("shoppingcart-content", {
  computed: {
    cartItens() {
      return store.state.cartItens;
    },
  },
  template: `
    <v-main>
        <v-container>
            <shoppingcart-navbar></shoppingcart-navbar>
            <shoppingcart-item 
                v-for='cartItem in cartItens' 
                v-bind:key='cartItem.item.id' 
                v-bind:cartItem='cartItem'>
            </shoppingcart-item>
        </v-container>
    </v-main>
    `,
});
