<script setup>
// import { ref } from "vue";
// import { useCounterStore } from "../stores/project";
// import ComponentTest from "../components/ComponentTest.vue";

// const storeCounter = useCounterStore();
// const user = ref({
//   name: "mattia",
//   age: 32,
// });
// function setNewAge() {
//   user.value.age++;
// }
// setTimeout(function () {
//   (user.value.name = "paiano"), (user.value.age = 33);
// }, 2000);
// console.log(storeCounter.user.name);
</script>

<template>
  <!-- <ComponentTest :user="user"></ComponentTest>
  <button class="btn btn-dark d-block" @click="setNewAge()">
    Aumenta di 1
  </button>
  <div class="count f">
    {{ storeCounter.count }}
  </div>
  <div class="text-center">
    <button
      class="btn btn-outline-primary text-center"
      @click="storeCounter.increment"
    >
      +1
    </button>
    <button
      class="btn btn-outline-primary text-center"
      @click="storeCounter.decreas"
    >
      -1
    </button>
  </div>
  <hr />
  <div class="text-center">This counter is : {{ storeCounter.oddOrEven }}</div>
  <hr />
  <div>
    <h3>edit counter</h3>
    <input type="number" v-model="storeCounter.count" />
  </div>
  <div>
    <h1>
      My name is {{ storeCounter.user.name }} {{ storeCounter.user.lastName }}
    </h1>
    <input type="text" v-model="storeCounter.user.name" />
  </div> -->
</template>

<style scoped>
.f {
  height: calc(100vh - 100px);
  text-align: center;
  font-size: 5rem;
}
</style>
