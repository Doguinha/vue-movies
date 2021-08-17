Vue.component("vuetify-dialog", {
  props: {
    message: {
      type: String,
      required: true,
    },
    secondaryText: {
      type: String,
      required: false,
    },
    show: {
      type: Boolean,
      required: false,
    },
    successF: {
      type: Function,
      required: true,
    },
    failF: {
      type: Function,
      required: true,
    },
  },
  template: `<v-dialog
        v-model="dialog"
        persistent
        max-width="290">
        <v-card>
            <v-card-title class="text-h5">
                {{message}}
            </v-card-title>
            <v-card-text v-if='secondaryText'>{{secondaryText}}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="failF">
                    Cancelar
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="successF">
                    Confirmar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>`,
});
