<template>
  <div id="login">
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" action="" method="post">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="email" class="text-info">Username:</label><br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="form-control"
                  v-model="email"
                  v-custom-validator:email
                />
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label><br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  v-model="password"
                  v-custom-validator:password
                />
              </div>
              <div class="form-group mt-3">
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    v-model="rememberMe"
                    v-custom-validator:rememberMe
                  />
                  <label
                    class="form-check-label text-info px-1"
                    for="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <router-link to="/register" class="nav-item nav-link">
                    Register here
                  </router-link>
                </div>
                <br />
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-dark"
                  @click="submitForm()"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: "LoginPage",
  setup() {
    const store = useStore();

    const state = reactive({
      email: "",
      password: "",
      rememberMe: false,
    });

    function submitForm() {
      store.dispatch("auth/doLogin", { ...state });
    }

    return {
      ...toRefs(state),
      submitForm,
    };
  },
};
</script>

<style scoped>
div#login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
}
#login .container #login-row #login-column #login-box {
  /* margin-top: 120px; */
  /* max-width: 600px;
  height: 320px; */
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
  border-radius: 4px;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
</style>
