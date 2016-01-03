const Vue = require('vue')
Vue.config.debug = true

new Vue({
  el: 'body',
  replace: false,
  components: {
    popup: require('./components/popup.vue'),
    settings: require('./components/settings.vue')
  }
})
