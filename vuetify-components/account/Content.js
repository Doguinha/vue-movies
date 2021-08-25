Vue.component("account-content", {
  data() {
    return {
      formValid: false,
      email: "",
    };
  },
  template: `<v-main>
        <v-container>
            <shoppingcart-navbar></shoppingcart-navbar>
            <v-card class='pa-0'>
                <v-card-text>
                    <v-container>
                        <v-card-title>Identificação</v-card-title>
                        <v-row justify='center'>
                            <v-col sm='5'>
                                <v-form v-model="formValid">
                                    <v-card elevation=0>
                                        <v-card-title class='text-body-1'>Quero criar uma conta</v-card-title>
                                        <v-card-text>
                                            <v-text-field
                                                v-model="email"
                                                label="Nome"
                                                required>
                                            </v-text-field>
                                            <v-text-field
                                                v-model="email"
                                                label="E-mail"
                                                required>
                                            </v-text-field>
                                            <v-text-field
                                                v-model="email"
                                                label="Senha"
                                                required>
                                            </v-text-field>
                                        </v-card-text>
                                        <v-card-actions  class='justify-end'>
                                            <v-btn color="success" small right>Cadastrar</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-form>
                            </v-col>
                            <v-divider vertical></v-divider>
                            <v-col sm='5'>
                                <v-form v-model="formValid">
                                <v-card elevation=0>
                                    <v-card-title class='text-body-1'>Já sou cliente</v-card-title>
                                    <v-card-text>
                                        <v-text-field
                                            v-model="email"
                                            label="E-mail"
                                            required>
                                        </v-text-field>
                                        <v-text-field
                                            v-model="email"
                                            label="Senha"
                                            required>
                                        </v-text-field>
                                    </v-card-text>
                                    <v-card-actions class='justify-end'>
                                        <v-btn color="success" small right>Logar</v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-container>
    </v-main>`,
});
