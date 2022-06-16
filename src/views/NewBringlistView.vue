<template>
  <div class="newBringlist">
    <br>
    <h1>Deine neue Werbringts-Liste</h1>
    <br>
    <button-bar></button-bar>
    <br>
    <br>
    <name-popup></name-popup>
    <br>
    <br>
    <product-list></product-list>
  </div>
</template>

<script>

import NamePopup from '@/components/NamePopup.vue';
import ButtonBar from '@/components/ButtonBar.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'NewBringlistView',
  components: {
    NamePopup,
    ButtonBar,
    ProductList,
  },
};
</script>

<style scoped>

</style>
