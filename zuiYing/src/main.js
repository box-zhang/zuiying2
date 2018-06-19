import Vue from 'vue';
import Main from './App';
import router from './router/router';
import VueResource from 'vue-resource';
import iView from 'iview';

import 'iview/dist/styles/iview.css';
import 'common/stylus/index.styl';

Vue.use(VueResource);
Vue.use(iView);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Main)
});
