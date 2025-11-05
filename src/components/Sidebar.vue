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
        { to: "/componentes", label: "Componentes", icon: 'puzzle-piece' },
        { to: "/props", label: "Props", icon: 'box' },
        { to: "/estado", label: "Reactive / Ref", icon: 'bolt' },
        { to: "/composicion", label: "Composition API", icon: 'brain' },
        { to: "/directivas", label: "Directivas", icon: 'tools' },
        { to: "/eventos", label: "Eventos", icon: 'bullseye' },
        { to: "/routers", label: "Vue Router", icon: 'route' },
        { to: "/pinia", label: "Pinia (estado global)", icon: 'broadcast-tower' },
        { to: "/optimizar", label: "Optimización avanzada", icon: 'cog' }
      ]
    };
  }
};
</script>
