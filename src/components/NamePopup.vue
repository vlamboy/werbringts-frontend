<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#exampleModal">
    Füge etwas zu deiner Liste hinzu
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Gib hier deinen Namen ein</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <label for="list-name" class="form-label">
            <input type="text" class="form-control" id="list-name" v-model="personName" />
          </label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>
          <button class="btn btn-primary" type="submit" data-bs-dismiss="modal"
                  @click="createPerson">Speichern</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NamePopup',
  data() {
    return {
      personName: '',
    };
  },
  methods: {
    createPerson() {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/persons`;
      console.log(endpoint);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const payload = JSON.stringify({
        personName: this.personName,
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
};
</script>

<style scoped>

</style>
