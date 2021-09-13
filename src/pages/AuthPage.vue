<template>
  <q-page class="absolute-top">
    <!-- landing -->
    <section class="flex flex-center window-height">
      <div class="container">
        <div class="text-h1 text-center text-gradient">{{ $t('authPage.heading') }}</div>
        <div class="text-h3 text-center text-light">{{ $t('authPage.subHeading') }}</div>
        <auth-list class="q-pt-lg" />
      </div>
    </section>
  </q-page>
</template>

<script>
import AuthList from 'components/auth/AuthList';

export default {
  name: 'AuthPage',
  components: {
    AuthList
  }
}
</script>
