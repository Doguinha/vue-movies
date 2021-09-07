var isUserAutenticatedMixin = {
  methods: {
    isUserAuthenticated() {
      return store.state.user && Object.keys(store.state.user).length !== 0;
    },
  },
};
