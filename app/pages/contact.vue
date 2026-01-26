<script setup lang="ts">
import {ref} from 'vue';
import {ManageEmail} from "~/assets/ts/ManageEmail";

const DEFAULT_ERROR_MESSAGE:string = "Veuillez réessayer plus tard ou contacter directement Evan DYNAK à l'adresse email : evan.dynak@bbox.fr"
const DEFAULT_SUCCESS_MESSAGE:string = "Message envoyé avec succès à l'adresse email d'Evan DYNAK. Merci pour votre message, vous recevrez une réponse sous 48h."

const MISSING_DATA_MESSAGE:string = "Tous les champs du formulaire doivent être remplis avant l'envoi du message."
const messageToShow = ref("");

const success:Ref<boolean> = ref(false);
const show:Ref<boolean> = ref(false);

const form = ref({
  nom: '',
  prenom: '',
  email: '',
  objet: '',
  message: ''
});

const manager:ManageEmail = new ManageEmail();

const submitForm = async () => {
  if(checkData()) {
    success.value = await manager.sendEmail(form.value);
    if(success.value) {
      messageToShow.value = DEFAULT_SUCCESS_MESSAGE;
      resetData();
    }
    else {
      messageToShow.value = DEFAULT_ERROR_MESSAGE;
    }
  }
  else {
    success.value = false;
    messageToShow.value = MISSING_DATA_MESSAGE;
  }
  show.value = true;

};

function checkData():boolean {
  return form.value.nom !== '' &&
    form.value.prenom !== '' &&
    form.value.email !== '' &&
    form.value.objet !== '' &&
    form.value.message !== '';
}

function resetData():void {
  form.value.nom = '';
  form.value.prenom = '';
  form.value.email = '';
  form.value.objet = '';
  form.value.message = '';
}

const onClickButtonClose = () => {
  show.value = false;
};
</script>

<template>
  <div id="contact-page-container" class="simple-container">
    <Header variant="dark"/>
    <div v-if="show" class="container-message-temoin" :class="success ? 'success-message' : 'failed-message'">
      <div class="content-message-temoin">
        <LazyIcon name="pajamas:close-xs" class="close" :onclick="onClickButtonClose"/>
        <h3 v-if="success" >Votre message a bien été envoyé !</h3>
        <h3 v-else>Une erreur est survenue lors de l'envoi du message.</h3>

        <p v-if="success">Message envoyé avec succès à l'adresse email d'Evan DYNAK. Merci pour votre message, vous recevrez une réponse sous 48h.</p>
        <p v-else>{{messageToShow}}</p>
      </div>

    </div>
    <main>
      <div class="contact-container">
        <div class="contact-info-container">
          <h1 class="main-title">Parlons de<br> votre projet</h1>
          <p class="subtitle">
            Vous avez une idée en tête ? Je suis là pour vous accompagner dans la création de votre site web, étape par étape.
          </p>
          <div class="contact-details">
            <div class="detail-item">
              <span class="label">Email</span>
              <a href="mailto:evan.dynak@bbox.fr" class="value">evan.dynak[at]bbox.fr</a>
            </div>
            <div class="detail-item">
              <span class="label">Téléphone</span>
              <span class="value">07 84 67 54 95</span>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <form @submit.prevent="submitForm" class="form-grid">

            <div class="form-row">
              <div class="form-group half">
                <label for="nom">Nom</label>
                <input type="text" id="nom" v-model="form.nom" placeholder="Dupont" />
              </div>
              <div class="form-group half">
                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" v-model="form.prenom" placeholder="Jean" />
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="jean.dupont@gmail.com" />
            </div>

            <div class="form-group">
              <label for="objet">Objet</label>
              <div class="select-wrapper">
                <select id="objet" v-model="form.objet">
                  <option value="" disabled selected>Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="info">Renseignements</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="5" placeholder="Décrivez votre projet..."></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-submit">
                Envoyer
                <LazyIcon name="iconamoon:arrow-right-2-bold"/>
              </button>
            </div>
          </form>
        </div>
      </div>

    </main>
  </div>
</template>

<style scoped>
@import url("~/assets/css/pages/contact.css");
</style>