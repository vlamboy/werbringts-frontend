<template>

  <div class="mb-3">
    <form class = "dd">
      <label for="list-name" class="form-label">Erstelle deine Werbringts-Liste
          <input type="text" class="form-control" id="list-name" v-model="listName" placeholder=
            "Name der Liste" />
      </label>

      <br>

      <label for="list-description" class="form-label">Wofür soll etwas mitgebracht werden?
        Gib den anderen Mitbringer:innen ein paar Infos.
        <textarea class="form-control" id="list-description" v-model="listDescription" rows="3">
        </textarea>
      </label>

      <br>

      <a href="/new-bringlist" button type="submit" class="btn btn-outline-dark"
        @click.prevent="createBringlist">Liste erstellen</a>
      </form>
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
    };
  },
  methods: {
    createBringlist() {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/bringlists`;
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

      fetch(endpoint, requestOptions)
        .catch((error) => console.log('error', error));
    },
  },
};
</script>

<style scoped>

</style>
