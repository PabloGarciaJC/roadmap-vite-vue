<template>
  <div class="container">

    <!-- LOGO + TÍTULO -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'puzzle-piece']" class="icon" />
         Componentes en Vue
      </h1>
    </div>

    <!-- Qué es un componente -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/> ¿Qué es un Componente?
      </h2>
      <p>
        Un <strong>componente</strong> es una parte independiente y reutilizable de la interfaz.
        Cada componente tiene su propia estructura, lógica y estilos.
      </p>
      <p>
        En Vue, la filosofía principal es <strong>dividir la aplicación en componentes pequeños</strong> 
        para mantener el código fácil de leer y mantener.
      </p>
    </div>

    <!-- Estructura de un componente -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'folder-open']" class="icon"/> Estructura básica de un componente (.vue)
      </h2>

      <pre class="code-block"><code>&lt;template>
  &lt;h2>Hola desde un componente&lt;/h2>
&lt;/template>

&lt;script>
export default {
  name: "MiComponente"
}
&lt;/script>

&lt;style scoped>
h2 {
  color: #42b883;
}
&lt;/style></code></pre>

      <p>
        Esta estructura contiene:
      </p>
      <ul>
        <li><strong>&lt;template&gt;</strong>: Lo que se muestra en la pantalla.</li>
        <li><strong>&lt;script&gt;</strong>: La lógica del componente.</li>
        <li><strong>&lt;style&gt;</strong>: Sus estilos (si usas <code>scoped</code>, solo afectan a este componente).</li>
      </ul>
    </div>

    <!-- Cómo usar un componente -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'link']" class="icon"/> Cómo usar un componente dentro de otro
      </h2>

      <p>Primero creamos nuestro componente:</p>

      <pre class="code-block"><code>// src/components/Saludo.vue
&lt;template>
  &lt;p>Hola! Soy un componente reutilizable.&lt;/p>
&lt;/template>

&lt;script>
export default { name: "Saludo" }
&lt;/script></code></pre>

      <p>Luego lo importamos y registramos en otro componente:</p>

      <pre class="code-block"><code>&lt;script>
import Saludo from "@/components/Saludo.vue";

export default {
  name: "App",
  components: { Saludo }
}
&lt;/script>

&lt;template>
  &lt;div>
    &lt;Saludo />
  &lt;/div>
&lt;/template></code></pre>
    </div>

    <!-- Consejos -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> Buenas prácticas
      </h2>
      <ul>
        <li>Usa nombres de componentes claros y descriptivos.</li>
        <li>Cada componente debe tener una sola responsabilidad.</li>
        <li>Usa <strong>scoped</strong> para evitar conflictos de estilos.</li>
        <li>Si un componente crece demasiado, divídelo.</li>
      </ul>
    </div>

  </div>
</template>
