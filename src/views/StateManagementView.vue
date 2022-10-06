<script>
import { mapActions, mapGetters } from "vuex";
import CardThreeRow from "../components/CardThreeRow.vue";
export default {
  name: "StateManagement",
  computed: mapGetters["getCounter"],
  data() {
    return {
      counter: 0,
      title: "Component State",
      storeTitle: "Store State Title",
    };
  },
  methods: {
    ...mapActions(['increaseStateCounter']),
    increaseCounterEmit() {
      this.counter += 1;
      console.log("Called this...");
    },

    stateCounter() {
        this.increaseStateCounter()
        console.log("State counter :: ", this.getCounter);
    }
  },
  components: { CardThreeRow },
  emits: ["increaseCounterEmit", "stateCounter"],
};
</script>
<template>
  <CardThreeRow
    v-bind:title="title"
    v-bind:counter="counter"
    v-bind:stateCounter="false"
    @increaseCounterEmit="increaseCounterEmit"
  />
  <CardThreeRow
    v-bind:title="storeTitle"
    v-bind:counter="getCounter"
    v-bind:stateCounter="true"
    @stateCounter="stateCounter"
  />
</template>

<style scoped></style>
