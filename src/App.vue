<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMain from "./components/AppMain.vue";
import { data } from "./store.js";

export default {
  data() {
    return {
      data,
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {},
  mounted() {
    // console.log(localStorage)
  },
};
</script>

<template>
  <AppHeader />
  <div
    :class="data.themeFlag ? 'mode-light' : 'mode-dark'"
    class="container-fluid main p-0"
  >
    <AppMain />
  </div>
  <AppFooter :class="data.themeFlag ? 'mode-light' : 'mode-dark'" />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
