Vue.component("shop-layout", {
  computed: {
    page() {
      return store.state.page;
    },
  },
  template: `<div>
  <shop-navbar></shop-navbar>
  <shoppingcart-content v-if="page === 'shoppingcart'"/>
  <account-content v-if="page === 'account'"/>
  <shipping-content v-if="page === 'shipping'"/>
</div>`,
});
