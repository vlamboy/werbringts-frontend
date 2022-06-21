import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import ImpressumView from '../views/ImpressumView.vue';
import DatenschutzView from '../views/DatenschutzView.vue';
import FAQView from '../views/FAQView.vue';
import NewBringlistView from '../views/NewBringlistView.vue';

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
  // {
  //   path: '/new-bringlist',
  //   name: 'newBringlist',
  //   component: NewBringlistView,
  // },
  {
    path: '/new-bringlist/:bringlistId',
    name: 'newBringlist',
    component: NewBringlistView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
