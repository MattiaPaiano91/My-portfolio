<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useProjectStore } from "@/stores/project.js";
import SkillBadge from "@/components/SkillBadge.vue";
import type { Project } from "@/types/index.ts";

const projectStore = useProjectStore();
const project = computed<Project>(() => projectStore.getActiveProject ?? projectStore.getProjects[0]);

onBeforeMount(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
});
</script>

<template>
  <div class="show-page">
    <div class="show-hero">
      <div class="show-copy">
        <p class="eyebrow">{{ project.featured ? "Progetto principale" : "Progetto minore" }}</p>
        <h1>{{ project.title }}</h1>
        <p class="summary">{{ project.summary }}</p>

        <div class="tech-list">
          <SkillBadge
            v-for="item in project.tech"
            :key="item"
            :label="item"
            tone="strong"
          />
        </div>

        <a
          v-if="project.url"
          target="_blank"
          rel="noopener noreferrer"
          :href="project.url"
          class="visit-link"
        >
          Vai al sito
        </a>
      </div>

      <div class="show-media">
        <img :src="project.image" :alt="project.title" />
      </div>
    </div>

    <div class="description">
      <h2>Dettagli</h2>
      <p>{{ project.description }}</p>
      <p v-if="!project.url" class="note">
        Demo live e link repository da completare manualmente quando vuoi pubblicare i riferimenti.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/partials/variables.scss" as vars;

.show-page {
  width: min(1140px, 100% - 2rem);
  margin: 0 auto;
  min-height: vars.$mainHeight;
  padding-bottom: 3rem;
}

.show-hero {
  display: flex;
  gap: 1.5rem;
  align-items: stretch;
  margin: 1.5rem 0 3rem;
}

.show-copy {
  flex: 1.05 1 0;
}

.show-media {
  flex: 0.95 1 0;
}

.show-copy,
.show-media,
.description {
  color: #101828;
  border: 1px solid rgba(152, 158, 221, 0.22);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(152, 158, 221, 0.08), rgba(152, 158, 221, 0.03)),
    rgba(255, 255, 255, 0.82);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.show-copy,
.description {
  padding: 1.7rem;
}

.eyebrow {
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  color: vars.$violet;
}

h1 {
  margin: 0 0 1rem;
}

.summary,
.description p {
  line-height: 1.8;
  opacity: 0.88;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.3rem;
}

.visit-link {
  display: inline-flex;
  margin-top: 1.5rem;
  color: white;
  text-decoration: none;
  padding: 0.88rem 1.2rem;
  border-radius: 999px;
  background: vars.$violet;
}

.show-media {
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    min-height: 320px;
    object-fit: cover;
  }
}

.description {
  max-width: 980px;
  margin: 0 auto;

  h2 {
    margin-bottom: 1rem;
  }
}

.note {
  margin-top: 1rem;
  font-style: italic;
}

@media screen and (max-width: 991px) {
  .show-hero {
    flex-direction: column;
  }
}
</style>
