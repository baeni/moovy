<template>
  <div class="text-center q-gutter-x-sm">
    <!-- Google -->
    <q-btn
      class="col text-bold text-lightest bg-light"
      label="Google"
      icon="fab fa-google"
      flat
      no-caps
      fab-mini
      @click="this.$store.dispatch('AuthModule/signInGoogle')"
    />
  </div>
</template>

<script>
export default {
  name: 'AuthList'
}
</script>
