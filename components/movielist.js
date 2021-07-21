Vue.component("v-movie-list", {
  data() {
    return {
      textSearch: "",
    };
  },
  computed: {
    cartItens() {
      return store.state.cartItens;
    },
    movies() {
      return store.state.movies;
    },
  },
  methods: {
    addToCart(item) {
      if (!this.cartItens.some((cartItem) => cartItem.item.id === item.id)) {
        const newCartItems = [
          ...this.cartItens,
          {
            quantity: 1,
            item: item,
          },
        ];
        store.setCartItens(newCartItems);
      } else {
        const newCartItems = this.cartItens.map((cartItem) => {
          if (cartItem.item.id === item.id) {
            const cartItemResul = {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
            return cartItemResul;
          }
          return cartItem;
        });
        store.setCartItens(newCartItems);
      }
    },
  },
  template: `
    <div class='row mb-3 text-center'>
      <div class='col-md-4 col-sm-6 col-xs-12' v-for='movie in movies' v-bind:key='movie.id'> 
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{{movie.original_title}}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{{movie.vote_average}}<small class="text-muted fw-light">/rate</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li><img v-bind:src='movie.img_url' v-bind:alt='movie.original_title'/></li>
              <li>Linguagem: {{movie.original_language}}</li>
              <li>Popularidade: {{movie.popularity}}</li>
              <li>Lançado em: {{movie.release_date}}</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click='addToCart(movie)'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    `,
});
