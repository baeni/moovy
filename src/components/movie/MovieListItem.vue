<template>
  <div class="col-3" v-bind:class="{ 'col-6': $q.platform.is.mobile }">
    <q-card
      class="full-height"
      dark
    >
      <div class="overflow-hidden">
        <q-img
          class="cursor-pointer"
          :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
          :ratio="2/3"
          no-native-menu
          @click="$router.push('/details/'+movie.id)"
        >
          <template v-slot:error>
            <div class="text-h4 text-center bg-transparent absolute-full flex flex-center">No image available</div>
          </template>
        </q-img>
      </div>

      <q-card-section>
        <div class="text-h4 ellipsis-2-lines">{{ movie.title }}</div>
        <div class="text-subtitle2 text-light">{{ new Date(movie.release_date).toLocaleDateString() }}</div>
        <movie-genre-chips :movie="movie" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import MovieGenreChips from 'components/movie/MovieGenreChips';

export default {
  name: 'MovieListItem',
  components: {
    MovieGenreChips
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#movie-list-item {
  @media (max-width: $breakpoint-sm) {
    width: 95vw;
  }
}

.q-card {
  // transition and transform in
  &:hover .q-img {
    transition: transform 1s ease-in-out;
    transform: scale(1.05);
  }
}

.q-img {
  // transition out
  transition: transform .175s ease-in-out;
}
</style>
