<script>
import { data } from "../store.js";
import AboutMe from "../components/AboutMe.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default {
  data() {
    return {
      data,
    };
  },
  computed: {},
  components: {
    AboutMe,
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      gsap.fromTo(
        ".animations",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 0.5, stagger: 0.3, ease: "power2" }
      );
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("#left-col", {
        x: -2000,
        duration: 3,
        scrollTrigger: {
          trigger: "#about-me",
          toggleActions: "play pause reverse pause",
          scrub: 2,
        },
        autoAlpha: 0,
      });
      gsap.to("#right-col", {
        x: 2000,
        duration: 3,
        scrollTrigger: {
          trigger: "#about-me",
          toggleActions: "play pause reverse pause",
          scrub: 1,
        },
        autoAlpha: 0,
      });
    });
  },
};
</script>

<template>
  <div class="container-fluid p-0">
    <div class="row g-0">
      <div
        id="left-col"
        class="col-6 d-flex align-items-center justify-content-end pe-5"
      >
        <div class="img-box">
          <img src="/img/foto.jpg" alt="" />
        </div>
      </div>
      <div id="right-col" class="col-6 ps-5">
        <div
          class="main-content d-flex flex-column align-items-start justify-content-end"
        >
          <div class="text-center">
            <h1>
              <span class="name animations">
                <span class="initials">M</span>attia
              </span> 
              <span class="name animations">
                <span class="initials">P</span>aiano
              </span>
            </h1>
            <p class="animations">Web Developer</p>
          </div>
          <div class="logo-box d-flex justify-content-center animations">
            <img src="/img/LogoBianco.svg" alt="">
          </div>
        </div>
      </div>
      <AboutMe id="about-me" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main" as *;
@import "../assets/scss/partials/reset";
.name {
  font-size: 4rem;
  .initials{
    font-weight: 600;
    font-size: 5rem;
  }
}
.img-box {
  height: calc(50vh - 200px);
  width: 500px;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
.col-6 {
  height: calc(100vh - 160px);
}
.main-content {
  height: calc(100% - 200px);
  & > *{
    width: 50%;

  }
  padding-bottom: 100px;
  .color {
    color: white;
  }
  .logo-box{
    text-align: center;
    img{
      width: 50%;
      object-fit: contain;
    }
  }
}
</style>
