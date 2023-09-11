// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import BlurText from './views/BlurText.vue';

const routes = [
    { path: '/', component: BlurText },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
