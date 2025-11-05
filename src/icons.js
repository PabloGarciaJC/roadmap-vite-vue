// src/icons.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa los íconos que vas a usar
import { 
  faRocket, 
  faPuzzlePiece, 
  faBox, 
  faBolt, 
  faBrain, 
  faTools, 
  faBullseye, 
  faRoute, 
  faBroadcastTower, 
  faCog 
} from '@fortawesome/free-solid-svg-icons'

// Agrega los íconos a la librería
library.add(
  faRocket, 
  faPuzzlePiece, 
  faBox, 
  faBolt, 
  faBrain, 
  faTools, 
  faBullseye, 
  faRoute, 
  faBroadcastTower, 
  faCog
)

export { FontAwesomeIcon }
