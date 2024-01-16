// const BASE_URL = 'https://xingu.bianceok.info/api'
// import webUrl from '@/common/js/url.js'
import Vue from 'vue'
import CryptoJS from 'crypto-js'

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


				// 假设加密的数据在res.data.data中
				if (res.data && res.data.data) {
					const encryptionKey = 'xingu8899'; // 您的加密密钥
					const iv = '473d314febf55e26'; // 初始化向量（如果后端使用了IV）
					// console.log(res.data.data)
					// 解密数据
					// try {
					const decryptedData = decrypt(res.data.data);
						// console.log(JSON.parse(decryptedData))
						res.data.data = JSON.parse(decryptedData);
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
					// } catch (e) {
					// 	console.error('解密失败', e);
					// }
				}
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

function decrypt(encryptedData) {
    const key = CryptoJS.enc.Utf8.parse('xingu88888999999'); // 与PHP加密使用的密钥相同
    const iv = CryptoJS.enc.Utf8.parse('473d314febf55e26'); // 与PHP加密使用的IV相同

  const decryptedData = CryptoJS.AES.decrypt(encryptedData, key, {
    iv,
    padding: CryptoJS.pad.Pkcs7
  })
  return decryptedData.toString(CryptoJS.enc.Utf8)
} 


export {
	request
};
