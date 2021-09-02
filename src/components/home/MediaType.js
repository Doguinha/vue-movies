Vue.component("home-mediatype", {
  props: {
    medias: {
      type: Array,
      required: true,
    },
  },
  template: `<v-row>
  <v-col class="mt-2" cols="12">
    <slot></slot>
  </v-col>
  <v-col cols="12">
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for='media in medias' v-bind:key='media.id'>
        <home-itemmedia v-bind:item='media'/>
      </v-slide-item>
    </v-slide-group> 
  </v-col>
</v-row>`,
});
