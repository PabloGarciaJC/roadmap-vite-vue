<template>
  <div class="container">

    <!-- LOGO + TÍTULO -->
    <div class="header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue Logo" class="vue-logo"/>
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'rocket']" class="icon"/> Roadmap Vue 3 + Vite
      </h1>
    </div>

    <!-- Qué es Vue -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/> ¿Qué es Vue?
      </h2>
      <p>
        Vue es un <strong>framework progresivo de JavaScript</strong> para construir interfaces de usuario interactivas. 
        Permite integrarse poco a poco en proyectos existentes o crear aplicaciones completas desde cero.
      </p>
      <ul>
        <li>Reactivo: Actualiza automáticamente el DOM cuando cambian los datos.</li>
        <li>Componentes reutilizables para mantener el código modular.</li>
        <li>Composition API: Reutilización de lógica eficiente.</li>
        <li>Virtual DOM optimizado para rendimiento rápido.</li>
      </ul>
    </div>

    <!-- Qué es Vite -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'thumbtack']" class="icon"/> ¿Qué es Vite?
      </h2>
      <p>
        Vite es un <strong>tooling moderno</strong> para desarrollo front-end que permite:
      </p>
      <ul>
        <li>Arranque ultrarrápido del servidor de desarrollo.</li>
        <li>Hot Module Replacement (HMR) para ver cambios en tiempo real.</li>
        <li>Compilación optimizada para producción automáticamente.</li>
      </ul>
    </div>

    <!-- Instalación paso a paso -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'download']" class="icon"/> Cómo instalar Vue con Vite
      </h2>
      <ol>
        <li>Asegúrate de tener <strong>Node.js 16+</strong> y <strong>NPM</strong> o <strong>Yarn</strong> instalados.</li>
        <li>Ejecuta el siguiente comando para crear un nuevo proyecto Vue con Vite:</li>
      </ol>
      <pre class="code-block">
<code>npm create vite@latest my-vue-app</code>
      </pre>
      <p>
        Durante la instalación, se te pedirá seleccionar el framework: elige <strong>Vue</strong> y luego el template que prefieras (JavaScript o TypeScript).
      </p>
      <ol start="3">
        <li>Ingresa a la carpeta del proyecto:</li>
      </ol>
      <pre class="code-block">
<code>cd my-vue-app</code>
      </pre>
      <ol start="4">
        <li>Instala las dependencias:</li>
      </ol>
      <pre class="code-block">
<code>npm install</code>
      </pre>
      <ol start="5">
        <li>Levanta el servidor de desarrollo:</li>
      </ol>
      <pre class="code-block">
<code>npm run dev</code>
      </pre>
      <p>
        Una vez levantado, Vite mostrará una URL (normalmente <code>http://localhost:5173</code>) donde podrás ver tu aplicación en acción.
      </p>
    </div>

    <!-- Estructura de proyecto -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'folder-open']" class="icon"/> Estructura típica de proyecto Vue + Vite
      </h2>
      <table class="table">
        <thead>
          <tr>
            <th>Archivo / Carpeta</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>index.html</code></td><td>Punto de entrada HTML de tu app Vue.</td></tr>
          <tr><td><code>package.json</code></td><td>Contiene dependencias y scripts (dev, build, preview).</td></tr>
          <tr><td><code>vite.config.js</code></td><td>Configuración de Vite, paths y plugins.</td></tr>
          <tr><td><code>src/</code></td><td>Carpeta principal con tu código Vue.</td></tr>
          <tr><td><code>main.js</code></td><td>Archivo donde se monta Vue en el DOM.</td></tr>
          <tr><td><code>App.vue</code></td><td>Componente raíz de tu aplicación.</td></tr>
          <tr><td><code>components/</code></td><td>Carpeta para tus componentes reutilizables.</td></tr>
          <tr><td><code>assets/</code></td><td>Imágenes, estilos y otros recursos.</td></tr>
          <tr><td><code>node_modules/</code></td><td>Dependencias instaladas automáticamente con npm.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- Consejos y buenas prácticas -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/> Consejos clave
      </h2>
      <ul>
        <li>Organiza tu código en <strong>componentes pequeños y reutilizables</strong>.</li>
        <li>Usa la <strong>Composition API</strong> para lógica compartida y reactividad eficiente.</li>
        <li>Aplica <strong>Scoped CSS</strong> en los componentes para evitar conflictos de estilos.</li>
        <li>Documenta tu código para mantenerlo legible y escalable.</li>
        <li>Considera <strong>Vue Router</strong> para navegación y <strong>Pinia</strong> para gestión de estado.</li>
      </ul>
    </div>

    <!-- Ejemplo de componente -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'code']" class="icon"/> Ejemplo de componente Vue
      </h2>
      <pre class="code-block">
<code>&lt;template&gt;
  &lt;button @click="count++"&gt;Has hecho clic {{ count }} veces&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    return { count };
  }
}
&lt;/script&gt;</code>
      </pre>
    </div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "RoadmapVueVite",
  components: { FontAwesomeIcon }
};
</script>
