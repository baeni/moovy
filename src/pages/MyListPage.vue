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
import { onSnapshot, doc } from "firebase/firestore";
import db from 'src/boot/firebase';

export default {
  name: 'MyListPage',
  components: {
    MovieList
  },
  data() {
    return {
      usersMyList: []
    }
  },
  created() {
    onSnapshot(doc(db, 'users', this.$store.getters["AuthModule/getUser"].email), doc => {
      this.usersMyList = doc.data().myList;
    });
  }
}
</script>
