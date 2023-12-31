import webUrl from './url.js'
import $tools from './tools.js'

const ajax = (url, data, successCallback, failCallBack, type) => {
	var token = uni.getStorageSync('token');
	data.token = token;
	
	// manifest.json 配置地址

	uni.request({
		url: webUrl.webUrl + url,
		data,
		method: 'POST',
		dataType: 'json',
		header: {
			"x-requested-with": "XMLHttpRequest",
			// "content-type": "application/x-www-form-urlencoded",
			"content-type": "application/json",
			"token": token
		},
		success: (res) => {
			// console.log(webUrl.webUrl);
			var code = res.data.code;
			if (code == 0) {
				successCallback(res.data);
			} else if (code == 401) {
				if (getApp().globalData.is_flag) { 
					getApp().globalData.is_flag = false;
					console.log('没有登录');
					setTimeout(function() {
						$tools.jump('../home/Signin');
						uni.removeStorageSync('token');
					}, 100)
					setTimeout(() => {
						getApp().globalData.is_flag = true;
						console.log(getApp().globalData.is_flag);
					}, 1000)
				}
			}  else {
				$tools.toast(res.data.msg);
			} 
		},
		fail: () => {
			// this.$tools.toast('连接失败,请稍后再试');
			$tools.toast('请稍后再试');
		}
	})
}
export default ajax
