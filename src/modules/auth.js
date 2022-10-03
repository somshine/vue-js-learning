import axios from "axios";
import router from '../router';

const state = {
    auth: {}
};

const getters = {
    isAuthenticated: state => state.auth.isAuthenticated
}

const actions = {
    async doLogin({ commit }, user) {
        const response = await axios.get("http://localhost:3000/login/1");
        console.log(response.data);
        commit("doLogin", response.data);
        router.push({name: 'home'});
        return response.data;
    },

    async logoutUser({ commit }) {
        commit("deleteAuth");
    }
}

const mutations = {
    doLogin: (state, user) => state.auth = user,
    deleteAuth: (state) => state.auth = {},
}

export default {
    state,
    getters,
    actions,
    mutations
};