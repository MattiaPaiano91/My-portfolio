<script setup>
import { computed, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import AboutMe from "../components/AboutMe.vue";
import SectionTitle from "../components/SectionTitle.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { data } from "../store.js";
import { useProjectStore } from "../stores/project";

const projectStore = useProjectStore();
const featuredProjects = computed(() => projectStore.getProjects.filter((project) => project.featured).slice(0, 3));

function openProject(projectId) {
  projectStore.setActiveProjectId(projectId);
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "auto" });

  gsap.fromTo(
    ".hero-animate",
    { autoAlpha: 0, y: 32 },
    { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.14, ease: "power3.out" }
  );

  if (window.innerWidth > 768) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-visual", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        scrub: 1.2,
      },
    });
  }
});
</script>

<template>
  <div class="landing-page" :class="data.themeFlag ? 'landing-light' : 'landing-dark'">
    <section class="hero-section container-fluid">
      <div class="row align-items-center g-4 g-lg-5">
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <div class="hero-visual">
            <div class="visual-frame">
              <img src="/img/foto.webp" alt="Ritratto di Mattia Paiano" />
            </div>
            <div class="visual-badge hero-animate">Frontend, backend, GIS e roba fatta per lavorare meglio</div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="hero-copy">
            <p class="hero-kicker hero-animate">Mattia Paiano | Web Developer / Full-Stack</p>
            <h1 class="hero-animate">Creo applicazioni web solide, chiare e fatte per durare.</h1>
            <p class="hero-text hero-animate">
              Mi occupo di frontend, backend e strumenti interni: dashboard, mappe interattive,
              API Python e applicazioni dove i dati devono essere organizzati bene e funzionare senza attriti.
            </p>

            <div class="hero-actions hero-animate">
              <router-link class="cta-primary" :to="{ name: 'project-index' }">
                Guarda i progetti
              </router-link>
              <router-link class="cta-secondary" :to="{ name: 'contact-me' }">
                Contattami
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AboutMe id="about-me" />

    <section class="home-projects">
      <div class="container">
        <SectionTitle
          eyebrow="Portfolio"
          title="Alcuni progetti che raccontano meglio il mio lavoro di oggi"
          description="Qui sotto ho raccolto le cose che mi rappresentano di piu: applicazioni interne, backend, mappe, autenticazione e gestione di dati un po meno banali del solito."
          align="center"
        />

        <div class="project-grid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
            @open="openProject"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  min-height: calc(100vh - 96px);
}

.landing-light {
  background:
    radial-gradient(circle at top left, rgba(152, 158, 221, 0.22), transparent 28%),
    linear-gradient(180deg, #f8f9ff 0%, #ffffff 55%);
}

.landing-dark {
  background:
    radial-gradient(circle at top left, rgba(152, 158, 221, 0.2), transparent 24%),
    linear-gradient(180deg, #101828 0%, #172033 55%);
}

.hero-section {
  padding: 2rem 1rem 3rem;
}

.hero-visual {
  position: relative;
  width: min(460px, 100%);
}

.visual-frame {
  padding: 1rem;
  border-radius: 36px;
  background: linear-gradient(145deg, rgba(152, 158, 221, 0.2), rgba(255, 255, 255, 0.65));
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.14);

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 28px;
  }
}

.visual-badge {
  position: absolute;
  right: -1rem;
  bottom: 2rem;
  padding: 0.85rem 1rem;
  border-radius: 18px;
  background: #101828;
  color: #ffffff;
  box-shadow: 0 15px 40px rgba(16, 24, 40, 0.28);
}

.hero-copy {
  max-width: 640px;
}

.hero-kicker {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  color: #989edd;
  margin-bottom: 1rem;
}

.hero-copy h1 {
  font-size: clamp(2.7rem, 6vw, 5.2rem);
  line-height: 1.02;
  margin-bottom: 1rem;
}

.hero-text {
  font-size: 1.08rem;
  line-height: 1.8;
  opacity: 0.88;
  max-width: 58ch;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.cta-primary,
.cta-secondary {
  text-decoration: none;
  padding: 0.95rem 1.35rem;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.cta-primary {
  background: #989edd;
  color: #ffffff;
  box-shadow: 0 14px 24px rgba(152, 158, 221, 0.28);
}

.cta-secondary {
  color: inherit;
  border: 1px solid rgba(152, 158, 221, 0.35);
}

.cta-primary:hover,
.cta-secondary:hover {
  transform: translateY(-2px);
}

.home-projects {
  padding: 0 0 5rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

@media screen and (max-width: 991px) {
  .hero-section {
    padding-top: 1rem;
  }

  .hero-copy {
    text-align: center;
    margin: 0 auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .visual-badge {
    right: 1rem;
    bottom: 1rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
