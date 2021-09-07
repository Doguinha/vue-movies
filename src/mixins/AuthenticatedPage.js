var autenticatedPageMixin = {
  mixins: [isUserAutenticatedMixin],
  mounted() {
    if (!this.isUserAuthenticated()) {
      store.setPage("account");
    }
  },
};
