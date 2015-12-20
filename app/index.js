const Vue = require('vue')


new Vue({
  el: 'body',
  replace: false,
  components: {
    popup: require('./components/popup.vue'),
    settings: require('./components/settings.vue')
  }
})
