Vue.component("account-signup", {
  data() {
    return {
      fieldName: {
        type: "text",
        value: "",
        rules: "required|alpha_spaces|min:8|max:30",
        label: "Nome",
      },
      fieldEmail: {
        type: "email",
        value: "",
        rules: "required|email",
        label: "E-mail",
      },
      fieldPassword: {
        type: "password",
        value: "",
        rules: "required|min:3|max:8|confirmed:confirmPassword",
        label: "Senha",
        icon: "mdi-eye-off",
      },
      fieldConfirmPassword: {
        type: "password",
        value: "",
        rules: "required|min:3|max:8",
        label: "Confirmar Senha",
        vid: "confirmPassword",
      },
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
              name: this.fieldName.value,
              email: this.fieldEmail.value,
              password: this.fieldPassword.value,
            });
            store.setNotificationMessage({
              show: true,
              message: "Nova conta criada com sucesso!",
              timeout: 4000,
              type: "snackbar",
            });
            this.loading = false;
            this.fieldEmail.value =
              this.fieldPassword.value =
              this.fieldConfirmPassword.value =
              this.fieldName.value =
                "";
            store.setPage("shipping");
          }, 3000);

          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.formSignup.reset();
          });
        })
        .catch(() => {
          store.setNotificationMessage({
            show: true,
            message: "Verifique os campos e tente novamente!",
            timeout: 4000,
            type: "alert",
          });
          this.loading = false;
        });
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
      if (this.showPassword) {
        this.fieldPassword.icon = "mdi-eye";
        this.fieldPassword.type = "text";
        this.fieldConfirmPassword.type = "text";
      } else {
        this.fieldPassword.icon = "mdi-eye-off";
        this.fieldPassword.type = "password";
        this.fieldConfirmPassword.type = "password";
      }
    },
  },
  template: `<ValidationObserver v-slot="{ invalid, handleSubmit  }" ref="formSignup">
    <v-form v-on:submit.prevent='handleSubmit(newAccount)'>
        <v-card elevation=0 v-bind:loading='loading'>
            <v-card-title class='text-body-1'>Quero criar uma conta</v-card-title>
            <v-card-text>
              <my-text-field v-bind:field="fieldName"
                v-bind:disabled="loading"/>
              <my-text-field v-bind:field="fieldEmail"
                v-bind:disabled="loading"/>
              <my-text-field v-bind:field="fieldPassword"
                v-bind:disabled="loading"
                v-on:appendIconClicked="togglePassword"/>
              <my-text-field v-bind:field="fieldConfirmPassword"
                v-bind:disabled="loading"/>
            </v-card-text>
            <v-card-actions class='justify-end'>
                <v-btn color="success" small right type="submit" v-bind:disabled="(loading || invalid)">Cadastrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
  </ValidationObserver>`,
});
