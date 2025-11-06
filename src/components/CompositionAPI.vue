<template>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'layer-group']" class="icon"/>
        Composition API
      </h1>
    </div>

    <!-- Introducción -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/>
        ¿Qué es la Composition API?
      </h2>
      <p>
        La <strong>Composition API</strong> es una forma más flexible de organizar la lógica de tus componentes en Vue 3.
        Permite agrupar funcionalidades relacionadas y reutilizarlas fácilmente.
      </p>
      <ul>
        <li>Reactividad explícita con <code>ref</code> y <code>reactive</code>.</li>
        <li>Funciones composables para lógica reutilizable.</li>
        <li>Mejor organización en componentes grandes.</li>
      </ul>
    </div>

    <!-- ref y reactive -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        ref y reactive
      </h2>
      <p>
        <strong>ref:</strong> se usa para valores primitivos reactivos.<br/>
        <strong>reactive:</strong> se usa para objetos complejos reactivos.
      </p>

      <pre class="code-block"><code>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const state = reactive({ name: 'Vue', version: 3 });

    function increment() {
      count.value++;
    }

    return { count, state, increment };
  }
}
      </code></pre>
    </div>

    <!-- Composables -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'recycle']" class="icon"/>
        Composables
      </h2>
      <p>
        Los <strong>composables</strong> son funciones que encapsulan lógica reutilizable usando la Composition API.
      </p>

      <pre class="code-block"><code>
import { ref } from 'vue';

export function useCounter() {
  const count = ref(0);
  const increment = () => count.value++;
  return { count, increment };
}
      </code></pre>
    </div>

    <!-- Beneficios -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Beneficios de usar Composition API
      </h2>
      <ul>
        <li>Reutilización de lógica entre componentes.</li>
        <li>Mejor estructura para componentes grandes.</li>
        <li>Facilita pruebas unitarias.</li>
        <li>Compatible con la Options API si es necesario.</li>
      </ul>
    </div>

  </div>
</template>