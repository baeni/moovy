<template>
  <div class="text-h2 text-lightest q-pb-md">{{ title }}</div>
  <div class="row q-col-gutter-md">
    <movie-showcase-item
      v-for="(movie, i) in !dense ? movies : movies.slice(0, 7)"
      :key="i"
      :movie="movie"
    />
    <movie-showcase-summary-item
      v-if="dense"
      :movies="movies.slice(7, 16)"
      :discover-query="discoverQuery"
    />
  </div>
</template>

<script>
import MovieShowcaseItem from "components/MovieShowcaseItem";
import MovieShowcaseSummaryItem from "components/MovieShowcaseSummaryItem";

export default {
  name: 'MovieShowcase',
  components: {
    MovieShowcaseItem,
    MovieShowcaseSummaryItem
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
    },
    dense: {
      type: Boolean,
      default: false
    }
  }
}
</script>
