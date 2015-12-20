<template>
<div class="c-settings">

  <jumbotron></jumbotron>

  <div class="container">
    <auth-notification></auth-notification>

    <div class="row  c-settings__form-container" v-show="loggedIn">
      <div class="sub_header">Settings</div>
      <div class="sub_description">Use these settings to adjust the fields in the popup window.</div>
      <settings-form></settings-form>
    </div>

    <footer-links></footer-links>

  </div>
</div>
</template>

<script>
import Jumbotron from './settings/jumbotron.vue'
import AuthNotification from './settings/auth-notification.vue'
import SettingsForm from './settings/settings-form.vue'
import FooterLinks from './settings/footer-links.vue'

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
    'settings-form':     SettingsForm,
    'footer-links':      FooterLinks
  }

}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap';
@import '../shared';

.container {
  max-width: 850px;
}

.form-group {
  margin-bottom: 20px;
}

input, textarea, select {
  box-shadow: 0 1px 2px rgba(0,0,0,.23) !important;
  border: 0 !important;
}

.sub_header {
  font-size: 21px;
  border-bottom: 1px solid #d6dadc;
  padding: 8px 0;
  position: relative;
  font-weight: bold;
}

.sub_description {
  margin: 8px 0 30px 0;
}
</style>
