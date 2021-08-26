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

      <q-btn
        class="text-bold"
        :label="locale"
        flat
      >
        <q-menu
          :offset="[0, 10]"
          transition-show="scale"
          transition-hide="scale"
          dark
        >
          <q-list>
            <q-item
              v-for="(localeOption, i) in localeOptions"
              :key="i"
              clickable
              dense
              v-close-popup
              @click="locale = localeOption"
            >
              <q-item-section
                class="text-uppercase"
                v-bind:class="{'text-bold text-underline':locale === localeOption}"
              >
                {{ localeOption }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
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
        "en",
        "de"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  min-height: 75px;
  background: transparentize($light, .9);
  backdrop-filter: blur(15px);
}
</style>
