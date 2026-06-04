<script setup>
import { computed, onMounted } from "vue";
import { useProjectStore } from "../stores/project";
import SectionTitle from "../components/SectionTitle.vue";
import ProjectCard from "../components/ProjectCard.vue";

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
  <div class="container project-index">
    <SectionTitle
      eyebrow="Portfolio"
      title="Progetti selezionati"
      description="Una raccolta piu completa del mio lavoro recente: frontend React/Next.js, backend Python/FastAPI, GIS, database e strumenti interni."
      align="center"
    />

    <div class="project-grid">
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
@import "../assets/scss/partials/variables.scss";

.project-index {
  min-height: $mainHeight;
  padding-bottom: 4rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

@media screen and (max-width: 991px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
