<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    data() {
        return {
            projects:[],
        };
    },
    methods: {

    },
    components:{
        ProjectCard
    },
    created() {
        axios
            .get('http://localhost:8000/api/projects?page=1')
            .then(response => {
            console.log(response.data);
            this.projects = response.data.result.data;
            })
            .catch(error => {
            console.error('Errore nella chiamata API:', error);
            });
        }
}
</script>

<template>
    <main>
        <div class="container-fluid d-flex ">
                <ProjectCard
                v-for="project in projects"
                :project="project"
                />
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
</style>
