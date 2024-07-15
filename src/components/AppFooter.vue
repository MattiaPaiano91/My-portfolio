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
    let footer = document.querySelector(".text");
    let footerTL = gsap.timeline({ paused: true }).to(".text", {
      text: "Thanks for watching!",
      duration: 2,
      ease: "power3.out",
    });
    footer.addEventListener("mouseenter", () => footerTL.play());
    footer.addEventListener("mouseleave", () => footerTL.reverse());
  },
};
</script>

<template>
  <footer class="text-center">
    <swiper
      :loop="true"
      :autoplay="{
        delay: 3000,
      }"
      :breakpoints="{
        '300': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '640': {
          slidesPerView: 4,
          spaceBetween: 40,
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
    <div
      :class="data.themeFlag ? 'mode-light' : 'mode-dark'"
      class="footer d-flex justify-content-center"
    >
      <p class="text">Made with &#9829; by an me and Vue.</p>
    </div>
    <nav class="d-flex justify-content-center navbar">
      <router-link class="router-link" :to="{ name: 'WelcomeApp' }">
        <div
          :style="data.themeFlag ? 'color:black' : 'color:white'"
          class="mx-sm-3 mx-1"
        >
          Home
        </div>
      </router-link>
      |
      <router-link class="router-link" :to="{ name: 'project-index' }">
        <div
          :style="data.themeFlag ? 'color:black' : 'color:white'"
          class="mx-sm-3 mx-1"
        >
          Porfolio
        </div>
      </router-link>
      |
      <router-link class="router-link" :to="{ name: 'contact-me' }">
        <div
          :style="data.themeFlag ? 'color:black' : 'color:white'"
          class="mx-sm-3 mx-1"
        >
          Contattami
        </div>
      </router-link>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/variables.scss";
footer {
  width: 100%;
  height: 400px;
  .mySwiper {
    height: 150px;
  }
  .footer {
    height: 50px;
    padding: 5rem 0px;
    cursor: pointer;
  }
  .slider {
    width: 80px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .navbar {
    border: 2px solid $violet;
    width: 30%;
    border-radius: 15px;
    margin: 0 auto;
  }
}
@import "/src/assets/scss/responsive.scss";
</style>
