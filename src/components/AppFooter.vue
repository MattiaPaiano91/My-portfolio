<script setup>
import { useUiStore } from "@/stores/ui.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const uiStore = useUiStore();

const slider = [
  "/SVG/bootstrap.svg",
  "/SVG/css3-alt.svg",
  "/SVG/database-solid.svg",
  "/SVG/git-alt.svg",
  "/SVG/html5.svg",
  "/SVG/js.svg",
  "/SVG/laravel.svg",
  "/SVG/mysql-svgrepo-com.svg",
  "/SVG/node-js.svg",
  "/SVG/php.svg",
  "/SVG/vuejs.svg",
];

const modules = [Autoplay];
</script>

<template>
  <footer :class="uiStore.themeFlag ? 'footer-light' : 'footer-dark'" class="site-footer">
    <div class="footer-glow"></div>
    <div class="container-fluid footer-shell">
      <div class="footer-intro text-center">
        <p class="eyebrow">Stack quotidiano</p>
        <h2>Frontend, backend e motion con un taglio molto pratico.</h2>
      </div>

      <swiper
        :loop="true"
        :autoplay="{ delay: 2200, disableOnInteraction: false }"
        :breakpoints="{
          320: { slidesPerView: 3, spaceBetween: 20 },
          640: { slidesPerView: 4, spaceBetween: 24 },
          1024: { slidesPerView: 6, spaceBetween: 28 }
        }"
        :modules="modules"
        class="stack-swiper"
      >
        <swiper-slide v-for="elem in slider" :key="elem" class="slider">
          <div class="icon-card">
            <img
              :style="!uiStore.themeFlag ? 'filter: invert(1);' : ''"
              :src="elem"
              alt="Tecnologia usata nel portfolio"
            />
          </div>
        </swiper-slide>
      </swiper>

      <nav class="footer-nav" aria-label="Link footer">
        <router-link class="footer-link" :to="{ name: 'WelcomeApp' }">Home</router-link>
        <router-link class="footer-link" :to="{ name: 'project-index' }">Portfolio</router-link>
        <router-link class="footer-link" :to="{ name: 'contact-me' }">Contatti</router-link>
      </nav>

      <p class="signature">Costruito con Vue, Sass e parecchia curiosita.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/main.scss" as main;

.site-footer {
  position: relative;
  overflow: hidden;
  padding: 5rem 0 3rem;
}

.footer-light {
  background:
    radial-gradient(circle at top, rgba(152, 158, 221, 0.2), transparent 35%),
    #ffffff;
  color: #101828;
}

.footer-dark {
  background:
    radial-gradient(circle at top, rgba(152, 158, 221, 0.18), transparent 35%),
    #101828;
  color: #f8fafc;
}

.footer-shell {
  position: relative;
  z-index: 1;
}

.footer-glow {
  position: absolute;
  inset: auto -15% -10% auto;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(152, 158, 221, 0.18);
  filter: blur(30px);
}

.footer-intro {
  max-width: 720px;
  margin: 0 auto 2rem;

  h2 {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
  }
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  color: #989edd;
  margin-bottom: 0.85rem;
}

.stack-swiper {
  padding: 1rem 0 2.5rem;
}

.icon-card {
  height: 96px;
  border-radius: 24px;
  border: 1px solid rgba(152, 158, 221, 0.18);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 52px;
    height: 52px;
    object-fit: contain;
  }
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(152, 158, 221, 0.2);

  &:hover,
  &.router-link-active {
    background: rgba(152, 158, 221, 0.14);
  }
}

.signature {
  text-align: center;
  margin: 0;
  opacity: 0.8;
}
</style>
