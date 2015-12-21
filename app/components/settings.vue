<template>
<div class="c-settings">

  <jumbotron></jumbotron>

  <div class="container">
    <auth-notification></auth-notification>

    <div class="row  c-settings__form-container" v-show="loggedIn">

      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#fields" aria-controls="fields" role="tab" data-toggle="tab">Fields</a>
        </li> 

        <li role="presentation">
          <a href="#preferences" aria-controls="preferences" role="tab" data-toggle="tab">Preferences</a>
        </li> 
      </ul>

      <div class="tab-content c-settings__content">
        <div role="tabpanel" class="tab-pane active" id="fields">
          <fields-form></fields-form>
        </div>

        <div role="tabpanel" class="tab-pane" id="preferences">
          <div class="sub_description">
            Use these settings to adjust the fields in the popup window.
          </div>
          <settings-form></settings-form>
        </div>

      </div>

    </div>

    <footer-links></footer-links>

  </div>
</div>
</template>

<script>
import Jumbotron from './settings/jumbotron.vue'
import AuthNotification from './settings/auth-notification.vue'
import SettingsForm from './settings/settings-form.vue'
import FieldsForm from './settings/fields-form.vue'
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
