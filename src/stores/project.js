import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => {
    return {
      projects: [
        {
          id: 1,
          url: "https://tic-tac-toe-react-01.netlify.app/",
          img: "/img/tic-tac-toe.jpeg",
          title: `Tic-Tac-Toe`,
          description:
            "Un'implementazione interattiva del classico gioco Tris (Tic-Tac-Toe) realizzata con React, che dimostra l'uso di componenti funzionali, gestione dello stato con useState e logica di gioco reattiva.",
        },
      ],
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
