import webUrl from './url.js';
import $tools from './tools.js';
import Ajax1 from './Ajax11.js';

let needLoadingRequestCount = 0
let lang = uni.getStorageSync('languageMartin');
// var app = getApp();
var Ajax = new Object;
var setPublicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsLOwO/wmO9U/NUr/VW5CUbcLw+rml6SVDA65JPodXE8cbnoAjct4wdvd47dKfC355ln3ISlTn7F5wuL3AOTMEofFbESrG1BsuXNAtEIrn/whQ3qgk+LA7dqN4xLp8CZcd2L+fMZ0IYHY+m9TSXVAnyXjEpXWOs/E6Wm6b6qBh5QIDAQAB'

import jsencrypt from '@/common/encryptlong/bin/jsencrypt.js'
global.endLoading = function() {
	if (needLoadingRequestCount <= 0) return
	needLoadingRequestCount--
	if (needLoadingRequestCount === 0) {
		uni.hideLoading();
	}
}
let isRedirecting = false;
let isProcessing = false;
const ajax = (url, data, successCallback, failCallBack, type = "POST",iftoken) => {
	if (isProcessing) {
			return;
		}

	var token = uni.getStorageSync('token') ? uni.getStorageSync('token') : '';
	// data['data']['token'] = token;
	uni.request({
		url: webUrl.webUrl + url,
		data: data.data,//参数值
		method: type || 'POST',
		dataType: 'json',
		header: {
			"Authorization": 'Bearer'+' '+uni.getStorageSync('token'),
		},
		success: (res) => {
			var code = res.data.code;
			 // console.log(code);
			if (code == '10005'||code=='10005') {
				console.log(2222);
				successCallback(res.data);
			}else if(code == '10004'){
				if (!isRedirecting) {
					isRedirecting = true;
				    isProcessing = true;
					uni.removeStorageSync("token")
					setTimeout(function() {
						$tools.jump('../login/login');
						isRedirecting = false;
						isProcessing = false;
					}, 100)
				}
			}else{
				successCallback(res.data);
			}
		},
		fail: (e) => {
			console.log(e)
			// global.endLoading()
			uni.stopPullDownRefresh()
			uni.showToast({
				title: '连接失败,请稍后再试',
				icon: "none",
				duration: 2000
			})
		}
	})
}
/**
 * RSA加密
 */
Ajax.rsaEncrypt = function(data){
    //加密
	if(data == null) return '';
    var encrypt = new jsencrypt();
    encrypt.setPublicKey(publicKey);
    var encryptData = encrypt.encryptLong(data);
    return encryptData;
}
export default ajax
