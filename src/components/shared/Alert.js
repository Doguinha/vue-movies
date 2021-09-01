Vue.component("vuetify-alert", {
  props: {
    level: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  template: `<div class="d-flex justify-center">
        <v-alert
            v-bind:value='show'
            v-bind:type="level"
            dismissible
            outlined
            dense>
            <slot></slot>
        </v-alert>
    </div>`,
});
