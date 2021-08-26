<template>
  <div class="text-h2 text-lightest q-pb-md">
    {{ title }}
    <q-btn
      class="text-bold text-accent float-right q-px-md"
      :label="$t('indexPage.more')"
      icon-right="navigate_next"
      dense
      rounded
      flat
      @click="$router.push('/discover/movie/'+discoverQuery)"
    />
  </div>
  <div class="row q-col-gutter-md">
    <movie-showcase-item
      v-for="movie in movies.slice(0, 4)"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieShowcaseItem from "components/MovieShowcaseItem";

export default {
  name: 'MovieShowcase',
  components: {
    MovieShowcaseItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
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
