Vue.component("shop-layout", {
  computed: {
    page() {
      return store.state.page;
    },
  },
  template: `<v-container>
    <shop-navbar></shop-navbar>
    <slot></slot>
  </container>`,
});
