<script>
import AddTodo from "../components/AddTodo.vue";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoView",
  computed: mapGetters(["allTodos"]),
  data() {
    return {
      viewTodoAddForm: false,
      todoTasks: [],
    };
  },
  methods: {
    ...mapActions(['fetchTodos', 'addTodo', 'deleteTodo']),
    async getTodoTasks() {
      axios.get("http://localhost:3000/todos").then((response) => {
        this.todoTasks = response.data;
        console.log(response.data);
        console.log("the value sis ", this.todoTasks);
        console.log("the value sis ", this.todoTasks[0].title);
      });
    },

    addTask(todoTask) {
    //   axios.post("http://localhost:3000/todos", todoTask).then((response) => {
    //     console.log(response);
    //   });
        this.addTodo(todoTask);
    },

    deleteTodoById(todoId) {
        this.deleteTodo(todoId);
    },

    getAddFromViewState() {
      return this.viewTodoAddForm;
    },
  },
  mounted() {
    this.getTodoTasks();
  },
  created() {
    this.fetchTodos();
  },
  components: { AddTodo },
  emits: ["addTask"],
};
</script>

<template>
  <div>
    <span class=".uk-column-1-2@l"><h1>Todo Listing</h1></span>
    <button
      class="uk-button uk-button-success .uk-column-1-2@l"
      v-on:click="viewTodoAddForm = !viewTodoAddForm"
    >
      {{ !viewTodoAddForm ? "Show" : "Hide" }} Add Todo From
    </button>
  </div>
  <AddTodo v-if="getAddFromViewState()" @addTask="addTask" />
  <div class="listing">
    <table class="uk-table uk-table-hover uk-table-divider">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="todoTask in todoTasks" :key="todoTask">
          <td>{{ todoTask.id }}</td>
          <td>{{ todoTask.title }}</td>
          <td>{{ todoTask.description }}</td>
          <td>{{ todoTask.status }}</td>
        </tr> -->
        <tr v-for="todo in allTodos" :key="todo">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td>{{ todo.description }}</td>
          <td>{{ todo.status }}</td>
          <td><a class="uk-button uk-button-danger" v-on:click="deleteTodoById(todo.id)" href="javascript:void(0);"><i class="fa fa-trash"></i></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
