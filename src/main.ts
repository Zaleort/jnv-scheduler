import { createApp } from 'vue'
import BrokaliaUi from '@brokalia/ui';
import '@brokalia/ui/src/scss/main.scss';
import './style.scss';
import App from './App.vue'

createApp(App)
  .use(BrokaliaUi)
  .mount('#app')
