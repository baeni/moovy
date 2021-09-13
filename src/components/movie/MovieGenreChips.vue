<template>
  <q-chip
    v-for="genre in movie.genres"
    :key="genre.id"
    :label="genre.name"
    size="12px"
    color="lightest"
    text-color="black"
    square
  />
</template>

<script>
export default {
  name: 'MovieGenreChips',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>
