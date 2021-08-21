<template>
  <div class="col-3">
    <q-card
      class="full-height cursor-pointer"
      bordered
      dark
      @click="$router.push('/discover/movie/'+discoverQuery)"
    >
      <div class="row full-height overflow-hidden">
        <div id="overlay" class="text-h3 absolute-full flex flex-center">{{ $t('indexPage.showcaseSummary') }}</div>
        <q-img
          v-for="(movie, i) in movies"
          :key="i"
          class="col-4"
          :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
        />
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'MovieShowcaseSummaryItem',
  props: {
    movies: {
      type: Array,
      required: true
    },
    discoverQuery: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#overlay {
  background: transparentize($dark, .175);
  z-index: 1
}

.q-card {
  &:hover .q-img {
    transition: transform 1s ease-in-out;
    transform: scale(1.05);
  }
}

.q-img {
  transition: transform .25s ease-in-out;
}
</style>
