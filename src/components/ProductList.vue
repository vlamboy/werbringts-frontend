<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        {{$route.params.bringlistId }}
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
          <tr class v-for="(product, index) in products" :key="product.productId">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{product.productName}}</td>
            <td>{{product.quantity}}</td>
            <td id="mitbringen"></td>
            <td>{{product.closed}}</td>
            <td>
              <button class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#itemsBroughtModal">Mitbringen</button>
              <button1 type="button" class="btn btn-danger"
                      @click = "deleteProduct(product);
                      updateListAfterDelete(products, index)">✘</button1>
            </td>
            <div class="modal fade" id="itemsBroughtModal" tabindex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Wie viele {{product.productName}} möchtest du mitbringen?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close">
                    </button>
                  </div>
                  <div class="modal-body">
                    <label for="rangeQuantityBrought" class="form-label">Gib die Anzahl hier ein
                      <input type="range" class="form-range" min="1"
                             :max="product.quantity" step="1" id="rangeQuantityBrought"
                             @change="updateQuantityBrought()"
                             v-model="quantityBrought">
                      <input type="text" id="inputquantitybrought"  >
                    </label>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Schließen</button>
                    <button class="btn btn-primary" type="submit" data-bs-dismiss="modal"
                            @click="createItemsbrought(product);
                            updateProductwithItemsBrought(product.productId, itemsBrought)">
                            Speichern</button>
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
      itemsBroughtPerProduct: [],
      quantityBrought: null,
    };
  },
  methods: {
    getQuantity() {
      const itemQuantity = document.getElementById('customRange3').value;
      // const itemQuantity = products.quantity;
      document.getElementById('rangeQuantityBrought').max = itemQuantity;
    },
    updateQuantityBrought() {
      const rangeItemsBrought = document.getElementById('rangeQuantityBrought').value;
      document.getElementById('inputquantitybrought').value = rangeItemsBrought;
    },
    updateListAfterDelete(products, index) {
      if (index > -1) {
        products.splice(index, 1);
      }
    },
    // updateProductwithItemsBrought(productId, itemsBrought) {
    //   itemsBroughtPerProduct.quantityBrought.reduce((accumulator, currentValue) => {
    //      return accumulator + currentValue;
    //    });
    // },
    deleteProduct(product) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/products`;
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
      };
      fetch(`${endpoint}/${product.productId}`, requestOptions)
        .catch((error) => console.log('error', error));
      // Produkt aus dem array löschen by id
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
    getItemsBroughtForProduct(productid) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/itemsBrought?productId=${productid}`;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) => result.forEach((itemsBrought) => {
          this.itemsBrought.push(itemsBrought);
        }))
        .catch((error) => console.log('error', error));
    },
  },
  mounted() {
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
};
</script>

<style scoped>
button {
  background-color:#156e75;
  color: #ffffff;
  border: none;
  margin-right: 8px; /* Some padding */
}
button1 {
  background-color:white;
  border: 2px solid #156e75;
  color: #156e75;
}

button:hover {
  background-color: #156e75;
}

button1:hover {
  background-color: #ed1e37;
  border: 2px solid #ed1e37;
  color: white;
}

.container {
  padding: 2rem 0rem;
}
h4 {
  margin: 2rem 0rem 1rem;
}
</style>
