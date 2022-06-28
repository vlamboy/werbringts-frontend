<template>
   <!-- Button trigger modal -->
 <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#productModal">
    Füge ein neues Produkt hinzu
  </button>
-->
  <!-- Modal -->
  <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Füge ein neues Produkt hinzu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <label for="product-name" class="form-label"> Gib hier den Produktnamen ein
            <input type="text" class="form-control" id="product-name" v-model="productName" />
          </label>
          <br>
          <br>
          <label for="customRange3" class="form-label">Wie oft soll das Produkt mitgebracht werden?
          <input type="range" class="form-range" min="1" max="50" step="1" id="customRange3"
                 @change="updateTextInput()"  v-model="quantity">
            <input type="text" id="textInput" >
          </label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary"
                  data-bs-dismiss="modal">Schließen
          </button>
          <button class="btn btn-primary" type="submit"
                  data-bs-dismiss="modal" @click="createProduct">Speichern
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewProduct',
  data() {
    return {
      productName: '',
      quantity: 1,
      times: 0,
      product_reload: 0,
      // key: 'componentKey',
    };
  },
  emits: ['created'],
  methods: {
    reload() {
      this.product_reload += 1;
      this.times += 1;
    },
    updateTextInput() {
      const range = document.getElementById('customRange3').value;
      document.getElementById('textInput').value = range;
    },
    createProduct() {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/products`;
      console.log(endpoint);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const payload = JSON.stringify({
        productName: this.productName,
        quantity: this.quantity,
        closed: false,
        bringlistId: this.$route.params.bringlistId,
        itemsBrought: null,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow',
      };

      fetch(endpoint, requestOptions)
        .catch((error) => console.log('error', error));

      this.$emit('created');
    },
  },
  // props: ['settings'],
};

</script>

<style scoped>

</style>
