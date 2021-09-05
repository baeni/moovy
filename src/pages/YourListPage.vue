<template>
  <q-page>
    <section>
      <div class="container">
        <q-btn :label="$store.dispatch('StoreModule/getList')" />
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'YourListPage'
}
</script>
