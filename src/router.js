import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes
import Introduccion from './components/Introduccion.vue'
import Componentes from './components/Componentes.vue'
// Importa los demás módulos según los vayas creando
// import Props from './components/Props.vue'
// import Estado from './components/Estado.vue'
// ...

const routes = [
  { path: '/', redirect: '/introduccion' }, // Redirige al inicio
  { path: '/introduccion', component: Introduccion },
  { path: '/componentes', component: Componentes },
  // { path: '/props', component: Props },
  // { path: '/estado', component: Estado },
  // ...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
