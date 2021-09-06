<template>
  <q-btn round flat>
    <q-avatar v-if="user.photoURL !== null"><q-img :src="user.photoURL" referrerpolicy="no-referrer" /></q-avatar>
    <q-avatar v-else class="text-dark text-bold bg-lightest" round>{{ user.email.slice(0, 2) }}</q-avatar>
    <q-menu class="bg-light q-py-sm" anchor="bottom right" self="top right" :offset="[0, 10]" dark>
      <q-list style="min-width: 150px;" dense>
        <q-item v-if="user.displayName !== null" class="text-bold">{{ $t('general.profileMenu', { username: user.displayName }) }}</q-item>
        <q-item v-else class="text-bold">{{ user.email }}</q-item>

        <q-separator class="q-my-xs" />

        <!--<q-item v-close-popup clickable @click="$router.push('/your-list')">-->
        <q-item title="Currently being developed" disabled>
          <q-item-section>{{ $t('general.profileMenuAccount') }}</q-item-section>
        </q-item>

        <q-item v-close-popup clickable @click="$router.push('/my-list')">
          <q-item-section>{{ $t('general.profileMenuList') }}</q-item-section>
        </q-item>

        <q-separator class="q-my-xs" />

        <!--<q-item v-close-popup clickable>-->
        <q-item title="Temporarily not available" disabled>
          <q-item-section>{{ $t('general.profileMenuLanguage') }}</q-item-section>
        </q-item>
        <q-item v-close-popup clickable @click="$store.dispatch('AuthModule/signOutUser')">
          <q-item-section>{{ $t('general.profileMenuSignOut') }}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>

    <!--
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
    -->
  </q-btn>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      required: true
    }
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
