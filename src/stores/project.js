import { defineStore } from "pinia";
import { projects } from "../data/projects.js";

export const useProjectStore = defineStore("project", {
  state: () => {
    return {
      projects,
      activeProjectId: null,
    
    };
  },
  getters: {
    getProjects: (state) => state.projects,

    getActiveProject: (state) =>
      state.projects.find((p) => p.id === state.activeProjectId),
  },
  actions: {
    setActiveProjectId(id) {
      this.activeProjectId = id;
    },
  },
});
