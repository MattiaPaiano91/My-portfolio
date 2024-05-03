<script>
import { gsap } from 'gsap';
export default {
    data() {
        return {
            menuFlag : true,
        };
    },
    props:{
        flag : Boolean
    },
        mounted() {
        this.$nextTick(() => {
            gsap.fromTo( ['.burgher-menu','.brand-copy'], { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power1.out" });
            
        });

        let burgherItem = document.querySelector('.burgher-menu');

        burgherItem.addEventListener("click", () => {
            let menuItems = document.querySelectorAll(".animation-link");

            if (this.menuFlag) {
                gsap.fromTo('.animation-link', { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.2 });
                // gsap.to(burgherItem , { scale:1.3, rotate:180 });
                gsap.to('.brand-copy',{ autoAlpha:0 });
                gsap.fromTo('.fa-bars',{ autoAlpha:1 },{autoAlpha:0});
                gsap.fromTo('.fa-x',{ autoAlpha:0 },{autoAlpha:1})
            } else {
                gsap.to('.animation-link', { x: -100, opacity: 0, duration: 0.5, stagger: 0.1 });
                // gsap.to(burgherItem , { scale:1.3 , rotate:360 });
                gsap.to('.brand-copy',{ autoAlpha:1, ease:'power2.in', duration:1.5 })
                gsap.fromTo('.fa-bars',{ autoAlpha:0 },{autoAlpha:1})
                gsap.fromTo('.fa-x',{ autoAlpha:1 },{autoAlpha:0})
            }
            this.menuFlag = !this.menuFlag;
        });
    
        let menuItems = document.querySelectorAll(".animation-link");
        for (const menuItem of menuItems) {
            let tl = gsap.timeline({ paused: true }).to(menuItem.querySelector('.hover'), {  backgroundColor:'#989EDD' , borderRadius:'10px' , duration:0.5 });
            menuItem.addEventListener("mouseenter", () => tl.play());
            menuItem.addEventListener("mouseleave", () => tl.reverse());
        }
    }
}
</script>
                
        
<template>
        <header :class="flag ? 'mode-light' : 'mode-dark'" class="container-fluid border-bottom p-0 text-center d-flex justify-content-around align-items-center">
                <div>
                    <div class="burgher-menu position-relative ">
                        <i class="icon fa-solid fa-bars position-absolute"></i>
                        <i class="icon fa-solid fa-x position-absolute"></i>
                    </div>
                </div>
                <div class="animation-link">
                    <div>
                        <router-link  class="router-link" :to="{name: 'WelcomeApp'}">
                        <div :style="flag ? 'color:black' : 'color:white'" class="hover">
                            HOME
                        </div>
                        </router-link>
                    </div>
                </div>

                <div class="animation-link">
                    <div>
                        <router-link class="router-link" :to="{name: 'project-index'}" >
                            <div :style="flag ? 'color:black' : 'color:white'" class="hover">
                                PORTFOLIO
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="animation-link">
                    <div>
                        <router-link class="router-link" :to="{name: 'project-index'}">
                            <div :style="flag ? 'color:black' : 'color:white'" class="hover">
                                ABOUT ME
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="animation-link">
                    <div>
                        <router-link class="router-link" :to="{name: 'contact-me'}">
                            <div :style="flag ? 'color:black' : 'color:white'" class="hover">
                                CONTATTAMI
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex align-items-center0">
                    <button class="mode-dark" v-if="flag == false" @click="$emit('eventoPersonalizzato')">
                        <i class="fa-regular fa-sun"></i>
                    </button>
                    <button class="mode-light" v-else @click="$emit('eventoPersonalizzato')">
                        <i class="fa-regular fa-moon"></i>
                    </button>
                </div>
                <h1 class="brand-copy">LOGO</h1>
        </header>
</template>

<style lang="scss" scoped>
    @use "../assets/scss/main.scss" as *;
    header{
        width: 100%;
        height: 100px;
        // position: fixed;
        // z-index: 2;
        border-bottom: 1px solid darkgray;
        .hover{
            padding: 0.5rem;
            text-align: center;
            width: 60%;
            margin: 0 auto;
        }
        .animation-link {
            opacity: 0;
            width: calc((100% / 6) - 4rem);
        }
        .brand-copy{
            position: absolute;
        }
        i{
            cursor: pointer;
            font-size: 1.5rem;
        }
        .fa-x{
            opacity: 0;
        }
        .icon{
            left: 50;
            top: 50;
            transform: translate(-50%,-50%);
        }
    }
</style>
            
                
                





