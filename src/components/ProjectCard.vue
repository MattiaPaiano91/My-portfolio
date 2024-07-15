<script>
// import { useCounterStore } from "../stores/project";
// export default {
//   data() {
//     return {};
//   },
//   props: {
//     project: Object,
//   },
//   methods: {
//     goToProduct() {
//       let store = useCounterStore();
//       store.singleProject = this.project;
//     },
//   },
// };
</script>

<template>
  <!-- <div class="card p-3 me-4">
    <div class="card-id">
      <h5 class="d-inline-block">Id progetto:</h5>
      {{ project.id }}
    </div>
    <div class="card-title">
      <h5 class="d-inline-block">Nome del progetto:</h5>
      {{ project.title }}
    </div>
    <div class="card-slug">
      <h5 class="d-inline-block">Slug:</h5>
      {{ project.slug }}
    </div>
    <div v-if="project.type != null" class="card-type">
      <h5 class="d-inline-block">Tipo di sito:</h5>
      {{ project.type.name }}
    </div>
    <div v-else>
      <h5>Nessuna tipologia specificata</h5>
    </div>
    <div class="card-technologies">
      <h5 class="d-inline-block">Tecnologie usate:</h5>
      <span
        v-for="(elem, i) in project.technologies"
        :key="i"
        class="badge text-bg-primary me-1"
        >{{ elem.title }}</span
      >
    </div>
    <div class="card-time">
      <div>
        <h5 class="d-inline-block">Data di creazione:</h5>
        {{ project.created_at.split("T")[0] }}
      </div>
      <div>
        <h5 class="d-inline-block">Oario di creazione:</h5>
        {{ project.created_at.split("T")[1].split(".")[0] }}
      </div>
    </div>
    <router-link
      :to="{ name: 'show-project' }"
      @click="goToProduct"
      class="btn btn-outline-dark"
      >Mostra il progetto</router-link
    >
  </div> -->
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/reset";
.card {
  width: calc(100% / 3);
}
</style>
