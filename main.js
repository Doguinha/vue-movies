Vue.component("root-app", {
  template: `<v-app>
        <home-navbar v-if="store.state.page === 'home'"></home-navbar>
        <home-content v-if="store.state.page === 'home'"></home-content>
        <shoppingcart-content
        v-if="store.state.page === 'shoppingcart'"
        ></shoppingcart-content>
  </v-app>`,
});
