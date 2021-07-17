const API_KEY = "f9a6a21e5fdcfe7a9cebf430f758f96e";
const API_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "pt-BR";

const getConfigurationAPI = async () => {
  let config = fetch(`${API_URL}/configuration?api_key=${API_KEY}`)
    .then((resp) => resp.json())
    .then(function (data) {
      return data;
    });
  return config;
};

const getTrendingAPI = async (mediaType = "movie", timeWindow = "day") => {
  let movies = fetch(
    `${API_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&language=${LANGUAGE}`
  )
    .then((resp) => resp.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error("Erro ao fazer a requisição", error);
    });
  return movies;
};

const getSearchedMoviesAPI = async (query) => {
  let movies = fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=${LANGUAGE}`
  )
    .then((resp) => resp.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error("Erro ao fazer a requisição", error);
    });
  return movies;
};
