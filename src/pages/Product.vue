<template>
  <template v-if="product">
    <div class="container my-5">
      <div class="row details-snippet1">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-2 mini-preview">
              <img
                v-for="(image, index) in product.images"
                :key="index"
                class="img-fluid"
                style="cursor: pointer"
                :src="image"
                :alt="product.title"
                @click="thumbnailSetImage(index)"
              />
            </div>
            <div class="col-md-10">
              <div class="product-image">
                <img
                  class="img-fluid"
                  :src="product.images[thumbnailClickedImage]"
                  :alt="product.title"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="category">
            <span class="theme-text">Category:</span>
            <span class="text-capitalize px-2">{{ product.category }}</span>
          </div>
          <div class="title">{{ product.title }}</div>
          <div class="ratings my-2">
            <div class="stars d-flex align-items-center">
              <div class="theme-text mr-2">Product Ratings:</div>
              <ProductRating :disabledStatus="ratingStatus" />
              <div class="ml-2">({{ product.rating }})</div>
            </div>
          </div>
          <div class="price my-2">
            ${{ product.price - product.discountPercentage }}
            <del class="original-price">${{ product.price }}</del>
            <span class="percentage"
              >Discount Percentage : {{ product.discountPercentage }}%</span
            >
          </div>
          <div class="theme-text subtitle">Brief Description:</div>
          <div class="brief-description">
            {{ product?.description }}
          </div>

          <!-- TO REMOVE COLORS -->
          <div>
            <div class="subtitle my-3 theme-text">Colors:</div>
            <div class="select-colors d-flex">
              <div class="color red"></div>
              <div class="color silver"></div>
              <div class="color black"></div>
            </div>
          </div>

          <hr />
          <div class="row">
            <div class="col-md-3">
              <input type="number" class="form-control" v-model="quantity" />
            </div>
            <div class="col-md-9">
              <button class="btn addBtn btn-block" @click="addProductToCart">
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="additional-details my-5 text-center">
        <!-- Nav pills -->
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-tabs">
            <a
              class="nav-link active"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#home"
              >Description</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#menu1"
              >Reviews</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#menu2"
              >Specifications</a
            >
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content mt-4 mb-3">
          <div class="tab-pane container active" id="home">
            <div class="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident magni assumenda consectetur facere eius. Minus
              reprehenderit placeat ullam vel ab eaque sequi impedit, ipsum
              soluta temporibus fugit ipsa. Dolor libero modi molestiae dicta,
              vitae minus laborum error cum consequatur autem minima eveniet
              porro obcaecati quibusdam possimus eos, debitis sint magnam,
              explicabo accusantium aspernatur ipsa repellat tempore nihil. Cum
              placeat voluptate dignissimos dicta harum consectetur, nemo
              debitis tempore. Quod culpa perspiciatis unde natus. Modi
              expedita, ab repellendus reiciendis sed voluptate, culpa laborum
              ad, consectetur quas tempora quo? Quibusdam doloribus magnam
              maxime, accusamus officiis odit reiciendis labore laudantium.
              Molestiae corporis temporibus ad?
            </div>
          </div>
          <div class="tab-pane container fade" id="menu1">
            <div class="review">
              <p>PUT REVIEWS DESIGN HERE</p>
            </div>
          </div>
          <div class="tab-pane container fade" id="menu2">
            <div class="specification">
              <p>PUT SPECIFICATIONS HERE</p>
            </div>
          </div>
        </div>
      </div>

      <div class="related-products details-snippet1">
        <div class="related-heading theme-text">Related Products</div>

        <div class="row">
          <div class="col-md-3">
            <div class="related-product">
              <img
                class="img-fluid"
                src="https://source.unsplash.com/gsKdPcIyeGg"
                alt="Related Product"
              />
            </div>
            <div class="related-title">Lovely Black Dress</div>
            <div class="d-flex">
              <div class="related-price mr-auto">$100.00</div>
              <div class="stars d-flex">
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="related-product">
              <img
                class="img-fluid"
                src="https://source.unsplash.com/sg_gRhbYXhc"
                alt=""
              />
            </div>
            <div class="related-title">Lovely Dress With Patterns</div>
            <div class="d-flex">
              <div class="related-price mr-auto">$1199.00</div>
              <div class="stars d-flex">
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="related-product">
              <img
                class="img-fluid"
                src="https://source.unsplash.com/gJZQcirK8aw"
                alt=""
              />
            </div>
            <div class="related-title">Lovely Fashion Dress</div>
            <div class="d-flex">
              <div class="related-price mr-auto">$200.00</div>
              <div class="stars d-flex">
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="related-product">
              <img
                class="img-fluid"
                src="https://source.unsplash.com/qbB_Z2pXLEU"
                alt=""
              />
            </div>
            <div class="related-title">Lovely Red Dress</div>
            <div class="d-flex">
              <div class="related-price mr-auto">$120.00</div>
              <div class="stars d-flex">
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
                <div>&#9733;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductRating from "../components/ProductRating.vue";
export default {
  name: "ProductPage",
  components: {
    ProductRating,
  },
  props: ["id"],
  data() {
    return {
      quantity: 1,
      thumbnailClickedImage: 0,
      ratingStatus: false,
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
  updated() {
    console.log(this.product);
    let rating = Math.round(this.product.rating) * 2;
    let dynamicRating = "rating" + rating;
    if (document.getElementById(dynamicRating)) {
      document.getElementById(dynamicRating).click();
      this.ratingStatus = true;
      // document.getElementsByClassName("rate")[0].style.pointerEvents = "none";
      // document.getElementsByClassName("rate")[0].setAttribute("disabled", true);
    }
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions("cart", ["addToCart"]),
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
    thumbnailSetImage(index) {
      this.thumbnailClickedImage = index;
    },
  },
};
</script>

<style scoped>
/* Base setup */
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
.product-img {
  height: 300px;
}
.border-right {
  border-right: 1px solid #ccc;
}
.details-snippet1 {
  color: #585656;
}

/* Main text uses this styling and color */
.details-snippet1 .theme-text {
  color: purple;
  font-weight: bold;
}

.details-snippet1 .mini-preview img {
  border: 1px solid #585656;
  border: 1px solid purple;
  margin-bottom: 8px;
}

.details-snippet1 .title {
  color: #464343;
  font-weight: bold;
  font-size: 2rem;
}

.details-snippet1 .price {
  font-weight: bold;
  font-size: 1.8rem;
}

.details-snippet1 .original-price {
  font-weight: normal;
  font-size: 20px;
}

.brief-description {
  /* color: #585656; */
  color: #464343;
}

.select-colors .color {
  display: inline-block;
  border: 1px solid grey;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: black;
}

.select-colors .color.red {
  background-color: red;
}

.select-colors .color.silver {
  background-color: silver;
}

.select-colors .color.black {
  background-color: black;
}

.addBtn {
  background-color: purple;
  color: white;
  text-transform: uppercase;
}

.addBtn:hover {
  background-color: #500150;
  color: white;
}

.related-heading {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  /* color: #464343; */
}

.details-snippet1 .related-title {
  color: #464343;
  font-weight: bold;
}

.details-snippet1 .related-price {
  color: #464343;
  font-weight: bold;
}

.additional-details .nav-link {
  border: none;
  color: #464343;
}

.additional-details .nav-link.active {
  background-color: white;
  color: #464343;
  border: none;
  border-bottom: 4px solid purple;
}
span.percentage {
  display: inline-block;
  width: auto;
  font-size: 14px;
  padding-left: 20px;
}
</style>
