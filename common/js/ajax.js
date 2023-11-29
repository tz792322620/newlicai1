import webUrl from './url.js';
import $tools from './tools.js';
import Ajax1 from './Ajax11.js';

let needLoadingRequestCount = 0
let lang = uni.getStorageSync('languageMartin');
// var app = getApp();
var Ajax = new Object;
var setPublicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsLOwO/wmO9U/NUr/VW5CUbcLw+rml6SVDA65JPodXE8cbnoAjct4wdvd47dKfC355ln3ISlTn7F5wuL3AOTMEofFbESrG1BsuXNAtEIrn/whQ3qgk+LA7dqN4xLp8CZcd2L+fMZ0IYHY+m9TSXVAnyXjEpXWOs/E6Wm6b6qBh5QIDAQAB'

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
const ajax = (url, data, successCallback, failCallBack, type = "POST",iftoken) => {
	// console.log(data)
	var key = Ajax1.createDesKey(16);
	let that = this;
	var token = uni.getStorageSync('token') ? uni.getStorageSync('token') : '';
	data['data']['token'] = token;
	// console.log('ajaxData');
	console.log(data);
	let encryptor = new jsencrypt();
	encryptor.setPublicKey(setPublicKey);
	// var str = encryptor.encryptUnicodeLong(JSON.stringify(data.data));
	// 对字符串进行编码
	// var encode = encodeURI(str);
	// var data = btoa(encode);
	
	uni.request({
		url: webUrl.webUrl + url,
		data: Ajax1.desEncrypt(Ajax1.toJSONString(data.data),key),//参数值
		method: type || 'POST',
		dataType: 'json',
		header: {
			// "x-requested-with": "XMLHttpRequest",
			"content-type": "application/json",
			// "token": uni.getStorageSync('token'),
			"key":Ajax1.rsaEncrypt(key)
		},
		// timeout: 5000,
		success: (res) => {
			// global.endLoading()
			var code = res.data.msg;
			if (code == 'code_999999'||code=='code_999983') {
				successCallback(res.data);
			}else if(code == '用户信息为空'){
				uni.hideLoading();
				uni.removeStorageSync("token")
				$tools.redirectTo('../login/login');
			}else{
				successCallback(res.data);
			}
		},
		fail: (e) => {
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
// /**
//  * AES解密
//  */
// Ajax1.desDecrypt = function(data, aseKey){
//     //解密
// 	 var key = CryptoJS.enc.Utf8.parse(aseKey);//十六位十六进制数作为密钥
// 	 var decrypt = CryptoJS.AES.decrypt(data, key, {
// 	      mode: CryptoJS.mode.ECB,
// 	      padding: CryptoJS.pad.Pkcs7
// 	    });
// 	 var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
// 	 return decryptedStr.toString();
// }
export default ajax
