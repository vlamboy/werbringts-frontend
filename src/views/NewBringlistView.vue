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
    <new-product></new-product>
    <product-list></product-list>
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
};
</script>

<style scoped>

</style>
