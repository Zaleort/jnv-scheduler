import { createApp } from 'vue'
import BrokaliaUi, { UiIcons } from '@brokalia/ui';
import icons from '@/assets/icons';
import './style.scss';
import App from './App.vue'

const app = createApp(App)
  .use(BrokaliaUi)

Object.keys(icons).forEach(k => {
  UiIcons.addIcon(k, { node: icons[k].node, viewBox: icons[k].viewBox });
});

app.mount('#app');
