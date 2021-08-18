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
      showDialog: false,
    };
  },
  methods: {
    removeItem(item) {
      console.log("chamdo");
      return removeCartItem(item);
    },
    toggleDialog() {
      this.showDialog = !this.showDialog;
    },
  },
  template: `<v-row class='pa-2'>
    <v-col cols='3' sm='3' md='2'>
      <v-img        
        max-height="200"
        max-width="120"
        v-bind:src="itemCart.item.img_url">
      </v-img>
    </v-col>
    <v-col cols='4' sm='4' md='6'>      
      <div class="text-sm-h5 text-h6 py-sm-16 pt-16" v-text="itemCart.item.original_title ? itemCart.item.original_title : itemCart.item.name"></div>
    </v-col>
    <v-col cols='3' sm='2' md='2' lg='1'>
      <v-select 
        v-model='itemCart.amount'
        v-bind:items="amounts"        
        label="Qtd."
        class='py-sm-15 pt-15 text-center'
        outlined>
      </v-select>      
    </v-col>
    <v-col cols='2' sm='3' md='2'>
      <confirm-dialog
        v-bind:showDialog="showDialog"
        message='Deseja realmente apagar?'
        v-on:confirmar='removeItem(itemCart)'
        v-on:cancelar='toggleDialog'
        persistent
        width="unset">
        <template v-slot:elementFireDialog="{ on, attrs }">
          <v-btn color="primary" class='my-sm-16 mt-16' v-on:click="toggleDialog">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
      </confirm-dialog>     
    </v-col>
  </v-row>`,
});
