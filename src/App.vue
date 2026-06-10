<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMain from "@/components/AppMain.vue";
import { useUiStore } from "@/stores/ui.js";

const uiStore = useUiStore();
</script>

<template>
  <AppHeader />
  <main :class="uiStore.themeFlag ? 'mode-light' : 'mode-dark'" class="main app-shell">
    <AppMain />
  </main>
  <AppFooter :class="uiStore.themeFlag ? 'mode-light' : 'mode-dark'" />
</template>

<style lang="scss">
@use "@/assets/scss/main" as main;
@use "@/assets/scss/partials/reset" as reset;
@use "@/assets/scss/responsive.scss" as responsive;

.app-shell {
  transition: background-color 0.25s ease, color 0.25s ease;
}
</style>
