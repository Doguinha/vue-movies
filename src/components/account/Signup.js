Vue.component("account-signup", {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      loading: false,
      showPassword: false,
    };
  },
  methods: {
    newAccount() {
      this.loading = true;
      this.$refs.formSignup
        .validate()
        .then((success) => {
          if (!success) {
            return;
          }
          setTimeout(() => {
            store.setUser({
              name: this.name,
              email: this.email,
              password: this.password,
            });
            store.setNotificationMessage({
              showSnackBar: true,
              message: "Nova conta criada com sucesso!",
              timeout: 4000,
            });
            this.loading = false;
            this.email = this.password = this.name = "";
            store.setPage("shipping");
          }, 3000);

          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.formSignup.reset();
          });
        })
        .catch(() => {
          store.setNotificationMessage({
            showSnackBar: true,
            message: "Verifique os campos e tente novamente!",
            timeout: 4000,
          });
          this.loading = false;
        });
    },
  },
  template: `<ValidationObserver v-slot="{ invalid, handleSubmit  }" ref="formSignup">
    <v-form v-on:submit.prevent='handleSubmit(newAccount)'>
        <v-card elevation=0 v-bind:loading='loading'>
            <v-card-title class='text-body-1'>Quero criar uma conta</v-card-title>
            <v-card-text>
                <validation-provider name="Nome" rules="required|alpha_spaces" v-slot="{ errors, failed }">
                    <v-text-field
                        v-model="name"
                        label="Nome"
                        v-bind:error="failed"
                        v-bind:error-messages="errors[0]">
                    </v-text-field>
                </validation-provider>
                <validation-provider name="E-mail" rules="required|email" v-slot="{ errors, failed }">
                  <v-text-field
                      v-model="email"
                      label="E-mail"
                      v-bind:error="failed"
                      v-bind:error-messages="errors[0]">
                  </v-text-field>
                </validation-provider>
                <validation-provider name="Senha" rules="required|min:3|max:8|confirmed:confirmPassword" v-slot="{ errors, failed }">
                  <v-text-field
                      v-model="password"
                      v-bind:type="showPassword ? 'text' : 'password'"
                      label="Senha"
                      v-bind:error="failed"
                      v-bind:error-messages="errors[0]"
                      v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      v-on:click:append="showPassword = !showPassword">
                  </v-text-field>
                </validation-provider>
                <validation-provider vid="confirmPassword" name="Confirmar Senha" v-slot="{ errors, failed }">
                  <v-text-field
                      v-model="confirmedPassword"
                      v-bind:type="showPassword ? 'text' : 'password'"
                      label="Confirmar Senha"
                      v-bind:error="failed"
                      v-bind:error-messages="errors[0]">
                  </v-text-field>
                </validation-provider>
            </v-card-text>
            <v-card-actions class='justify-end'>
                <v-btn color="success" small right type="submit" v-bind:disabled="(loading || invalid)">Cadastrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
  </ValidationObserver>`,
});
