<template>
  <q-btn class="text-bold" :label="locale" flat>
    <q-menu
      :offset="[0, 10]"
      transition-show="scale"
      transition-hide="fade"
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
</template>

<script>
import { useI18n } from "vue-i18n";

const localeOptions = [
  'en',
  'de'
];

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      localeOptions: localeOptions
    }
  }
}
</script>
