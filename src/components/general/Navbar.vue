<template>
  <q-header>
    <q-toolbar class="container">
      <q-btn class="text-h3" label="moovy" flat @click="$router.push('/')" />

      <q-space />

      <q-btn
        class="text-bold"
        :label="$t('indexPage.home.name')"
        flat
        @click="$router.push('/')"
      />

      <search-form class="q-pl-md" />
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
  background: transparentize($dark, .65);
  backdrop-filter: blur(15px);
}
</style>
