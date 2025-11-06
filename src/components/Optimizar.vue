<template>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'cog']" class="icon"/>
        Optimización & Buenas Prácticas
      </h1>
    </div>

    <!-- Optimización de rendimiento -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Optimización de rendimiento
      </h2>
      <p>
        Para que tus aplicaciones Vue + Vite sean rápidas y escalables, es importante aplicar ciertas técnicas de optimización.
      </p>
      <ul>
        <li>Usar <strong>lazy loading</strong> y <strong>dynamic imports</strong> para cargar componentes solo cuando se necesiten.</li>
        <li>Dividir el código en <strong>chunks</strong> para reducir el tamaño inicial del bundle.</li>
        <li>Evitar cálculos costosos en el template; usar <strong>computed</strong> y <strong>watch</strong> cuando corresponda.</li>
        <li>Aplicar <strong>v-once</strong> para contenido que no cambia y <strong>v-memo</strong> para memorizar fragmentos renderizados.</li>
      </ul>
    </div>

    <!-- Buenas prácticas -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Buenas prácticas
      </h2>
      <ul>
        <li>Dividir la aplicación en <strong>componentes pequeños y reutilizables</strong>.</li>
        <li>Usar <strong>Composition API</strong> para lógica compartida y más claridad.</li>
        <li>Aplicar <strong>Scoped CSS</strong> para evitar conflictos de estilos.</li>
        <li>Centralizar las llamadas a APIs en servicios para mantener componentes limpios.</li>
        <li>Usar <strong>Vue Router</strong> para navegación y <strong>Pinia</strong> para gestión de estado global.</li>
        <li>Seguir la <strong>Guía oficial de Vue</strong> para mantener consistencia y buenas prácticas.</li>
      </ul>
    </div>

    <!-- Testing y mantenimiento -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'tools']" class="icon"/>
        Testing y mantenimiento
      </h2>
      <ul>
        <li>Escribir tests unitarios para componentes críticos.</li>
        <li>Usar linters y formateadores para mantener un código limpio y consistente.</li>
        <li>Revisar regularmente dependencias y actualizaciones de seguridad.</li>
        <li>Documentar componentes y lógica compartida para facilitar mantenimiento futuro.</li>
      </ul>
    </div>

  </div>
</template>
