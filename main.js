import App from './App'
import tools from './common/js/tools.js'
import Ajax3 from './common/js/ajax3.js'
import uView from '@/static/uview-ui'

import VueI18n from 'vue-i18n';
import en from './locales/en.json';
import zhCN from './locales/zh-CN.json';
import zhTW from './locales/zh-TW.json';
import { testDomainSpeeds } from './common/js/domainSpeedTest' // 引入测速脚本
// import '@/static/js/polyfill.min.js'
// import '@/static/js/riddler-sdk-0.2.2.js'
// 配置防止重复点击公共方法
import common from './common/common.js'
Vue.prototype.$noMultipleClicks = common.noMultipleClicks;
Vue.use(uView);
// #ifndef VUE3
import Vue from 'vue'

// 引入你的自定义JS文件



Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: uni.getStorageSync('language') ? uni.getStorageSync('language') : 'zh-CN', // 设置默认语言
	messages: {
		en,
		'zh-CN': zhCN,
		'zh-TW': zhTW
	}
});



Vue.config.productionTip = false
// 时间戳转日期
Vue.filter('timestampFilter', (timestamp) => {
    timestamp = timestamp ? timestamp : null;
    let date = new Date(timestamp * 1000); // 将时间戳转换为 JavaScript Date 对象
    let offset = 8; // 东八区的偏移量
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000); // 转换为 UTC 时间
    let nd = new Date(utc + (3600000 * offset)); // 转换为东八区时间

    let Y = nd.getFullYear() + '-';
    let M = (nd.getMonth() + 1 < 10 ? '0' + (nd.getMonth() + 1) : nd.getMonth() + 1) + '-';
    let D = (nd.getDate() < 10 ? '0' + nd.getDate() : nd.getDate()) + ' ';
    let h = (nd.getHours() < 10 ? '0' + nd.getHours() : nd.getHours()) + ':';
    let m = (nd.getMinutes() < 10 ? '0' + nd.getMinutes() : nd.getMinutes()) + ':';
    let s = nd.getSeconds() < 10 ? '0' + nd.getSeconds() : nd.getSeconds();

    return Y + M + D + h + m + s;
});

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
// 货币符号
Vue.filter('currencySymbol', (value) => {
	if (value) {
		if (value == 'CNY') {
			return '¥'
		} else if (value == 'HKD') {
			return 'HK$'
		} else if (value == 'TWD' ) {
			return 'NT$'
		}
	}
})
// 金额处理方法
Vue.filter('tranNumber', (num) => {
	const point = 2
   // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
   let numStr = num.toString().split('.')[0]
   if(numStr.length<6) { // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
	   console.log(num);
	   return num;
	 }else if(numStr.length>=6 && numStr.length<=8){ // 如果数字大于6位,小于8位,让其数字后面加单位万
		let decimal = numStr.substring(numStr.length-4, numStr.length-4+point)
		console.log(decimal);
		// 由千位,百位组成的一个数字
		return parseFloat(parseInt(num / 10000)+'.'+decimal)+'万'  
   }else if(numStr.length >8){ // 如果数字大于8位,让其数字后面加单位亿
		let decimal = numStr.substring(numStr.length-8, numStr.length-8+point);
		console.log(decimal);
		return parseFloat(parseInt(num/100000000)+'.'+decimal)+'亿'
   }
})

testDomainSpeeds().then(fastestDomain => {
    // 设置最快域名为基础 URL
    // Vue.prototype.$url = fastestDomain || 'https://default-domain.com'; //正式
    Vue.prototype.$url = 'https://api.broadreachvip.top'; //测试
	Vue.prototype.$Ajax3 = Ajax3
	Vue.prototype.$tools = tools
	Vue.prototype.$imgPrefix = 'https://api.broadreachvip.top/';
	Vue.prototype._i18n = i18n
	App.mpType = 'app'
	const app = new Vue({
		i18n,
		...App
	})
	app.$mount()
});

// Vue.prototype.$Ajax3 = Ajax3
// Vue.prototype.$tools = tools
// Vue.prototype.$url = 'https://api.broadreachvip.top/'
// Vue.prototype.$imgPrefix = 'https://api.broadreachvip.top/';
// Vue.prototype._i18n = i18n
// App.mpType = 'app'
// const app = new Vue({
// 	i18n,
// 	...App
// })
// app.$mount()
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
