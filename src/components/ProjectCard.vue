<script setup>
import SkillBadge from "./SkillBadge.vue";

const emit = defineEmits(["open"]);

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const accentMap = {
  indigo: "accent-indigo",
  violet: "accent-violet",
  slate: "accent-slate",
  sky: "accent-sky",
  soft: "accent-soft",
};
</script>

<template>
  <article class="project-card" :class="accentMap[project.accent] || 'accent-indigo'">
    <router-link class="project-link" :to="{ name: 'show-project' }" @click="emit('open', project.id)">
      <div class="project-cover">
        <img :src="project.image" :alt="project.title" />
      </div>

      <div class="project-body">
        <div class="project-topline">
          <span class="project-kind">{{ project.featured ? "Progetto principale" : "Progetto minore" }}</span>
        </div>

        <h3>{{ project.title }}</h3>
        <p class="summary">{{ project.summary }}</p>

        <div class="tech-list">
          <SkillBadge
            v-for="item in project.tech"
            :key="item"
            :label="item"
            tone="subtle"
          />
        </div>

        <div class="project-cta">
          <span>Apri dettaglio</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </router-link>
  </article>
</template>

<style lang="scss" scoped>
.project-card {
  height: 100%;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(152, 158, 221, 0.18);
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 55px rgba(15, 23, 42, 0.12);
  }
}

.project-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.project-cover {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.project-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.3rem;
}

.project-kind {
  display: inline-flex;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(255, 255, 255, 0.72);
}

h3 {
  margin: 0.9rem 0 0.7rem;
  font-size: 1.2rem;
}

.summary {
  margin: 0;
  line-height: 1.7;
  opacity: 0.82;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.1rem;
}

.project-cta {
  margin-top: auto;
  padding-top: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
}

.accent-indigo .project-cover {
  background: linear-gradient(135deg, #dbe2ff, #eef2ff);
}

.accent-violet .project-cover {
  background: linear-gradient(135deg, #eadcff, #f4eeff);
}

.accent-slate .project-cover {
  background: linear-gradient(135deg, #dfe7f4, #edf2f7);
}

.accent-sky .project-cover {
  background: linear-gradient(135deg, #dcf2ff, #eef9ff);
}

.accent-soft .project-cover {
  background: linear-gradient(135deg, #f5f5f7, #ffffff);
}
</style>
