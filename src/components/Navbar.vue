<template>
  <q-header class="flex">
    <q-toolbar class="container">
      <q-btn class="text-h3" label="moovy" flat @click="$router.push('/')" no-caps />

      <q-space />

      <search-form dense />

      <q-separator
        class="q-mx-md"
        vertical
        inset
        dark
      />

      <q-select
        v-model="locale"
        :options="localeOptions"
        :model-value="locale"
        transition-show="jump-down"
        transition-hide="jump-up"
        menu-self="center right"
        standout
        flat
        dense
        options-dense
        options-cover
        hide-dropdown-icon
        emit-value
        map-options
        dark
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import { useI18n } from 'vue-i18n';

import SearchForm from "components/SearchForm";

export default {
  name: 'Navbar',
  components: {
    SearchForm
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      localeOptions: [
        { value: 'en', label: 'EN' },
        { value: 'de', label: 'DE' }
      ]
    }
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
