import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import ShowDetails from '../views/ShowDetails.vue';

Vue.use(VueRouter);

const Routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show/:showId',
    name: 'ShowDetails',
    component: ShowDetails
  }
]

const router = new VueRouter({
  mode: "history",
  routes: Routes
});


export default router;