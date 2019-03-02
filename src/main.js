import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';

new Vue({
  render: h => h(App),
}).$mount('#app')
