<template>
  <div class="app">
    <!-- Botón hamburguesa para móviles -->
    <button class="hamburger-btn" @click="isSidebarOpen = !isSidebarOpen">☰</button>

    <!-- Sidebar -->
    <Sidebar :isOpen="isSidebarOpen" @closeSidebar="isSidebarOpen = false" />

    <!-- Overlay que se muestra cuando el sidebar está abierto en móvil -->
    <div class="overlay" v-if="isSidebarOpen" @click="isSidebarOpen = false"></div>

    <!-- Contenido principal -->
    <main class="main">
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
  },
  data() {
    return {
      isSidebarOpen: false
    }
  }
}
</script>
