<template>
  <q-card class="row col-12 q-my-md shadow-15" dark bordered>
    <q-img class="col-1" fit="contain" :src="'https://image.tmdb.org/t/p/w500/'+thumbnail" />

    <div class="col-11 q-px-md q-my-auto">
      <div class="text-h2 ellipsis">{{ title }}</div>
      <div class="text-body2 q-pb-sm">{{ date }}</div>
      <div class="text-body1 ellipsis-2-lines">{{ description }}</div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'MovieDisplay',
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>
