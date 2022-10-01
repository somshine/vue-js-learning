import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import './assets/main.css'
import Icons from "uikit/dist/js/uikit-icons";
import UIkit from 'uikit';

UIkit.use(Icons);

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
