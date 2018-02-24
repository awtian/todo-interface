// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FBSignInButton from 'vue-facebook-signin-button'
import store from './components/vuex/store'
import swal from 'sweetalert'
import axios from 'axios'
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.prototype.$db = axios
// Vue.use(swal)
// Vue.use(axios)
Vue.use(FBSignInButton)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
