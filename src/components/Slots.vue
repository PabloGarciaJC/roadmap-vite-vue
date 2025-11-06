<template>
  <div class="container">

    <!-- Header -->
    <div class="header">
      <h1 class="title">
        <font-awesome-icon :icon="['fas', 'object-group']" class="icon"/>
        Slots & Scoped Slots
      </h1>
    </div>

    <!-- Qué son los Slots -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'question-circle']" class="icon"/>
        ¿Qué son los Slots?
      </h2>
      <p>
        Los <strong>slots</strong> permiten a un componente padre inyectar contenido dentro de un componente hijo de forma dinámica. 
        Esto hace que los componentes sean más flexibles y reutilizables.
      </p>
      <ul>
        <li>El contenido del slot se define en el componente padre.</li>
        <li>El componente hijo actúa como un contenedor que renderiza ese contenido.</li>
        <li>Se pueden usar slots por defecto o con nombre para múltiples secciones.</li>
      </ul>
    </div>

    <!-- Scoped Slots -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Scoped Slots
      </h2>
      <p>
        Los <strong>scoped slots</strong> permiten pasar datos desde el componente hijo al padre dentro del slot.
        Son útiles para componentes altamente dinámicos, como listas o tablas.
      </p>
      <ul>
        <li>El componente hijo define variables o props que el padre puede usar dentro del slot.</li>
        <li>Permiten mayor control sobre cómo se renderiza el contenido en cada instancia.</li>
        <li>Mejoran la reusabilidad y la separación de responsabilidades entre componentes.</li>
      </ul>
    </div>

    <!-- Buenas prácticas -->
    <div class="card card-info">
      <h2 class="subtitle">
        <font-awesome-icon :icon="['fas', 'bolt']" class="icon"/>
        Buenas prácticas
      </h2>
      <ul>
        <li>Usar slots por defecto para contenido simple y único.</li>
        <li>Utilizar slots con nombre cuando haya múltiples secciones o contenido condicional.</li>
        <li>Aplicar scoped slots cuando se necesiten pasar datos del hijo al padre.</li>
        <li>Evitar complejidad excesiva; si un slot es demasiado complejo, considera dividirlo en componentes separados.</li>
      </ul>
    </div>

  </div>
</template>
