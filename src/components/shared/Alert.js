Vue.component("my-alert", {
  methods: {
    close() {
      store.setNotificationMessage({
        ...store.state.notificationMessage,
        show: false,
        type: "alert",
      });
    },
  },
  computed: {
    message() {
      return store.state.notificationMessage.message;
    },
    level() {
      return store.state.notificationMessage.level;
    },
    show: {
      get() {
        return (
          store.state.notificationMessage.show &&
          store.state.notificationMessage.type === "alert"
        );
      },
      set(newValue) {
        store.setNotificationMessage({
          ...store.state.notificationMessage,
          show: newValue,
          type: "alert",
        });
      },
    },
  },
  template: `<div style='position:fixed;bottom:0;left:0'>
        <v-alert
            v-bind:value='show'
            v-bind:type="level"
            dismissible
            v-on:click:dismissible='close'
            dense>
            <strong>{{message}}</strong>
        </v-alert>
    </div>`,
});
