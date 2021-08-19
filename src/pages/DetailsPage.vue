<template>
  <q-page v-if="dataReady">
    <section class="relative-position">
      <q-img id="background" class="absolute-full shadow-5" :src="'https://image.tmdb.org/t/p/w1280'+movie.backdrop_path" />
      <div class="container row q-col-gutter-x-lg">
        <q-img class="col-3 rounded-borders" :src="'https://www.themoviedb.org/t/p/w500/'+movie.poster_path" fit="fill" />

        <div class="col-9 q-my-auto">
          <div class="text-h2 text-white">{{ movie.title }}</div>
          <div class="text-subtitle2 text-lightest">{{ movie.release_date }} • {{ movie.runtime }}min</div>

          <div class="text-body1 text-white q-py-md">{{ movie.overview }}</div>

          <q-btn class="text-subtitle1 text-white bg-accent" :label="$t('detailsPage.homepage')" :href="movie.homepage" type="a" target="_blank" dark flat no-caps />
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <trailer-list :trailers="trailers" />
      </div>
    </section>
  </q-page>
</template>

<script>
import TrailerList from "components/TrailerList";

export default {
  name: 'DetailsPage',
  components: {
    TrailerList
  },
  data() {
    return {
      dataReady: false,
      movie: {},
      trailers: {}
    }
  },
  async mounted() {
    await this.$store.dispatch('SearchModule/getMovieDetails', this.$route.params.id)
      .then(response => {
        this.movie = response;
        this.trailers = this.movie.videos.results.filter(el => el.site === 'YouTube');
        this.dataReady = true;
      })
      .catch(err => Promise.reject(err));
  }
}
</script>

<style lang="scss" scoped>
#background {
  z-index: -1;
  filter: opacity(.075);
}
</style>
