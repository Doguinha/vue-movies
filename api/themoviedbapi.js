const API_KEY = "f9a6a21e5fdcfe7a9cebf430f758f96e";
const API_URL = "https://api.themoviedb.org/3";

const getMovies = (query) => {
  let movies = fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  )
    .then((resp) => resp.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error("Erro ao fazer a requisição", error);
    });
  return movies;
};
