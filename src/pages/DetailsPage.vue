<template>
  <q-page v-if="dataReady" class="absolute-top">
    <!-- landing -->
    <section class="window-height flex flex-center">
      <q-img
        class="absolute window-width window-height"
        style="z-index: -99; filter: blur(15px) opacity(.25);"
        :src="'https://image.tmdb.org/t/p/w1280'+movie.backdrop_path"
      />
      <div class="container row q-col-gutter-x-lg">
        <q-img
          class="col-4 rounded-borders"
          :src="'https://www.themoviedb.org/t/p/w500/'+movie.poster_path"
          :ratio="2/3"
          no-native-menu
        >
          <template v-slot:error>
            <div class="text-h4 text-center absolute-full flex flex-center">No image available</div>
          </template>
        </q-img>

        <div class="col-8 q-my-auto">
          <div class="text-h2 text-white">{{ movie.title }}</div>
          <div class="text-subtitle2 text-lightest">{{ movie.release_date }} • {{ movie.runtime }}min</div>

          <div class="text-body1 text-white q-py-md">{{ movie.overview }}</div>

          <q-btn
            class="text-bold text-white bg-light q-mr-sm"
            :label="$t('detailsPage.homepage')"
            :href="movie.homepage"
            type="a"
            target="_blank"
            dark
            flat
            no-caps
          />

          <q-btn
            class="text-bold text-accent"
            icon="bookmark_border"
            dark
            flat
            round
            dense
            no-caps
            @click="addToUsersList()"
          >
            <q-tooltip
              class="bg-light text-caption text-bold"
              transition-show="scale"
              transition-hide="fade"
            >
              Add to My List
            </q-tooltip>
          </q-btn>

          <q-btn
            class="text-bold text-accent"
            icon="bookmark"
            dark
            flat
            round
            dense
            no-caps
            @click="removeFromUsersList()"
          >
            <q-tooltip
              class="bg-light text-caption text-bold"
              transition-show="scale"
              transition-hide="fade"
            >
              Remove from My List
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </section>

    <!-- trailers -->
    <!--
    <section>
      <div class="container">
        <movie-list :movies="[]" title="Trailers" />
      </div>
    </section>
    -->


    <!--
    <section class="relative-position">
      <q-img id="background" class="absolute-full shadow-5" :src="'https://image.tmdb.org/t/p/w1280'+movie.backdrop_path" />
      <div class="container row q-col-gutter-x-lg">
        <q-img
          class="col-3 rounded-borders"
          :src="'https://www.themoviedb.org/t/p/w500/'+movie.poster_path"
          :ratio="2/3"
          no-native-menu
        >
          <template v-slot:error>
            <div class="text-h4 text-center absolute-full flex flex-center">No image available</div>
          </template>
        </q-img>

        <div class="col-9 q-my-auto">
          <div class="text-h2 text-white">{{ movie.title }}</div>
          <div class="text-subtitle2 text-lightest">{{ movie.release_date }} • {{ movie.runtime }}min</div>

          <div class="text-body1 text-white q-py-md">{{ movie.overview }}</div>

          <div class="column">
            <q-btn
              class="col text-bold text-white bg-accent"
              icon="add"
              dark
              flat
              no-caps
              @click="$store.dispatch('DbModule/addToUsersMyList', movie)"
            />
            <q-btn
              class="col text-bold text-white bg-accent"
              icon="delete"
              dark
              flat
              no-caps
              @click="$store.dispatch('DbModule/removeFromUsersMyList', movie)"
            />

            <q-btn
              class="col text-bold text-lightest bg-light"
              :label="$t('detailsPage.homepage')"
              :href="movie.homepage"
              type="a"
              target="_blank"
              dark
              flat
              no-caps
            />
          </div>
        </div>
      </div>
    </section>

    <section v-if="trailers.length">
      <div class="container">
        <trailer-list :trailers="trailers" />
      </div>
    </section>
    -->
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  name: 'DetailsPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dataReady: false,
      movie: {},
      trailers: []
    }
  },
  methods: {
    addToUsersList() {
      if (this.$store.getters["AuthModule/getUser"] === null) {
        this.$router.push('/auth');
        return;
      }

      this.$store.dispatch('DbModule/addToUsersMyList', this.movie)
        .then(() => {
          this.notify(this.$t('detailsPage.addedToUsersList', { title: this.movie.title }));
        }).catch(err => Promise.reject(err));
    },
    removeFromUsersList() {
      if (this.$store.getters["AuthModule/getUser"] === null) {
        this.$router.push('/auth');
        return;
      }

      this.$store.dispatch('DbModule/removeFromUsersMyList', this.movie)
        .then(() => {
          this.notify(this.$t('detailsPage.removedFromUsersList', { title: this.movie.title }));
        }).catch(err => Promise.reject(err));
    }
  },
  setup() {
    const $q = useQuasar();

    return {
      notify(message) {
        $q.notify({
          message: message,
          group: false
        });
      }
    }
  },
  created() {
    this.$store.dispatch('SearchModule/getMovieDetails', this.id)
      .then(res => {
        this.movie = res;
        this.trailers = this.movie.videos.results.filter(el => el.site === 'YouTube');
        this.dataReady = true;
      }).catch(err => Promise.reject(err));
  }
}
</script>
