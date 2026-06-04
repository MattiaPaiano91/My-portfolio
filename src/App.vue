<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMain from "./components/AppMain.vue";
import { data } from "./store.js";
</script>

<template>
  <AppHeader />
  <div :class="data.themeFlag ? 'mode-light' : 'mode-dark'" class="main app-shell">
    <AppMain />
  </div>
  <AppFooter :class="data.themeFlag ? 'mode-light' : 'mode-dark'" />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";

.app-shell {
  transition: background-color 0.25s ease, color 0.25s ease;
}
</style>
