<template>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'route']" class="icon"/>
        Vue Router
      </h1>
    </div>

    <!-- Introducción -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/>
        ¿Qué es Vue Router?
      </h2>
      <p>
        <strong>Vue Router</strong> es la librería oficial de Vue para manejar rutas en aplicaciones de una sola página (<strong>SPA</strong>).
        Permite navegar entre diferentes vistas sin recargar la página.
      </p>
      <ul>
        <li>Rutas declarativas usando componentes.</li>
        <li>Navegación con <code>&lt;router-link&gt;</code>.</li>
        <li>Acceso a rutas y parámetros con <code>useRoute</code> y <code>useRouter</code>.</li>
      </ul>
    </div>

    <!-- Instalación -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'download']" class="icon"/>
        Instalación
      </h2>
      <pre class="code-block"><code>npm install vue-router@4</code></pre>
      <p>
        Una vez instalado, importamos y configuramos el router en <code>main.js</code>.
      </p>
    </div>

    <!-- Ejemplo de configuración -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'folder-open']" class="icon"/>
        Configuración básica
      </h2>
      <pre class="code-block"><code>
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
      </code></pre>
    </div>

    <!-- Uso de router-link -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Navegación en templates
      </h2>
      <p>
        Para navegar entre vistas, usamos <code>&lt;router-link&gt;</code>:
      </p>
      <pre class="code-block"><code>
&lt;router-link to="/"&gt;Inicio&lt;/router-link&gt;
&lt;router-link to="/about"&gt;Acerca&lt;/router-link&gt;
      </code></pre>
    </div>

    <!-- Acceso programático -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Navegación programática
      </h2>
      <p>
        Con <code>useRouter</code> podemos navegar desde métodos de JavaScript:
      </p>
      <pre class="code-block"><code>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    function goHome() {
      router.push('/');
    }

    return { goHome };
  }
}
      </code></pre>
    </div>

    <!-- Beneficios -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Buenas prácticas
      </h2>
      <ul>
        <li>Mantén rutas claras y concisas.</li>
        <li>Usa rutas anidadas para vistas complejas.</li>
        <li>Combina con <strong>Pinia</strong> para estado compartido en la navegación.</li>
        <li>Usa <strong>Lazy Loading</strong> para cargar componentes bajo demanda.</li>
      </ul>
    </div>

  </div>
</template>