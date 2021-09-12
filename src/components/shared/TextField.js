Vue.component("my-text-field", {
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    field: {
      type: Object,
      required: true,
    },
  },
  template: `<validation-provider
        v-bind:vid="field.vid"
        v-bind:name="field.label" 
        v-bind:rules="field.rules" 
        v-slot="{ errors, failed }">
        <v-text-field
            v-model="field.value"
            v-bind:label="field.label"
            v-bind:type="field.type"
            v-bind:error="failed"
            v-bind:disabled="disabled"
            v-bind:error-messages="errors[0]"
            v-bind:append-icon="field.icon"
            v-on:click:append="$emit('appendIconClicked')">
        </v-text-field>
    </validation-provider>`,
});
