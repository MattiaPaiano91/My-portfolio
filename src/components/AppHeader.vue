<script setup lang="ts">
import { computed, ref } from "vue";
import { useUiStore } from "@/stores/ui.js";
import { navLinks } from "@/data/navigation.js";

const uiStore = useUiStore();
const isMobileMenuOpen = ref(false);

const themeClass = computed(() =>
  uiStore.themeFlag ? "header-light" : "header-dark"
);

function toggleTheme() {
  uiStore.toggleTheme();
}

function openMobileMenu() {
  isMobileMenuOpen.value = true;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}
</script>

<template>
  <header :class="themeClass" class="site-header">
    <div class="header-container">
      <div class="header-shell">
        <router-link :to="{ name: 'WelcomeApp' }" class="brand-mark">
          <img
            :class="{ inverted: !uiStore.themeFlag }"
            src="/img/LogoBianco.svg"
            alt="Logo Mattia Paiano"
          />
          <span>Mattia Paiano</span>
        </router-link>

        <nav class="desktop-nav" aria-label="Navigazione principale">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            class="nav-pill"
            :to="{ name: link.name }"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <div class="actions">
          <button
            type="button"
            class="theme-toggle"
            @click="toggleTheme"
            :aria-label="uiStore.themeFlag ? 'Attiva tema scuro' : 'Attiva tema chiaro'"
          >
            <i :class="uiStore.themeFlag ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"></i>
          </button>

          <button
            class="mobile-menu"
            type="button"
            @click="openMobileMenu"
            aria-controls="mobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Apri menu"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>

    <button
      v-if="isMobileMenuOpen"
      type="button"
      class="mobile-menu-backdrop"
      aria-label="Chiudi menu"
      @click="closeMobileMenu"
    ></button>

    <div
      id="mobileMenu"
      class="mobile-panel"
      :class="themeClass"
      tabindex="-1"
      aria-labelledby="mobileMenuLabel"
      :aria-hidden="!isMobileMenuOpen"
    >
      <div class="mobile-panel-header">
        <h2 id="mobileMenuLabel">Navigazione</h2>
        <button
          type="button"
          class="mobile-panel-close"
          aria-label="Chiudi"
          @click="closeMobileMenu"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <nav class="mobile-nav">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          class="mobile-link"
          :to="{ name: link.name }"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  border-bottom: 1px solid rgba(152, 158, 221, 0.16);
  backdrop-filter: blur(18px);
}

.header-container {
  width: 100%;
  padding: 0 1rem;
}

.header-light {
  background: rgba(255, 255, 255, 0.86);
  color: #101828;
}

.header-dark {
  background: rgba(16, 24, 40, 0.86);
  color: #f8fafc;
}

.header-shell {
  position: relative;
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.04em;

  img {
    width: 52px;
    height: 52px;
    object-fit: contain;
  }
}

.desktop-nav {
  position: absolute;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  align-items: center;
  gap: 0.75rem;
}

.nav-pill,
.mobile-link {
  color: inherit;
  text-decoration: none;
  border: 1px solid rgba(152, 158, 221, 0.25);
  border-radius: 999px;
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

.nav-pill {
  padding: 0.7rem 1.1rem;

  &:hover,
  &.router-link-active {
    transform: translateY(-2px);
    background: rgba(152, 158, 221, 0.14);
    border-color: rgba(152, 158, 221, 0.65);
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle,
.mobile-menu {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(152, 158, 221, 0.28);
  background: transparent;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(152, 158, 221, 0.12);
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.mobile-panel {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
  width: min(360px, 86vw);
  min-height: 100vh;
  padding: 1.25rem;
  border-left: 1px solid rgba(152, 158, 221, 0.18);
  box-shadow: -24px 0 60px rgba(15, 23, 42, 0.18);
  transform: translateX(100%);
  transition: transform 0.25s ease;
}

.mobile-panel[aria-hidden="false"] {
  transform: translateX(0);
}

.mobile-menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 25;
  background: rgba(15, 23, 42, 0.35);
}

.mobile-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h2 {
    margin: 0;
    font-size: 1.35rem;
  }
}

.mobile-panel-close {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(152, 158, 221, 0.28);
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-link {
  padding: 1rem 1.1rem;
  font-size: 1.1rem;

  &.router-link-active {
    background: rgba(152, 158, 221, 0.16);
    border-color: rgba(152, 158, 221, 0.65);
  }
}

.inverted {
  filter: invert(1);
}

@media screen and (max-width: 767px) {
  .header-shell {
    min-height: 82px;
  }

  .brand-mark span {
    display: none;
  }

  .desktop-nav {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .mobile-menu,
  .mobile-panel,
  .mobile-menu-backdrop {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  .header-container {
    padding: 0 1.5rem;
  }
}
</style>
