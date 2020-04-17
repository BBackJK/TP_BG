import Vue from 'vue';
import VueRouter from 'vue-router';

import Page from '../pages';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Page.HomePage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Page.DashboardPage,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Page.CalendarPage,
    },
    {
      path: '/corna',
      name: 'corna',
      component: Page.CornaPage,
    },
    {
      path: '/fashion',
      name: 'fashion',
      component: Page.FashionPage,
    },
    {
      path: '/game',
      name: 'game',
      component: Page.GamePage,
    },
    {
      path: '/login',
      name: 'login',
      component: Page.LoginPage,
    },
    {
      path: '/about',
      name: 'about',
      component: Page.AboutPage,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: Page.SignUpPage,
    },
  ],
});
