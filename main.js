import App from './App'
import tools from './common/js/tools.js'
import Ajax3 from './common/js/ajax3.js'
import uView from '@/static/uview-ui'

import VueI18n from 'vue-i18n';
import en from './locales/en.json';
import zhCN from './locales/zh-CN.json';
import zhTW from './locales/zh-TW.json';
Vue.use(uView);
// #ifndef VUE3
import Vue from 'vue'


Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh-CN', // 设置默认语言
  messages: {
    en,
    'zh-CN': zhCN,
    'zh-TW': zhTW
  }
});


Vue.config.productionTip = false
Vue.prototype.$Ajax3=Ajax3
Vue.prototype.$tools=tools
App.mpType = 'app'
const app = new Vue({
	i18n,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif