<template>
  <q-page>
    <!-- landing -->
    <section class="flex flex-center" style="height: 35vh;">
      <div class="container">
        <div class="text-h1 text-center text-gradient">{{ $t('indexPage.heading') }}</div>
        <div class="text-h3 text-center text-light">{{ $t('indexPage.subHeading') }}</div>
        <search-form class="q-pt-lg" />
      </div>
    </section>

    <q-separator dark inset />

    <!-- popular movies -->
    <section>
      <div class="container">
        <movie-list
          :title="$t('indexPage.popularMovies')"
          :movies="popularMovies"
          expandable
        />
      </div>
    </section>

    <q-separator dark inset />

    <!-- upcoming movies -->
    <section>
      <div class="container">
        <movie-list
          :title="$t('indexPage.upcomingMovies')"
          :movies="upcomingMovies"
          expandable
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import SearchForm from 'components/SearchForm';
import MovieList from 'components/movie/MovieList';

export default {
  name: 'IndexPage',
  components: {
    SearchForm,
    MovieList
  },
  computed: {
    popularMovies() {
      return this.$store.getters['SearchModule/getPopularMovies']
    },
    upcomingMovies() {
      return this.$store.getters['SearchModule/getUpcomingMovies']
    }
  }
}
</script>
