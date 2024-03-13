<script>
    export default {

        data(){
            return{

            };
        },
        props:{
            project:Object
        }
    };
</script>

<template>
    
        <div class="card p-3 me-4">
            <div class="card-id">
               <h5 class=" d-inline-block ">Id progetto:</h5> {{ project.id }}
            </div>
            <div class="card-title">
               <h5 class=" d-inline-block ">Nome del progetto:</h5> {{ project.title }}
            </div>
            <div class="card-slug">
               <h5 class=" d-inline-block ">Slug:</h5> {{ project.slug }}
            </div>
            <div class="card-type">
              <!-- <h5 class=" d-inline-block ">Tipo di sito:</h5> {{ project.type.name }} -->
            </div>
            <div class="card-technologies">
              <h5 class=" d-inline-block "> Tecnologie usate:</h5>  <span v-for="elem in project.technologies" class="badge text-bg-primary me-1">{{ elem.title }}</span>
            </div>
            <div class="card-time">
               <h5 class=" d-inline-block ">Data di creazione:</h5> {{ project.created_at }}
            </div>
        </div>
    
</template>

<style>

</style>