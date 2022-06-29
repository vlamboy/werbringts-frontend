<template>
  <div class="newBringlist">
    <br>
    <h1>Deine neue Werbringts-Liste</h1>
    <br>
    <view-description></view-description>
    <br>
    <br>
    <button-bar></button-bar>
    <br>
    <br>
    <name-popup></name-popup>
    <br>
    <br>
    <new-product @created="loadProducts"></new-product>
    <product-list :products="this.products"></product-list>
  </div>
</template>

<script>

import NamePopup from '@/components/NamePopup.vue';
import ButtonBar from '@/components/ButtonBar.vue';
import ProductList from '@/components/ProductList.vue';
import NewProduct from '@/components/NewProduct.vue';
import ViewDescription from '@/components/ViewDescription.vue';

export default {
  name: 'NewBringlistView',
  components: {
    ViewDescription,
    NewProduct,
    NamePopup,
    ButtonBar,
    ProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    loadProducts() {
      // eslint-disable-next-line max-len
      this.products = [];
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/products?bringListId=${this.$route.params.bringlistId}`;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) => result.forEach((products) => {
          this.products.push(products);
        }))
        .catch((error) => console.log('error', error));
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>

<style scoped>

</style>
