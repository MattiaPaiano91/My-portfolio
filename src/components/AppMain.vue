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
        },
        getPage(i){
               axios
            .get('http://localhost:8000/api/projects',{
                params:{
                    page: i
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
        <div class="container-fluid d-flex justify-content-center ">
                <ProjectCard
                v-for="project in projects"
                :project="project"
                />
        </div>
        <div class="button-box d-flex justify-content-center mt-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li @click="prevPage()" class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li @click="getPage(i)" v-for="(page, i) in lastPage" class="page-item"><a class="page-link" href="#">{{ page }}</a></li>
                    <li  @click="nextPage()" class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
main{
    width: 100%;
    .button-box{
        width: 50%;
        margin: 0 auto;
    }
}
</style>
