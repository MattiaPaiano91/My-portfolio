<script>
import { data } from "../store.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
export default {
  data() {
    return {
      data,
    };
  },
  mounted() {
    function updateAge() {
      const birthDate = new Date("1991-09-22"); // Sostituisci con la tua data di nascita
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      document.getElementById("age").textContent = age;
    }

    updateAge();
    setInterval(updateAge, 1000 * 60 * 60 * 24); // Aggiorna ogni giorno

    if (window.innerWidth > 560) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".white-back", {
        xPercent: 100,

        duration: 3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".tech-stack",
          toggleActions: "play pause none pause",
          end: "center top",
        },
      });
      const elements = [".bio", ".studies", ".out", ".tv", ".idea"];
      const directions = [-100, 100, -100, 100, -100];

      elements.forEach((element, index) => {
        gsap.set(element, { opacity: 0, xPercent: `${directions[index]}` });

        gsap.to(element, {
          opacity: 1,
          xPercent: 0,
          duration: 1,
          delay: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            toggleActions: "play pause none pause",
          },
        });
      });
    }
  },
};
</script>

<template>
  <div class="col-12 position-relative p-5 p-xl-0">
    <div class="back-img">
      <div :class="data.themeFlag ? 'white-back' : 'black-back'"></div>
    </div>
    <div class="about-me">
      <section class="bio-section bio">
        <h2>Ciao!</h2>
        <p>
          <span class="emoji">👨‍💻</span>Sono Mattia, uno sviluppatore web di
          <span id="age" class="highlight">32</span> anni. Il mio viaggio nel
          mondo dello sviluppo è nato dalla mia passione per il gaming e la
          tecnologia, e ora sono qui per lasciare il mio segno nel web.
        </p>
      </section>

      <section class="bio-section studies">
        <p>
          <span class="emoji">🎓</span> Ho completato un intenso corso di
          formazione nell'aprile 2024, dove ho acquisito solide competenze in
          diverse tecnologie web. Il mio toolkit include:
        </p>
        <div class="tech-stack">
          <span class="tech-item">HTML</span>
          <span class="tech-item">CSS</span>
          <span class="tech-item">JavaScript</span>
          <span class="tech-item">Vue.js</span>
          <span class="tech-item">PHP</span>
          <span class="tech-item">Laravel</span>
          <span class="tech-item">MySQL</span>
          <span class="tech-item">Sass</span>
        </div>
        <p>
          Inoltre, sono sempre alla ricerca di nuove sfide e sto espandendo le
          mie competenze con:
        </p>
        <div class="tech-stack">
          <span class="tech-item learning">React</span>
          <span class="tech-item learning">GSAP</span>
          <span class="tech-item learning">Ionic</span>
          <span class="tech-item learning">GraphQL</span>
        </div>
        <p>
          Questa combinazione di tecnologie mi permette di creare applicazioni
          web complete, dal frontend al backend, con un occhio di riguardo per
          l'esperienza utente.
        </p>
      </section>
      <section class="bio-section out py-3">
        <h2>Fuori dal codice</h2>
        <p>
          <span class="emoji">🥁</span> Quando non sto programmando, mi
          troverete probabilmente a suonare la batteria. La musica è la mia
          seconda passione.
        </p>
      </section>

      <section class="bio-section tv">
        <p>
          <span class="emoji">📺</span> Sono un grande appassionato di serie TV
          e anime. Anche se il tempo libero scarseggia, cerco sempre di
          ritagliarmi un momento per una buona storia.
        </p>
      </section>

      <section class="bio-section idea">
        <p class="py-2">
          <span class="emoji">💡</span>Sono alla ricerca di nuove sfide
          tecnologiche e pronto a collaborare su progetti innovativi. Se state
          cercando un developer che porta entusiasmo e creatività nel vostro
          team, sarò felice di parlarne!
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.back-img {
  @import "../assets/scss/partials/variables.scss";
  width: 100%;
  height: $mainHeight;
  background-image: url("../../public/img/OndaMattia.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.3;

  .white-back {
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    transform-origin: left;
  }

  .black-back {
    background-color: rgb(15, 15, 15);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    transform-origin: left;
  }
}

.about-me {
  width: 100%;
  height: 100%;
  margin: 20px auto 150px;
  font-size: 1.5rem;
  line-height: 1.6;
  .bio-section {
    margin-bottom: 100px;
    * {
      margin: 0 auto;
      max-width: 800px !important;
    }
  }

  .emoji {
    font-size: 1.4em;
    object-fit: contain;
  }

  .highlight {
    background-color: #f1c40f;
    padding: 3px 6px;
    border-radius: 15px;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: 10px;
    margin: 30px auto;
  }

  .tech-item {
    background-color: #989edd;
    color: white;
    padding: 8px 13px;
    border-radius: 15px;
    font-size: 0.9em;
  }

  .learning {
    background-color: #2ecc71;
  }
}
.bio,
.studies,
.out,
.tv,
.idea {
  will-change: transform;
}
@import "/src/assets/scss/responsive.scss";
</style>
