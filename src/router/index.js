import Vue from 'vue';
import Router from 'vue-router';
import List from '../components/list/list'

Vue.use(Router)

export const constantRoutes = new Router({
  routes: [
    { path: '/', redirect: {name: 'books'} },
    { name: 'books', path: '/books', component: List },
    { name: 'detail', path: '/books/:id', component: List }
  ]
})

export default constantRoutes;
