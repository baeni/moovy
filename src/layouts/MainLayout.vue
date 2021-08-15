<template>
  <q-layout view="lHh Lpr lFf">
    <navbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- TODO: Footer -->
  </q-layout>
</template>

<script>
import Navbar from "components/general/Navbar";

export default {
  name: 'MainLayout',
  components: {
    Navbar
  }
}
</script>
