var Ajax1 = new Object;
var publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCsLOwO/wmO9U/NUr/VW5CUbcLw+rml6SVDA65JPodXE8cbnoAjct4wdvd47dKfC355ln3ISlTn7F5wuL3AOTMEofFbESrG1BsuXNAtEIrn/whQ3qgk+LA7dqN4xLp8CZcd2L+fMZ0IYHY+m9TSXVAnyXjEpXWOs/E6Wm6b6qBh5QIDAQAB';
import aes from './aes.js';
import CryptoJS from '../crypto-js/crypto-js.js';
import jsencrypt from '@/common/encryptlong/bin/jsencrypt.js'
/**
 * 实现application/json形式请求
 * @param url
 * @param reqData
 * @param success
 * @param error
 */
Ajax1.submitAjaxToJSON = function(url,reqData,success,error){
    //生成随机DES字符串
    var key = Ajax1.createDesKey(16);
    $.ajax({
        url: url, //请求的url地址
        dataType: "JSON", //返回的格式为json
        async: true, //请求是否异步，默认true异步，这是ajax的特性
        data: Ajax1.desEncrypt(Ajax1.toJSONString(reqData),key),//参数值
        type: "POST", //请求的方式
        headers: {
          "Content-Type": "application/json",
          "isAuth": true,
          "key": Ajax1.rsaEncrypt(key)
        },
        // beforeSend:function(){},//请求前的处理
        success: function (data) {
        	if(data.code=='code_999990' || data.code=='code_999988'){
        		layer.msg(data.msg,{icon:5,time : 2000},function(){
        			//Ajax.pageJumps("/web/user/login/toLogin");
        			wechatLogin();
        		});
        	}
            success(data);  // 下面直接fn() 括号里面传递方法所参数即可调用
        }, //请求成功的处理
        // complete:function(){},//请求完成的处理
        error: function (jqXHR, textStatus, errorThrown) {
            error(jqXHR, textStatus, errorThrown);
        } //请求出错的处理
    });
}

/**
 * 同步加载列表
 */
Ajax1.submitAjaxToJSONSynchronous = function(url,reqData,success,error){
    //生成随机16位DES字符串
    var key = Ajax1.createDesKey(16);
    $.ajax({
        url: url, //请求的url地址
        dataType: "JSON", //返回的格式为json
        async: false, //请求是否异步，默认true异步，这是ajax的特性
        data: Ajax1.desEncrypt(Ajax1.toJSONString(reqData),key),//参数值
        type: "POST", //请求的方式
        headers: {
          "Content-Type": "application/json",
          "isAuth": true,
          "key": Ajax1.rsaEncrypt(key)
        },
        // beforeSend:function(){},//请求前的处理
        success: function (data) {
        	if(data.code=='code_999990' || data.code=='code_999988'){
        		layer.msg(data.msg,{icon:5,time : 2000},function(){
        			wechatLogin();
        			//Ajax.pageJumps("/web/user/login/toLogin");
        		});
        	}
            success(data);  // 下面直接fn() 括号里面传递方法所参数即可调用
        }, //请求成功的处理
        // complete:function(){},//请求完成的处理
        error: function (jqXHR, textStatus, errorThrown) {
            error(jqXHR, textStatus, errorThrown);
        } //请求出错的处理
    });
}

/**
 * 实现application/json形式请求
 * @param url
 * @param reqData
 * @param isAuth
 * @param success
 * @param error
 */
Ajax1.submitAjaxToJSONIsAuth = function(url,reqData,isAuth,success,error){
    //生成随机DES字符串
    var key = Ajax1.createDesKey(16);
    $.ajax({
        url: url, //请求的url地址
        dataType: "JSON", //返回的格式为json
        async: true, //请求是否异步，默认true异步，这是ajax的特性
        data: Ajax1.desEncrypt(Ajax1.toJSONString(reqData),key),//参数值
        type: "POST", //请求的方式
        headers: {
          "Content-Type": "application/json",
          "isAuth": isAuth,
          "key": Ajax1.rsaEncrypt(key)
        },
        // beforeSend:function(){},//请求前的处理
        success: function (data) {
        	if(data.code=='code_999990' || data.code=='code_999988'){
        		layer.msg(data.msg,{icon:5,time : 2000},function(){
        			//Ajax.pageJumps("/web/user/login/toLogin");
        			wechatLogin();
        		});
        	}
            success(data);  // 下面直接fn() 括号里面传递方法所参数即可调用
        }, //请求成功的处理
        // complete:function(){},//请求完成的处理
        error: function (jqXHR, textStatus, errorThrown) {
            error(jqXHR, textStatus, errorThrown);
        } //请求出错的处理
    });
}

/**
 * 实现表单形式请求
 * @param url
 * @param reqData
 * @param success
 * @param error
 */
Ajax1.submitAjaxToForm = function(url,reqData,success,error){
    //生成随机DES字符串
    var key = Ajax1.createDesKey(16);
    $.ajax({
        url: url, //请求的url地址
        dataType: "JSON", //返回的格式为json
        async: true, //请求是否异步，默认true异步，这是ajax的特性
        data: {'data':Ajax1.desEncrypt(Ajax1.toFormString(reqData),key)},//参数值
        type: "POST", //请求的方式
        headers: {
        	"Content-Type": "application/x-www-form-urlencoded",
        	"isAuth": true,
            "key": Ajax1.rsaEncrypt(key)
        },
        // beforeSend:function(){},//请求前的处理
        success: function (data) {
        	if(data.code=='code_999990' || data.code=='code_999988'){
        		layer.msg(data.msg,{icon:5,time : 2000},function(){
        			//Ajax.pageJumps("/web/user/login/toLogin");
        			wechatLogin();
        		});
        	}
            success(data);  // 下面直接fn() 括号里面传递方法所参数即可调用
        }, //请求成功的处理
        // complete:function(){},//请求完成的处理
        error: function (jqXHR, textStatus, errorThrown) {
            error(jqXHR, textStatus, errorThrown);
        } //请求出错的处理
    });
}

/**
 * 实现表单形式请求
 * @param url
 * @param reqData
 * @param success
 * @param error
 */
Ajax1.submitAjaxToFormIsAuth = function(url,reqData,isAuth,success,error){
    //生成随机DES字符串
    var key = Ajax1.createDesKey(16);
    $.ajax({
        url: url, //请求的url地址
        dataType: "JSON", //返回的格式为json
        async: true, //请求是否异步，默认true异步，这是ajax的特性
        data: {'data':Ajax1.desEncrypt(Ajax1.toFormString(reqData),key)},//参数值
        type: "POST", //请求的方式
        headers: {
        	"Content-Type": "application/x-www-form-urlencoded",
        	"isAuth": isAuth,
            "key": Ajax1.rsaEncrypt(key)
        },
        // beforeSend:function(){},//请求前的处理
        success: function (data) {
        	if(data.code=='code_999990' || data.code=='code_999988'){
        		layer.msg(data.msg,{icon:5,time : 2000},function(){
        			//Ajax.pageJumps("/web/user/login/toLogin");
        			Ajax1.pageJumps('/web/api/wechat/wechatLogin');
        		});
        	}
            success(data);  // 下面直接fn() 括号里面传递方法所参数即可调用
        }, //请求成功的处理
        // complete:function(){},//请求完成的处理
        error: function (jqXHR, textStatus, errorThrown) {
            error(jqXHR, textStatus, errorThrown);
        } //请求出错的处理
    });
}

/**
 * 页面跳转参数加密
 * @param url
 * @param reqData
 */
Ajax1.pageJumpsReq = function(url,reqData){
	var encrypt = '';
	if(reqData != ''){
		encrypt = Ajax1.rsaEncrypt(Ajax1.toFormString(reqData));
	}
    window.location.href = url + '?' + encrypt;
}

/**
 * 页面跳转不带参数
 * @param url
 * @param reqData
 */
Ajax1.pageJumps = function(url){
    window.location.href = url;
}

/**
 * 生成AES KEY
 */
Ajax1.createDesKey = function(num){
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZ0123456789';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
	
    for (var i = 0; i < num; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

/**
 * AES加密
 */
Ajax1.desEncrypt = function(data, aseKey){
	if(data==null) return '';
	var srcs = CryptoJS.enc.Utf8.parse(data);
    var key = CryptoJS.enc.Utf8.parse(aseKey);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
   
}

/**
 * AES解密
 */
Ajax1.desDecrypt = function(data, aseKey){
    //解密
	 var key = CryptoJS.enc.Utf8.parse(aseKey);//十六位十六进制数作为密钥
	 var decrypt = CryptoJS.AES.decrypt(data, key, {
	      mode: CryptoJS.mode.ECB,
	      padding: CryptoJS.pad.Pkcs7
	    });
	 var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
	 return decryptedStr.toString();
}

/**
 * RSA加密
 */
Ajax1.rsaEncrypt = function(data){
    //加密
	if(data == null) return '';
    var encrypt = new jsencrypt();
    encrypt.setPublicKey(publicKey);
    var encryptData = encrypt.encryptLong(data);
    return encryptData;
}

/**
 * JSON字符串
 */
Ajax1.toJSONString = function(data){
	if(data==null) return '{}';
    //拼接请求参数处理
    var newkey = Object.keys(data).sort();
    var jsonData = "{";
    for (var i = 0; i < newkey.length; i++) {
        jsonData +="\""+[newkey[i]]+"\":\""+data[newkey[i]]+"\","//拼接请求参数
    }
    jsonData = jsonData.substring(0, jsonData.length - 1)+"}";//拼接请求参数
    return jsonData;
}

/**
 * 表单字符串
 */
Ajax1.toFormString = function(data){
	if(data==null) return '';
    //拼接请求参数处理
    var newkey = Object.keys(data).sort();
    var jsonData = "";
    for (var i = 0; i < newkey.length; i++) {
        jsonData +=[newkey[i]]+"="+data[newkey[i]]+"&";//拼接请求参数
    }
    jsonData = jsonData.substring(0, jsonData.length - 1);//拼接请求参数
    return jsonData;
}


function wechatLogin(){
	layer.confirm("您还未登录,是否立即登录？",{
		btn: ['立即登录', '暂不登录']
	}, function () {
		// 按钮1的事件
		setLocalStorage('login_status', '1');
		Ajax1.pageJumps('/web/api/wechat/wechatLogin');
		
		/*Ajax.pageJumps("/web/user/login/toLogin");*/
	}, function(){
		//按钮2的事件
	});
}
//封装过期控制代码
function setLocalStorage(key,jsonString){
	store.set(key,jsonString)
}
export default Ajax1

