Vue.component("v-cart-counter", {
  props: {
    cartitens: {
      type: Array,
      required: false,
    },
  },
  template: `
    <div class="dropdown cart-counter">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Cart <span class="badge bg-primary">{{this.cartitens ? this.cartitens.length : 0}}</span>
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li v-for='(cartItem,index) in cartitens' v-bind:key='cartItem.item.id'>
                <a class="dropdown-item" href="#">
                    <img class='img-fluid' v-bind:src='cartItem.item.min_img_url'/>({{cartItem.quantity}}){{cartItem.item.original_title}}
                </a>
            </li>
        </ul>
    </div>
    `,
});
