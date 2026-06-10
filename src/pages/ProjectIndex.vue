<script setup>
import { computed, onMounted } from "vue";
import { useProjectStore } from "@/stores/project.js";
import SectionTitle from "@/components/SectionTitle.vue";
import ProjectCard from "@/components/ProjectCard.vue";

const projectStore = useProjectStore();
const orderedProjects = computed(() => {
  const featured = projectStore.getProjects.filter((project) => project.featured);
  const secondary = projectStore.getProjects.filter((project) => !project.featured);
  return [...featured, ...secondary];
});

function openProject(projectID) {
  projectStore.setActiveProjectId(projectID);
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
});
</script>

<template>
  <div class="project-index">
    <SectionTitle
      eyebrow="Portfolio"
      title="Progetti selezionati"
      description="Una raccolta piu completa del mio lavoro recente: frontend React/Next.js, backend Python/FastAPI, GIS, database e strumenti interni."
      align="center"
    />

    <div class="project-list">
      <ProjectCard
        v-for="project in orderedProjects"
        :key="project.id"
        :project="project"
        @open="openProject"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/partials/variables.scss" as vars;

.project-index {
  width: min(1140px, 100% - 2rem);
  margin: 0 auto;
  min-height: vars.$mainHeight;
  padding-bottom: 4rem;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  > * {
    flex: 1 1 calc((100% - 1.25rem) / 2);
    min-width: 320px;
  }
}

@media screen and (max-width: 991px) {
  .project-list > * {
    flex-basis: 100%;
  }
}
</style>
