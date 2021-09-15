<template>
  <q-btn round flat>
    <q-avatar v-if="usersPhoto !== null"><q-img :src="usersPhoto" referrerpolicy="no-referrer" /></q-avatar>
    <q-avatar v-else class="text-dark text-bold bg-lightest" round>{{ usersInitials }}</q-avatar>
    <q-menu class="bg-light q-py-sm" anchor="bottom right" self="top right" :offset="[0, 10]" transition-show="scale" transition-hide="fade" dark>
      <q-list style="min-width: 150px;" dense>
        <q-item v-if="usersName !== null" class="text-bold">{{ $t('general.profileMenu', { username: usersName }) }}</q-item>
        <q-item v-else class="text-bold">{{ usersEmail }}</q-item>

        <q-separator class="q-my-xs" />

        <q-item v-close-popup clickable @click="$router.push('/watchlist')">
          <q-item-section>{{ $t('general.profileMenuWatchlist') }}</q-item-section>
        </q-item>

        <q-item v-close-popup clickable @click="$router.push('/favorites')">
          <q-item-section>{{ $t('general.profileMenuFavorites') }}</q-item-section>
        </q-item>

        <q-separator class="q-my-xs" />

        <q-item v-close-popup clickable @click="$store.dispatch('AuthModule/signOutUser')">
          <q-item-section>{{ $t('general.profileMenuSignOut') }}</q-item-section>
          <q-item-section avatar><q-icon name="logout" size="16px" /></q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      usersPhoto: this.user.photoURL,
      usersEmail: this.user.email,
      usersName: this.user.displayName
    }
  },
  computed: {
    usersInitials() {
      return this.usersEmail.slice(0, 2);
    }
  }
}
</script>
