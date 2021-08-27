<template>
  <router-view :key="$route.fullPath" />
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('SearchModule/fetchPopularMovies');
    this.$store.dispatch('SearchModule/fetchUpcomingMovies');
  }
}
</script>
