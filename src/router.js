import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes
import Introduccion from './components/Introduccion.vue'
import Instalacion from './components/Instalacion.vue'
import Templates from './components/Templates.vue'
import Componentes from './components/Componentes.vue'
import Props from './components/Props.vue'
import Eventos from './components/Eventos.vue'
import Estado from './components/Estado.vue'

const routes = [
  { path: '/', redirect: '/introduccion' },
  { path: '/introduccion', component: Introduccion },
  { path: '/instalacion', component: Instalacion },
  { path: '/templates', component: Templates },
  { path: '/componentes', component: Componentes },
  { path: '/props', component: Props },
  { path: '/eventos', component: Eventos },
  { path: '/estado', component: Estado },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
