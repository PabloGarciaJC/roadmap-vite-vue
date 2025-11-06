import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes
import Introduccion from './components/Introduccion.vue'
import Instalacion from './components/Instalacion.vue'
import Templates from './components/Templates.vue'
import Componentes from './components/Componentes.vue'
import Props from './components/Props.vue'
import Eventos from './components/Eventos.vue'
import Estado from './components/Estado.vue'
import Computed from './components/Computed.vue'
import Lifecycle from './components/Lifecycle.vue'
import CompositionAPI from './components/CompositionAPI.vue'
import Routes from './components/Routes.vue'
import Pinia from './components/Pinia.vue'
import Apis from './components/Apis.vue'
import Slots from './components/Slots.vue'

const routes = [
  { path: '/', redirect: '/introduccion' },
  { path: '/introduccion', component: Introduccion },
  { path: '/instalacion', component: Instalacion },
  { path: '/templates', component: Templates },
  { path: '/componentes', component: Componentes },
  { path: '/props', component: Props },
  { path: '/eventos', component: Eventos },
  { path: '/estado', component: Estado },
  { path: '/computed', component: Computed },
  { path: '/lifecycle', component: Lifecycle },
  { path: '/compositionAPI', component: CompositionAPI },
  { path: '/routers', component: Routes },
  { path: '/pinia', component: Pinia },
  { path: '/apis', component: Apis },
  { path: '/slots', component: Slots },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
