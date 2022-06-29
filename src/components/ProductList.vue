<template>
  <!-- <ProductList :key="componentKey" /> -->
  <!--<my-component v-if="renderComponent" />-->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!-- <product-list :key="componentKey"/>-->
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
          <tr class v-for="(product, index) in fullBringList.productsBroughtList"
              :key="product.productId">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{product.productName}}</td>
            <td>{{product.needed}}</td>
            <td>
              <ul>
                <li v-for="person in product.bringersList" :key="person">
                  {{ person.personName}} bringt {{ person.amount}} mit.
                </li>
              </ul>
            </td>
            <td>{{ updateProduct(product.bringersList) }}</td>
            <td>
              <button class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#itemsBroughtModal">Mitbringen</button>
              <button type="button" class="btn btn-danger"
                      @click = "deleteProduct(fullBringList.productsBroughtList, product, index);"
              >✘</button>
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
                             :max="product.needed" step="1" id="rangeQuantityBrought"
                             @change="updateQuantityBrought()"
                             v-model="quantityBrought">
                      <input type="text" id="inputquantitybrought"  >
                    </label>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Schließen</button>
                    <button class="btn btn-primary" type="submit" data-bs-dismiss="modal"
                            @click="createItemsbrought(product.productId);">
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
      itemsBroughtPerProduct: [],
      quantityBrought: null,
      productsBrought: '',
    };
  },
  props: {
    fullBringList: {
      type: Object,
      required: true,
    },
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
    updateProduct() {
      return 'Hello';
      // let qbTotal = null;
      // // itemsBrought.forEach(item => qbTotal += item.itemsBrought);
      // for (let i = 0; i < itemsBrought.length; i += 1) {
      //   qbTotal += itemsBrought.quantityBrought;
      // }
      // if (product.quantity <= qbTotal) {
      //   return 'Wird noch gebraucht';
      // } return 'Wird mitgebracht';
      // // setz "wird mitgebracht auf true"
      // // mitbringen Button deaktivieren
    },
    // updateProductwithItemsBrought(productId, itemsBrought) {
    //   itemsBroughtPerProduct.quantityBrought.reduce((accumulator, currentValue) => {
    //      return accumulator + currentValue;
    //    });
    // },
    deleteProduct(array, product, index) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/products`;
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
      };
      fetch(`${endpoint}/${product.productId}`, requestOptions)
        .catch((error) => console.log('error', error));

      if (index > -1) {
        array.splice(index, 1);
      }
      // Produkt aus dem array löschen by id
    },
    createItemsbrought(id) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/itemsBrought`;
      console.log(endpoint);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const payload = JSON.stringify({
        personId: 4,
        productId: id,
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
