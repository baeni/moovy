<template>
  <q-layout view="lHr lpr lfr">
    <navbar />

    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>

    <footr />
  </q-layout>
</template>

<script>
import Navbar from 'components/navbar/Navbar';
import Footr from 'components/Footer';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Footr
  }
}
</script>
