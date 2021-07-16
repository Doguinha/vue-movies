Vue.component("movie-list", {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  template: `<ul>
        <li v-for='movie in movies' v-bind:key='movie.id'>{{movie.original_title}}</li>
    </ul>
    `,
});
