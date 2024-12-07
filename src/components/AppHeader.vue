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
    gsap.set(".fa-sun", { autoAlpha: 0, duration: 0 });
     gsap.set(".animation-link", { autoAlpha: 0 });
    gsap.set(".fa-moon", { x: 23, duration: 0 });
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
        gsap.to(".logo-box", { autoAlpha: 0 });
        gsap.to("header", { height: 150, duration: 0.5 });
        gsap.fromTo(
          ".animation-link",
          { x: -100, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.5, stagger: 0.2 }
        );
        gsap.fromTo(".fa-bars", { autoAlpha: 1 }, { autoAlpha: 0 });
        gsap.fromTo(".fa-x", { autoAlpha: 0 }, { autoAlpha: 1 });
      } else {
        gsap.to(".logo-box", { autoAlpha: 1, delay: 0.5 });
        gsap.to("header", { height: 100, duration: 0.5 });
        gsap.to(".animation-link", {
          x: -100,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.1,
        });
        gsap.fromTo(".fa-bars", { autoAlpha: 0 }, { autoAlpha: 1 });
        gsap.fromTo(".fa-x", { autoAlpha: 1 }, { autoAlpha: 0 });
      }
      this.menuFlag = !this.menuFlag;
    });

    let menuItems = document.querySelectorAll(".animation-link");

    const menuItemArray = Array.of(...menuItems);
    
    menuItemArray.forEach((menuItem) => {
      let tl = gsap
        .timeline({ paused: true })
        .to(menuItem.querySelector(".hover"), {
          backgroundColor: "#989EDD",
          borderRadius: "10px",
          duration: 0.5,
        });
      menuItem.addEventListener("mouseenter", () => tl.play());
      menuItem.addEventListener("mouseleave", () => tl.reverse());
    });
  },
};
</script>

<template>
  <header
    :class="data.themeFlag ? 'mode-light' : 'dark-header'"
    class="container-fluid"
  >
    <div class="position-relative d-block d-sm-none">
      <button class="d-sm-none position-fixed offcanvas-button" type="button">
        <i
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          class="icon fa-solid fa-bars fa offcanvas-icon z-1"
        ></i>
      </button>

      <div
        class="offcanvas w-100 offcanvas-start d-sm-none"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="offcanvas-img">
            <img src="/public/img/LogoBianco.svg" alt="" />
          </div>
          <nav class="d-flex flex-column">
            <router-link class="router-link" :to="{ name: 'WelcomeApp' }">
              <div
                :style="data.themeFlag ? 'color:black' : 'color:white'"
                class="hover"
                data-bs-dismiss="offcanvas"
              >
                Home
              </div>
            </router-link>
            <router-link class="router-link" :to="{ name: 'project-index' }">
              <div
                :style="data.themeFlag ? 'color:black' : 'color:white'"
                class="hover"
                data-bs-dismiss="offcanvas"
              >
                Porfolio
              </div>
            </router-link>
            <router-link class="router-link" :to="{ name: 'contact-me' }">
              <div
                :style="data.themeFlag ? 'color:black' : 'color:white'"
                class="hover"
                data-bs-dismiss="offcanvas"
              >
                Contattami
              </div>
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div
      id="header-container"
      class="container-fluid justify-content-around align-items-center d-none d-sm-flex"
    >
      <div class="icon-holder burgher-menu position-relative">
        <i class="icon fa-solid fa-bars fa position-absolute"></i>
        <i class="icon fa-solid fa-x fa position-absolute"></i>
      </div>

      <div class="logo-box burgher-menu">
        <img
          :class="data.themeFlag ? '' : 'inverted'"
          src="/img/LogoBianco.svg"
          alt=""
        />
      </div>
      <nav class="d-flex justify-content-around w-100">
        <div class="animation-link">
          <router-link class="router-link" :to="{ name: 'WelcomeApp' }">
            <div
              :style="data.themeFlag ? 'color:black' : 'color:white'"
              class="hover"
            >
              Home
            </div>
          </router-link>
        </div>

        <div class="animation-link">
          <router-link class="router-link" :to="{ name: 'project-index' }">
            <div
              :style="data.themeFlag ? 'color:black' : 'color:white'"
              class="hover"
            >
              Portfolio
            </div>
          </router-link>
        </div>
        <div class="animation-link">
          <router-link class="router-link" :to="{ name: 'contact-me' }">
            <div
              :style="data.themeFlag ? 'color:black' : 'color:white'"
              class="hover"
            >
              Contattami
            </div>
          </router-link>
        </div>
      </nav>
      <div class="d-flex align-items-center icons">
        <i @click="switchToLight()" class="fa-regular fa fa-sun mode-dark"></i>
        <i @click="switchToDark()" class="fa-regular fa fa-moon mode-light"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;

@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.dark-header {
  background-color: #1d242d;
  color: white;
}
header {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgray;
  position: fixed;
  z-index: 2;
  font-size: 1.4em;
  #header-container {
    height: 100%;
  }
  .offcanvas-img {
    width: 50%;
    margin: 0 auto;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .offcanvas-button {
    font-size: 1.5rem;
    padding: 10px 20px;
    background-color: transparent;
    left: 3%;
    top: 5%;
  }
  .animation-link {
    width: 350px;

    .hover {
      width: 100%;
      padding: 5px 50px;
      text-align: center;
      font-weight: 300;
      font-size: 1.8rem;
    }
  }
  .icon-holder {
    width: 30px;
  }
  nav {
    width: 60%;
  }
  .logo-box {
    position: absolute;
    width: 100px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
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

  .animation-link {
    opacity: 0;
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
.inverted {
  filter: invert(1);
}

@import "/src/assets/scss/responsive.scss";
</style>
