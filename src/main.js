import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes";
import store from './store'


createApp(App).use(routes).use(store).mount('#app')
