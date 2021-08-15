<template>
  <q-page class="absolute-top">
    <section id="landing" class="flex flex-center">
      <div class="container">
        <div class="text-h1 text-gradient text-center">{{ $t('indexPage.home.heading') }}</div>
        <div class="text-h2 text-light text-center q-pb-xl">{{ $t('indexPage.home.subHeading') }}</div>

        <search-form />
        <search-suggestion />
      </div>
    </section>
  </q-page>
</template>

<script>
import SearchForm from "components/general/SearchForm";
import SearchSuggestion from "components/index_page/SearchSuggestion";

export default {
  name: 'IndexPage',
  components: {
    SearchForm,
    SearchSuggestion
  },
  mounted() {
    this.$store.dispatch('SearchModule/fetchTrendy')
  }
}
</script>

<style lang="scss" scoped>
#landing {
  height: 100vh;
  background: url("../assets/cinema.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
