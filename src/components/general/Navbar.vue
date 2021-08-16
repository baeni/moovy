<template>
  <q-header class="flex">
    <q-toolbar class="container">
      <q-btn class="text-h3" label="moovy" flat @click="$router.push('/')" no-caps />

      <q-space />

      <search-form dense />
    </q-toolbar>
  </q-header>
</template>

<script>
import SearchForm from "components/general/SearchForm";

export default {
  name: 'Navbar',
  components: {
    SearchForm
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 75px;
  background: transparentize($light, .9);
  backdrop-filter: blur(15px);
}
</style>
