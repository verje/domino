import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5uWEEHM54MF__-Qcw0HFHcYNaT2BuzmM",
  authDomain: "domino-score-89cdc.firebaseapp.com",
  databaseURL: "https://domino-score-89cdc-default-rtdb.firebaseio.com",
  projectId: "domino-score-89cdc",
  storageBucket: "domino-score-89cdc.appspot.com",
  messagingSenderId: "196260494233",
  appId: "1:196260494233:web:8262979668ecb1cb403108"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
