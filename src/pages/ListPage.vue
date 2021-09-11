<template>
  <q-page>
    <section>
      <div class="container">
        <movie-list
          :title="$t('myListPage.name')"
          :movies="usersMyList"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import MovieList from 'components/movie/MovieList';

export default {
  name: 'ListPage',
  components: {
    MovieList
  },
  data() {
    return {
      usersMyList: []
    }
  },
  created() {
    this.usersMyList = this.$store.getters['DbModule/getUsersMyList'];
  }
}
</script>
