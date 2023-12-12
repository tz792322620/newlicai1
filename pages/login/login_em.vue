<template>
	<view>
		<view>
			<image class="logo_bg" src="../../static/images/logo_bg.png"></image>
		</view>
		<view class="b_colfff logo_bk">
			<view class="col33 f_s36 f_bod" style="display: flex;justify-content: space-between;">{{ $t('login') }}<language></language></view>
			<view class="u-flex" style="margin-top: 40rpx;">
				<view class="col35" style="width:320rpx;">{{ $t('emailLogin') }}</view>
				<view style="width: 320rpx;" class="u-text-right" @click="$tools.jump('../login/login_ph')">{{ $t('phoneLogin') }}</view>
			</view>
			<view style="margin-top:60rpx;">
				<view class="logo_input">
					<u-input v-model="account" type="text" :placeholder="$t('enterEmail')" />
				</view>
				<view class="logo_input">
					<u-input v-model="password" type="password" :placeholder="$t('enterPassword')" />
				</view>
				<view class="u-flex" style="margin-top:30rpx;font-size: 24rpx;">
					<view style="width: 320rpx;"></view>
					<view @click="$tools.jump('../login/password_em')" style="width: 340rpx;" class="u-text-right col35">
						{{ $t('forgotPassword') }}
					</view>
				</view>
			</view>
			<view style="display: flex;justify-content: center;margin-top: 20px;">
				<view id="cbox" style="width: 250px"></view>
			</view>
			
			<view style="margin-top: 40rpx;">
				<u-button @click="login()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;" :custom-style="customStyle1" shape="circle" type="primary">{{ $t('submitLogin') }}</u-button>
			</view>

			<view class="u-text-center" style="margin-top: 30rpx; font-size: 24rpx;color: #666666;">{{ $t('noAccount') }}<text class="col35" @click="$tools.jump('../login/register_em')">{{ $t('registerNow') }}</text></view>
		</view>
		  
	</view>
</template>

<script>
	import { userLogin } from "@/api/api.js"
	export default {
		data() {
			return {
				customStyle1: {
					height: '90rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '670rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},
				value: '',
				tongyi:0,
				
				account:'',
				password:'',
				lock:true,
				yptoken:'',
				ypauthenticate:''
			}
		},
		onLoad() {

		},
		mounted() {
			this.loadCaptchaScript(() => {
				this.initYpRiddler();
			});
		},
		methods: {
				loadCaptchaScript(callback) {
					const script = document.createElement('script');
					script.src = "https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js";
					script.onload = callback;
					document.head.appendChild(script);
				},
			  // 如下配置仅作为示例，具体可参考'配置验证对象'小节
			  initYpRiddler() {
				let that =this;  
				new window.YpRiddler({
				  appId: 'a11a6393cd914616bc54688ef9d2d5b6', 
				  expired: 10,
				  mode: 'dialog',
				  winWidth: 300,
				  lang: 'zh-cn',
				  container: document.getElementById('cbox'),
				  version: 'v1',
				  onSuccess: function (validInfo, close, useDefaultSuccess) {
					that.ypauthenticate = validInfo.authenticate
					that.yptoken = validInfo.token
					useDefaultSuccess.call(null, true)
					close()
				  },
				  onFail: function (code, msg, retry) {
					alert('出错啦：' + msg + ' code: ' + code)
					retry()
				  },
				  beforeStart: function (next) {
					console.log('验证马上开始')
					next()
				  },
				  onExit: function () {
					console.log('退出验证')
				  }
				})
			  },
			async login(){
	
				if (this.account == '') {
					return this.$tools.toast('请输入邮箱');
				}else if (this.password == '') {
					return this.$tools.toast('请输入登录密码');
				}
				// else if (this.tongyi == 0) {
				// 	return this.$tools.toast('请先阅读并同意协议');
				// }
				if (this.lock) {
					this.lock = false
					var data = {};
					data['account'] = this.account;
					data['password'] = this.password;
					data['authenticate'] = this.ypauthenticate;
					data['token'] = this.yptoken;
					console.log(data);
					const res = await userLogin(data)
					console.log(res, '登录======>')
					if (res.code == 1) {
						uni.setStorageSync('token', res.data.userinfo.token);
						uni.setStorageSync('userInfo', JSON.stringify(res.data.userinfo))
						uni.setStorageSync('support_link', JSON.stringify(res.data.support_link))
						this.$tools.toastSwitchTab('登录成功', '../home/home');
						setTimeout(() => {
							this.lock = true
						}, 1000);
					} else {
						this.$tools.toast(res.msg)
						setTimeout(() => {
							this.lock = true
						}, 1000);
					}
				}
			}

		}
	}
</script>

<style>

</style>