<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import { data } from "./store.js";




export default {
    data() {
        return {
            themeFlag: true
        };
    },
    components: {
        AppHeader
    },
    methods:{
        switchTheme(){
            this.themeFlag = !this.themeFlag;
            data.imgFlag = !data.imgFlag;
        }
    }  
}
</script>

<template>
    <AppHeader :flag="themeFlag" @eventoPersonalizzato="switchTheme()"/>
    <div :class="themeFlag ?'mode-light':'mode-dark'" class="container-fluid main p-0">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    @use "assets/scss/main" as *;
    @import "assets/scss/partials/reset";

   

</style>
            
            
    
    
    
