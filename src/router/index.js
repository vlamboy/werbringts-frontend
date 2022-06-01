import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import ImpressumView from '../views/ImpressumView.vue';
import DatenschutzView from '../views/DatenschutzView.vue';
import FAQView from '../views/FAQView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    component: AboutUsView,
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView,
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
