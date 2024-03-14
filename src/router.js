import { createRouter, createWebHistory } from "vue-router";
import ShowProject from "./pages/ShowProject.vue";
import AppMain from "./components/AppMain.vue";
import App from "./App.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "app",
      component: AppMain,
    },
    {
      path: "/ShowProject/:slug",
      name: "show-project",
      component: ShowProject,
    },

    {
      path: "/Project/index",
      name: "app-main",
      component: AppMain,
    },
  ],
});

export { router };