<template>
  <q-form class="row" @submit="searchMovies(searchQuery)">
    <q-input class="full-width" v-model="searchQuery" :placeholder="$t('general.formSearch')" dark dense standout>
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
  </q-form>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      searchQuery: ""
    }
  },
  methods: {
    searchMovies(searchQuery) {
      this.$store.dispatch('SearchModule/searchMovies', searchQuery);
    }
  }
}
</script>
