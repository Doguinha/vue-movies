var app = new Vue({
  el: "#app",
  store,
  async created() {
    this.$store.dispatch("movie/setTrending");
  },
});
