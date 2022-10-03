import { createApp } from 'vue';
import Vuex from 'vuex';
import todos from '../modules/todos';
import auth from '../modules/auth';
import createPersistedState from "vuex-persistedstate";

// const app = createApp(App)
// Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todos,
        auth
    },
    plugins: [createPersistedState()]
});