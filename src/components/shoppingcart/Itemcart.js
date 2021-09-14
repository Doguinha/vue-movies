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
      removeCartItem(item);
      store.setNotificationMessage({
        show: true,
        timeout: 2000,
        message: "Item removido com sucesso!",
        type: "snackbar",
      });
    },
    toggleDialog() {
      this.showDialog = !this.showDialog;
    },
  },
  template: `<v-row align='center' class='pa-2'>
    <v-col sm='2' cols='4'>
      <v-img v-bind:src="itemCart.item.img_url">
      </v-img>
    </v-col>
    <v-col sm='8' cols='5'>      
      <div class="text-sm-h5 text-h6" 
        v-text="itemCart.item.original_title ? itemCart.item.original_title : itemCart.item.name">
      </div>
    </v-col>
    <v-col sm='2' cols='3'>
      <div class='d-flex flex-column justify-center'>
        <v-select 
          v-model='itemCart.amount'
          v-bind:items="amounts"        
          label="Qtd."
          outlined
          dense
          style="maxWidth: 80px; margin:0 auto">
        </v-select>
        <v-btn text
          plain
          x-small
          v-on:click.stop="toggleDialog"
          class='mt-n4'>
          <span class='text-decoration-underline'>Excluir</span>
        </v-btn>
      </div>
    </v-col>
    <confirm-dialog
      v-bind:showDialog="showDialog"
      message='Deseja realmente apagar?'
      secondaryText='Essa operação é irreversível'
      v-on:confirmar='removeItem(itemCart)'
      v-on:cancelar='toggleDialog'
      persistent
      width="unset">
    </confirm-dialog>
  </v-row>`,
});
