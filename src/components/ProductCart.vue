<template>
  <div class="col-lg-3 mt-3col-sm-12 col-md-6 mb-4">
    <div class="card h-100 text-left mx-2 my-4">
      <img
        class="w-100 product-img p-4"
        :src="product?.thumbnail"
        :alt="product?.title"
      />
      <div class="card-body">
        <h4 class="card-title">
          <router-link
            :to="{ name: 'Product', params: { id: product?._id } }"
            class="wrap-single-line"
            :title="product?.title"
          >
            {{ product?.title }}
          </router-link>
        </h4>
        <strong>${{ product?.price }}</strong>
        <p class="card-text ellipse" :title="product?.description">
          {{ product?.description }}
        </p>
      </div>
      <div class="px-3 pb-3">
        <button class="btn btn-secondary" @click="addProductToCart(product)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductCart",
  props: ["product"],
  methods: {
    ...mapActions("cart", ["addToCart"]),
    addProductToCart(product) {
      this.addToCart({ product, quantity: 1 });
      // this.$store.dispatch("addToCart", { product, quantity: 1 });
    },
  },
};
</script>

<style scoped>
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.wrap-single-line {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.product-img {
  height: 200px;
  /* padding: 1rem; */
}
.ellipse {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
