<template>
  <q-card class="q-mx-auto text-center" style="width: 400px;" dark bordered>
    <q-card-section>
      <div class="text-h3 text-uppercase text-light q-pb-md">{{ $t('authPage.heading') }}</div>
      <div class="row q-col-gutter-md">
        <div class="col">
          <q-btn
            class="full-width text-bold text-lightest bg-light"
            label="Google"
            icon="fab fa-google"
            flat
            no-caps
            @click="this.$store.dispatch('AuthModule/googleSignInUser')"
          />
        </div>
      </div>
    </q-card-section>

    <div class="text-h5 text-uppercase text-light">or</div>

    <q-card-section>
      <q-form
        class="q-gutter-md"
        @submit="onSubmit()"
      >
        <q-input
          v-model="email"
          type="email"
          :placeholder="$t('authPage.formEmail')"
          dark
          standout
        />

        <q-input
          v-model="password"
          type="password"
          :placeholder="$t('authPage.formPassword')"
          dark
          standout
        />

        <q-input
          v-if="newUser"
          v-model="confirmedPassword"
          type="password"
          :placeholder="$t('authPage.formPasswordConfirm')"
          dark
          standout
        />

        <q-btn v-if="newUser" class="text-bold bg-accent" type="submit" :label="$t('authPage.formSignUp')" flat rounded />
        <q-btn v-else class="text-bold bg-accent" type="submit" :label="$t('authPage.formSignIn')" flat rounded />

        <div v-if="newUser" class="text-caption cursor-pointer" @click="newUser = !newUser">Already a member? Sign In</div>
        <div v-else class="text-caption cursor-pointer" @click="newUser = !newUser">Not a member yet? Sign Up</div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'AuthForm',
  data() {
    return {
      newUser: false,
      email: '',
      password: '',
      confirmedPassword: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.newUser) this.$store.dispatch('AuthModule/signUpUser', {
        email: this.email,
        password: this.password
      });
      else this.$store.dispatch('AuthModule/signInUser', {
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>
