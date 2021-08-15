<template>
  <q-chip v-for="(genre, i) in suggestedGenres" :key="i" :label="genre.name" color="grey-9" text-color="grey-4" square clickable @click="searchGenre(genre.id)" />
</template>

<script>
import axios from "axios";

export default {
  name: 'SearchSuggestion',
  data() {
    return {
      suggestedGenres: []
    }
  },
  methods: {
    searchGenre(genreId) {
      this.$store.dispatch('SearchModule/searchGenre', genreId);
    }
  },
  mounted() {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=f69ebea429f8ce30593ffaeed4c3e712')
      .then(response => {
        this.suggestedGenres = response.data.genres;
      })
      .catch(err => Promise.reject(err));
  }
}
</script>
