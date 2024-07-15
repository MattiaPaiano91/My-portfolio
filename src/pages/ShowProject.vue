<script setup>
import { useProjectStore } from "../stores/project";
const projectStore = useProjectStore();
console.log(projectStore.getActiveProject) 
 let project = projectStore.getActiveProject;
 console.log(project)
</script>

<template>
  <div class="container">
    <div class="img-box">
      <img :src="project.img" alt="">
    </div>
    <div class="project-description">
      
    </div>
    <div class="project-url">
      <a target="_blank" :href="project.url">Provalo!</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/reset";
.container{
  min-height: calc(100vh - 460px);
}
a{
      text-decoration: none;
      color: inherit;
    }
</style>
