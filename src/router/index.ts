import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import Cardapio from "../pages/Cardapio.vue";
import Contato from "../pages/Contato.vue";
import NotFound from "../pages/NotFound.vue";
import GaleriaPizzas from "../pages/GaleriaPizzas.vue";

const routes = [
    {
        path: '/',
        name: 'Início',
        component: Home
    },
    {
        path: '/cardapio',
        name: 'Cardápio',
        component: Cardapio
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato
    },
    {
        path: '/pizzas',
        name: 'GaleriaPizzas',
        component: GaleriaPizzas
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
