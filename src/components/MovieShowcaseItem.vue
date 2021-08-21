<template>
  <div class="col-3">
    <q-card
      class="full-height"
      bordered
      dark
    >
      <div class="overflow-hidden">
        <q-img
          class="cursor-pointer"
          :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
          @click="$router.push('/details/movie/'+movie.id)"
        />
      </div>

      <q-card-section>
        <div class="text-h4 ellipsis-2-lines">{{ movie.title }}</div>
        <div class="text-subtitle2 text-light">{{ movie.release_date }}</div>
        <q-chip
          v-for="(genreId, i) in movie.genre_ids"
          :key="i"
          :label="genreId"
          size="12px"
          color="darkest"
          text-color="lightest"
          clickable
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'MovieShowcaseItem',
  props: {
    movie: {
      type: Object,
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
