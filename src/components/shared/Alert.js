Vue.component("my-alert", {
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
        });
      },
    },
  },
  template: `<div style='position:fixed;bottom:0;left:0'>
        <v-alert
            v-model='show'
            v-bind:type="level"
            dismissible
            dense>
            <strong>{{message}}</strong>
        </v-alert>
    </div>`,
});
