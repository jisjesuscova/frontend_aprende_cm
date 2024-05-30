import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueGtag from "vue-gtag";

const gtagId = '';

const app = createApp(App).use(router);
app.use(VueGtag, {
    config: { id: gtagId }
  });

app.mount('#app')

app.config.globalProperties.$axios = axios;
window.axios = axios;
