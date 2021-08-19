<template>
  <div class="text-h2 text-lightest q-pb-md">{{ $t('detailsPage.trailers') }}</div>
  <div class="row q-col-gutter-md">
    <trailer-item v-for="(trailer, i) in trailers" :key="i" :trailer="trailer" />
  </div>
</template>

<script>
import TrailerItem from "components/TrailerListItem";

export default {
  name: 'TrailerList',
  components: {
    TrailerItem
  },
  props: {
    trailers: {
      type: Array,
      required: true
    }
  }
}
</script>
