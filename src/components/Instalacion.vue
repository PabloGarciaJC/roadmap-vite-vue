<template>
  <div class="container">
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'download']" class="icon" />
        Instalación de Vue con Vite
      </h1>
    </div>

    <!-- Instalación paso a paso -->
    <div class="card card-info">
      <p>
        Para crear un proyecto moderno en Vue, utilizamos <strong>Vite</strong>,
        ya que permite un desarrollo más rápido y eficiente.
      </p>

      <ol>
        <li>
          Asegúrate de tener instalado:
          <ul>
            <li><strong>Node.js 16+</strong></li>
            <li>
              <strong>NPM</strong> (incluido con Node) o <strong>Yarn</strong>
            </li>
          </ul>
        </li>

        <li>Crear un nuevo proyecto:</li>
      </ol>

      <pre
        class="code-block"
      ><code>npm create vite@latest my-vue-app</code></pre>

      <p>Cuando el asistente pregunte:</p>
      <ul>
        <li><strong>Framework:</strong> Selecciona <strong>Vue</strong></li>
        <li>
          <strong>Template:</strong> Elige <strong>JavaScript</strong> (o
          TypeScript si lo prefieres)
        </li>
      </ul>

      <ol start="3">
        <li>Ingresar al proyecto:</li>
      </ol>

      <pre class="code-block"><code>cd my-vue-app</code></pre>

      <ol start="4">
        <li>Instalar las dependencias:</li>
      </ol>

      <pre class="code-block"><code>npm install</code></pre>

      <ol start="5">
        <li>Levantar el servidor de desarrollo:</li>
      </ol>

      <pre class="code-block"><code>npm run dev</code></pre>

      <p>
        Ahora abre la URL (normalmente):
        <code>http://localhost:5173</code>
        para ver tu aplicación en ejecución.
      </p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Instalacion",
  components: { FontAwesomeIcon },
};
</script>
