import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import favoris from '../views/Favoris.vue';
import search from '../weather-recherche/weather-recherche.vue';
import weather from '../weather/weather-demo.vue';
import BookmarkedElement from '../weather-bookmarks/BookmarkedElement.vue';
import Bookmarks from '../weather-bookmarks/Bookmarks.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/favoris',
    name : 'favoris',
    component : favoris
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/weather',
    name: 'weather',
    component: weather
  },
  {
    path: '/Bookmarks',
    name: 'Bookmarks',
    component: Bookmarks
  },
  {
    path: '/BookmarkedElement',
    name: 'BookmarkedElement',
    component: BookmarkedElement
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
