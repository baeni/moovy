<template>
  <div class="text-h2 text-lightest q-pb-md">{{ $t('detailsPage.trailers') }}</div>
  <div class="row q-col-gutter-md">
    <trailer-list-item v-for="(trailer, i) in trailers" :key="i" :trailer="trailer" />
  </div>
</template>

<script>
import TrailerListItem from "components/TrailerListItem";

export default {
  name: 'TrailerList',
  components: {
    TrailerListItem
  },
  props: {
    trailers: {
      type: Array,
      required: true
    }
  }
}
</script>
