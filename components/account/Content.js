Vue.component("account-content", {
  template: `<v-main>
        <v-container>
            <shoppingcart-navbar></shoppingcart-navbar>
            <v-card class='pa-0'>
                <v-card-text>
                    <v-container>
                        <v-card-title>Identificação</v-card-title>
                        <v-row justify='center'>
                            <v-col cols='12' sm='5'>
                              <account-signup></account-signup>
                            </v-col>
                            <v-divider vertical class='d-none d-sm-flex'></v-divider>
                            <v-col cols='12' sm='5'>
                              <account-signin></account-signin>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-container>
    </v-main>`,
});
