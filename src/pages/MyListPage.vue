<template>
  <q-page v-if="dataReady">
    <section>
      <div class="container">
        <movie-list
          :title="$t('myListPage.name')"
          :movies="movies"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import MovieList from 'components/movie/MovieList';

export default {
  name: 'MyListPage',
  components: {
    MovieList
  },
  data() {
    return {
      dataReady: false,
      movies: []
    }
  },
  created() {
    this.$store.dispatch('DbModule/getUsersList')
      .then(res => {
        this.movies = res;
        this.dataReady = true;
      }).catch(err => Promise.reject(err));
  }
}
</script>
