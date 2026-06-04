import { createRouter, createWebHistory } from "vue-router";
import ShowProject from "@/pages/ShowProject.vue";
import ProjectIndex from "@/pages/ProjectIndex.vue";
import NotFound from "@/pages/NotFound.vue";
import WelcomeApp from "@/pages/WelcomeApp.vue";
import ContactMe from "@/pages/ContactMe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "WelcomeApp",
      component: WelcomeApp,
      meta: { pageTitle: "MP | Welcome" },
    },
    {
      path: "/Project/show",
      name: "show-project",
      component: ShowProject,
      meta: { pageTitle: "MP | Show" },
    },
    {
      path: "/Project/index",
      name: "project-index",
      component: ProjectIndex,
      meta: { pageTitle: "MP | Progetti" },
    },
    {
      path: "/ContactMe",
      name: "contact-me",
      component: ContactMe,
      meta: { pageTitle: "MP | Contatti" },
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
      meta: { pageTitle: "MP | Oopsie" },
    },
  ],
});

router.beforeEach((to) => {
  document.title = to.meta.pageTitle;
});

export { router };
