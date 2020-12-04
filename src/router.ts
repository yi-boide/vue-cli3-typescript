/*
 * @Descriptin: 1
 * @Version: 0.1
 * @Autor: boide gui
 * @Date: 2020-12-04 16:14:52
 * @LastEditors: boide gui
 * @LastEditTime: 2020-12-04 16:59:58
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true,
        scrollTop: 0,
      },
    },
    {
      path: '/goods/:id?',
      name: 'goods',
      component: () => import('./views/Goods.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue'),
    },
    {
      path: '/center',
      name: 'center',
      component: () => import('./views/Center.vue'),
      children: [
        {
          path: 'setting',
          component: () => import('./components/center/Setting.vue'),
        },
      ],
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
    },
    {
      path: '/cate',
      name: 'cate',
      component: () => import('./views/Cate.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue'),
    },
  ],
});
