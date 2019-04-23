import Vue from 'vue';
import App from '@/views/layouts/app';
import BalmEditor from '@src/scripts'; // 'balm-editor'

Vue.config.productionTip = false;

Vue.use(BalmEditor);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>'
});
