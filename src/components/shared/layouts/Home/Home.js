Vue.component("home-layout", {
  methods: {
    toggleMenu() {
      this.$refs.sidebar.show = !this.$refs.sidebar.show;
    },
  },
  template: `<div>
        <home-navbar v-on:toggleMenu='toggleMenu'/>
        <home-sidebar ref="sidebar"/>
        <home-content/>
    </div>`,
});
