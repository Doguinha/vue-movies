Vue.component("my-snackbar", {
  methods: {
    close() {
      this.$emit("closeSnackBar");
    },
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    timeout: {
      type: Number,
      required: false,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  template: `<v-snackbar v-model="show"
  top
  right
  :timeout="timeout">
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
