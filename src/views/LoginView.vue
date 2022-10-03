<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LoginView",
  computed: mapGetters(["isAuthenticated"]),
  data() {
    return {
        username: "",
        password: "",
    };
  },
  methods: {
    ...mapActions(['doLogin']),
    executeLogin() {
        const user = {};
        user.username = this.username;
        user.password = this.password;
        this.doLogin(user);
        // if (user.isAuthenticated == true) {
        //     console.log("Working on this");
        //     this.$router.go("/");
        // }
    }
  },
  mounted() {
    // if (this.isAuthenticated == true) {
    //     // this.$router.push();
    //     this.$router.go("/");
    // }
  },
  created() {
    // this.isAuthenticated()
  }
};
</script>

<template>
  <div
    class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
    uk-height-viewport
  >
    <div class="uk-width-1-1">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div class="uk-width-1-1@m">
            <div
              class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"
            >
              <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
              <form @submit.prevent="executeLogin">
                <div class="uk-margin">
                  <div class="uk-inline uk-width-1-1">
                    <i class="fa fa-2x fa-key"></i>
                    <input
                      class="uk-input uk-form-large"
                      type="text"
                      placeholder="Username or eMail Address"
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <div class="uk-inline uk-width-1-1">
                    <i class="fa fa-2x fa-key"></i>
                    <input
                      class="uk-input uk-form-large"
                      type="password"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <div class="uk-margin">
                  <button type="submit"
                    class="uk-button uk-button-primary uk-button-large uk-width-1-1"
                  >
                    Login
                  </button>
                </div>
                <div class="uk-text-small uk-text-center">
                  Not registered? <a href="#">Create an account</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
