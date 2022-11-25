<template>
  <div
    class="dropdown-menu"
    style="min-width: 300px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div v-for="item in cart" :key="item?.product?.id">
      <div class="p-2 d-flex justify-content-between">
        <div>
          <strong class="single-line">{{ item?.product?.title }}</strong>
          <div>{{ item?.quantity }} X ${{ item?.product?.price }}</div>
        </div>
        <div>
          <a
            style="color: blue"
            href="#"
            class="badge badge-dark"
            @click.prevent="removeProduct(item.product)"
            >remove</a
          >
        </div>
      </div>
      <hr />
    </div>
    <div class="p-2 d-flex justify-content-between">
      <div>Total: ${{ getCartCount }}</div>
      <div>
        <a
          style="color: blue"
          href="#"
          class="badge badge-dark"
          @click.prevent="removeAllItemFromCart()"
        >
          Clear Cart
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "MinCart",
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["getCartCount"]),
    // cart() {
    //   return this.$store.state.cart;
    // },
    // getCartCount() {
    //   return this.$store.getters.getCartCount.toFixed(2);
    // },
  },
  methods: {
    ...mapActions("product", ["removeProduct"]),
    ...mapActions("cart", ["removeAllItemFromCart"]),
    // removeProduct(product) {
    //   this.$store.dispatch("removeProduct", product);
    // },
    // removeAllItemFromCart() {
    //   this.$store.dispatch("removeAllItemFromCart");
    // },
  },
};
</script>

<style scoped>
.single-line {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
