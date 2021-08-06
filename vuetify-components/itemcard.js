Vue.component("vuetify-itemcard", {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  template: `
  <v-card class="mx-4">
    <v-img width="250" v-bind:src='item.img_url'></v-img>
    <v-card-title>{{item.original_title ? item.original_title : item.name}}</v-card-title>
    <v-card-text>
        <v-row align="center" class="mx-0">
        <v-rating :value="item.vote_average/2"
            color="amber"
            dense
            half-increments
            readonly
            size="14">
        </v-rating>
        <div class="grey--text ms-4">
            {{item.vote_average/2}}
        </div>
        </v-row>
        <div class="my-4 text-subtitle-1">
            Linguagem: {{item.original_language}}
        </div>
        <div>Lançado em: {{item.release_date ? item.release_date : item.first_air_date}}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
        <v-btn color="deep-purple lighten-2" text>
            Reserve
        </v-btn>
    </v-card-actions>
   </v-card>
    `,
});
