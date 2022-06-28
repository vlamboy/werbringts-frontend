<template>
    <br>
    <br>
    <h1>FAQ</h1>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Für was kann Werbringts genutzt werden?
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show"
           aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Werbringts ist dein offizieller Party-Planer!</strong>
          Mit der dynmischen Werbringtsliste können Du und deine Gäste immer einsehen was für
          die Party noch an Produkten benötigt wird und wer was mitbringt.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Wie kann ich eine Werbringts-Liste anlegen?
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
           data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Das ist ganz einfach!</strong>
          Rufe einfach die Werbringts-Startseite auf und gib den Namen sowie eine Beschreibung zu
          deiner Liste ein. Drücke anschließend auf den Button -Liste erstellen- und schon kannst
          Du Produkte für deine Partyplanung hinzufügen.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Wie zeige ich die Liste meinen Freunden?
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
           data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Klick einfach auf den Button -Liste teilen-.</strong>
          Nachdem du deinen  Link kopiert hast, sende diesen einfach an alle deine Gäste. Durch
          die einzigartige Personalisierung können nun alle deine Gäste über den Link auf deine
          Werbringts-Liste zugreifen. Anschließend können alle Gäste immer aktuell auf die Liste
          zugreifen sowie Produkte hinzufügen oder welche mitbringen.
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'FAQ',
};
</script>

<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
</style>
