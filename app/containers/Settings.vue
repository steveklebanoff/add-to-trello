<template>
<div class="c-settings">

  <jumbotron></jumbotron>

  <div class="container">
    <auth-notification></auth-notification>

    <div class="row c-settings__form-container" v-show="loggedIn">
      <fields-form></fields-form>
    </div>

    <footer-links></footer-links>
  </div>
</div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue'
import AuthNotification from '../components/AuthNotification.vue'
import FieldsForm from '../components/SettingsCardForm.vue'
import FooterLinks from '../components/FooterLinks.vue'

export default {

  data() {
    return {
      loggedIn: false
    }
  },

  events: {
    authorized(status) {
      this.loggedIn = status
    }
  },

  components: {
    'jumbotron':         Jumbotron,
    'auth-notification': AuthNotification,
    'fields-form':       FieldsForm,
    'footer-links':      FooterLinks
  }

}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap';
@import '../shared';

.c-settings {
  .container {
    max-width: 850px;
  }

  .sub_description {
    padding: 0 15px;
    margin: 15px 0 30px 0;
  }
}

.c-settings__content {
  padding: 15px;
}
</style>
