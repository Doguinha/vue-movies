Vue.component("v-navbar", {
  data() {
    return {
      textSearch: "",
    };
  },
  props: {
    cartItens: {
      type: Array,
      required: false,
    },
  },
  template: `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Top navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <v-cart-counter v-bind:cart-itens='cartItens'></v-cart-counter>         
                <form class="d-flex" v-on:submit.prevent='onSubmit'>
                    <input v-model='textSearch' required class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>`,
  methods: {
    onSubmit() {
      console.log("emitindo o evento no navbar", this.textSearch);
      this.$emit("search-movie", this.textSearch);
    },
  },
});
