import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueGtag from "vue-gtag";

const app = createApp(App).use(router);

const gtagId = 'G-X9C2GX3926';

app.mount('#app')

app.use(VueGtag, {
    config: { id: gtagId }
  });

app.config.globalProperties.$axios = axios;
window.axios = axios;
