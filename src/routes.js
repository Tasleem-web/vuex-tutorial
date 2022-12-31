import { createRouter, createWebHistory } from 'vue-router'
import store from './store';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("./pages/Home.vue")
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import(`./pages/Product.vue`),
        props: true
    },
    {
        path: '/upload',
        name: 'Upload',
        component: () => import('./pages/UploadPage.vue'),
        props: true
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./components/LoginPage.vue'),
        props: true,
        // meta: {
        //     auth: false
        // }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./components/RegisterPage.vue'),
        props: true
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import('./components/PageNotFound.vue'),
        meta: {
            requiresAuth: false
        }
    }

]


const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(async (to, from, next) => {
    store.dispatch('auth/fetchAccessToken');
    if (to.fullPath === '/') {
        if (!store.state.auth.accessToken) {
            next('/login');
        }
    }
    if (to.fullPath === '/login') {
        console.log('to.fullPath', store.state.auth.accessToken);
        if (store.state.auth.accessToken) {
            next('/');
        }
    }
    next();
});
export default router;
