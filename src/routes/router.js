Vue.component("my-router", {
  computed: {
    page() {
      return store.state.page;
    },
  },
  template: `
    <div>
        <home-content v-if="page === 'home'"/>
        <shoppingcart-content v-if="page === 'shoppingcart'"/>
        <account-content v-if="page === 'account'"/>
        <shipping-content v-if="page === 'shipping'"/>
    </div>
    `,
});
