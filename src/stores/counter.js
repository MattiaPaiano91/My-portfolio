import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { 
        count: 10,
        user : {
            name: 'Mattia',
            lastName: 'Paiano',
        }
    };
  },
  getters: {
    oddOrEven: (state) =>{
        if(state.count % 2 === 0) return 'even'
        return 'odd'
    }
  },
  actions: {
    increment() {
      this.count++;
    },
    decreas() {
        this.count --;
    }
  },
});

