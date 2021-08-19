<template>
  <div class="col-6">
    <q-card
      class="row full-height cursor-pointer"
      bordered
      dark
      @click="$router.push('/details/movie/'+movie.id)"
    >
      <div class="col-grow overflow-hidden">
        <q-img
          :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
          width="150px"
          height="100%"
        />
      </div>

      <q-card-section class="col q-my-auto">
        <div class="text-h4">{{ movie.title }}</div>
        <div class="text-subtitle2 text-light q-pb-md">{{ movie.release_date }}</div>
        <div class="text-body1 ellipsis-2-lines">{{ movie.overview }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'MovieListItem',
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
