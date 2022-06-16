<template>
  <div class="btn-group btn-group-justified">
    <a href="#" class="btn btn-primary">Liste sortieren</a>
    <button href="#" class="btn btn-primary" data-bs-toggle="modal"
      data-bs-target="#linkModal">Liste teilen </button>
    <a href="#" class="btn btn-primary">Liste löschen</a>
    <a href="#" class="btn btn-primary">Neue Liste erstellen</a>
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
</template>

<script>
export default {
  name: 'buttonBar',
  methods: {
    currentUrl() {
      return window.location.href;
    },
    copyURL() {
      /* Get the text field */
      const copyText = document.getElementById('myInput');

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 1000); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);

      /* Alert the copied text */
      alert(`Copied the text: ${copyText.value}`);
    },
  },
};
</script>

<style scoped>
/* Style buttons */
.btn {
  background-color: #a0d086; /* Blue background */
  color: white; /* White text */
  padding: 8px 100px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  border-color: white ;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #377909;
}
.button{
  background-color: #706b6f; /* Blue background */
  color: white; /* White text */
  padding: 8px 30px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  border-color: white ;
  ;
}
</style>
