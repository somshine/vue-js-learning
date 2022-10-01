<script>
export default {
  data() {
    return {
      id: 0,
      title: "",
      description: "",
      status: false,
      todoTask: {},
    };
  },
  methods: {
    addTask() {
      // this.todoTask.id = this.title;
      this.todoTask.title = this.title;
      this.todoTask.description = this.description;
      this.todoTask.status = this.status == "on" ? true : false;

      console.log(this.todoTask);
      this.$emit("addTask", this.todoTask);
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="addTask">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Add Todo</legend>

        <div class="uk-margin">
          <input
            name="title"
            v-model="title"
            class="uk-input"
            type="text"
            placeholder="Todo Title"
          />
        </div>

        <div class="uk-margin">
          <textarea
            name="description"
            v-model="description"
            class="uk-textarea"
            rows="5"
            placeholder="Textarea"
          ></textarea>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <label
            ><input
              v-model="status"
              class="uk-radio"
              type="radio"
              name="completed"
            />
            Complated</label
          >
          <label
            ><input
              v-model="status"
              class="uk-radio"
              type="radio"
              name="completed"
            />
            Not-Completed</label
          >
        </div>
        <button type="submit" name="submit" class="uk-button uk-button-primary">
          Add Todo Task
        </button>
      </fieldset>
    </form>
  </div>
</template>

<style scoped></style>
