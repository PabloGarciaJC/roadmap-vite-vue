<template>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'cloud']" class="icon"/>
        Consumo de APIs / Axios
      </h1>
    </div>

    <!-- Qué es Axios -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/>
        ¿Qué es Axios?
      </h2>
      <p>
        <strong>Axios</strong> es una librería basada en promesas para realizar peticiones HTTP en JavaScript y Vue 3.
        Permite comunicarse con APIs externas de manera sencilla y segura.
      </p>
      <ul>
        <li>Permite realizar <strong>GET, POST, PUT, DELETE</strong> de manera sencilla.</li>
        <li>Soporta interceptores para manejar errores o agregar headers.</li>
        <li>Funciona tanto en el navegador como en Node.js.</li>
      </ul>
    </div>

    <!-- Instalación -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'download']" class="icon"/>
        Instalación
      </h2>
      <p>Instala Axios en tu proyecto Vue 3 con:</p>
      <pre class="code-block"><code>npm install axios</code></pre>
      <p>Luego podrás importarlo en tus componentes para realizar peticiones HTTP.</p>
    </div>

    <!-- Uso general -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Cómo usar Axios
      </h2>
      <p>
        Para consumir APIs con Axios en Vue, se recomienda:
      </p>
      <ul>
        <li>Centralizar las llamadas a APIs en archivos de servicios.</li>
        <li>Manejar errores con <strong>try/catch</strong> o interceptores de Axios.</li>
        <li>Actualizar la UI utilizando la reactividad de Vue (con <strong>ref</strong> o <strong>reactive</strong>).</li>
        <li>Evitar mutaciones directas del estado global dentro de los componentes.</li>
      </ul>
    </div>

    <!-- Buenas prácticas -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Buenas prácticas
      </h2>
      <ul>
        <li>Usar <strong>async/await</strong> para mejorar la legibilidad del código.</li>
        <li>Separar la lógica de consumo de APIs de la UI en servicios dedicados.</li>
        <li>Mantener los componentes limpios y enfocados solo en la vista.</li>
        <li>Documentar las funciones que consumen APIs y los endpoints que utilizan.</li>
      </ul>
    </div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "ApisAxios",
  components: { FontAwesomeIcon },
};
</script>
