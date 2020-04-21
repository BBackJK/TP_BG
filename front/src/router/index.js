import Vue from 'vue';
import VueRouter from 'vue-router';

import Page from '@/pages';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Page.HomePage,
    },
    {
      path: '/posting',
      name: 'posting',
      component: Page.PostingPage,
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
      path: '/about',
      name: 'about',
      component: Page.AboutPage,
    },
    {
      path: '/login',
      name: 'login',
      component: Page.LoginPage,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: Page.SignUpPage,
    },
    {
      path: '/find-account',
      name: 'find-account',
      component: Page.FindAccountPage,
    },
    {
      path: '/404',
      component: Page.NotFoundPage,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
