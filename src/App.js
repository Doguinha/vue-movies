Vue.use(VeeValidate);
var app = new Vue({
  el: "#app",
  vuetify: new Vuetify({
    breakpoint: {
      thresholds: {
        xs: 340,
        sm: 540,
        md: 800,
        lg: 960,
      },
      scrollBarWidth: 24,
    },
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
  <v-main>
    <v-container v-bind:fluid="sharedState.page === 'home'">
      <my-router></my-router>
    </v-container>
  </v-main>
</v-app>`,
});
