Vue.component("my-router", {
  computed: {
    page() {
      return store.state.page;
    },
    shopArea() {
      return ["shoppingcart", "account", "shipping"].includes(this.page);
    },
  },
  template: `
    <div>
        <home-layout v-if="page === 'home'"/>
        <shop-layout v-else-if='shopArea'/>
    </div>
    `,
});
