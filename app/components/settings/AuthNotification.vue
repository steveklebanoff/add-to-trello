<template>
<div class="row c-auth">
  <div class="c-auth__pending" v-show="! loggedIn">
      <img src="images/ajax-loader.gif" class="c-auth__loading  center-block" />
      <div class="text-center lead">Checking authorization</div>
  </div>

  <!-- Authorize Success -->
  <div class="c-auth__success" v-show="loggedIn">
      <div class="success-body">
          <div class="alert alert-success">
              You have successfully authorized Add to Trello.
          </div>
      </div>
  </div>
</div>
</template>

<script>
import Api from '../../lib/api'

export default {
  data() {
    return {
      loggedIn: false
    }
  },

  ready() {
    Api.authorize()
    .then(() => {
      this.loggedIn = true
      this.$dispatch('authorized', true)
    })
  }
}
</script>

<style lang="scss">
.c-auth {
}

  .c-auth__pending {
  }

  .c-auth__loading {
    margin-bottom: 15px;
  }

  .c-auth__success {
    margin-top: 15px;
  }
</style>
