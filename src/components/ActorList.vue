<template>
  <div class="text-h2 text-lightest q-pb-md">{{ title }}</div>
  <div class="row q-col-gutter-md">
    <actor-list-item v-for="(actor, i) in actors" :key="i" :actor="actor" />
  </div>
</template>

<script>
import ActorListItem from "components/ActorListItem";

export default {
  name: 'ActorList',
  components: {
    ActorListItem
  },
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
