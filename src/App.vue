<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenido principal -->
    <main class="main">
      <!-- Aquí se renderiza el componente según la ruta -->
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
