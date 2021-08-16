Vue.component("shoppingcart-item", {
  props: {
    itemCart: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      amounts: [1, 2, 3, 4, 5, 6],
    };
  },
  template: `<v-row class='pa-2'>
    <v-col cols='2' md='2' lg='1'>
      <v-img        
        max-height="200"
        max-width="120"
        v-bind:src="itemCart.item.img_url">
      </v-img>
    </v-col>
    <v-col cols='6' sm='6' md='4' lg='3'>      
      <div class="text-h5 py-16" v-text="itemCart.item.original_title ? itemCart.item.original_title : itemCart.item.name"></div>
    </v-col>
    <v-col cols='2' md='2' lg='1'>
      <v-select 
        v-model='itemCart.amount'
        v-bind:items="amounts"        
        label="Quantidade"
        class='py-15 text-center'
        outlined>
      </v-select>      
    </v-col>
    <v-col cols='2' md='2'>
      <v-btn color="error" class='my-16'>
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>`,
});
