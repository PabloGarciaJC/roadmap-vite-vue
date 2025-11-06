<template>
  <div :class="['sidebar', isOpen ? 'open' : '']">
    <div class="sidebar-header">
      <h2 class="sidebar-title">Roadmap Vue + Vite</h2>
      <button class="close-btn" @click="$emit('closeSidebar')">✕</button>
    </div>
    <ul class="sidebar-links">
      <li v-for="link in links" :key="link.to">
        <router-link :to="link.to" class="sidebar-link" @click="$emit('closeSidebar')">
          <font-awesome-icon :icon="['fas', link.icon]" class="icon" />
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "Sidebar",
  props: {
    isOpen: { type: Boolean, default: true },
  },
  components: { FontAwesomeIcon },
  data() {
    return {
      links: [
        { to: "/introduccion", label: "Introducción", icon: "rocket" },
        { to: "/instalacion", label: "Instalación + Vite", icon: "download" },
        { to: "/templates", label: "Template Syntax", icon: "code" },
        { to: "/componentes", label: "Componentes", icon: "puzzle-piece" },
        { to: "/props", label: "Props", icon: "box" },
        { to: "/eventos", label: "Emit / Eventos", icon: "bullseye" },
        { to: "/estado", label: "Estado Reactivo", icon: "bolt" },
        { to: "/computed", label: "Computed + Watch", icon: "brain" },
        { to: "/lifecycle", label: "Ciclo de Vida", icon: "clock" },
        { to: "/compositionAPI", label: "Composition API", icon: "layer-group" },
        { to: "/apis", label: "Consumo de APIs / Axios", icon: "cloud" },
        { to: "/slots", label: "Slots & Scoped Slots", icon: "object-group" },
        { to: "/routers", label: "Router", icon: "route" },
        { to: "/pinia", label: "Pinia (Estado Global)", icon: "broadcast-tower" },
        { to: "/optimizar", label: "Optimización & Buenas Prácticas", icon: "cog" }
      ]
    };
  }
};
</script>
