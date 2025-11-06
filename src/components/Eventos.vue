<template>
  <div class="container">

    <!-- LOGO + TÍTULO -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'bullseye']" class="icon"/> 
        Emit / Eventos en Vue
      </h1>
    </div>

    <!-- Qué son los eventos -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/> ¿Qué son los eventos?
      </h2>
      <p>
        Los <strong>eventos</strong> permiten que un <strong>componente hijo</strong> comunique información 
        hacia su <strong>componente padre</strong>.
      </p>
      <p>
        Se usan con la función <code>$emit</code> para enviar datos, y en el padre se capturan con <code>v-on</code> o su abreviatura <code>@</code>.
      </p>
    </div>

    <!-- Ejemplo simple -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'arrow-down']" class="icon"/> Ejemplo práctico
      </h2>

      <p><strong>Componente Hijo:</strong> Envía un mensaje al padre</p>
      <pre class="code-block"><code>
// src/components/BotonContador.vue
&lt;template>
  &lt;button @click="$emit('increment')">
    Sumar
  &lt;/button>
&lt;/template>

&lt;script>
export default {
  name: "BotonContador"
};
&lt;/script></code></pre>

      <p><strong>Componente Padre:</strong> Escucha el evento</p>
      <pre class="code-block"><code>
&lt;template>
  &lt;p>Contador: {{ contador }}&lt;/p>
  &lt;BotonContador @increment="contador++" />
&lt;/template>

&lt;script>
import BotonContador from "@/components/BotonContador.vue";
export default {
  data() {
    return { contador: 0 };
  },
  components: { BotonContador }
};
&lt;/script></code></pre>
    </div>

    <!-- Props + Emit -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'puzzle-piece']" class="icon"/> Combinar Props + Emit
      </h2>
      <p>
        Un patrón común es enviar datos desde el padre con <strong>props</strong> y recibir acciones del hijo con <strong>emit</strong>.
      </p>
      <pre class="code-block"><code>
&lt;!-- Padre.vue -->
&lt;Hijo :mensaje="mensajePadre" @accion="manejarAccion" />

&lt;!-- Hijo.vue -->
&lt;button @click="$emit('accion', 'datos')">Enviar al padre&lt;/button>
</code></pre>
    </div>

    <!-- Buenas prácticas -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> Buenas prácticas
      </h2>
      <ul>
        <li>No modifiques props directamente; usa emit para notificar cambios.</li>
        <li>Nombra los eventos de forma clara y consistente.</li>
        <li>Combina props y emit para mantener componentes reutilizables y limpios.</li>
      </ul>
    </div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Eventos",
  components: { FontAwesomeIcon }
};
</script>
