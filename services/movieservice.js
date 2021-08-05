const getSearched = async (textSearch, media = "movie") => {
  let movies = await getSearchedAPI(textSearch, media);
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
  let pathBaseImg = await getPathImageBase("w500");
  let pathBaseImgMin = await getPathImageBase("w45");
  const results = data.map((item) => {
    const result = {
      ...item,
      img_url: item.poster_path
        ? `${pathBaseImg}${item.poster_path}`
        : `${pathBaseImg}${item.profile_path}`,
      min_img_url: item.poster_path
        ? `${pathBaseImgMin}${item.poster_path}`
        : `${pathBaseImgMin}${item.profile_path}`,
    };
    return result;
  });
  return results;
};

const getPathImageBase = async (width) => {
  let config = await getConfiguration();
  return `${config.images.secure_base_url}${
    config.images.poster_sizes.filter((size) => size === width)[0]
  }`;
};
