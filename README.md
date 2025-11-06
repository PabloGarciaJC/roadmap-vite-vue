# Roadmap Vue + Vite

Este proyecto se utiliza como base de estudio y experimentación con **Vue 3 + Vite**, con el objetivo de estructurar, optimizar y estandarizar buenas prácticas en aplicaciones frontend.

## Demo del Proyecto

[https://roadmap-vite-vue.com/](https://roadmap-vite-vue.pablogarciajc.com/)

| ![Imagen 1](https://pablogarciajc.com/wp-content/uploads/2025/11/roadmap-vite-vue-1.webp) | ![Imagen 2](https://pablogarciajc.com/wp-content/uploads/2025/11/roadmap-vite-vue-3.webp) |
|-----------|-----------|

## Áreas de Estudio

Este proyecto está enfocado en reforzar conocimientos esenciales de **Vue 3 + Vite**, comprendiendo su arquitectura basada en componentes, flujo de datos reactivo y buenas prácticas mientras se construye una aplicación real.

- **Introducción a Vue**: Estructura del proyecto, Vite, montaje de la app y filosofía del framework.
- **Componentes**: Creación de componentes, comunicación entre componentes con **props** y **emits**, encapsulación de estilos (`scoped`) y organización por carpetas.
- **Template Syntax y Data Binding**: Interpolación, property binding, event binding y binding bidireccional con `v-model`.
- **Directivas**: Uso de `v-if`, `v-for`, `v-show`, clases dinámicas, estilos dinámicos y creación de directivas personalizadas.
- **Computed & Watchers**: Propiedades computadas, watchers para observar cambios de estado y lógica reactiva avanzada.
- **Props y Eventos**: Paso de datos desde padres a hijos, emisión de eventos y comunicación descendente/ascendente.
- **Composition API**: Uso de `setup()`, `ref`, `reactive`, `toRefs` y composición de lógica reutilizable.
- **Composables**: Funciones reutilizables para lógica compartida entre componentes.
- **Consumo de APIs / Axios**: Peticiones GET/POST, manejo de errores, tipado de respuestas y centralización de llamadas a APIs.
- **Slots & Scoped Slots**: Personalización de componentes hijos desde el padre, contenido dinámico y composición flexible.
- **Router**: Configuración de rutas, rutas dinámicas, navegación, lazy loading y protección de rutas.
- **Estado Global con Pinia**: Manejo de estado compartido entre componentes, stores y patrones recomendados.
- **Ciclo de Vida**: Hooks del ciclo de vida (`onMounted`, `onUpdated`, `onUnmounted`, etc.).
- **Optimización & Buenas Prácticas**: Lazy loading de componentes, modularización, separación de responsabilidades y performance.

## Instalación

### Requisitos Previos

- Tener **Docker** y **Docker Compose** instalados.
- **Make**: Utilizado para automatizar procesos y gestionar contenedores de manera más eficiente.

### Pasos de Instalación

1. Clona el repositorio desde GitHub.
2. Dentro del repositorio, encontrarás un archivo **Makefile** que contiene los comandos necesarios para iniciar y gestionar tu aplicación.
3. Usa los siguientes comandos de **Make** para interactuar con la aplicación:

    - **`make init-app`**: Inicializa la aplicación, copiando `.env`, creando symlinks, levantando contenedores, instalando dependencias y levantando el servidor de desarrollo.  
    - **`make up`**: Levanta los contenedores asociados a la aplicación en segundo plano.  
    - **`make down`**: Detiene los contenedores y apaga la aplicación.  
    - **`make shell`**: Ingresa al contenedor para interactuar directamente con el sistema.  
    - **`make npm-install`**: Instala todas las dependencias definidas en `package.json`.  
    - **`make npm-host`**: Levanta el servidor de desarrollo (`npm run dev`) accesible desde tu máquina local.  
    - **`make build-prod`**: Genera la versión de producción de la aplicación (`npm run build`) y mueve los archivos compilados a la raíz del proyecto.  

4. Además de estos comandos, dentro del archivo **Makefile** puedes encontrar otros comandos que te permitirán interactuar de manera más específica con los contenedores y los diferentes servicios que conforman la aplicación.

5. Accede a los siguientes URL:
   - **Aplicación Web**: [http://localhost:5173](http://localhost:5173)

---

## Contáctame / Sígueme en mis redes sociales

| Red Social   | Descripción                                              | Enlace                   |
|--------------|----------------------------------------------------------|--------------------------|
| **Facebook** | Conéctate y mantente al tanto de mis actualizaciones.    | [Presiona aquí](https://www.facebook.com/PabloGarciaJC) |
| **YouTube**  | Fundamentos de la programación, tutoriales y noticias.   | [Presiona aquí](https://www.youtube.com/@pablogarciajc)     |
| **Página Web** | Más información sobre mis proyectos y servicios.        | [Presiona aquí](https://pablogarciajc.com/)              |
| **LinkedIn** | Sigue mi carrera profesional y establece conexiones.     | [Presiona aquí](https://www.linkedin.com/in/pablogarciajc) |
| **Instagram**| Fotos, proyectos y contenido relacionado.                 | [Presiona aquí](https://www.instagram.com/pablogarciajc) |
| **Twitter**  | Proyectos, pensamientos y actualizaciones.                | [Presiona aquí](https://x.com/PabloGarciaJC?t=lct1gxvE8DkqAr8dgxrHIw&s=09)   |

---
> _"El buen manejo de tus finanzas hoy construye la seguridad del mañana."_

