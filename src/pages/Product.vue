<template>
  <div class="card mt-5">
    <div class="row">
      <div class="col-4 border-right p-4">
        <img
          :src="product?.image"
          class="w-100 product-img p-4"
          :alt="product?.title"
        />
      </div>
      <div class="col-8 p-4">
        <h1>{{ product?.title }}</h1>
        <h3>${{ product?.price }}</h3>
        <div class="d-flex align-items-center">
          <input
            type="number"
            class="text-center col-1 mx-2 p-1"
            v-model="quantity"
          />
          <button class="btn btn-secondary" @click="addProductToCart">
            Add to cart
          </button>
        </div>
        <h5 class="mt-4">{{ product?.description }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ProductPage",
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapState("product", ["product"]),
    // product() {
    //   return this.$store.state.product;
    // },
  },
  mounted() {
    // return this.$store.dispatch("getProduct", this.id);
    this.getProduct(this.id);
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions('cart', ["addToCart"]),
    addProductToCart() {
      this.addToCart({
        product: this.product,
        quantity: this.quantity || 1,
      });

      // this.$store.dispatch("addToCart", {
      //   product: this.product,
      //   quantity: 1,
      // });
    },
  },
};
</script>

<style scoped>
.product-img {
  height: 300px;
}
.border-right {
  border-right: 1px solid #ccc;
}
</style>
