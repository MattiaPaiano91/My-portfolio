<script setup>
import { onBeforeMount } from "vue";
import { useProjectStore } from "../stores/project";
const projectStore = useProjectStore();
let project = projectStore.getActiveProject;
onBeforeMount(()=> {
  window.scroll({
        top: 0,
        behavior: "instant",
      });
})
</script>

<template>
  <div class="container pb-5">
    <div class="show-img my-5">
      <img :src="project.img" alt="" />
    </div>
    <div class="description">
      <p>
        {{ project.description }}
      </p>
      <a target="_blank" :href="project.url">Vai al sito</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/reset";
@import "../assets/scss/partials/variables.scss";
.container {
  min-height: $mainHeight;
  .show-img {
    width: 60%;
    width: 500px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      object-fit: contain;
    }
  }
  .description {
    border: 2px solid $violet;
    border-radius: 10px;
    font-size: large;
    padding: 1.5rem;
    a {
      color: inherit;
    }
  }
}
@import "/src/assets/scss/responsive.scss";
</style>
