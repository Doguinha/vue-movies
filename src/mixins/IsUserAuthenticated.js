var isUserAutenticatedMixin = {
  methods: {
    isUserAuthenticated() {
      return this.user && Object.keys(this.user).length !== 0;
    },
    logout() {
      store.state.user = {};
    },
  },
  computed: {
    user() {
      return store.state.user;
    },
  },
};
