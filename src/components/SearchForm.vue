<template>
  <q-form class="row" @submit="this.$router.push('/search/'+query);">
    <q-input
      class="full-width"
      v-model="query"
      :model-value="query"
      :placeholder="$t('general.formSearch')"
      :bottom-slots="!dense"
      clear-icon="close"
      clearable
      dark
      dense
      standout
    >
      <template v-slot:append>
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
      query: ""
    }
  }
}
</script>
