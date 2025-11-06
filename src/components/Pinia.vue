<template>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'broadcast-tower']" class="icon"/>
        Pinia (Estado Global)
      </h1>
    </div>

    <!-- Introducción -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/>
        ¿Qué es Pinia?
      </h2>
      <p>
        <strong>Pinia</strong> es la librería oficial de Vue para manejar estado global en aplicaciones Vue 3.
        Sustituye a Vuex de forma más simple y moderna.
      </p>
      <ul>
        <li>Permite compartir estado entre componentes fácilmente.</li>
        <li>Integración completa con la Composition API.</li>
        <li>Permite persistencia y plugins opcionales.</li>
      </ul>
    </div>

    <!-- Instalación -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'download']" class="icon"/>
        Instalación
      </h2>
      <pre class="code-block"><code>npm install pinia</code></pre>
      <p>
        Luego importamos y registramos Pinia en <code>main.js</code>.
      </p>
    </div>

    <!-- Configuración en main.js -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'folder-open']" class="icon"/>
        Configuración básica
      </h2>
      <pre class="code-block"><code>
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
      </code></pre>
    </div>

    <!-- Crear un store -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'tools']" class="icon"/>
        Crear un store
      </h2>
      <p>
        Creamos un store para manejar el estado global de manera reactiva:
      </p>
      <pre class="code-block"><code>
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
      </code></pre>
    </div>

    <!-- Uso en un componente -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Uso en componentes
      </h2>
      <p>
        Luego podemos usarlo dentro de cualquier componente Vue:
      </p>
      <pre class="code-block"><code>
import { useCounterStore } from '../stores/counter';

export default {
  setup() {
    const counter = useCounterStore();

    function increase() {
      counter.increment();
    }

    return { counter, increase };
  }
};
      </code></pre>
      <p>
        Ahora <code>counter.count</code> es reactivo en todo el proyecto.
      </p>
    </div>

    <!-- Buenas prácticas -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Buenas prácticas
      </h2>
      <ul>
        <li>Divide el estado en múltiples stores según la funcionalidad.</li>
        <li>Usa getters y actions para manipular el estado en lugar de acceder directamente.</li>
        <li>Evita almacenar lógica de UI en el store; solo datos y estado global.</li>
      </ul>
    </div>

  </div>
</template>
