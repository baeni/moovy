<template>
  <q-form @submit="search()">
    <q-input
      v-model="query"
      :model-value="query"
      :placeholder="$t('general.formSearch')"
      :bottom-slots="!dense"
      :dense="dense"
      :rounded="!dense"
      clear-icon="close"
      clearable
      dark
      standout
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:hint v-if="!dense">
        {{ $t('general.formSearchHint') }}
      </template>
    </q-input>
  </q-form>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    dense: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      if (!this.query) return;

      this.$router.push('/search/'+this.query);
    }
  }
}
</script>
