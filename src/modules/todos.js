import axios from "axios";

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get("http://localhost:3000/todos");
        console.log(response.data);
        commit("setTodos", response.data);
    },
    async addTodo({commit}, todo) {
        const response = await axios.post("http://localhost:3000/todos", todo);
        console.log(response.data);
        commit("newTodo", response.data);
    },

    async deleteTodo({ commit }, id) {
        const response = await axios.delete(`http://localhost:3000/todos/${id}`);
        console.log(response.data);
        commit("deleteTodo", id);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos.filter(todo => todo.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
};