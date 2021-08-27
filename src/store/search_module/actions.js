import axios from "axios";
import { useI18n } from 'vue-i18n';

const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY;

export function fetchPopularMovies(context) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: {
      api_key: TMDB_API_KEY,
      language: useI18n().locale
    }
  }

  axios.request(options)
    .then(res => {
      context.commit('setPopularMovies', res.data.results);
    }).catch(err => Promise.reject(err));
}

export function fetchUpcomingMovies(context) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    params: {
      api_key: TMDB_API_KEY,
      language: useI18n().locale
    }
  }

  axios.request(options)
    .then(res => {
      context.commit('setUpcomingMovies', res.data.results.filter(movie => new Date(movie.release_date) > new Date()));
    }).catch(err => Promise.reject(err));
}

export function searchMovie(context, searchQuery) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      api_key: TMDB_API_KEY,
      language: useI18n().locale,
      query: searchQuery
    }
  }

  return axios.request(options)
    .then(res => {
      return res.data.results;
    }).catch(err => Promise.reject(err));
}

export function getMovieDetails(context, movieId) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/'+movieId,
    params: {
      api_key: TMDB_API_KEY,
      language: useI18n().locale,
      append_to_response: 'videos'
    }
  }

  return axios.request(options)
    .then(res => {
      return res.data;
    }).catch(err => Promise.reject(err));
}
