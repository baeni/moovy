<template>
  <q-footer class="flex">
    <q-toolbar class="container">
      <q-space />

      <router-link
        class="text-bold text-lightest"
        style="text-decoration: none;"
        to="/terms-of-service"
      >
        Terms of service
      </router-link>

      <q-space />

      <router-link
        class="text-bold text-lightest"
        style="text-decoration: none;"
        to="/privacy-policy"
      >
        Privacy policy
      </router-link>

      <q-space />

      <router-link
        class="text-bold text-lightest"
        style="text-decoration: none;"
        to="/imprint"
      >
        Imprint
      </router-link>

      <q-space />

      <div class="text-bold text-light">&copy; 2021 moovy</div>

      <q-space />
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  min-height: 75px;
  background: transparentize($light, .9);
  backdrop-filter: blur(25px);
}
</style>
