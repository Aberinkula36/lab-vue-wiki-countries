// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('./components/CountriesList.vue'),
  },
  /*{
    path: '/patata',
    name: 'Patata',
    component: () => import('./components/patata.vue'),
  },*/
  {
    path: '/:id',
    name: 'Country Details',
    component: () => import('./components/CountryDetails.vue'),
  },
  /*{
    path: '/list',
    name: 'list',
    component: () => import('./pages/CountriesList.vue'),
    children: [
      {
        path: '/details',
        name: 'details',
        component: () => import('./pages/CountriesDetails.vue')
      },
    ]
  }*/
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;