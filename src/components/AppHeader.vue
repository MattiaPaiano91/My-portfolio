<script>
import { gsap } from "gsap";
import { data } from "../store.js";

export default {
  data() {
    return {
      menuFlag: true,
      data,
    };
  },
  methods: {
    switchToDark() {
      data.themeFlag = !data.themeFlag;
      gsap.fromTo(
        ".fa-moon",
        { x: 0, autoAlpha: 1 },
        { x: -15, autoAlpha: 0, duration: 0 }
      );
      gsap.fromTo(".fa-sun", { autoAlpha: 0, x: 15 }, { autoAlpha: 1, x: 3 });
    },
    switchToLight() {
      data.themeFlag = !this.data.themeFlag;
      gsap.fromTo(".fa-sun", { x: -15 }, { x: 23, autoAlpha: 0, duration: 0 });
      gsap.fromTo(
        ".fa-moon",
        { autoAlpha: 0, x: -15 },
        { autoAlpha: 1, x: 23 }
      );
    },
  },
  mounted() {
    gsap.to(".fa-sun", { autoAlpha: 0, duration: 0 });
    gsap.to(".fa-moon", { x: 23, duration: 0 });
    this.$nextTick(() => {
      gsap.fromTo(
        [".burgher-menu"],
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power1.out" }
      );
    });

    let burgherItem = document.querySelector(".burgher-menu");

    burgherItem.addEventListener("click", () => {
      if (this.menuFlag) {
        let header = gsap.to("header", { height: 150, duration: 0.5 });
        gsap.fromTo(
          ".animation-link",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.2 }
        );
        gsap.fromTo(".fa-bars", { autoAlpha: 1 }, { autoAlpha: 0 });
        gsap.fromTo(".fa-x", { autoAlpha: 0 }, { autoAlpha: 1 });
      } else {
        gsap.to("header", { height: 100, duration: 0.5 });
        gsap.to(".animation-link", {
          x: -100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        });
        gsap.fromTo(".fa-bars", { autoAlpha: 0 }, { autoAlpha: 1 });
        gsap.fromTo(".fa-x", { autoAlpha: 1 }, { autoAlpha: 0 });
      }
      this.menuFlag = !this.menuFlag;
    });

    let menuItems = document.querySelectorAll(".animation-link");
    for (const menuItem of menuItems) {
      let tl = gsap
        .timeline({ paused: true })
        .to(menuItem.querySelector(".hover"), {
          backgroundColor: "#989EDD",
          borderRadius: "10px",
          duration: 0.5,
        });
      menuItem.addEventListener("mouseenter", () => tl.play());
      menuItem.addEventListener("mouseleave", () => tl.reverse());
    }
  },
};
</script>

<template>
  <header
    :class="data.themeFlag ? 'mode-light' : 'mode-dark'"
    class="container-fluid border-bottom p-0 text-center d-flex justify-content-around align-items-center"
  >
    <div>
      <div class="burgher-menu position-relative">
        
        <i class="icon fa-solid fa-bars fa position-absolute"></i>
        <i class="icon fa-solid fa-x fa position-absolute"></i>
      </div>
    </div>
    <div class="animation-link">
      <div>
        <router-link class="router-link" :to="{ name: 'WelcomeApp' }">
          <div
            :style="data.themeFlag ? 'color:black' : 'color:white'"
            class="hover"
          >
            Home
          </div>
        </router-link>
      </div>
    </div>

    <div class="animation-link">
      <div>
        <router-link class="router-link" :to="{ name: 'project-index' }">
          <div
            :style="data.themeFlag ? 'color:black' : 'color:white'"
            class="hover"
          >
            Porfolio
          </div>
        </router-link>
      </div>
    </div>
    <div class="animation-link">
      <div>
        <router-link class="router-link" :to="{ name: 'project-index' }">
          <div
            :style="data.themeFlag ? 'color:black' : 'color:white'"
            class="hover"
          >
            About me
          </div>
        </router-link>
      </div>
    </div>
    <div class="animation-link">
      <div>
        <router-link class="router-link" :to="{ name: 'contact-me' }">
          <div
            :style="data.themeFlag ? 'color:black' : 'color:white'"
            class="hover"
          >
            Contattami
          </div>
        </router-link>
      </div>
    </div>
    <div class="d-flex align-items-center icons">
      <i @click="switchToLight()" class="fa-regular fa fa-sun mode-dark"></i>
      <i @click="switchToDark()" class="fa-regular fa fa-moon mode-light"></i>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

header {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid darkgray;
  position: fixed;
  z-index: 2;
  font-size: 1.4rem;

  .icons {
    width: 60px;
    height: 30px;
    border: 1px solid darkgray;
    border-radius: 15px;
    padding: 2px;
    i {
      font-size: 1rem;
    }
  }

  .hover {
    padding: 0.5rem;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    font-weight: 500;
  }

  .animation-link {
    opacity: 0;
    width: calc((100% / 6) - 4rem);
  }

  i {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .fa-x {
    opacity: 0;
  }
  
  .icon {
    left: 50;
    top: 50;
    transform: translate(-50%, -50%);
  }
}
</style>
