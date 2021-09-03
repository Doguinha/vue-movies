Vue.component("shipping-content", {
  beforeCreate() {
    if (!store.state.user) {
      store.setPage("shoppingcart");
    }
  },
  template: `<h1>Shipping</h1>`,
});
