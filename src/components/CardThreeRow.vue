<script>
export default {
  props: {
    title: String,
    counter: Number,
    stateCounter: Boolean,
  },
  data() {
    return {
    }
  },
  methods: {
        increaseCounter() {
            if (this.stateCounter == false) {
                this.$emit("increaseCounterEmit");
            } else {
                this.$emit("stateCounter");
            }
        }
    },
};
</script>

<template>
  <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img
            class="uk-border-circle"
            width="40"
            height="40"
            src="https://getuikit.com/docs/images/avatar.jpg"
            alt="Avatar"
          />
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">{{ title }}</h3>
          <p class="uk-text-meta uk-margin-remove-top">
            <time datetime="2016-04-01T19:00">April 01, 2016</time>
          </p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <h1>{{ counter }}</h1>
      <button v-if="stateCounter" class="" @click="increaseCounter">Increase Counter Emit</button>
      <button v-if="!stateCounter" class="" @click="increaseCounter">Increase Counter State</button>
    </div>
    <div class="uk-card-footer">
      <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
  </div>
</template>
