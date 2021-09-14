Vue.component("shop-layout", {
  computed: {
    page() {
      return store.state.page;
    },
  },
  template: `<v-container>
    <v-row justify='center'>
      <v-col lg='10'>
        <shop-navbar></shop-navbar>
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>`,
});
