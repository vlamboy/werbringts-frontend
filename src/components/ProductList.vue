<template :key="componentKey">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <table class="table table-bordered" ref="table">
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
                  {{ person.personName }} bringt {{ person.amount}} mit.
                </li>
              </ul>
            </td>
            <td>{{ getProductStatus(product) }}</td>
            <!--modal: https://getbootstrap.com/docs/5.2/components/modal/#varying-modal-content-->
            <td>
              <button class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#itemsBroughtModal"
                      :data-bs-productId="product.productId"
                      :data-bs-productName="product.productName"
                      :data-bs-productNeeded="product.needed"
                      :disabled="getAllBrought(product)">
                      Mitbringen</button>
              <button type="button" class="btn btn-danger"
                      @click = "deleteProduct(fullBringList.productsBroughtList, product, index);"
              >✘</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="modal fade" id="itemsBroughtModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Header</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close">
                </button>
              </div>
              <div class="modal-body">
                <label for="rangeQuantityBrought" class="form-label"
                       v-if="personId">Gib die Anzahl hier ein
                  <input type="range" class="form-range" min="1"
                         :max="1" step="1" id="rangeQuantityBrought"
                         @change="updateQuantityBrought()"
                         v-model="quantityBrought"
                         v-if="personId">
                </label>
                <div id="inputquantitybrought" v-if="personId">1</div>
                <div v-else>Bitte verrate uns deinen Namen.</div>
              </div>
              <div class="modal-footer" v-if="personId">
                <button type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Schließen</button>
                <button class="btn btn-primary" type="submit" data-bs-dismiss="modal"
                        id="submitButtonCreateItemsBrought">
                  Speichern</button>
              </div>
            </div>
          </div>
        </div>
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
      componentKey: 0,
    };
  },
  emits: ['itemsBroughtCreated'],
  props: {
    fullBringList: {
      type: Object,
      required: true,
    },
    personId: null,
  },
  methods: {
    updateQuantityBrought() {
      const rangeItemsBrought = document.getElementById('rangeQuantityBrought').value;
      document.getElementById('inputquantitybrought').textContent = rangeItemsBrought;
    },
    updateListAfterDelete(products, index) {
      if (index > -1) {
        products.splice(index, 1);
      }
    },
    getAllBrought(product) {
      let personAmount = 0;
      product.bringersList?.forEach((item) => {
        personAmount += item.amount;
      });
      return product.needed <= personAmount;
    },
    getProductStatus(product) {
      if (this.getAllBrought(product)) {
        return '✔';
      }
      return '✘';
    },
    deleteProduct(array, product, index) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/products/${product.productId}`;
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
      };
      fetch(endpoint, requestOptions)
        .catch((error) => console.log('error', error));

      if (index > -1) {
        array.splice(index, 1);
      }
    },
    createItemsbrought(productId) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/itemsBrought`;
      console.log(endpoint);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const payload = JSON.stringify({
        personId: this.personId,
        productId,
        quantityBrought: this.quantityBrought,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow',
      };

      console.log(requestOptions);
      console.log(this.componentKey);
      console.log(this.componentKey);

      fetch(endpoint, requestOptions)
        .then(() => this.$emit('itemsBroughtCreated'))
        .then(() => console.log('render'))
        .catch((error) => console.log('error', error));
    },
    getItemsBrought(id) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/itemsBrought?id=${id}`;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log('error', error));
    },
    getFullBringlist() {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/fullbringlist`;
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log('error', error));
    },
  },
  mounted() {
    const itemsBroughtModal = document.getElementById('itemsBroughtModal');
    itemsBroughtModal.addEventListener('show.bs.modal', (event) => {
      const modalTitle = itemsBroughtModal.querySelector('.modal-title');
      if (this.personId == null) {
        modalTitle.textContent = 'Anonym unterwegs?';
      } else {
        const button = event.relatedTarget;
        const productId = button.getAttribute('data-bs-productId');
        const productName = button.getAttribute('data-bs-productName');
        const productNeeded = button.getAttribute('data-bs-productNeeded');

        modalTitle.textContent = `Wie viele ${productName} möchtest du mitbringen?`;

        const filteredProducts = this.fullBringList.productsBroughtList
          .filter((product) => product.productId === Number(productId));
        const productAmounts = filteredProducts[0].bringersList.map((product) => product.amount);
        const personAmount = productAmounts.reduce(
          (amount1, amount2) => amount1 + amount2,
          0,
        );

        const modalQuantitySlider = document.getElementById('rangeQuantityBrought');
        modalQuantitySlider.max = productNeeded - personAmount;

        const modalSubmitButton = document.getElementById('submitButtonCreateItemsBrought');
        modalSubmitButton.onclick = () => {
          console.log('Create itemsBrought Button clicked');
          this.createItemsbrought(productId);
          this.getItemsBrought(productId);
        };
      }
    });
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

button:disabled {
  background-color: #5B9A9E;
  border: none;
  color: #ffffff;
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
