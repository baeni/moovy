<template>
  <div class="text-center q-gutter-x-sm">
    <!-- Google -->
    <q-btn
      class="col text-bold text-lightest bg-light"
      label="Google"
      icon="fab fa-google"
      flat
      no-caps
      rounded
      @click="this.$store.dispatch('AuthModule/signInGoogle')"
    />

    <!-- GitHub -->
    <q-btn
      class="col text-bold text-lightest bg-light"
      label="Github"
      icon="fab fa-github"
      flat
      no-caps
      rounded
      @click="this.$store.dispatch('AuthModule/signInGithub')"
    />
  </div>
</template>

<script>
export default {
  name: 'AuthList'
}
</script>
