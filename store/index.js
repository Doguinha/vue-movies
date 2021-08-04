var store = {
  debug: false,
  state: {
    cartItens: [],
  },
  setCartItens(newValue) {
    if (this.debug) console.log("setCartItensAction triggered", newValue);
    this.state.cartItens = newValue;
  },
};
