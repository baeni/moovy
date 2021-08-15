<template>
  <q-page>
    <section>
      <div class="container">
        <movie-item
          v-for="(movie, i) in $store.getters['SearchModule/getDisplayedMovies']"
          :key="i"
          :title="movie.title"
          :date="movie.release_date"
          :description="movie.overview"
          :thumbnail="movie.poster_path"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import MovieItem from "components/movie_page/MovieItem";

export default {
  name: 'MoviePage',
  components: {
    MovieItem
  }
}
</script>
