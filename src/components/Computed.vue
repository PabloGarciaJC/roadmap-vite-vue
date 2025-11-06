<template>
  <div class="container">

    <!-- LOGO + TÍTULO -->
    <div class="header">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" 
        alt="Vue Logo" 
        class="vue-logo"
      />
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'brain']" class="icon"/> 
        Computed + Watch en Vue
      </h1>
    </div>

    <!-- Qué es Computed -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'brain']" class="icon"/> ¿Qué es <code>computed</code>?
      </h2>
      <p>
        Las propiedades <strong>computed</strong> permiten crear valores derivados basados en datos reactivos.
        Se recalculan automáticamente solo cuando sus dependencias cambian.
      </p>
      <pre class="code-block"><code>
import { ref, computed } from 'vue';

export default {
  setup() {
    const precio = ref(100);
    const cantidad = ref(2);

    const total = computed(() => precio.value * cantidad.value);

    return { precio, cantidad, total };
  }
};
</code></pre>
      <p>
        En el template, simplemente usamos <code>{{ total }}</code> y se actualizará automáticamente.
      </p>
    </div>

    <!-- Qué es Watch -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'brain']" class="icon"/> ¿Qué es <code>watch</code>?
      </h2>
      <p>
        <strong>watch</strong> observa cambios en datos o propiedades y ejecuta una función cuando cambian.
        Ideal para efectos secundarios o lógica que no debe ejecutarse en el render.
      </p>
      <pre class="code-block"><code>
import { ref, watch } from 'vue';

export default {
  setup() {
    const nombre = ref('Juan');

    watch(nombre, (nuevoValor, viejoValor) => {
      console.log(`Nombre cambió de ${viejoValor} a ${nuevoValor}`);
    });

    return { nombre };
  }
};
</code></pre>
      <p>
        Cada vez que <code>nombre</code> cambie, se ejecutará la función de callback.
      </p>
    </div>

    <!-- Buenas prácticas -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'brain']" class="icon"/> Buenas prácticas
      </h2>
      <ul>
        <li>Usa <strong>computed</strong> para valores derivados que dependan de datos reactivos.</li>
        <li>Usa <strong>watch</strong> para efectos secundarios o lógica que no afecte directamente la vista.</li>
        <li>Evita recalcular manualmente valores que pueden derivarse con <code>computed</code>.</li>
        <li>Prefiere <strong>setup()</strong> y Composition API para mayor claridad y reusabilidad.</li>
      </ul>
    </div>

  </div>
</template>
