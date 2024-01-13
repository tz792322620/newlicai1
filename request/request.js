// const BASE_URL = 'https://api.broadreachvip.top/api'
// import webUrl from '@/common/js/url.js'
import Vue from 'vue'

function request(options = {}) {
	if (options.method == 'POST') {
		uni.showLoading({
			mask: true
		})
	}
    // 获取用户选择的域名，如果没有选择，则使用默认域名
    const baseDomain = uni.getStorageSync('selectedDomain') || 'https://xingu.bianceok.info/api';
    options.url = `${baseDomain}${options.url}`;
	options.header = {
		'token': uni.getStorageSync('token'),
		'Accept-Language': uni.getStorageSync('language') ? uni.getStorageSync('language') : 'zh-CN'
	}
	return new Promise((resolve, reject) => {
		//成功
		options.success = (res) => {
				uni.hideLoading()

				if (res.data.code === 401) {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						mask: true
					})
					uni.removeStorageSync('token')
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/login/login_em'
						})
					}, 1000);
				}
				if (res.data.code !== 1) {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						mask: true
					})
				}
				resolve(res.data)
			},
			//错误
			options.fail = (err) => {
				console.log(err)
				uni.showToast({
					title: '网络超时',
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
