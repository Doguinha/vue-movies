Vue.component("shoppingcart-item", {
  prop: {
    cartItem: {
      type: Object,
      required: true,
    },
  },
  template: `<v-row>
  <v-col cols='3'>
    <v-avatar size='36px'>
        <img v-bind:src="cartItem.item.min_img_url">
    </v-avatar>
   </v-col>
   <v-col cols='6'>
    <p>{{cartItem.item.original_title ? cartItem.item.original_title : cartItem.item.name}}</p>
   </v-col>
   <v-col cols='3'>
    <select>
        <option>Quantidade</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
   </v-col>
   </v-row>`,
});
