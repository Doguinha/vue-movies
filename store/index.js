const store = new Vuex.Store({
  modules: {
    cart,
    movie,
  },
  //sempre que o estado do Vuex é mudado fora dos manipuladores de mutação, um erro será lançado
  //ligar apenas em desenvolvimento, degrada o desempenho
  strict: true,
});
