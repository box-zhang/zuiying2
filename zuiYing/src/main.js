import Vue from 'vue';
import Main from './App';
import router from './router/router';
import VueResource from 'vue-resource';
import iView from 'iview';
import VueParticles from 'vue-particles';
import VueVideoPlayer from 'vue-video-player';

import 'iview/dist/styles/iview.css';
import 'common/stylus/index.styl';
// require videojs style
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';

Vue.use(VueResource);
Vue.use(iView);
Vue.use(VueParticles);
Vue.use(VueVideoPlayer);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Main)
});
