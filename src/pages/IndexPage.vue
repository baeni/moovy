<template>
  <q-page>
    <section>
      <div class="container">
        <div class="text-h1 text-center text-gradient">{{ $t('indexPage.heading') }}</div>
        <div class="text-h2 text-center text-light">{{ $t('indexPage.subHeading') }}</div>
        <search-form class="q-pt-lg" />
      </div>
    </section>

    <q-separator dark inset />

    <section>
      <div class="container">
        <movies-area :title="$t('indexPage.nowPlayingMovies')" :movies="$store.getters['SearchModule/getNowPlayingMovies']" />
      </div>
    </section>

    <q-separator dark inset />

    <section>
      <div class="container">
        <movies-area :title="$t('indexPage.trendyMoviesDay')" :movies="$store.getters['SearchModule/getTrendyMoviesDay']" />
      </div>
    </section>

    <q-separator dark inset />

    <section>
      <div class="container">
        <movies-area :title="$t('indexPage.trendyMoviesWeek')" :movies="$store.getters['SearchModule/getTrendyMoviesWeek']" />
      </div>
    </section>

    <q-separator dark inset />

    <section>
      <div class="container">
        <actors-area :title="$t('indexPage.popularActors')" :actors="$store.getters['SearchModule/getPopularActors']" />
      </div>
    </section>
  </q-page>
</template>

<script>
import SearchForm from "components/general/SearchForm";
import MoviesArea from "components/index_page/MoviesArea";
import ActorsArea from "components/index_page/ActorsArea";

export default {
  name: 'IndexPage',
  components: {
    SearchForm,
    MoviesArea,
    ActorsArea
  },
  mounted() {
    this.$store.dispatch('SearchModule/fetchNowPlayingMovies');
    this.$store.dispatch('SearchModule/fetchTrendyMovies', "Day");
    this.$store.dispatch('SearchModule/fetchTrendyMovies', "Week");
    this.$store.dispatch('SearchModule/fetchPopularActors');
  }
}
</script>
