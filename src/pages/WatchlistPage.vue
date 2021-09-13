<template>
  <q-page>
    <section>
      <div class="container">
        <movie-list
          :title="$t('watchlistPage.name')"
          :movies="usersWatchlist"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import MovieList from 'components/movie/MovieList';

export default {
  name: 'WatchlistPage',
  components: {
    MovieList
  },
  computed: {
    usersWatchlist() {
      return this.$store.getters['DbModule/getUsersWatchlist']
    }
  }
}
</script>
