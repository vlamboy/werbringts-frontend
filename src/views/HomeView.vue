<template>
  <div class="home">
    <img alt="Werbringts logo" src="../assets/logo_v2.png">
  </div>

  <input-form></input-form>
</template>

<script>
import InputForm from '@/components/InputForm.vue';

export default {
  name: 'HomeView',
  components: {
    InputForm,
  },
};
</script>
