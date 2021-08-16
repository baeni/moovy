<template>
  <div class="text-h2 text-light">{{ title }}</div>
  <div class="row q-col-gutter-md">
    <div v-for="(actor, i) in actors" :key="i" class="col-4">
      <q-card class="full-height" flat bordered>
        <q-card-section class="row" horizontal>
          <q-img class="col-4" :src="'https://image.tmdb.org/t/p/w500'+actor.profile_path" />

          <q-card-section class="col-8">
            <div class="text-h3 text-gradient">{{ actor.name }}</div>
            <q-chip
              v-for="(movie, i) in actor.known_for"
              :key="i" :label="movie.title"
              size="12px"
              clickable
            />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActorsArea',
  props: {
    title: {
      type: String,
      required: true
    },
    actors: {
      type: Array,
      required: true
    }
  }
}
</script>
