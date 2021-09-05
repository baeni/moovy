<template>
  <q-page>
    <!-- landing -->
    <section>
      <div class="container">
        <auth-form />
      </div>
    </section>
  </q-page>
</template>

<script>
import AuthForm from "components/auth/AuthForm";

export default {
  name: 'AuthPage',
  components: {
    AuthForm
  }
}
</script>
