Vue.use(VueMaterial.default);
Vue.material = {
  ...Vue.material,
  locale: {
    ...Vue.material.locale,
    dateFormat: "dd/MM/yyyy",
    firstDayOfAWeek: 1,
    days: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    shorterDays: ["D", "S", "T", "Q", "Q", "S", "S"],
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    shortMonths: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    shorterMonths: [
      "J",
      "F",
      "M",
      "A",
      "M",
      "Ju",
      "Ju",
      "A",
      "Se",
      "O",
      "N",
      "D",
    ],
  },
};

var app = new Vue({
  el: "#app",
  data: {
    sharedState: store.state,
  },
  async mounted() {
    store.setMovies(await getTrending());
  },
});
