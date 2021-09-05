<template>
  <div class="col-4">
    <q-card
      class="row full-height"
      bordered
      dark
    >
      <div class="col-grow overflow-hidden">
        <q-img
          :src="'https://image.tmdb.org/t/p/w500'+actor.profile_path"
          width="75px"
          height="100%"
        />
      </div>

      <q-card-section class="col q-my-auto">
        <div class="text-h4 ellipsis">{{ actor.name }}</div>
        <q-chip
          v-for="(movie, i) in actor.known_for.filter(el => el.title)"
          :key="i"
          :label="movie.title"
          size="12px"
          color="darkest"
          text-color="lightest"
          clickable
          @click="$router.push('/details/movie/'+movie.id)"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ActorListItem',
  props: {
    actor: {
      type: Object,
      required: true
    }
  }
}
</script>
