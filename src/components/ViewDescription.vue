<template>
  <h4>Infos und Beschreibung</h4>
</template>

<script>
export default {
  name: 'ViewDescription',
  data() {
    return {
      bringlists: [],
    };
  },
  mounted() {
    const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/bringlists`;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((result) => result.forEach((bringlists) => {
        this.bringlists.push(bringlists);
      }))
      .catch((error) => console.log('error', error));
  },
};
</script>

<style scoped>

</style>
