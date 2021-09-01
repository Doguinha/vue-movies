Vue.component("my-snackbar", {
  methods: {
    close() {
      store.setNotificationMessage({
        ...store.state.notificationMessage,
        show: false,
        type: "snackbar",
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
        return (
          store.state.notificationMessage.show &&
          store.state.notificationMessage.type === "snackbar"
        );
      },
      set(newValue) {
        store.setNotificationMessage({
          ...store.state.notificationMessage,
          show: newValue,
          type: "snackbar",
        });
      },
    },
  },
  template: `<v-snackbar v-model="show"
  bottom
  left
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
