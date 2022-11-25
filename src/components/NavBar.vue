<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <!-- <a class="nav-item nav-link active"
           href="#"
            aria-current="page"
            >Home <span class="visually-hidden">(current)</span></a
          > -->
          <router-link to="/" class="nav-item nav-link active"
            >Home</router-link
          >
          <!-- <router-link :to="{ name: 'home' }">Home</router-link> -->
          <a class="nav-item nav-link" href="#">Product</a>
        </div>
        <div>
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
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart.vue";
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  components: {
    MiniCart,
  },
  computed: {
    ...mapGetters('cart', ["cartItemCount"]),
    // cartItemCount() {
    //   return this.$store.getters.cartItemCount;
    // },
  },
};
</script>

<style scoped></style>
