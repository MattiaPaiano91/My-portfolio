<script>
import axios from "axios";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
  data() {
    return {
      project: null,
    };
  },
  components: {
    AppFooter,
    AppHeader,
  },
  created() {
    axios
      .get(`http://localhost:8000/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data.result;
        console.log(response)
      })
      .catch((error) => {
        console.error("Errore nella chiamata API:", error);
      });
  },
};
</script>

<template>

  <main>
    <div class="card p-3 me-4">
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
          class="badge text-bg-primary me-1"
          :key="i"
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
      <Router-link
        :to="{ name: 'project-index' }"
        class="btn btn-outline-primary"
        >Vedi tutti i progetti</Router-link
      >
    </div>
  </main>

  <AppFooter />
</template>

<style lang="scss" scoped>
    @use "../assets/scss/main.scss" as *;
    @import "../assets/scss/partials/reset";
    .card{
        width: 200px;
    }
    main{
        height: calc(100vh - 200px);
        h5{
            margin:0 auto;
        }
        width: 100%;
        .button-box{
            width: 50%;
            margin: 0 auto;
        }
    }
</style>
