<template>
  <div class="col-6">
    <q-card
      class="full-height"
      bordered
      dark
    >
      <div class="overflow-hidden">
        <q-video
          :src="'https://www.youtube-nocookie.com/embed/'+trailer.key+'?start=0'"
          :ratio="1.85"
        />
      </div>

      <q-card-section>
        <div class="text-subtitle2 text-light">{{ trailer.published_at }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'TrailerListItem',
  props: {
    trailer: {
      type: Object,
      required: true
    }
  }
}
</script>
