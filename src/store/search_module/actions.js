import axios from "axios";
import { useI18n } from 'vue-i18n';

const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY;

export function fetchNowPlayingMovies(context) {
  return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=${useI18n().locale}`)
    .then(response => {
      context.commit(`setNowPlayingMovies`, response.data.results);
    })
    .catch(err => Promise.reject(err));
}

export function fetchTrendingMovies(context, timeWindow) {
  return axios.get(`https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${TMDB_API_KEY}&language=${useI18n().locale}`)
    .then(response => {
      context.commit(`setTrendingMovies${timeWindow}`, response.data.results);
    })
    .catch(err => Promise.reject(err));
}

export function fetchPopularActors(context) {
  return axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${TMDB_API_KEY}&language=${useI18n().locale}`)
    .then(response => {
      context.commit(`setPopularActors`, response.data.results);
    })
    .catch(err => Promise.reject(err));
}

export function searchMovie(context, searchQuery) {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${searchQuery}&language=${useI18n().locale}`)
    .then(response => {
      return response.data.results;
    })
    .catch(err => Promise.reject(err));
}

export function getMovieDetails(context, movieId) {
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&api_key=${TMDB_API_KEY}&language=${useI18n().locale}`)
    .then(response => {
      return response.data;
    })
    .catch(err => Promise.reject(err));
}
