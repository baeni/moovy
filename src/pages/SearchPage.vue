<template>
  <q-page>
    <section>
      <div class="container">
        <movie-list
          :title="$t('searchPage.results', { query })"
          :movies="movies"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import MovieList from 'components/MovieList';

export default {
  name: 'SearchPage',
  components: {
    MovieList
  },
  props: {
    query: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      movies: []
    }
  },
  created() {
    this.$store.dispatch('SearchModule/searchMovie', this.query)
      .then(res => {
        this.movies = res
      }).catch(err => Promise.reject(err));
  }
}
</script>
