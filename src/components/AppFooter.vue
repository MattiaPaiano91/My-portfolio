<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { data } from "../store.js";
import "swiper/css";
export default {
  data() {
    return {
      modules: [Autoplay],
      slider: [
        "src/assets/SVG/bootstrap.svg",
        "src/assets/SVG/css3-alt.svg",
        "src/assets/SVG/database-solid.svg",
        "src/assets/SVG/git-alt.svg",
        "src/assets/SVG/html5.svg",
        "src/assets/SVG/js.svg",
        "src/assets/SVG/laravel.svg",
        "src/assets/SVG/mysql-svgrepo-com.svg",
        "src/assets/SVG/node-js.svg",
        "src/assets/SVG/php.svg",
        "src/assets/SVG/vuejs.svg",
      ],
      data,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    gsap.registerPlugin(TextPlugin);
    let footer = document.querySelector(".footer");
    let footerTL = gsap.timeline({ paused: true }).to(".footer", {
      text: "Thanks for watching!",
      duration: 2,
      ease: "linear",
    });
    footer.addEventListener("mouseenter", () => footerTL.play());
    footer.addEventListener("mouseleave", () => footerTL.reverse());
  },
};
</script>

<template>
  <footer class="text-center">
    <swiper
      :spaceBetween="0"
      :slidesPerView="10"
      :loop="true"
      :autoplay="{
        delay: 3000,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
      :class="data.themeFlag ? 'mode-light' : 'mode-dark'"
    >
      <swiper-slide class="slider" v-for="elem in slider">
        <img
          :style="data.themeFlag == false ? 'filter:invert(1)' : ''"
          :src="elem"
          alt=""
          id="carousel-sponsorship"
        />
      </swiper-slide>
    </swiper>
    <div :class="data.themeFlag ? 'mode-light' : 'mode-dark'" class="footer">
      Made with &#9829; by an me and Vue.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
footer {
  width: 100%;
  height: 200px;
  .mySwiper {
    width: 100%;
  }
  .footer {
    height: 50px;
    padding: 5rem 0px;
    cursor: pointer;
  }
  .slider {
    width: 80px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
