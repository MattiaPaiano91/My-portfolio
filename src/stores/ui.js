import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    themeFlag: true,
  }),
  actions: {
    toggleTheme() {
      this.themeFlag = !this.themeFlag;
    },
  },
});
