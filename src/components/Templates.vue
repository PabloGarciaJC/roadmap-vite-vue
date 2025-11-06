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
        <font-awesome-icon :icon="['fas', 'code']" class="icon" />
        Templates en Vue
      </h1>
    </div>

    <!-- Qué es un Template -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon" />
        ¿Qué es un Template?
      </h2>
      <p>
        El <strong>template</strong> es la parte del componente donde definimos
        la interfaz (la estructura visual) usando etiquetas similares a HTML.
      </p>
      <p>
        Vue agrega su propio sistema de <strong>interpolación</strong> y
        <strong>directivas</strong> para conectar la vista con los datos.
      </p>
    </div>

    <!-- Interpolación -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'thumbtack']" class="icon" />
        Interpolación
      </h2>
      <p>
        Para mostrar datos usamos <code>{{}}</code>:
      </p>

      <pre class="code-block"><code>&lt;template>
  &lt;h2>{{ mensaje }}&lt;/h2>
&lt;/template>

&lt;script>
export default {
  data() {
    return { mensaje: "Hola Vue!" }
  }
}
&lt;/script></code></pre>
    </div>

    <!-- v-bind -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon" /> v-bind
        (atributos dinámicos)
      </h2>
      <p>Con <code>v-bind</code> enlazamos valores a atributos del DOM:</p>

      <pre
        class="code-block"
      ><code>&lt;img :src="urlImagen" :alt="descripcion" /></code></pre>
    </div>

    <!-- v-if / v-else -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'eye']" class="icon" />
        Mostrar/Ocultar (v-if)
      </h2>

      <pre class="code-block"><code>&lt;p v-if="logueado">Bienvenido!&lt;/p>
&lt;p v-else>Inicia sesión&lt;/p></code></pre>
    </div>

    <!-- v-for -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'list']" class="icon" /> Listas
        (v-for)
      </h2>

      <pre class="code-block"><code>&lt;ul>
  &lt;li v-for="(item, index) in frutas" :key="index">{{ item }}&lt;/li>
&lt;/ul></code></pre>
    </div>

    <!-- v-model -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'pencil-alt']" class="icon" /> Inputs
        (v-model)
      </h2>

      <pre
        class="code-block"
      ><code>&lt;input v-model="nombre" placeholder="Escribe aquí" />
&lt;p>Tu nombre es: {{ nombre }}&lt;/p></code></pre>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Templates",
  components: { FontAwesomeIcon },
};
</script>
