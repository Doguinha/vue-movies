Vue.component("my-snackbar", {
  methods: {
    close() {
      store.setNotificationMessage({
        ...store.state.setNotificationMessage,
        showSnackBar: false,
      });
    },
  },
  computed: {
    message() {
      return store.state.notificationMessage.message;
    },
    timeout() {
      return store.state.notificationMessage.timeout;
    },
    show: {
      get() {
        return store.state.notificationMessage.message;
      },
      set(newValue) {
        // store.setNotificationMessage({
        //   ...store.state.notificationMessage,
        //   showSnackBar: newValue,
        // });
      },
    },
  },
  template: `<v-snackbar v-model="show"
  top
  right
  v-bind:timeout="timeout">
  {{ message }}
  <template v-slot:action="{ attrs }">
    <v-btn
      color="blue"
      text
      v-bind="attrs"
      @click="close">
      <v-icon>
        mdi-close
      </v-icon>
    </v-btn>
  </template>
</v-snackbar>`,
});
