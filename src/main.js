import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./routes";
import store from './store'
import theme from './directives/theme';
import customValidator from './directives/custom-validator';

// createApp(App).use(routes).use(store).mount('#app')

const app = createApp(App);
app.directive('theme', theme);
app.directive('custom-validator', customValidator);
app.use(routes).use(store).mount('#app')