import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarteView from '../views/CarteView.vue'
import FavorisView from '../views/FavorisView.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: HomeView
  },
  {
    path: '/carte',
    name: 'carte',
    component: CarteView
  },
  {
    path: '/favoris',
    name: 'favoris',
    component: FavorisView
  },
  {
    path: '/carte/:parkingId',
    name: 'carteOneParking',
    component: CarteView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
