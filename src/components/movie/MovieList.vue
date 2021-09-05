<template>
  <div class="text-h3 text-uppercase text-light q-pb-md">{{ title }}</div>
  <div class="row q-col-gutter-md" v-bind:class="{ 'no-wrap overflow-auto q-pb-md': scroller }">
    <movie-list-item
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieListItem from "components/movie/MovieListItem";

export default {
  name: 'MovieList',
  components: {
    MovieListItem
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
    scroller: {
      type: Boolean,
      default: false
    }
  }
}
</script>>
