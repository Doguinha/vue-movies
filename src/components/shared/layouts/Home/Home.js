Vue.component("home-layout", {
  methods: {
    toggleMenu() {
      this.$refs.sidebar.show = !this.$refs.sidebar.show;
    },
  },
  template: `<v-container fluid>
        <home-navbar v-on:toggleMenu='toggleMenu'/>
        <home-sidebar ref="sidebar"/>
        <slot></slot>
    </v-container>`,
});
