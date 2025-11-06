<template>
  <div class="container">
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'clock']" class="icon" />
        Ciclo de Vida
      </h1>
    </div>

    <!-- Explicación del ciclo de vida -->
    <div class="card card-info">
      <p>
        Cada componente en Vue tiene un <strong>ciclo de vida</strong>, que consiste en 
        diferentes fases desde su creación hasta su destrucción. Entender estas fases 
        es clave para manejar correctamente lógica, datos y efectos secundarios.
      </p>

      <h2 class="subtitle">Fases principales:</h2>
      <ul>
        <li>
          <strong>Creación:</strong> El componente se instancia, se procesan las props 
          y se inicializa el estado.
        </li>
        <li>
          <strong>Montaje:</strong> El componente se monta en el DOM. Hooks relevantes:
          <code>beforeMount</code>, <code>mounted</code>.
        </li>
        <li>
          <strong>Actualización:</strong> Cuando cambian los datos reactivos, la vista 
          se actualiza. Hooks relevantes:
          <code>beforeUpdate</code>, <code>updated</code>.
        </li>
        <li>
          <strong>Destrucción:</strong> Antes de remover un componente del DOM. Hooks 
          relevantes: <code>beforeUnmount</code>, <code>unmounted</code>.
        </li>
      </ul>

      <h2 class="subtitle">Ejemplo básico:</h2>
      <pre class="code-block">
<code>
export default {
  data() {
    return {
      contador: 0
    }
  },
  mounted() {
    console.log('Componente montado')
  },
  updated() {
    console.log('Componente actualizado')
  },
  unmounted() {
    console.log('Componente destruido')
  }
}
</code>
      </pre>

      <p>
        Conocer estos hooks te permite ejecutar lógica en el momento correcto, 
        como iniciar timers, escuchar eventos o limpiar recursos cuando un 
        componente ya no se necesita.
      </p>
    </div>
  </div>
</template>