import { createApp } from 'vue';
import router from './router';
import useIcon from './common/useIcon';
import './style.css';
import App from './App.vue';


createApp(App)
  .use(router)
  .use(useIcon)
  .mount('#app');
