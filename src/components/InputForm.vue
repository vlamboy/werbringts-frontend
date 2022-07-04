<template>

  <div class="mb-3">
      <label for="list-name" class="form-label">Erstelle deine Werbringts-Liste
          <input type="text" class="form-control" id="list-name" v-model="listName" placeholder=
            "Name der Liste" />
      </label>

      <br>

      <label for="list-description" class="form-label">Wofür soll etwas mitgebracht werden?
        Gib den anderen Mitbringer:innen ein paar Infos.
        <input class="form-control" id="list-description" v-model="listDescription" rows="3"/>
      </label>

      <br>

      <button @click="createBringlist" class="btn btn-outline-dark">Liste erstellen</button>
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
  name: 'InputForm',
  data() {
    return {
      listName: '',
      listDescription: '',
      bringlistId: null,
    };
  },
  methods: {
    insertUrl(bringlistId) {
      const id = String(bringlistId);
      document.getElementById('weiterleiten').href = `/new-bringlist/${id}`;
    },
    createBringlist() {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/bringlists`;
      console.log(endpoint);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const payload = JSON.stringify({
        listName: this.listName,
        listDescription: this.listDescription,
        productId: null,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow',
      };

      console.log(`POST on ${endpoint}`);
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          const { bringlistId } = result;
          this.$router.push(`/new-bringlist/${bringlistId}`);
        })
        .catch((error) => console.log('error asd', error));
    },
  },
};
</script>

<style scoped>
button {
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  border-color: #000000 ;
}

button:hover {
  background-color: transparent;
  color: #000000;
  font-size: 16px;
  cursor: pointer;
  border-color: #000000 ;
}
</style>
