Vue.component("vuetify-content-tabitem", {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  template: `
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="3"
          v-for='item in data' 
          v-bind:key='item.id'>
            <vuetify-moviecard v-bind:movie='item'></vuetify-moviecard>
        </v-col>    
      </v-row>  
    </v-container>
    `,
});
