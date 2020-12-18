import { createRouter, createWebHistory } from 'vue-router';

import Login from './pages/login/Login.vue';
import Dashboard from './pages/dashboard/Dashboard.vue';
import Profiles from './pages/profiles/Profiles.vue';

import ROUTE_NAMES from './constants/routeNames';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: ROUTE_NAMES.LOGIN },
    {
      path: ROUTE_NAMES.LOGIN,
      component: Login,
    },
    {
      path: ROUTE_NAMES.DASHBOARD,
      component: Dashboard,
    },
    {
      path: ROUTE_NAMES.PROFILES,
      component: Profiles,
    },
  ],
});
