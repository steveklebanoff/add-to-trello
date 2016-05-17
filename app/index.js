const Vue = require('vue')
Vue.config.debug = true

new Vue({
  el: 'body',
  replace: false,
  components: {
    popup: require('./containers/Popup.vue'),
    settings: require('./containers/Settings.vue')
  }
})
