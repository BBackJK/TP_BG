import Vue from 'vue';

import App from './App.vue';
import { vuetify } from './plugins';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
});
