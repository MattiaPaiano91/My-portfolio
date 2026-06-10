<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SectionTitle from "@/components/SectionTitle.vue";
import SkillBadge from "@/components/SkillBadge.vue";
import { introCards, experienceHighlights } from "@/data/about.js";
import { skillGroups } from "@/data/skills.js";

onMounted(() => {
  if (window.innerWidth > 560) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".reveal-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: index * 0.04,
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
        }
      );
    });
  }
});
</script>

<template>
  <section class="w-full px-4 pt-4">
    <div class="about-list">
      <article
        v-for="card in introCards"
        :key="card.title"
        class="bio-card reveal-card"
      >
        <p class="card-label">{{ card.title }}</p>
        <p>{{ card.text }}</p>
      </article>
    </div>

    <section class="experience-block reveal-card">
      <SectionTitle
        eyebrow="Esperienza"
        title="Negli ultimi progetti ho lavorato piu su software vero che su esercizi da portfolio."
        description="La parte che mi interessa di piu e questa: interfacce operative, backend che reggono bene, dati geospaziali, autenticazione e architetture pensate per essere mantenute senza impazzire dopo due mesi."
      />

      <div class="experience-list">
        <article
          v-for="item in experienceHighlights"
          :key="item"
          class="experience-card"
        >
          <p>{{ item }}</p>
        </article>
      </div>
    </section>

    <section class="skills-block reveal-card">
      <SectionTitle
        eyebrow="Skills"
        title="Stack attuale"
        description="Ho lasciato un po sullo sfondo le tecnologie con cui ho iniziato e qui ho tenuto quelle che oggi uso piu spesso o che sento piu mie."
      />

      <div class="skills-groups">
        <article
          v-for="group in skillGroups"
          :key="group.id"
          class="skill-group"
        >
          <h3>{{ group.title }}</h3>
          <div class="skill-list">
            <SkillBadge
              v-for="skill in group.items"
              :key="skill"
              :label="skill"
              tone="strong"
            />
          </div>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
.about-list {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.bio-card,
.experience-block,
.skills-block,
.experience-card,
.skill-group {
  color: #101828;
  border-radius: 28px;
  border: 1px solid rgba(152, 158, 221, 0.18);
  background:
    linear-gradient(180deg, rgba(152, 158, 221, 0.08), rgba(152, 158, 221, 0.03)),
    rgba(255, 255, 255, 0.82);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.bio-card {
  flex: 1 1 calc((100% - 2.4rem) / 3);
  min-width: 280px;
  padding: 1.6rem;

  p:last-child {
    margin: 0;
    line-height: 1.8;
  }
}

.card-label {
  margin-bottom: 0.85rem !important;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem !important;
  color: #667085;
}

.experience-block,
.skills-block {
  width: min(1120px, 100%);
  margin: 1.2rem auto 0;
  padding: 1.6rem;
}

.experience-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.experience-card {
  flex: 1 1 calc((100% - 1rem) / 2);
  min-width: 280px;
  padding: 1.25rem;

  p {
    margin: 0;
    line-height: 1.75;
  }
}

.skills-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-group {
  flex: 1 1 calc((100% - 1rem) / 2);
  min-width: 280px;
  padding: 1.25rem;

  h3 {
    margin: 0 0 1rem;
    font-size: 1.05rem;
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

@media screen and (max-width: 991px) {
  .bio-card,
  .experience-card,
  .skill-group {
    flex-basis: 100%;
  }
}
</style>
