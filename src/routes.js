import { createRouter, createWebHistory } from 'vue-router'
import MyHome from "./pages/Home.vue";
import ProductPage from "./pages/Product.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MyHome
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: ProductPage,
        props: true
    },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router;
