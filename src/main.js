import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faRocket, faDownload, faFolderOpen, faPuzzlePiece, faBox, faBolt, faBrain, faTools,
  faBullseye, faRoute, faBroadcastTower, faServer, faDatabase, faCog, 
  faQuestionCircle, faThumbtack, faCode, faClock, faLayerGroup, faRecycle, faCloud, faObjectGroup
} from '@fortawesome/free-solid-svg-icons'

// Agregar todos los íconos a la librería
library.add(
  faRocket, faDownload, faFolderOpen, faPuzzlePiece, faBox, faBolt, faBrain, faTools,
  faBullseye, faRoute, faBroadcastTower, faServer, faDatabase, faCog,
  faQuestionCircle, faThumbtack, faCode, faClock, faLayerGroup, faRecycle, faCloud, faObjectGroup
)

// Crear la app de Vue
const app = createApp(App)

// Registrar componente global de Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon)

// Usar el router
app.use(router)

// Montar la app
app.mount('#app')
