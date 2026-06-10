<script setup>
import { computed } from "vue";
import { useUiStore } from "@/stores/ui.js";
import { navLinks } from "@/data/navigation.js";

const uiStore = useUiStore();

const themeClass = computed(() =>
  uiStore.themeFlag ? "header-light" : "header-dark"
);

function toggleTheme() {
  uiStore.toggleTheme();
}
</script>

<template>
  <header :class="themeClass" class="site-header">
    <div class="container-fluid px-3 px-lg-4">
      <div class="header-shell">
        <router-link :to="{ name: 'WelcomeApp' }" class="brand-mark">
          <img
            :class="{ inverted: !uiStore.themeFlag }"
            src="/img/LogoBianco.svg"
            alt="Logo Mattia Paiano"
          />
          <span>Mattia Paiano</span>
        </router-link>

        <nav class="desktop-nav d-none d-md-flex" aria-label="Navigazione principale">
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
            class="mobile-menu d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-label="Apri menu"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>

    <div
      id="mobileMenu"
      class="offcanvas offcanvas-end"
      :class="themeClass"
      tabindex="-1"
      aria-labelledby="mobileMenuLabel"
    >
      <div class="offcanvas-header">
        <h2 id="mobileMenuLabel">Navigazione</h2>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Chiudi"
        ></button>
      </div>
      <div class="offcanvas-body">
        <nav class="mobile-nav">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            class="mobile-link"
            :to="{ name: link.name }"
            data-bs-dismiss="offcanvas"
          >
            {{ link.label }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/main.scss" as main;

.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  border-bottom: 1px solid rgba(152, 158, 221, 0.16);
  backdrop-filter: blur(18px);
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
  display: grid;
  place-items: center;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(152, 158, 221, 0.12);
  }
}

.mobile-nav {
  display: grid;
  gap: 0.85rem;
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
}
</style>
