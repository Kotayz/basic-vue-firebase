import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyA4QC7_epDgrLX_L_KT5v2ckTFExz4XIt4',
  authDomain: 'basic-vue-firebase.firebaseapp.com',
  databaseURL: 'https://basic-vue-firebase.firebaseio.com',
  projectId: 'basic-vue-firebase'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
