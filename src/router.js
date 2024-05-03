import { createRouter, createWebHistory } from "vue-router";
import ShowProject from "./pages/ShowProject.vue";
import ProjectIndex from "./pages/ProjectIndex.vue";
import NotFound from "./pages/NotFound.vue"
import WelcomeApp from "./pages/WelcomeApp.vue";
import ContactMe from "./pages/ContactMe.vue";
import App from "./App.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "WelcomeApp",
      component: WelcomeApp,
    },
    {
      path: "/ShowProject/:slug",
      name: "show-project",
      component: ShowProject,
    },

    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },

    {
      path: "/Project/index",
      name: "project-index",
      component: ProjectIndex,
    },

    {
      path: "/Project/ContactMe",
      name: "contact-me",
      component: ContactMe,
    },
  ],
});

export { router };