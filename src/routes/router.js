Vue.component("my-router", {
  computed: {
    page() {
      return store.state.page;
    },
  },
  template: `
    <div>
        <home-content v-if="page === 'home'"/>
        <shoppingcart-content v-else-if="page === 'shoppingcart'"/>
        <account-content v-else-if="page === 'account'"/>
        <shipping-content v-else-if="page === 'shipping'"/>
    </div>
    `,
});
