import axios from "axios";

export function fetchTrendy(context) {
  axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=f69ebea429f8ce30593ffaeed4c3e712')
    .then(response => {
      context.commit('setDisplayedMovies', response.data.results);
    })
    .catch(err => Promise.reject(err));
}

export function searchGenre(context, genreId) {
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f69ebea429f8ce30593ffaeed4c3e712&with_genres=${genreId}`)
    .then(response => {
      context.commit('setDisplayedMovies', response.data.results);
      this.$router.push('/movie');
    })
    .catch(err => Promise.reject(err));
}

export function searchMovies(context, searchQuery) {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f69ebea429f8ce30593ffaeed4c3e712&query=${searchQuery}`)
    .then(response => {
      context.commit('setDisplayedMovies', response.data.results);
      this.$router.push('/movie');
    })
    .catch(err => Promise.reject(err));
}
