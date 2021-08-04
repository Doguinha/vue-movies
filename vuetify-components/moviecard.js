Vue.component("vuetify-moviecard", {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  template: `
  <v-card
    class="mx-auto my-12"
    max-width="374">
    <template slot="progress">
        <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
        ></v-progress-linear>
    </template>

    <v-img
        height="250"
        v-bind:src='movie.img_url'>
    </v-img>

    <v-card-title>{{movie.original_title ? movie.original_title : movie.name}}</v-card-title>

    <v-card-text>
        <v-row
        align="center"
        class="mx-0">
            <v-rating
                :value="movie.vote_average/2"
                color="amber"
                dense
                half-increments
                readonly
                size="14">
            </v-rating>
            <div class="grey--text ms-4">
                {{movie.vote_average/2}}
            </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
            Linguagem: {{movie.original_language}}
        </div>

        <div>Lançado em: {{movie.release_date ? movie.release_date : movie.first_air_date}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
        <v-btn
        color="deep-purple lighten-2"
        text>
        Reserve
        </v-btn>
    </v-card-actions>
</v-card>
    `,
});
