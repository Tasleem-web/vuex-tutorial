import { createRouter, createWebHistory } from 'vue-router'
import MyHome from "./pages/Home.vue";
import ProductPage from "./pages/Product.vue";
import UploadPage from "./pages/UploadPage.vue";
import PageNotFound from './components/PageNotFound.vue'

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
    {
        path: '/upload',
        name: 'Upload',
        component: UploadPage,
        props: true
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFound,
        meta: {
            requiresAuth: false
        }
    }

]

const router = createRouter({ history: createWebHistory(), routes })
export default router;
