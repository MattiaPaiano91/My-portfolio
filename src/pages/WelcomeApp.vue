<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import AboutMe from "@/components/AboutMe.vue";
import { useUiStore } from "@/stores/ui.js";

const uiStore = useUiStore();

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "auto" });

  gsap.fromTo(
    ".hero-animate",
    { autoAlpha: 0, y: 32 },
    { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.14, ease: "power3.out" }
  );
});
</script>

<template>
  <div class="landing-page" :class="uiStore.themeFlag ? 'landing-light' : 'landing-dark'">

    <!-- Hero centrato -->
    <section class="hero-section">
      <div class="hero-inner">
        <div class="hero-avatar hero-animate">
          <img src="/img/foto.webp" alt="Ritratto di Mattia Paiano" />
        </div>

        <div class="hero-badge hero-animate">
          <span class="badge-dot"></span>
          Disponibile per nuovi progetti
        </div>

        <h1 class="hero-headline hero-animate">
          Mattia Paiano
        </h1>

        <p class="hero-desc hero-animate">
          Full-stack: frontend moderni, backend ordinati, dashboard, mappe e API.
          Niente magie — solo roba solida che resta chiara anche dopo qualche mese.
        </p>

        <div class="hero-actions hero-animate">
          <!-- <router-link class="cta-primary" :to="{ name: 'project-index' }">
            Guarda i progetti &rarr;
          </router-link> -->
          <router-link class="cta-secondary" :to="{ name: 'contact-me' }">
            Contattami
          </router-link>
        </div>
      </div>
    </section>

    <!-- Tech ticker -->
    <!-- <div class="tech-ticker">
      <div class="tech-ticker-track">
        <span
          v-for="(item, i) in [...carouselItems, ...carouselItems]"
          :key="i"
          class="tech-ticker-item"
        >
          {{ item }}
        </span>
      </div>
    </div> -->

    <!-- Sezione editoriale -->
    <AboutMe id="about-me" />

    <!-- Progetti in evidenza
    <section class="home-projects">
      <div class="home-projects-inner">
        <SectionTitle
          eyebrow="Portfolio"
          title="Progetti recenti"
          description="Una selezione di lavori su backend, mappe, autenticazione e strumenti interni. Niente fuochi d'artificio, solo cose costruite con criterio."
          align="center"
        />
        <div class="project-list">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
            @open="openProject"
          />
        </div>
      </div>
    </section> -->

  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  min-height: calc(100vh - 96px);
}

.landing-light {
  background:
    radial-gradient(circle at 50% 0%, rgba(152, 158, 221, 0.2), transparent 38%),
    linear-gradient(180deg, #f8f9ff 0%, #ffffff 55%);
}

.landing-dark {
  background:
    radial-gradient(circle at 50% 0%, rgba(152, 158, 221, 0.18), transparent 32%),
    linear-gradient(180deg, #101828 0%, #172033 55%);
}

/* ── Hero centrato ── */
.hero-section {
  padding: 3rem 1rem 2.5rem;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
  gap: 1.25rem;
}

.hero-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(152, 158, 221, 0.35);
  box-shadow: 0 8px 32px rgba(152, 158, 221, 0.22);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(152, 158, 221, 0.3);
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.07);

  .landing-dark & {
    background: rgba(16, 24, 40, 0.7);
    border-color: rgba(152, 158, 221, 0.25);
  }
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
}

.hero-headline {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  line-height: 1.06;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.02em;
}

.hero-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.75;
  max-width: 56ch;
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.25rem;
}

.cta-primary,
.cta-secondary {
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-primary {
  background: #989edd;
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(152, 158, 221, 0.32);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(152, 158, 221, 0.42);
  }
}

.cta-secondary {
  color: inherit;
  border: 1px solid rgba(152, 158, 221, 0.35);

  &:hover {
    transform: translateY(-2px);
  }
}

/* ── Tech ticker ── */
.tech-ticker {
  overflow: hidden;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(152, 158, 221, 0.14);
  border-bottom: 1px solid rgba(152, 158, 221, 0.14);
  margin-bottom: 4rem;
}

.tech-ticker-track {
  display: flex;
  gap: 3.5rem;
  width: max-content;
  animation: ticker-scroll 28s linear infinite;
}

.tech-ticker-item {
  white-space: nowrap;
  font-size: 0.88rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.42;
  flex-shrink: 0;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── Progetti ── */
.home-projects {
  padding: 0 0 5rem;
}

.home-projects-inner {
  width: min(1140px, 100% - 2rem);
  margin: 0 auto;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  > * {
    flex: 1 1 calc((100% - 2.5rem) / 3);
    min-width: 280px;
  }
}

/* ── Responsive ── */
@media screen and (max-width: 600px) {
  .hero-section {
    padding-top: 2rem;
  }

  .project-list > * {
    flex-basis: 100%;
  }
}
</style>
