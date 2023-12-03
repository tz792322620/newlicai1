// const BASE_URL = 'https://xingu.bianceok.info/api' // 测试
// const BASE_URL = 'https://xingu.bianceok.info/api' // 正式
const BASE_URL = '/api'
import webUrl from '@/common/js/url.js'
import Vue from 'vue'

function request(options = {}) {
	// uni.showLoading({
	// 	title: '',
	// 	mask: true
	// })
	options.url = `${BASE_URL}${options.url}`;
	options.header = {
		Authorization: 'Bearer'+' '+uni.getStorageSync('token')
	}
	return new Promise((resolve, reject) => {
		//成功
		options.success = (res) => {
				uni.hideLoading()
				// if (options.method === 'POST') {
				// 	let lang = Vue.prototype.$store.state.lang
				// 	uni.showToast({
				// 		title: lang === 1 ? res.data.cn_msg : res.data.msg,
				// 		icon: 'none'
				// 	})
				// }
				resolve(res.data)
			},
			//错误
			options.fail = (err) => {
				console.log(123)
				uni.showToast({
					title: '系统错误',
					icon: 'none'
				})
				uni.hideLoading()
				uni.switchTab({
					url: '/pages/index/index'
				})
				reject(err); //错误
			}
		uni.request(options)
	});
}
export {
	request
};
