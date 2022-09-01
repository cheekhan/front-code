import {createApp, ref} from 'vue';
import router from './router';
import useIcon from './common/useIcon';
import {createPinia} from "pinia";
import './style.css';
import App from './App.vue';


const uname = ref('wzk')
createApp(App)
    .provide('uname', uname)
    .use(router)
    .use(useIcon)
    .use(createPinia())
    .mount('#app')
