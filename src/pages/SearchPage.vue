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
      discoverQuery: this.$route.params.discoverQuery,
      movies: []
    }
  },
  async mounted() {
    if(this.searchQuery) {
      await this.$store.dispatch('SearchModule/searchMovie', this.searchQuery)
        .then(response => this.movies = response)
        .catch(err => Promise.reject(err));
    } else if(this.discoverQuery) {
      switch(this.discoverQuery) {
        case 'now-playing':
          this.movies = await this.$store.getters["SearchModule/getNowPlayingMovies"];
          break;

        case 'trending-day':
          this.movies = await this.$store.getters["SearchModule/getTrendingMoviesDay"];
          break;

        case 'trending-week':
          this.movies = await this.$store.getters["SearchModule/getTrendingMoviesWeek"];
          break;

      }
    }
  },
  created() {
    if(this.discoverQuery) {
      this.$store.dispatch('SearchModule/fetchNowPlayingMovies');
      this.$store.dispatch('SearchModule/fetchTrendingMovies', "Day");
      this.$store.dispatch('SearchModule/fetchTrendingMovies', "Week");
      this.$store.dispatch('SearchModule/fetchPopularActors');
    }
  }
}
</script>
