const state = {
    counter: 0
};

const getters = {
    getCounter: state => state.counter
}

const actions = {
    async increaseStateCounter({ commit }) {
        commit("increaseCounter", 1)
    }
}

const mutations = {
    increaseCounter: (state, counter) => state.counter = 50,
}

export default {
    state,
    getters,
    actions,
    mutations
};