<script setup>
import { onBeforeMount } from "vue";
import { useProjectStore } from "../stores/project";
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const projectStore = useProjectStore();
function scrollToTop() {
      
    }
function watchProject(projectID) {
  projectStore.setActiveProjectId(projectID);
}
onMounted(()=> {
  window.scroll({
        top: 0,
        behavior: "instant",
      });
})
</script>

<template>
  <div class="container index">
    <div
      v-for="project in projectStore.getProjects"
      class="project"
      :key="project.id"
    >
      <router-link
        @click="watchProject(project.id)"
        class="text-decoration-none"
        :to="{ name: 'show-project' }"
      >
        <div class="project-img">
          <img :src="project.img" alt="" />
        </div>
        <div class="project-description my-2">
          <h3>{{ project.title }}</h3>
        </div>
        <div class="project-url d-flex justify-content-between">
          <a target="_blank" :href="project.url">Vedi</a>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/variables.scss";

.container {
  height: $mainHeight;
  .project {
    width: calc(100% / 3);
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    .project-url {
      i {
        font-size: 1.5rem;
        margin-right: 0.8rem;
        transition: 0.5s transform ease-in-out;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    &:hover {
      img {
        transform: scale(1.05);
      }
      i {
        transform: scale(1.3);
      }
    }

    .project-img {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        object-fit: contain;
        transition: 0.5s transform ease-in-out;
      }
    }
  }
}
@import "/src/assets/scss/responsive.scss";
</style>
