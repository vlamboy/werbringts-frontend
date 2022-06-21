<template>
  <div class="btn-group btn-group-justified">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#productModal">
      Produkt hinzufügen
    </button>
    <button href="#" class="btn btn-primary" data-bs-toggle="modal"
      data-bs-target="#linkModal">Liste teilen </button>
    <a href="#" class="btn btn-primary" data-bs-toggle="modal"
       data-bs-target="#ListeLöschenModal">Liste löschen</a>
    <a href="#" class="btn btn-primary" data-bs-toggle="modal"
       data-bs-target="#NeueListeModal">Neue Liste erstellen</a>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="linkModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id=5>Dein persönlicher Einladungs-Link</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <input type="text" :value="currentUrl()" id="myInput">
          <button id="click" @click="copyURL()">Kopieren</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="button" data-bs-dismiss="modal">Schließen</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="NeueListeModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id=6>Möchtest Du eine neue Liste erstellen?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <button onclick="location.href='/'" class="button">Ja</button>
          <button type="button" class="button" data-bs-dismiss="modal">Nein</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="ListeLöschenModal" tabindex="-1" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id=7>Möchtest Du Deine Liste wirklich löschen?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <button onclick="location.href='/'" @click="deleteBringlist(16)"
                  class="button">Ja</button>
          <button type="button" class="button" data-bs-dismiss="modal">Nein</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttonBar',
  methods: {
    currentUrl() {
      return window.location.href;
    },
    async copyURL() {
      try {
        const copyText = document.getElementById('myInput');
        await navigator.clipboard.writeText(copyText.value);
        alert(`Copied the text: ${copyText.value}`);
        console.log('Page URL copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    },

    deleteBringlist(bringlists) {
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/bringlists`;
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
      };
      fetch(`${endpoint}/${bringlists}`, requestOptions)
        .catch((error) => console.log('error', error));
    },
  },
};
</script>

<style scoped>
/* Style buttons */
.btn {
  background-color: #4a62b9;; /* Blue background */
  color: white; /* White text */
  padding: 8px 108px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  border-color: white ;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #344582;
}
.button{
  background-color: #5B9A9E; /* Blue background */
  color: white; /* White text */
  padding: 8px 30px; /* Some padding */
  font-size: 16px;
  cursor: pointer;
  border-color: white ;
  ;
}
</style>
