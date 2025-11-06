<template>
  <div class="container">

    <!-- LOGO + TÍTULO -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> 
        Estado Reactivo
      </h1>
    </div>

    <!-- Qué es la reactividad -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/> ¿Qué es el estado reactivo?
      </h2>
      <p>
        En Vue, la <strong>reactividad</strong> permite que la interfaz se actualice automáticamente cuando cambian los datos. 
        Esto evita tener que manipular el DOM manualmente.
      </p>
    </div>

    <!-- Ref -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> Usando <code>ref</code>
      </h2>
      <p>
        `ref` crea una referencia reactiva a un valor primitivo o un objeto simple.
      </p>
      <pre class="code-block"><code>
import { ref } from 'vue';

export default {
  setup() {
    const contador = ref(0);

    function incrementar() {
      contador.value++;
    }

    return { contador, incrementar };
  }
};
</code></pre>
      <p>
        En el template, usamos <code>contador.value</code> o directamente <code>{{ contador }}</code> gracias a Vue.
      </p>
    </div>

    <!-- Reactive -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> Usando <code>reactive</code>
      </h2>
      <p>
        `reactive` crea un objeto completo reactivo. Ideal para datos más complejos.
      </p>
      <pre class="code-block"><code>
import { reactive } from 'vue';

export default {
  setup() {
    const persona = reactive({
      nombre: 'Juan',
      edad: 25
    });

    function cumpleaños() {
      persona.edad++;
    }

    return { persona, cumpleaños };
  }
};
</code></pre>
    </div>

    <!-- Computed -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> Usando <code>computed</code>
      </h2>
      <p>
        `computed` permite derivar valores basados en datos reactivos de manera eficiente.
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
    </div>

    <!-- Buenas prácticas -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> Buenas prácticas
      </h2>
      <ul>
        <li>Usa <strong>ref</strong> para valores primitivos y <strong>reactive</strong> para objetos complejos.</li>
        <li>Evita manipular el DOM directamente; deja que Vue reactive lo maneje.</li>
        <li>Usa <strong>computed</strong> para valores derivados y cálculos automáticos.</li>
        <li>Prefiere <strong>setup()</strong> con Composition API para un código más claro y reutilizable.</li>
      </ul>
    </div>

  </div>
</template>
