<template>
  <div class="container">
    <!-- Título principal -->
    <h1 class="title">
      <font-awesome-icon :icon="['fas', 'rocket']" class="icon" /> ¡Bienvenido a Vue con Vite!
    </h1>

    <!-- Qué es Vite -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'thumbtack']" class="icon" /> ¿Qué es Vite?
      </h2>
      <p>
        Vite es una herramienta moderna para desarrollar aplicaciones front-end de manera rápida y eficiente. Sus principales ventajas:
      </p>
      <ul>
        <li>Arranque ultrarrápido del servidor de desarrollo.</li>
        <li>Hot Module Replacement (HMR) para ver cambios en tiempo real.</li>
        <li>Compilación optimizada para producción sin complicaciones.</li>
      </ul>
      <pre class="code-block">
        <code>npm create vite@latest my-app # Selecciona Vue y el template que prefieras</code>
      </pre>
    </div>

    <!-- Estructura de proyecto -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'folder-open']" class="icon" /> Estructura de un proyecto Vite + Vue
      </h2>
      <p>Al crear un proyecto tendrás esta estructura básica:</p>
      <table class="table">
        <thead>
          <tr>
            <th>Archivo / Carpeta</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>index.html</code></td><td>Archivo principal que carga tu aplicación Vue.</td></tr>
          <tr><td><code>package.json</code></td><td>Contiene dependencias y scripts (dev, build, preview).</td></tr>
          <tr><td><code>vite.config.js</code></td><td>Configuración de Vite, paths y plugins.</td></tr>
          <tr><td><code>src/</code></td><td>Carpeta principal con tu código Vue.</td></tr>
          <tr><td><code>main.js</code></td><td>Punto de entrada donde se monta Vue en el DOM.</td></tr>
          <tr><td><code>App.vue</code></td><td>Componente raíz de tu aplicación.</td></tr>
          <tr><td><code>components/</code></td><td>Carpeta para tus componentes reutilizables.</td></tr>
          <tr><td><code>assets/</code></td><td>Imágenes, estilos y otros recursos.</td></tr>
          <tr><td><code>node_modules/</code></td><td>Dependencias instaladas automáticamente con npm.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- Cosas importantes -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon" /> Consejos clave al usar Vite
      </h2>
      <ul>
        <li>Inicia el servidor de desarrollo con <code>npm run dev</code>.</li>
        <li>Construye la versión de producción con <code>npm run build</code>.</li>
        <li>Previsualiza tu build con <code>npm run preview</code>.</li>
        <li>Vite soporta importaciones directas de CSS, imágenes y módulos ES.</li>
        <li>Errores de HMR son claros y fáciles de solucionar.</li>
        <li>Configura alias de carpetas en <code>vite.config.js</code> si tu proyecto crece.</li>
      </ul>
    </div>

    <!-- Tips rápidos -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'lightbulb']" class="icon" /> Tips rápidos para tu práctica
      </h2>
      <ul>
        <li>Vue 3 Composition API facilita la reutilización de lógica.</li>
        <li>Organiza tu proyecto en componentes y carpetas para mantenerlo limpio y escalable.</li>
        <li>Aprovecha HMR para iterar rápidamente, Vite es muy eficiente.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "Introduccion",
  components: {
    FontAwesomeIcon
  }
};
</script>
