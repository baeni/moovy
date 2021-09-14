<template>
  <q-page>
    <!-- landing -->
    <section class="flex flex-center" style="height: 35vh;">
      <div class="container text-center">
        <div class="text-h1 text-gradient">{{ $t('indexPage.heading') }}</div>
        <div class="text-h3 text-light">{{ $t('indexPage.subHeading') }}</div>
        <search-form class="q-mt-xl" />
      </div>
    </section>

    <q-separator dark inset />

    <!-- popular movies -->
    <section>
      <div class="container">
        <movie-list
          :title="$t('indexPage.popularMovies')"
          :movies="popularMovies"
          expandable-scroller
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
          expandable-scroller
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
