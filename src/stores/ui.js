import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    imgFlag: true,
    themeFlag: true,
  }),
  actions: {
    toggleTheme() {
      this.themeFlag = !this.themeFlag;
    },
  },
});
