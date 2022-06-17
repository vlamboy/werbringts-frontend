<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">Produkt Nummer</th>
            <th scope="col">Produktbezeichnung</th>
            <th scope="col">Anzahl</th>
            <th scope="col">Mitbringende</th>
            <th scope="col">Wird Mitgebracht</th>
            <th scope="col">Aktionen</th>
          </tr>
          </thead>
          <tbody>
          <tr class v-for="(products, index) in products" :key="products.productId">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{products.productName}}</td>
            <td>{{products.quatity}}</td>
            <td>
            </td>
            <td>{{products.closed}}</td>
            <td>
              <button type="button" class="btn btn-success">Mitbringen</button>
              <button type="button" class="btn btn-danger"
                      @click = "deleteProduct(products)">
                Löschen</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    };
  },
  methods: {
    checkbox(products) {
      if (products.closed === true) {
        return true;
      }
      return false;
    },

    deleteProduct(products) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/products`;
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
      };

      fetch(`${endpoint}/${products.productId}`, requestOptions)
        .catch((error) => console.log('error', error));
    },
  },
  mounted() {
    const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/products`;
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
};
</script>

<style scoped>
.container {
  padding: 2rem 0rem;
}

h4 {
  margin: 2rem 0rem 1rem;
}

</style>
