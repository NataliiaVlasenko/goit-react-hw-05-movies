import axios from 'axios';

// const api_key = "42198471976a286e57d85c87e47247c5";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '42198471976a286e57d85c87e47247c5',
    _limit: 20,
  },
});
//trending/all/day?api_key=<<api_key>>

export const getTrendingMovies = async (page = 1) => {
  const { data } = await instance.get(`/trending/movie/day?`, {
    params: {
      page,
    },
  });
  
  return data.results;
};


export const getSingleMovie = async id => {
  const { data } = await instance.get(`/movie/${id}`);

  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });

  return data.results;
};

export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  //console.log(data.cast);
  return data.cast;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
