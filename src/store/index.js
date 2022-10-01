import { createApp } from 'vue';
import Vuex from 'vuex';
import todos from '../modules/todos';

// const app = createApp(App)
// Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todos
    }
});