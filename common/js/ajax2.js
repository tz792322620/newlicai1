import webUrl from './url.js';
import $tools from './tools.js';
import core from './core.js';
import aes from './aes.js';
let needLoadingRequestCount = 0
let lang = uni.getStorageSync('languageMartin');
var app = getApp();
var ajax = new Object;
var skRSAPublicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsLOwO/wmO9U/NUr/VW5CUbcLw+rml6SVDA65JPodXE8cbnoAjct4wdvd47dKfC355ln3ISlTn7F5wuL3AOTMEofFbESrG1BsuXNAtEIrn/whQ3qgk+LA7dqN4xLp8CZcd2L+fMZ0IYHY+m9TSXVAnyXjEpXWOs/E6Wm6b6qBh5QIDAQAB'

import jsencrypt from '@/common/encryptlong/bin/jsencrypt.js'
// global.startLoading = () => {
// 	if (needLoadingRequestCount === 0) {
// 		uni.showLoading({
// 			title: '加载中...',
// 			mask: true,
// 			duration: 2000
// 		});
// 	}
// 	needLoadingRequestCount++
// }
global.endLoading = function() {
	if (needLoadingRequestCount <= 0) return
	needLoadingRequestCount--
	if (needLoadingRequestCount === 0) {
		uni.hideLoading();
	}
}
/**
 * RSA加密
 */
ajax.rsaEncrypt = function(data){
    //加密
	if(data == null) return '';
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    var encryptData = encrypt.encryptLong(data);
    return encryptData;
}

console.log(ajax.rsaEncrypt)
/**
 * 生成AES KEY
 */
ajax.createDesKey = function(num){
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZ0123456789';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < num; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
/**
 * AES加密
 */
ajax.desEncrypt = function(data, aseKey){
	if(data==null) return '';
	var srcs = CryptoJS.enc.Utf8.parse(data);
    var key = CryptoJS.enc.Utf8.parse(aseKey);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
   
}
ajax = (url, data, successCallback, failCallBack, type = "POST") => {
	// console.log(data)
	let that = this;
	var KEY= ajax.createDesKey(16);
	var token = uni.getStorageSync('token') ? uni.getStorageSync('token') : '';
	data['data']['token'] = token;
	let encryptor = new jsencrypt();
	encryptor.setPublicKey(skRSAPublicKey);
	var str = desEncrypt(JSON.stringify(data.data),KEY);
	// // 对字符串进行编码
	// var encode = encodeURI(str);
	// var data = btoa(encode);
	
	uni.request({
		url: webUrl.webUrl + url,
		data: {data:data},
		method: type || 'POST',
		dataType: 'json',
		header: {
			// "x-requested-with": "XMLHttpRequest",
			"content-type": "application/json",
			"key": rsaEncrypt(KEY)
			// "token": uni.getStorageSync('token')
		},
		// timeout: 5000,
		success: (res) => {
			global.endLoading()
			var code = res.data.code;
			if (code == 0) {
				successCallback(res.data);
			}else if(code == -1){
				uni.removeStorageSync("token")
				uni.showToast({
					title: '请重新登录',
					icon: "loading",
					duration: 500
				})
		setTimeout(function() {
			uni.removeStorageSync('token');
			$tools.jump('../register/register');
			// $tools.jump('../auth/login');
			
		}, 100)
			}else{
				successCallback(res.data);
			}
		},
		fail: (e) => {
			console.log(e)
			// global.endLoading()
			uni.stopPullDownRefresh()
			uni.showToast({
				title: lang == 'cn' ?'连接失败,请稍后再试' :'Connection failed.try again later',
				icon: "none",
				duration: 2000
			})
		}
	})
}
export default ajax
