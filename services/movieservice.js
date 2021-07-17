const getSearchedMovies = async (textSearch) => {
  let movies = await getSearchedMoviesAPI(textSearch);
  return getResultWithImage(movies);
};

const getTrending = async (mediaType = "movie", timeWindow = "day") => {
  let trending = await getTrendingAPI(mediaType, timeWindow);
  return getResultWithImage(trending);
};

const getConfiguration = async () => {
  let config = localStorage.getItem("api_configuration");
  if (config) {
    return JSON.parse(config);
  } else {
    config = await getConfigurationAPI();
    localStorage.setItem("api_configuration", JSON.stringify(config));
    return config;
  }
};

const getResultWithImage = async (data) => {
  let config = await getConfiguration();
  const results = data.map((item) => {
    const result = {
      ...item,
      url_image: item.poster_path
        ? `${config.images.secure_base_url}${
            config.images.poster_sizes.filter((size) => size === "w185")[0]
          }/${item.poster_path}`
        : "",
    };
    return result;
  });
  return results;
};
