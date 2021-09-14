<template>
  <q-layout view="lHh Lpr lFf">
    <navbar />

    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>

    <!-- TODO: Footer -->
  </q-layout>
</template>

<script>
import Navbar from "components/Navbar";

export default {
  name: 'MainLayout',
  components: {
    Navbar
  }
}
</script>
