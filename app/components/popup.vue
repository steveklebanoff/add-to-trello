<template>
<p>Hello World</p>
</template>

<script>
import Api from '../lib/api'

export default {

  ready() {
    if (! Api.authorized()) return Api.redirectToLogin()
  }

}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap';
</style>