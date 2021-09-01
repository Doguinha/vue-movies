Vue.component("home-layout", {
  computed: {
    page() {
      return store.state.page;
    },
  },
  template: `<div v-if="page === 'home'">
        <home-navbar/>
        <home-content/>
    </div>`,
});
