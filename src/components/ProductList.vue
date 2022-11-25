<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <ProductCart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import ProductCart from "./ProductCart.vue";
export default {
  name: "ProductList",
  components: {
    ProductCart,
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    // products() {
    //   return this.$store.state.products;
    // },
  },
  mounted() {
    // this.$store.dispatch("getProducts");
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>

<style scoped>
.custom-class > div {
  flex: 1 auto;
  margin: 5px;
}
</style>
