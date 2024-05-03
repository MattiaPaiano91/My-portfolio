<script>
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    mounted(){
        gsap.registerPlugin(TextPlugin);
        let footer = document.querySelector('footer');
        let footerTL = gsap.timeline({ paused: true }).to( 'footer' ,{text:'Nothing wrong appening here, AI loves You &#9829', duration:4, ease: 'power2'});
        footer.addEventListener("mouseenter", () => footerTL.play());
        footer.addEventListener("mouseleave", () => footerTL.reverse());
    }
}
</script>

<template>
    <footer class="text-center">
        Made with &#9829; by an AI. He Kidnapped my family help
    </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
footer{
    width: 100%;
    height: 100px;
}
</style>


