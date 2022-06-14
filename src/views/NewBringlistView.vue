<template>
  <div class="newBringlist">
    <br>
    <h1>Deine neue Werbringts-Liste</h1>
    <br>
    <name-popup></name-popup>
  </div>
</template>

<script>

import NamePopup from '@/components/NamePopup.vue';

export default {
  name: 'NewBringlistView',
  components: { NamePopup },
};
</script>

<style scoped>

</style>
