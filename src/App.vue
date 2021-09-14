<template>
  <router-view />
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
