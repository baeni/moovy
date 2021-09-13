<template>
  <q-page v-if="dataReady" class="absolute-top">
    <!-- landing -->
    <section class="window-height flex flex-center">
      <q-img
        class="absolute window-width window-height"
        style="z-index: -99; filter: blur(15px) opacity(.25);"
        :src="'https://image.tmdb.org/t/p/w1280'+movie.backdrop_path"
      />
      <div class="container row q-col-gutter-x-md">
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
          <movie-genre-chips class="q-pb-sm" :movie="movie" />
          <div class="text-h2 text-white q-pb-sm">{{ movie.title }}</div>
          <div class="text-body1 text-white q-pb-lg">{{ movie.overview }}</div>

          <!-- Information -->
          <div class="row q-pb-lg">
            <div class="col">
              <div class="text-subtitle1 text-lightest">Release Date</div>
              <div class="text-h3 text-white">{{ releaseDate }}</div>
            </div>

            <div class="col">
              <div class="text-subtitle1 text-lightest">Runtime</div>
              <div class="text-h3 text-white">{{ runtime }}</div>
            </div>

            <div class="col">
              <div class="text-subtitle1 text-lightest">TMDb Rating</div>
              <div class="text-h3 text-white">{{ tmdbRating }}</div>
            </div>

            <div class="col">
              <div class="text-subtitle1 text-lightest">TMDb Votes</div>
              <div class="text-h3 text-white">{{ tmdbVotes }}</div>
            </div>
          </div>

          <!-- Homepage -->
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

          <!-- Watchlist -->
          <q-btn
            v-show="!existsInUsersWatchlist"
            class="text-white"
            icon="bookmark_border"
            dark
            flat
            round
            dense
            no-caps
            @click="addToUsersWatchlist()"
          >
            <q-tooltip
              class="bg-light text-caption text-bold"
              transition-show="scale"
              transition-hide="fade"
            >
              {{ $t('detailsPage.addToUsersWatchlist') }}
            </q-tooltip>
          </q-btn>

          <q-btn
            v-show="existsInUsersWatchlist"
            class="text-accent"
            icon="bookmark"
            dark
            flat
            round
            dense
            no-caps
            @click="removeFromUsersWatchlist()"
          >
            <q-tooltip
              class="bg-light text-caption text-bold"
              transition-show="scale"
              transition-hide="fade"
            >
              {{ $t('detailsPage.addToUsersWatchlist') }}
            </q-tooltip>
          </q-btn>

          <!-- Favorites -->
          <q-btn
            v-show="!existsInUsersFavorites"
            class="text-white"
            icon="favorite_border"
            dark
            flat
            round
            dense
            no-caps
            @click="addToUsersFavorites()"
          >
            <q-tooltip
              class="bg-light text-caption text-bold"
              transition-show="scale"
              transition-hide="fade"
            >
              {{ $t('detailsPage.addToUsersFavorites') }}
            </q-tooltip>
          </q-btn>

          <q-btn
            v-show="existsInUsersFavorites"
            class="text-red"
            icon="favorite"
            dark
            flat
            round
            dense
            no-caps
            @click="removeFromUsersFavorites()"
          >
            <q-tooltip
              class="bg-light text-caption text-bold"
              transition-show="scale"
              transition-hide="fade"
            >
              {{ $t('detailsPage.removeFromUsersFavorites') }}
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
import MovieGenreChips from 'components/movie/MovieGenreChips';

export default {
  name: 'DetailsPage',
  components: {
    MovieGenreChips
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      movie: {},
      trailers: [],
      dataReady: false
    }
  },
  methods: {
    addToUsersWatchlist() {
      if (this.$store.getters["AuthModule/getUser"] === null) {
        this.$router.push('/auth');
        return;
      }

      this.$store.dispatch('DbModule/addToUsersWatchlist', this.movie)
        .then(() => {
          this.notify(this.$t('detailsPage.addedToUsersWatchlist', { title: this.movie.title }));
        }).catch(err => Promise.reject(err));
    },
    removeFromUsersWatchlist() {
      if (this.$store.getters["AuthModule/getUser"] === null) {
        this.$router.push('/auth');
        return;
      }

      this.$store.dispatch('DbModule/removeFromUsersWatchlist', this.movie)
        .then(() => {
          this.notify(this.$t('detailsPage.removedFromUsersWatchlist', { title: this.movie.title }));
        }).catch(err => Promise.reject(err));
    },

    addToUsersFavorites() {
      if (this.$store.getters["AuthModule/getUser"] === null) {
        this.$router.push('/auth');
        return;
      }

      this.$store.dispatch('DbModule/addToUsersFavorites', this.movie)
        .then(() => {
          this.notify(this.$t('detailsPage.addedToUsersFavorites', { title: this.movie.title }));
        }).catch(err => Promise.reject(err));
    },
    removeFromUsersFavorites() {
      if (this.$store.getters["AuthModule/getUser"] === null) {
        this.$router.push('/auth');
        return;
      }

      this.$store.dispatch('DbModule/removeFromUsersFavorites', this.movie)
        .then(() => {
          this.notify(this.$t('detailsPage.removedFromUsersFavorites', { title: this.movie.title }));
        }).catch(err => Promise.reject(err));
    }
  },
  computed: {
    releaseDate() {
      const date = new Date(this.movie.release_date);
      return date.getFullYear();
    },
    runtime() {
      const runtime = this.movie.runtime;
      return runtime ? runtime+' min' : this.$t('detailsPage.noInformation');
    },
    tmdbRating() {
      const rating = this.movie.vote_average;
      return rating ? rating+' /10' : this.$t('detailsPage.noInformation');
    },
    tmdbVotes() {
      const rating = this.movie.vote_count;
      return rating ? rating : this.$t('detailsPage.noInformation');
    },
    existsInUsersWatchlist() {
      return this.$store.getters['AuthModule/getUser'] !== null
        && this.$store.getters["DbModule/getUsersWatchlist"] !== undefined
        && this.$store.getters["DbModule/getUsersWatchlist"].some(el => el.title === this.movie.title);
    },
    existsInUsersFavorites() {
      return this.$store.getters['AuthModule/getUser'] !== null
        && this.$store.getters["DbModule/getUsersFavorites"] !== undefined
        && this.$store.getters["DbModule/getUsersFavorites"].some(el => el.title === this.movie.title);
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
