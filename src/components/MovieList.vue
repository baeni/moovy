<template>
  <div class="text-h2 text-lightest q-pb-md">{{ title }}</div>
  <div class="row q-col-gutter-md">
    <movie-list-item v-for="(movie, i) in movies" :key="i" :movie="movie" />
  </div>
</template>

<script>
import MovieListItem from "components/MovieListItem";

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
    }
  }
}
</script>

<style lang="scss" scoped>
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
