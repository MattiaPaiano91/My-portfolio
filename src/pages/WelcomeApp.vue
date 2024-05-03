<script>
import { data } from "../store.js";
import AppFooter from '../components/AppFooter.vue';
import {gsap} from 'gsap';


export default {
    data() {
        return {
            data
        };
    },
    computed:{
        
       
    },
    components: {
        AppFooter,
    },  
    methods: {

    },
    mounted() {
        this.$nextTick(() => {
            gsap.fromTo('.name', { opacity:0 },{ opacity:1,duration: 2,delay:0.5,stagger:0.5, ease:"power2"});
        });
    }
}
</script>

<template>
    
    <div class="container-fluid p-0 ">
        <div class="row g-0 ">
            <div class="col-12 ">
                <div class="main-content d-flex justify-content-center align-items-center">
                    <div class="text-center">
                        <h1><span class="name">Mattia</span> <span class="name">Paiano</span> </h1>
                        <p>Web Developer</p>
                        <Router-link :to="{name: 'project-index'}"  class="btn btn-outline-dark" :class="data.imgFlag?'':'btn-outline-light color'">Discover my world</Router-link>
                    </div>
                </div>
            </div>
            <AppFooter/>
        </div>
    </div>
            
</template>

<style lang="scss" scoped>

    @use "../assets/scss/main" as *;
    @import "../assets/scss/partials/reset";
    .name{
        font-size: 4rem;
    }
    .col-12{
        height: calc(100vh - 100px);
        .logo-box{
            width: 100%;
            height: 100%;
            .img-dark{
                filter: invert(1);
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .main-content{
        height: calc(100% - 200px);
        .color{
            color: white;
        }
    }

</style>
                    
    
        
           
    
    
