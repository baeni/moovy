<template>
  <q-page>
    <section>
      <div class="container">
        <movie-list
          :title="$t('favoritesPage.name')"
          :movies="usersFavorites"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import MovieList from 'components/movie/MovieList';

export default {
  name: 'FavoritesPage',
  components: {
    MovieList
  },
  computed: {
    usersFavorites() {
      return this.$store.getters['DbModule/getUsersFavorites']
    }
  }
}
</script>
