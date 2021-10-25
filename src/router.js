import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/Users.vue')
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "about" */ './views/contacts/index.vue')
    },
    {
      path: '/alertes',
      name: 'alertes',
      component: () => import(/* webpackChunkName: "about" */ './views/alertes/index.vue')
    },
    {
      path: '/assets',
      name: 'assets',
      component: () => import(/* webpackChunkName: "about" */ './views/assets/index.vue'),
    
      // component: assets,
      children: [
        // {
        //   path: '/assets',
        //   component: () => import(/* webpackChunkName: "about" */ './views/Users.vue')
    
        //   // a meta field
        // }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  
  console.log(store.state)
  console.log(store.state.accessToken)
  console.log(store.state)
  store.dispatch('fetchAccessToken');
  // if (to.fullPath === '/user') {
  //   if (!store.state.accessToken) {
  //     next('/login');
  //   }
  // }
  // if (to.fullPath === '/login') {
  //   if (store.state.accessToken) {
  //     next('/user');
  //   }
  // } else {
  //   if (!store.state.accessToken && to.name === 'Login') {
  //         next('/login');
  //       }

  // }
  next();
});

export default router;