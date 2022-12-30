<template>
  <div class="form m-3 p-3">
    <div class="mb-3">
      <label for="productName" class="form-label">Product Name</label>
      <input
        type="text"
        class="form-control"
        id="productName"
        placeholder="Product Name"
        v-model="name"
        v-custom-validator:productName
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Product Description</label>
      <textarea
        class="form-control"
        id="description"
        rows="3"
        placeholder="Detailed Description"
        v-model="description"
        v-custom-validator:productDescription
      ></textarea>
    </div>

    <!-- product image -->
    <div class="product-info">
      <div class="product-image"><p class="text">product image</p></div>
      <div class="upload-image-sec">
        <!-- upload inputs -->
        <p class="text">
          <!-- <img src="img/camera.png" alt="" /> -->
          upload image
        </p>
        <div class="upload-catalouge">
          <input
            type="file"
            class="fileupload"
            id="first-file-upload-btn"
            hidden
          />
          <label for="first-file-upload-btn" class="upload-image"></label>
          <input
            type="file"
            class="fileupload"
            id="second-file-upload-btn"
            hidden
          />
          <label for="second-file-upload-btn" class="upload-image"></label>
          <input
            type="file"
            class="fileupload"
            id="third-file-upload-btn"
            hidden
          />
          <label for="third-file-upload-btn" class="upload-image"></label>
          <input
            type="file"
            class="fileupload"
            id="fourth-file-upload-btn"
            hidden
          />
          <label for="fourth-file-upload-btn" class="upload-image"></label>
        </div>
      </div>
      <div class="select-sizes">
        <p class="text">size available</p>
        <div class="sizes">
          <input type="checkbox" class="size-checkbox" id="xs" value="xs" />
          <input type="checkbox" class="size-checkbox" id="s" value="s" />
          <input type="checkbox" class="size-checkbox" id="m" value="m" />
          <input type="checkbox" class="size-checkbox" id="l" value="l" />
          <input type="checkbox" class="size-checkbox" id="xl" value="xl" />
          <input type="checkbox" class="size-checkbox" id="xxl" value="xxl" />
          <input type="checkbox" class="size-checkbox" id="xxxl" value="xxxl" />
        </div>
      </div>
    </div>

    <div class="product-price">
      <div class="mb-3">
        <label for="actual-price" class="form-label">Actual Price</label>
        <input
          type="number"
          class="form-control"
          id="actual-price"
          placeholder="Actual Price"
          v-model.number="actualPrice"
          v-custom-validator:actualPrice
        />
      </div>
      <div class="mb-3">
        <label for="discount" class="form-label">Product Discount</label>
        <input
          type="number"
          class="form-control"
          id="discount"
          placeholder="Product Discount"
          v-model.number="discount"
          v-custom-validator:discount
        />
      </div>
      <div class="mb-3">
        <label for="sell-price" class="form-label">Sell Price</label>
        <input
          type="number"
          class="form-control"
          id="sell-price"
          placeholder="Sell Price"
          v-model.number="sellPrice"
          v-custom-validator:sellPrice
        />
      </div>
    </div>

    <div class="mb-3">
      <label for="product-colors" class="form-label">Product Colors</label>
      <div class="rating" @click="selectColor($event)">
        <span id="red" value="#a43741" style="background-color: #a43741"></span>
        <span
          id="blue"
          value="#2f4073"
          style="background-color: #2f4073"
        ></span>
        <span
          id="green"
          value="#2d882d"
          style="background-color: #2d882d"
        ></span>
        <span
          id="yellow"
          value="#ffc107"
          style="background-color: #ffc107"
        ></span>
      </div>
    </div>

    <div class="row">
      <div class="mb-3 col">
        <label for="stock" class="form-label">Product Stock</label>
        <input
          type="number"
          class="form-control"
          id="stock"
          placeholder="Stock"
          v-model="stock"
          v-custom-validator:stock
        />
        <!-- <select
        class="form-select"
        aria-label="Product Stock"
        placeholder="Choose..."
      >
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select> -->
      </div>
      <div class="mb-3 col">
        <label for="category" class="form-label">Product Category</label>

        <select
          class="form-select"
          aria-label="Product Stock"
          id="category"
          v-model="category"
          v-custom-validator:category
        >
          <option value="" disabled>Choose...</option>
          <option v-for="brand in brands" :key="brand.id" :value="brand.id">
            {{ brand.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- <input type="checkbox" class="checkbox" id="tac" checked />
    <label for="tac">clothing take 30% from your total sell</label> -->

    <div class="buttons">
      <button class="btn" id="add-btn" @click="addProduct()">
        add product
      </button>
      <button class="btn" id="save-btn">save draft</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
export default {
  name: "UploadPage",
  setup() {
    const brands = ref([
      { name: "Apple", id: 1 },
      { name: "Samsung", id: 2 },
      { name: "OPPO", id: 3 },
      { name: "Huawei", id: 4 },
      { name: "Microsoft Surface", id: 5 },
      { name: "Infinix", id: 6 },
      { name: "HP Pavilion", id: 7 },
      { name: "Impression of Acqua Di Gio", id: 8 },
      { name: "Royal_Mirage", id: 9 },
      { name: "Fog Scent Xpressio", id: 10 },
      { name: "Al Munakh", id: 11 },
      { name: "Lord - Al-Rehab", id: 12 },
      { name: "L'Oreal Paris", id: 13 },
      { name: "Hemani Tea", id: 14 },
      { name: "Dermive", id: 15 },
      { name: "ROREC White Rice", id: 16 },
      { name: "Fair & Clear", id: 17 },
      { name: "Saaf & Khaas", id: 18 },
      { name: "Bake Parlor Big", id: 19 },
      { name: "Baking Food Items", id: 20 },
      { name: "fauji", id: 21 },
      { name: "Dry Rose", id: 22 },
      { name: "Boho Decor", id: 23 },
      { name: "Flying Wooden", id: 24 },
      { name: "LED Lights", id: 25 },
      { name: "luxury palace", id: 26 },
      { name: "Golden", id: 27 },
    ]);
    const state = reactive({
      name: "",
      description: "",
      actualPrice: "",
      discount: "",
      sellPrice: "",
      stock: "",
      category: "",
    });

    function selectColor(event) {
      if (event.target.classList.contains("active")) {
        event.target.classList.remove("active");
      } else {
        event.target.classList.add("active");
      }
    }

    function addProduct() {
      console.log({ state });
    }

    return {
      brands,
      selectColor,
      ...toRefs(state),
      addProduct,
    };
  },
};
</script>

<style scoped>
.rating {
  display: flex;
  gap: 20px;
}
.rating > span {
  width: 3rem;
  height: 3rem;
  border-radius: 30px;
  position: relative;
}

.rating > span:hover {
  cursor: pointer;
}

/* .rating > span:hover:before, */
.rating span.active:before,
.rating span.active:before,
.rating span.active:before,
.rating span.active:before {
  top: -5px;
  content: "";
  position: absolute;
  left: -6px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 30px;
  width: 60px;
  height: 60px;
}

/* .rating span.active {
  border: 4px solid;
  border-radius: 30px;
  width: 50px;
  height: 50px;
} */

input,
textarea {
  font-weight: 500;
}

input:not(input[type="checkbox"]) {
  width: 100%;
}

textarea {
  width: 100%;
  /* height: 270px; */
  resize: none;
  padding: 10px 20px;
}

.product-info {
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  background-size: cover;
  border-radius: 10px;
  grid-row: span 2;
  text-shadow: 0 0 10px #fff;
}

.text {
  text-transform: capitalize;
  color: #383838;
  font-size: 20px;
  font-weight: 500;
}

.upload-image-sec,
.select-sizes {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}

.text img {
  height: 20px;
  margin-right: 10px;
}

.upload-catalouge {
  width: 100%;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-gap: 10px;
}

.upload-image {
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  cursor: pointer;
  background-size: cover;
}

.upload-image:hover {
  background: rgba(0, 0, 0, 0.2);
  background-size: cover;
}

.sizes {
  margin-top: 30px;
}

.size-checkbox {
  -webkit-appearance: none;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #383838;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
  position: relative;
  color: #383838;
}

.size-checkbox::after {
  content: attr(value);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  text-transform: uppercase;
}

.size-checkbox:checked {
  background: #383838;
  color: #fff;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.product-price {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.product-price input {
  margin: 0;
}

.buttons {
  margin: 20px 0 50px;
}

.btn {
  padding: 10px 30px;
  text-transform: capitalize;
  color: #fff;
  background: #383838;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
}

#save-btn {
  background: #a9a9a9;
}

.form {
  background-color: #ccc;
}
.form-label {
  font-weight: bold;
}
</style>
