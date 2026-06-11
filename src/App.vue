<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { useUiStore } from "@/stores/ui.js";

const uiStore = useUiStore();
</script>

<template>
  <AppHeader />
  <main :class="uiStore.themeFlag ? 'mode-light' : 'mode-dark'" class="main app-shell">
    <router-view />
  </main>
  <AppFooter :class="uiStore.themeFlag ? 'mode-light' : 'mode-dark'" />
</template>

<style lang="scss">
@use "@/assets/scss/main" as main;
@use "@/assets/scss/partials/reset" as reset;

.app-shell {
  transition: background-color 0.25s ease, color 0.25s ease;
}
</style>
