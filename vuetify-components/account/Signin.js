Vue.component("account-signin", {
  data() {
    return {
      formValid: false,
      newEmail: "",
      newPassword: "",
      loading: false,
      showPassword: false,
    };
  },
  template: `
    <v-form v-model="formValid">
        <v-card elevation=0>
            <v-card-title class='text-body-1'>Já sou cliente</v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="newEmail"
                    label="E-mail"
                    required>
                </v-text-field>
                <v-text-field
                    v-model="newPassword"
                    label="Senha"
                    required>
                </v-text-field>
            </v-card-text>
            <v-card-actions class='justify-end'>
                <v-btn color="success" small right>Logar</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>`,
});
