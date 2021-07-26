Vue.component("v-cart-counter", {
  computed: {
    // permite acessar com this.cartItems ao invés de this.$store.state.cartItems
    ...Vuex.mapState("cart", {
      cartItems: (state) => state.cartItems,
    }),
    // permite invocar com this.cartItemsCount ao invés de this.$store.getters.cartItemsCount
    ...Vuex.mapGetters("cart", ["cartItemsCount"]),
  },
  template: `
    <div class="dropdown cart-counter">
        <a class="btn btn-secondary dropdown-toggle" 
            href="#" role="button" id="dropdownMenuLink" 
            data-bs-toggle="dropdown" aria-expanded="false">
            Cart 
            <span class="badge bg-primary">
                {{this.cartItemsCount}}
            </span>
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <!-- acessando state cartItems pelo mapState -->
            <li v-for='(cartItem,index) in this.cartItems' v-bind:key='cartItem.item.id'> 
                <a class="dropdown-item" href="#">
                    <img class='img-fluid' v-bind:src='cartItem.item.min_img_url'/>({{cartItem.quantity}}){{cartItem.item.original_title}}
                </a>
            </li>
        </ul>
    </div>
    `,
});
