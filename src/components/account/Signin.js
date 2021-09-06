Vue.component("account-signin", {
  data() {
    return {
      fieldEmail: {
        type: "email",
        value: "",
        rules: "required|email",
        label: "E-mail",
      },
      fieldPassword: {
        type: "password",
        value: "",
        rules: "required|min:3|max:8",
        label: "Senha",
        icon: "mdi-eye-off",
      },
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
              email: this.fieldEmail.value,
              password: this.fieldPassword.value,
            });
            store.setNotificationMessage({
              show: true,
              message: "Logado com sucesso!",
              timeout: 4000,
              type: "snackbar",
            });
            this.loading = false;
            this.fieldEmail.value = this.fieldPassword.value = "";
            store.setPage("shipping");
          }, 3000);

          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.formSignin.reset();
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
      } else {
        this.fieldPassword.icon = "mdi-eye-off";
        this.fieldPassword.type = "password";
      }
    },
  },
  template: `<ValidationObserver v-slot="{ invalid, handleSubmit  }" ref="formSignin">
    <v-form v-on:submit.prevent='handleSubmit(signin)'>
        <v-card elevation=0 v-bind:loading='loading'>
            <v-card-title class='text-body-1'>Já sou cliente</v-card-title>
            <v-card-text>
                <my-text-field v-bind:field="fieldEmail"
                  v-bind:disabled="loading"/>
                </validation-provider>
                <my-text-field v-bind:field="fieldPassword"
                  v-bind:disabled="loading"
                  v-on:appendIconClicked="togglePassword"/>
            </v-card-text>
            <v-card-actions class='justify-end'>
                <v-btn color="success" small right type="submit" v-bind:disabled="(loading || invalid)">Logar</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</ValidationObserver>`,
});
