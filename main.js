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

// main.js
Vue.prototype.$imgPrefix = 'https://xingu.bianceok.info/';

Vue.config.productionTip = false
// 时间戳转日期
Vue.filter('timestampFilter', (timestamp) => {
	timestamp = timestamp ? timestamp : null;
	let date = new Date(timestamp*1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	let Y = date.getFullYear() + '-';
	let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
	let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return Y + M + D + h + m + s;
})
// 超出,中间显示省略号
Vue.filter('ellipsis', (value) => {
	if (value) {
		let len = value.length;
		if (!value) return ''
		if (value.length > 20) {
			return value.substring(0, 6) + '...' + value.substring(len - 6, len)
		}
		return value
	}
})
Vue.prototype.$Ajax3 = Ajax3
Vue.prototype.$tools = tools
Vue.prototype.$url = 'https://xingu.bianceok.info'
Vue.prototype._i18n = i18n
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
