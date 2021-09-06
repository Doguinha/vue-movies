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
  methods: {
    iconClickedF() {
      return this.$emit("appendIconClicked");
    },
    appendIconClickedF() {
      console.log("qweqweqw");
      return this.$emit("appendIconClicked");
    },
  },
  template: `<validation-provider 
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
            v-on:click:append="iconClickedF">
        </v-text-field>
    </validation-provider v-on:iconClicked="appendIconClickedF">`,
});
