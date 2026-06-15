<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { serviceCards, introCards } from "@/data/about.js";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { autoAlpha: 0, y: 36 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.04,
        scrollTrigger: { trigger: card, start: "top 84%" },
      }
    );
  });
});
</script>

<template>
  <section class="about-wrap">

    <!-- Card numerate servizi -->
    <div class="service-row">
      <article
        v-for="card in serviceCards"
        :key="card.num"
        class="service-card reveal-card"
      >
        <span class="service-num">{{ card.num }}</span>
        <p class="service-label">{{ card.label }}</p>
      </article>
    </div>

    <!-- Chi c'è dietro -->
    <div class="behind-section">
      <div class="behind-header reveal-card my-2">
        <p class="section-eyebrow">Chi c'è dietro</p>
        <h2 class="behind-title">Un po' di contesto:</h2>
      </div>

      <div class="bio-grid">
        <article
          v-for="card in introCards"
          :key="card.eyebrow"
          class="bio-card reveal-card"
        >
          <p class="bio-eyebrow">{{ card.eyebrow }}</p>
          <h3 class="bio-title">{{ card.title }}</h3>
          <p class="bio-text">{{ card.text }}</p>
        </article>
      </div>
    </div>

    <!-- CTA banner -->
    <div class="cta-banner reveal-card">
      <div class="cta-banner-body">
        <div>
          <h2 class="cta-banner-title">Hai una cosa che deve funzionare sul serio?</h2>
          <p class="cta-banner-sub">Raccontamela: capiamo insieme se faccio al caso tuo.</p>
        </div>
        <router-link class="cta-banner-btn" :to="{ name: 'contact-me' }">
          Contattami
        </router-link>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
.about-wrap {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* ── Card numerate ── */
.service-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.service-card {
  flex: 1 1 calc((100% - 3rem) / 4);
  min-width: 200px;
  padding: 1.5rem 1.25rem;
  border-radius: 20px;
  border: 1px solid rgba(152, 158, 221, 0.18);
  background:
    linear-gradient(160deg, rgba(152, 158, 221, 0.08), rgba(152, 158, 221, 0.02)),
    rgba(255, 255, 255, 0.78);
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);
}

.service-num {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #989edd;
  margin-bottom: 0.75rem;
}

.service-label {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  color: #101828;
}

/* ── Chi c'è dietro ── */
.behind-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.behind-header {
  max-width: 560px;
}

.section-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  font-weight: 600;
  color: #989edd;
  margin-bottom: 0.75rem;
}

.behind-title {
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
}

.bio-grid {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.bio-card {
  flex: 1 1 calc((100% - 3.75rem) / 4);
  min-width: 240px;
  padding: 1.6rem;
  border-radius: 20px;
  border: 1px solid rgba(152, 158, 221, 0.18);
  background:
    linear-gradient(160deg, rgba(152, 158, 221, 0.08), rgba(152, 158, 221, 0.02)),
    rgba(255, 255, 255, 0.78);
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);
}

.bio-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  font-weight: 600;
  color: #667085;
  margin-bottom: 0.6rem;
}

.bio-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: #101828;
  line-height: 1.25;
}

.bio-text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.75;
  color: #101828;
  opacity: 0.8;
}

/* ── CTA banner ── */
.cta-banner {
  border-radius: 24px;
  background: linear-gradient(135deg, #5c60c8, #989edd);
  padding: 2.5rem 2rem;
}

.cta-banner-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-banner-title {
  font-size: clamp(1.25rem, 3vw, 1.65rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.4rem;
  line-height: 1.2;
}

.cta-banner-sub {
  margin: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.5;
}

.cta-banner-btn {
  text-decoration: none;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  background: #ffffff;
  color: #5c60c8;
  font-weight: 700;
  font-size: 0.95rem;
  white-space: nowrap;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
  }
}

/* ── Responsive ── */
@media screen and (max-width: 900px) {
  .service-card {
    flex-basis: calc((100% - 1rem) / 2);
  }
}

@media screen and (max-width: 600px) {
  .service-card,
  .bio-card {
    flex-basis: 100%;
  }

  .cta-banner-body {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
