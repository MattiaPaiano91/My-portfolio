import { createApp } from 'vue'
import {router} from './router'
import App from './App.vue'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
