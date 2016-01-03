<template>
<div class="container">
  <div class="row c-popup">

    <div class="c-popup__logo">
        <img src="images/trello-logo-small.png" class="center-block">
    </div>

    <card-form></card-form>

    <div class="c-popup__options">
      <a href="#" class="pull-left">Settings</a>
      <a href="#" class="pull-right">Logout</a>
    </div>

  </div>
</div>
</template>

<script>
import Api from '../lib/trello/api'
import CardForm from './popup/CardForm.vue'

export default {

  ready() {
    if (! Api.authorized()) return Api.redirectToLogin()
  },

  components: {
    'card-form': CardForm
  }

}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap';
@import '../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3';

.c-popup {
  min-width: 320px;
  background-color: #f0f0f0 !important;
  padding: 8px;
}

  .c-popup__logo {
    height: 30px;
    img {
      cursor: pointer;
      width: 75px;
    }
  }

  .c-popup__options {
  }
</style>
