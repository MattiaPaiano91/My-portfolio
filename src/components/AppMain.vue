<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    data() {
        return {
            projects:[],
            currentPage:1,
            lastPage:1
        };
    },
    methods: {
        nextPage(){
            if(this.currentPage < this.lastPage){
                axios
            .get('http://localhost:8000/api/projects',{
                params:{
                    page: this.currentPage + 1
                }
            })
            .then(response => {
            console.log(response.data);
            this.projects = response.data.result.data;
            this.currentPage = response.data.result.current_page;
            this.lastPage = response.data.result.last_page;
            })
            .catch(error => {
            console.error('Errore nella chiamata API:', error);
            });
            }
        },
        prevPage(){
            if(this.currentPage > 1 ){
                axios
            .get('http://localhost:8000/api/projects',{
                params:{
                    page: this.currentPage - 1
                }
            })
            .then(response => {
            console.log(response.data);
            this.projects = response.data.result.data;
            this.currentPage = response.data.result.current_page;
            this.lastPage = response.data.result.last_page;
            })
            .catch(error => {
            console.error('Errore nella chiamata API:', error);
            });
            }
        }
    },
    components:{
        ProjectCard
    },
    created() {
        axios
            .get('http://localhost:8000/api/projects',{
                params:{
                    page: this.currentPage
                }
            })
            .then(response => {
            console.log(response.data);
            this.projects = response.data.result.data;
            this.currentPage = response.data.result.current_page;
            
            this.lastPage = response.data.result.last_page;
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
        <button @click="prevPage()">
            Pagina precedente
        </button>
        <button @click="nextPage()">
            Pagina successiva
        </button>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
</style>
