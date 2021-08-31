Vue.component("account-signin", {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      showPassword: false,
    };
  },
  methods: {
    signin() {
      this.loading = true;
      this.$refs.formSignin
        .validate()
        .then((success) => {
          if (!success) {
            return;
          }
          setTimeout(() => {
            store.setUser({
              email: this.email,
              password: this.password,
            });
            store.setNotificationMessage({
              showSnackBar: true,
              message: "Logado com sucesso!",
              timeout: 4000,
            });
            this.loading = false;
            this.email = this.password = "";
          }, 3000);

          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.formSignin.reset();
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
  template: `<ValidationObserver v-slot="{ invalid, handleSubmit  }" ref="formSignin">
    <v-form v-on:submit.prevent='handleSubmit(signin)'>
        <v-card elevation=0 v-bind:loading='loading'>
            <v-card-title class='text-body-1'>Já sou cliente</v-card-title>
            <v-card-text>
                <validation-provider name="E-mail" rules="required|email" v-slot="{ errors, failed }">
                    <v-text-field
                        v-model="email"
                        label="E-mail"
                        v-bind:error="failed"
                        v-bind:error-messages="errors[0]">
                    </v-text-field>
                </validation-provider>
                <validation-provider name="Senha" rules="required|min:3|max:8" v-slot="{ errors, failed }">
                    <v-text-field
                        v-model="password"
                        label="Senha"
                        v-bind:type="showPassword ? 'text' : 'password'"
                        v-bind:error="failed"
                        v-bind:error-messages="errors[0]"
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        v-on:click:append="showPassword = !showPassword">
                    </v-text-field>
                </validation-provider>
            </v-card-text>
            <v-card-actions class='justify-end'>
                <v-btn color="success" small right type="submit" v-bind:disabled="(loading || invalid)">Logar</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</ValidationObserver>`,
});
