<template>
  <div class="text-h2 text-lightest q-pb-md">{{ title }}</div>
  <q-scroll-area
    style="height: 575px;"
    dark
  >
    <div class="row q-col-gutter-x-md no-wrap">
      <movie-item v-for="(movie, i) in movies" :key="i" :movie="movie" />
    </div>
  </q-scroll-area>
</template>

<script>
import MovieItem from "components/MovieShowcaseItem";

export default {
  name: 'MovieShowcase',
  components: {
    MovieItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>
