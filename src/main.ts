import { createApp } from 'vue'
import BrokaliaUi from '@brokalia/ui';
import './style.scss';
import App from './App.vue'

createApp(App)
  .use(BrokaliaUi)
  .mount('#app')
