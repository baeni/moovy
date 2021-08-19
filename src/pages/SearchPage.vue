<template>
  <q-page>
    <section>
      <div class="container">
        <movie-list :title="$t('searchPage.results', { searchQuery })" :movies="movies" />
      </div>
    </section>
  </q-page>
</template>

<script>
import MovieList from "components/MovieList";

export default {
  name: 'SearchPage',
  components: {
    MovieList
  },
  data() {
    return {
      searchQuery: this.$route.params.searchQuery,
      movies: []
    }
  },
  async mounted() {
    await this.$store.dispatch('SearchModule/searchMovie', this.searchQuery)
      .then(response => this. movies = response)
      .catch(err => Promise.reject(err));
  }
}
</script>
