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
              <button class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#itemsBroughtModal">Mitbringen</button>
              <button type="button" class="btn btn-danger"
                      @click = "deleteProduct(products)">
                Löschen</button>
            </td>
            <div class="modal fade" id="itemsBroughtModal" tabindex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Wie viele {{products.productName}} möchtest du mitbringen?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close">
                    </button>
                  </div>
                  <div class="modal-body">
                    <label for="rangeQuantityBrought" class="form-label">Gib die Anzahl hier ein
                      <input type="range" class="form-range" min="1"
                             max= "100" step="1" id="rangeQuantityBrought"
                             @change="updateQuantityBrought()"
                             v-model="quantityBrought">
                      <input type="text" id="inputquantitybrought"  >
                    </label>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Schließen</button>
                    <button class="btn btn-primary" type="submit" data-bs-dismiss="modal"
                            @click="createItemsbrought(products)">Speichern</button>
                  </div>
                </div>
              </div>
            </div>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      quantityBrought: null,
    };
  },
  methods: {
    getQuantity() {
      const itemQuantity = document.getElementById('customRange3').value;
      document.getElementById('rangeQuantityBrought').max = itemQuantity;
    },
    updateQuantityBrought() {
      const rangeItemsBrought = document.getElementById('rangeQuantityBrought').value;
      document.getElementById('inputquantitybrought').value = rangeItemsBrought;
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
    createItemsbrought(products) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/itemsBrought`;
      console.log(endpoint);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const payload = JSON.stringify({
        personId: 9,
        productId: products.productId,
        quantityBrought: this.quantityBrought,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow',
      };

      fetch(endpoint, requestOptions)
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
