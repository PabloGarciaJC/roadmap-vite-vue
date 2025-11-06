<template>
  <div :class="['sidebar', isOpen ? 'open' : '']">
    <h2 class="sidebar-title">Roadmap Vue + Vite</h2>
    <ul class="sidebar-links">
      <li v-for="link in links" :key="link.to">
        <!-- Usando router-link en lugar de <a> -->
        <router-link :to="link.to" class="sidebar-link">
          <font-awesome-icon :icon="['fas', link.icon]" class="icon" />
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isOpen: { type: Boolean, default: true },
  },
  data() {
    return {
      links: [
        { to: "/introduccion", label: "Introducción", icon: "rocket" },
        { to: "/instalacion", label: "Instalación + Vite", icon: "download" },
        { to: "/templates", label: "Template Syntax", icon: "code" },
        { to: "/componentes", label: "Componentes", icon: "puzzle-piece" },
        { to: "/props", label: "Props", icon: "box" },
        { to: "/eventos", label: "Emit / Eventos", icon: "bullseye",},

        {
          to: "/estado",
          label: "Estado Reactivo (ref & reactive)",
          icon: "bolt",
        },
        { to: "/computed", label: "Computed + Watch", icon: "brain" },
        { to: "/lifecycle", label: "Ciclo de Vida", icon: "clock" },

        { to: "/composicion", label: "Composition API", icon: "layer-group" },
        {
          to: "/composables",
          label: "Composables (Reutilizar lógica)",
          icon: "recycle",
        },

        { to: "/routers", label: "Vue Router", icon: "route" },
        {
          to: "/pinia",
          label: "Pinia (Estado Global)",
          icon: "broadcast-tower",
        },
        { to: "/apis", label: "Consumo de APIs / Axios", icon: "cloud" },

        { to: "/slots", label: "Slots & Scoped Slots", icon: "object-group" },
        {
          to: "/optimizar",
          label: "Optimización & Buenas Prácticas",
          icon: "cog",
        },
      ],
    };
  },
};
</script>
