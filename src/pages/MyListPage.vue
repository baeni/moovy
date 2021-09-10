<template>
  <q-page>
    <section>
      <div class="container">
        <movie-list
          :title="$t('myListPage.name')"
          :movies="$store.getters['DbModule/getUsersMyList']"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import MovieList from 'components/movie/MovieList';

export default {
  name: 'MyListPage',
  components: {
    MovieList
  }
}
</script>
