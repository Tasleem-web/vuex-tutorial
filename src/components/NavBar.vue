<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-item nav-link active"
            >Home</router-link
          >
          <a class="nav-item nav-link" href="#">Product</a>
        </div>
        <div>
          <div class="d-flex align-items-center nav navbar-nav">
            <router-link
              to="/upload"
              class="nav-item nav-link"
              style="padding-right: 10px"
              >Upload Product</router-link
            >
            <div class="dropdown open">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ cartItemCount }} Cart
              </button>
              <div @click="$event.stopPropagation()">
                <MiniCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart.vue";
// import { mapGetters } from "vuex";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "NavBar",
  components: {
    MiniCart,
  },
  // computed: {
  //   ...mapGetters("cart", ["cartItemCount"]),
  //   // cartItemCount() {
  //   //   return this.$store.getters.cartItemCount;
  //   // },
  // },
  setup() {
    const store = useStore();

    return {
      // getter
      cartItemCount: computed(() => store.getters[`cart/cartItemCount`]),
    };
  },
};
</script>

<style scoped></style>
