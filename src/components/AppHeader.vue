<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {

    }
}
</script>

<template>
    <header class="d-flex justify-content-center ">
        <Router-link :to="{name: 'app-main'}" class="btn btn-outline-primary">Vedi tutti i progetti</Router-link>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
</style>
