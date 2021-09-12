Vue.component("shop-layout", {
  computed: {
    page() {
      return store.state.page;
    },
  },
  template: `<div>
  <shop-navbar></shop-navbar>
  <slot></slot>
</div>`,
});
