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
  faQuestionCircle, faThumbtack, faCode
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faRocket, faDownload, faFolderOpen, faPuzzlePiece, faBox, faBolt, faBrain, faTools,
  faBullseye, faRoute, faBroadcastTower, faServer, faDatabase, faCog,
  faQuestionCircle, faThumbtack, faCode
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
