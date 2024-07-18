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
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "instant",
      });
    },
  },
  beforeMount(){
    this.scrollToTop();
  }
  ,
  mounted() {
    this.$nextTick(() => {
      
      gsap.fromTo(
        ".animations",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 0.5, stagger: 0.3, ease: "power2" }
      );
      if (window.innerWidth > 560) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#left-col", {
          x: -2000,
          duration: 3,
          scrollTrigger: {
            trigger: "#about-me",
            toggleActions: "play pause reverse pause",
            scrub: 2,
          },
        });
        gsap.to("#right-col", {
          x: 2000,
          duration: 3,
          scrollTrigger: {
            trigger: "#about-me",
            toggleActions: "play pause reverse pause",
            scrub: 1,
          },
        });
      }
    });
  }
};
</script>

<template>
  
  <div class="container-fluid p-0 position-relative">
  
    <div class="row g-0">
      <div
        id="left-col"
        class="col-12 col-sm-6 mb-3 mb-sm-0 d-flex align-items-sm-center  align-items-end justify-content-sm-end justify-content-center pe-sm-5"
      >
        <div class="img-box">
          <img src="/img/foto.jpg" alt="" />
        </div>
      </div>
      <div
        id="right-col"
        class="col-12 col-sm-6 ps-sm-5 mt-3 mb-sm-0 main-content align-items-sm-center  d-flex align-items-baseline justify-content-sm-start justify-content-center"
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
      </div>
      <AboutMe id="about-me" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main" as *;
// .icons {
//     width: 60px;
//     height: 30px;
//     border: 1px solid darkgray;
//     border-radius: 15px;
//     padding: 2px;
//     i {
//       font-size: 1rem;
//     }
//   }

.name {
  font-size: 4rem;
  .initials {
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
.col-sm-6 {
  height: calc(100vh - 160px);
}
.main-content {
  & > div {
    padding-top: 100px;
  }
  padding-bottom: 100px;
  .color {
    color: white;
  }
  .logo-box {
    text-align: center;
    img {
      width: 50%;
      object-fit: contain;
    }
  }
}
@import "/src/assets/scss/responsive.scss";
</style>
