// index.js
import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent se encarga de registrar el componente raíz
// y configurar el entorno correctamente tanto en Expo Go como en compilaciones nativas
registerRootComponent(App);
