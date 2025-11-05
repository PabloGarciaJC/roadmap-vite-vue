<template>
  <div :class="['sidebar', isOpen ? 'open' : '']">
    <h2 class="sidebar-title">Roadmap Vue + Vite</h2>
    <ul class="sidebar-links">
      <li v-for="link in links" :key="link.to">
        <!-- Usando router-link en lugar de <a> -->
        <router-link :to="link.to" class="sidebar-link">
          <font-awesome-icon :icon="['fas', link.icon]" class="icon" /> {{ link.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isOpen: { type: Boolean, default: true }
  },
  data() {
    return {
      links: [
        { to: "/introduccion", label: "Introducción a Vue", icon: 'rocket' },
        { to: "/instalacion", label: "Instalación y Vite", icon: 'download' },
        { to: "/estructura", label: "Estructura del proyecto", icon: 'folder-open' },
        { to: "/componentes", label: "Componentes", icon: 'puzzle-piece' },
        { to: "/props", label: "Props y Comunicación", icon: 'box' },
        { to: "/estado", label: "Reactive / Ref", icon: 'bolt' },
        { to: "/composicion", label: "Composition API", icon: 'brain' },
        { to: "/directivas", label: "Directivas", icon: 'tools' },
        { to: "/eventos", label: "Eventos y Métodos", icon: 'bullseye' },
        { to: "/routers", label: "Vue Router", icon: 'route' },
        { to: "/pinia", label: "Pinia (estado global)", icon: 'broadcast-tower' },
        { to: "/apis", label: "Consumo de APIs", icon: 'server' },
        { to: "/optimizar", label: "Optimización y buenas prácticas", icon: 'cog' }
      ]
    };
  }
};
</script>
