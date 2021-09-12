Vue.component("home-usermenu", {
  mixins: [isUserAutenticatedMixin],
  template: `<div>
  <v-menu open-on-hover offset-y v-if='this.isUserAuthenticated()'>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class='mr-sm-8 mx-xs-2'
        text
        plain
        x-small
        v-bind="attrs"
        v-on="on">
        Hello, {{user.name}}
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item link v-on:click="this.store.setPage('shipping')">
        <v-icon>mdi-account</v-icon>
        <span class='text-caption pl-2'>My account</span>
      </v-list-item>
      <v-list-item link v-on:click="this.store.setPage('shipping')">
        <v-icon>mdi-gift</v-icon>
        <span class='text-caption pl-2'>My orders</span>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link v-on:click="this.logout">
        <span class='text-caption'>Not {{user.name}}? <span class='text-caption text-decoration-underline'>Logout</span></span>
      </v-list-item>
    </v-list>
  </v-menu>
    <div class='mx-4' v-else>
        <p class='text-caption ma-0'>
          Bem vindo ;)
        </p>
        <v-btn text plain x-small class='pa-0' v-on:click="this.store.setPage('account')">
        Entre ou cadastre-se
        </v-btn>
    </div>
</div>`,
});
