<template>
  <div class="container">

    <!-- LOGO + TÍTULO -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'box']" class="icon" />
        Props
      </h1>
    </div>

    <!-- Qué son las props -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/> ¿Qué son las Props?
      </h2>
      <p>
        Las <strong>props</strong> permiten pasar datos desde un componente <strong>Padre</strong> 
        a un componente <strong>Hijo</strong>.
      </p>

      <p>
        Son similares a los <strong>parámetros de una función</strong>:
      </p>
      <ul>
        <li>El padre envía información.</li>
        <li>El hijo la recibe y la usa.</li>
      </ul>
    </div>

    <!-- Ejemplo: Padre envía datos -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'arrow-down']" class="icon"/> Ejemplo simple
      </h2>

      <p><strong>Componente Hijo:</strong> Recibe una prop llamada <code>mensaje</code></p>

      <pre class="code-block"><code>
// src/components/Saludo.vue
&lt;template>
  &lt;p>{{ mensaje }}&lt;/p>
&lt;/template>

&lt;script>
export default {
  name: "Saludo",
  props: {
    mensaje: String
  }
}
&lt;/script></code></pre>

      <p><strong>Componente Padre:</strong> Envía el valor a la prop</p>

      <pre class="code-block"><code>
&lt;template>
  &lt;Saludo mensaje="Hola desde el padre!" />
&lt;/template>

&lt;script>
import Saludo from "@/components/Saludo.vue";
export default {
  components: { Saludo }
};
&lt;/script></code></pre>
    </div>

    <!-- Props con tipos y valores por defecto -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'gear']" class="icon"/> Definir props correctamente
      </h2>

      <pre class="code-block"><code>
props: {
  texto: { type: String, required: true },
  contador: { type: Number, default: 0 },
  activo: { type: Boolean, default: false }
}
</code></pre>

      <ul>
        <li><strong>type</strong>: Define el tipo esperado.</li>
        <li><strong>required</strong>: Indica si es obligatorio.</li>
        <li><strong>default</strong>: Valor por defecto.</li>
      </ul>
    </div>

    <!-- Consejo -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> Buenas prácticas
      </h2>
      <ul>
        <li>No modifiques una <strong>prop directamente</strong> dentro del hijo.</li>
        <li>Si necesitas modificarla, crea una <strong>data interna</strong> o usa <strong>emit</strong>.</li>
        <li>Usa tipos en las props: ayuda a detectar errores.</li>
      </ul>
    </div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Props",
  components: { FontAwesomeIcon }
};
</script>
