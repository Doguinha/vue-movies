var app = new Vue({
  el: "#app",
  vuetify: new Vuetify({
    theme: {
      dark: true,
      themes: {
        light: {
          primary: "#3f51b5",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c",
        },
        dark: {
          primary: "#3f51b5",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c",
          anchor: "#8c9eff",
        },
      },
    },
  }),
  data: {
    sharedState: store.state,
  },
  template: `<v-app>
      <home-navbar v-if="sharedState.page === 'home'"></home-navbar>
      <home-content v-if="sharedState.page === 'home'"></home-content>
      <shoppingcart-content v-if="sharedState.page === 'shoppingcart'"></shoppingcart-content>
      <account-content v-if="sharedState.page === 'account'"></account-content>
      <my-snackbar/>
    </v-app>`,
});
