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
			<view style="margin-top: 10px;">
				<V5Dialog :lang="v5lang" :mournful="false" ref="v5dialog" :trustLevel="5" :host="v5host" :token="v5token"/>
		<!-- 		<V5Button  :trustLevel="5" :mournful="false" @success="onSuccess" :lang="v5lang" name="v5field" ref="v2" :host="v5host" :token="v5token"/> -->
			</view>
			
			<view style="margin-top: 40rpx;">
				<u-button @click="$noMultipleClicks(login)" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;" :custom-style="customStyle1" shape="circle" type="primary">{{ $t('submitLogin') }}</u-button>
			</view>

			<view class="u-text-center" style="margin-top: 30rpx; font-size: 24rpx;color: #666666;">{{ $t('noAccount') }}<text class="col35" @click="$tools.jump('../login/register_em')">{{ $t('registerNow') }}</text></view>
		</view>
		  
	</view>
</template>

<script>
	import { userLogin } from "@/api/api.js"
	import V5Dialog from '@/components/verify5-ui/V5Dialog'
	import V5Button from '@/components/verify5-ui/V5Button'
	export default {

		data() {
			return {
				noClick: true,
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
				ypauthenticate:'',
				v5lang:"zh-CN",//en
				v5host:'accelerate.verify5.com',
				v5token:'aaa949126c3e48d6a941a482921ed7cf'
			}
		},
		components:{
		    V5Dialog,
		    V5Button
		},
		onLoad() {

		},
		mounted() {

		},
		methods: {
			onSuccess:function(verifyId){
				console.log(verifyId);
			},
			// async login(){
			// 	let that=this
			// 	this.$refs.v5dialog.verify(function(result){
			// 		if(result.success){
			// 			var verifyId=result.verifyId;
			// 			// bar(verifyId);
			// 			 that.logins();
			// 		}
			// 	});
				
			// },
			async login(){
				if (this.account == '') {
					return this.$tools.toast(this.$t('enterEmail'));
				}else if (this.password == '') {
					return this.$tools.toast(this.$t('inputPassword'));
				}
				// else if (this.tongyi == 0) {
				// 	return this.$tools.toast('请先阅读并同意协议');
				// }
				// if (this.lock) {
				// 	this.lock = false
					var data = {};
					data['account'] = this.account;
					data['password'] = this.password;
					data['authenticate'] = this.ypauthenticate;
					data['token'] = this.yptoken;
					console.log(data);
					try{
						const res = await userLogin(data)
						console.log(res, '登录======>')
						if (res.code == 1) {
							uni.setStorageSync('token', res.data.userinfo.token);
							uni.setStorageSync('userInfo', JSON.stringify(res.data.userinfo))
							uni.setStorageSync('support_link', JSON.stringify(res.data.support_link))
							this.$tools.toastSwitchTab(res.msg, '../home/home');
						} else {
							this.$tools.toast(res.msg)
						}
					}catch(e){
						//TODO handle the exception
					}finally{
						setTimeout(() => {
							this.noClick = true
						}, 2000)
					}
					// setTimeout(() => {
					// 	this.lock = true
					// }, 1000);
				// }
			}

		}
	}
</script>

<style>

</style>