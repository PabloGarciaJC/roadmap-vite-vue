import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes
import Introduccion from './components/Introduccion.vue'
import Instalacion from './components/Instalacion.vue'
import Templates from './components/Templates.vue'
import Componentes from './components/Componentes.vue'
import Props from './components/Props.vue'

const routes = [
  { path: '/', redirect: '/introduccion' },
  { path: '/introduccion', component: Introduccion },
  { path: '/instalacion', component: Instalacion },
  { path: '/templates', component: Templates },
  { path: '/componentes', component: Componentes },
  { path: '/props', component: Props },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
