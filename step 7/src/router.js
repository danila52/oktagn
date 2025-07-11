import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView, meta: { titleKey: 'home.title' }},
    { path: '/about', name: 'About', component: AboutView, meta: { titleKey: 'about.title' }},
    { path: '/contact', name: 'Contact', component: ContactView, meta: { titleKey: 'contact.title' }},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to, from) => {
    document.title = to.meta.titleKey ? i18n.global.t(to.meta.titleKey) : 'Travel Blog';
});

import i18n from './i18n';
export default router;