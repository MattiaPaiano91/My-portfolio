<script setup>
import { useUiStore } from "@/stores/ui.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { stackIcons, stackSwiperBreakpoints } from "@/data/footer.js";
import { navLinks } from "@/data/navigation.js";
import "swiper/css";

const uiStore = useUiStore();

const modules = [Autoplay];
</script>

<template>
  <footer :class="uiStore.themeFlag ? 'footer-light' : 'footer-dark'" class="relative overflow-hidden py-[5rem] pb-12">
    <div class="footer-glow"></div>
    <div class="relative z-[1] mx-auto w-[min(1180px,calc(100%-2rem))]">
      <div class="mx-auto mb-8 max-w-[720px] text-center">
        <p class="eyebrow">Stack quotidiano</p>
        <h2 class="text-[clamp(1.6rem,3vw,2.4rem)]">Frontend, backend e motion con un taglio molto pratico.</h2>
      </div>

      <swiper
        :loop="true"
        :autoplay="{ delay: 2200, disableOnInteraction: false }"
        :breakpoints="stackSwiperBreakpoints"
        :modules="modules"
        class="stack-swiper"
      >
        <swiper-slide v-for="elem in stackIcons" :key="elem" class="slider">
          <div class="flex h-24 items-center justify-center rounded-3xl border border-[rgba(152,158,221,0.18)] bg-white/5">
            <img
              class="h-[52px] w-[52px] object-contain"
              :style="!uiStore.themeFlag ? 'filter: invert(1);' : ''"
              :src="elem"
              alt="Tecnologia usata nel portfolio"
            />
          </div>
        </swiper-slide>
      </swiper>

      <nav class="mb-4 flex flex-wrap justify-center gap-4" aria-label="Link footer">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          class="footer-link"
          :to="{ name: link.name }"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <p class="m-0 text-center opacity-80">Costruito con Vue, Sass e parecchia curiosita.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
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

.footer-glow {
  position: absolute;
  inset: auto -15% -10% auto;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(152, 158, 221, 0.18);
  filter: blur(30px);
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

</style>
