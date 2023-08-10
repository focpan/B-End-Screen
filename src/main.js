import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import './assets/less/index.less';
import echarts from 'echarts'
import img from './lib/img'
import utils from "./lib/utils";
import BaiduMap from 'vue-baidu-map'


Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'EX0G9G5xihrjWa3ugb5sRXGxtinIwHjq'
})
Vue.prototype.$echarts = function (el) {
    return echarts.init(el, null, {renderer: 'svg'})
}
Vue.prototype.$images = img
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(utils)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
