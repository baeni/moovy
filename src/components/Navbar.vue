<template>
  <q-header class="flex">
    <q-toolbar class="container">
      <q-btn class="text-h3" label="moovy" flat stretch no-caps @click="$router.push('/')" />

      <q-space />

      <search-form class="q-ml-md" dense />

      <q-separator class="q-mx-md" vertical inset dark />

      <user-profile v-if="user" :user="user" />
      <q-btn v-else class="text-bold" :label="$t('authPage.name')" flat rounded @click="$router.push('/auth')" />
    </q-toolbar>
  </q-header>
</template>

<script>
import SearchForm from 'components/SearchForm';
import UserProfile from 'components/UserProfile';

export default {
  name: 'Navbar',
  components: {
    SearchForm,
    UserProfile
  },
  computed: {
    user() {
      return this.$store.getters['AuthModule/getUser']
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  min-height: 75px;
  background: transparentize($light, .9);
  backdrop-filter: blur(15px);
}
</style>
