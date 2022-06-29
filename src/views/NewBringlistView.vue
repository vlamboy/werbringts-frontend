<template>
  <div class="newBringlist">
    <br>
    <h1>Deine neue Werbringts-Liste</h1>
    <br>
    <h4>Infos und Beschreibung</h4>
    <h5>{{fullBringList.listDescription}}</h5>
    <br>
    <br>
    <button-bar></button-bar>
    <br>
    <br>
    <name-popup></name-popup>
    <br>
    <br>
    <new-product @created="loadProducts"></new-product>
    <product-list :fullBringList="this.fullBringList"></product-list>
  </div>
</template>

<script>

import NamePopup from '@/components/NamePopup.vue';
import ButtonBar from '@/components/ButtonBar.vue';
import ProductList from '@/components/ProductList.vue';
import NewProduct from '@/components/NewProduct.vue';

export default {
  name: 'NewBringlistView',
  components: {
    NewProduct,
    NamePopup,
    ButtonBar,
    ProductList,
  },
  data() {
    return {
      fullBringList: '',
    };
  },
  methods: {
    loadProducts() {
      // eslint-disable-next-line max-len
      this.fullBringList = null;
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/fullbringlist?id=${this.$route.params.bringlistId}`;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          this.fullBringList = result;
        })
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
