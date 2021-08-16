<template>
  <div class="text-h2 text-light">{{ title }}</div>
  <q-scroll-area
    style="height: 425px;"
    dark
  >
    <div class="row q-gutter-x-lg q-py-md no-wrap">
      <a v-for="(movie, i) in movies" :key="i" style="width: 225px">
        <q-img
          class="rounded-borders shadow-5"
          :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
        >
          <div class="absolute-top text-h4 text-center">
            {{ i + 1 }}. {{ movie.title }}
          </div>
        </q-img>
        <q-scroll-area
          style="height: 50px;"
          dark
        >
          <div class="row no-wrap">
            <q-chip
              v-for="(genreId, i) in movie.genre_ids"
              :key="i"
              :label="genreId"
              size="12px"
              clickabkle
            />
          </div>
        </q-scroll-area>
      </a>
    </div>
  </q-scroll-area>
</template>

<script>
export default {
  name: 'MoviesArea',
  props: {
    title: {
      type: String,
      required: true
    },
    movies: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.$store.dispatch('SearchModule/fetchAllGenres');
  }
}
</script>

<style lang="scss" scoped>
a {
  transition: transform 400ms cubic-bezier(.47,1.64,.41,.8);

  &:hover {
    transform: translateY(-10px);
  }
}
</style>
