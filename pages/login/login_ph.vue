<template>
	<view>
		<view>
			<image class="logo_bg" src="../../static/images/logo_bg.png"></image>
		</view>
		<view class="b_colfff logo_bk">
			<view class="col33 f_s36 f_bod" style="display: flex;justify-content: space-between;">{{ $t('login') }}<language></language></view>
			<view class="u-flex" style="margin-top:40rpx;">
				<view class="" style="width:320rpx;" @click="$tools.jump('../login/login_em')">{{ $t('emailLogin') }}</view>
				<view style="width: 320rpx;" class="u-text-right col35">{{ $t('phoneLogin') }}</view>
			</view>
			<view style="margin-top:60rpx;">
				<view class="logo_input u-flex" style="position: relative;">
					<view style="color: #666666;margin-right: 20rpx;" class="u-flex" @click="isAbP = !isAbP">
						<view>{{regionCode}}</view>
						<view style="margin-left: 10rpx;"><u-icon color="#9E9E9E" size="24"
								name="arrow-down-fill"></u-icon></view>
					</view>
					<area-code-select :isAbP="isAbP" @send="getAreaCode"></area-code-select>
					<u-input v-model="account" type="number" :placeholder="$t('enterPhoneNumber')" />
				</view>
				<view class="logo_input">
					<u-input v-model="password" type="password" :placeholder="$t('enterPassword')" />
				</view>
				<view class="u-flex" style="margin-top:30rpx;font-size: 24rpx;">
					<view style="width: 320rpx;"></view>
					<view @click="$tools.jump('../login/password_ph')" style="width: 340rpx;" class="u-text-right col35">
						{{ $t('forgotPassword') }}
					</view>
				</view>
			</view>
			<view style="margin-top: 10px;">
				<V5Dialog :lang="v5lang" :mournful="false" ref="v5dialog" :trustLevel="5" :host="v5host" :token="v5token"/>
<!-- 				<V5Dialog :lang="v5lang" :mournful="false" ref="v1" :trustLevel="5" :host="v5host" :token="v5token"/>
				<V5Button  :trustLevel="5" :mournful="false" @success="onSuccess" :lang="v5lang" name="v5field" ref="v2" :host="v5host" :token="v5token"/> -->
			</view>
			
			<view style="margin-top: 40rpx;">
				<u-button  @click="login()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;"
					 :custom-style="customStyle1" shape="circle" type="primary">
						{{ $t('submitLogin') }}
				</u-button>
			</view>

			<view class="u-text-center" style="margin-top: 30rpx;
						font-size: 24rpx;color: #666666;">{{ $t('noAccount') }}<text class="col35" @click="$tools.jump('../login/register_ph')">{{ $t('registerNow') }}</text></view>
		</view>
	</view>
</template>


<script>
	import { userLogin } from '@/api/api.js'
	import V5Dialog from '@/components/verify5-ui/V5Dialog'
	import V5Button from '@/components/verify5-ui/V5Button'
	export default {
		data() {
			return {
				isAbP: false,
				customStyle1: {
					height: '90rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '670rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},
				value: '',
				account:'',
				password:'',
				
				lock:true,
				yptoken:'',
				ypauthenticate:'',
				regionCode: '+86', // 区号展示值
				regionValue: '86', // 区号参数值
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
			getAreaCode(item,isAbP) {
				this.isAbP = isAbP
				// console.log(item)
				this.regionCode = item.code
				this.regionValue = item.value
			},
			async login(){
				console.log('进入登录')
				if (this.account == '') {
					return this.$tools.toast(this.$t('enterPhoneNumber'));
				}else if (this.password == '') {
					return this.$tools.toast(this.$t('inputPassword'));
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
					data['region'] = this.regionValue; 
					console.log(data);
					const res = await userLogin(data)
					console.log(res, '登录======>')
					if (res.code == 1) {
						uni.setStorageSync('token', res.data.userinfo.token);
						uni.setStorageSync('userInfo', JSON.stringify(res.data.userinfo))
						uni.setStorageSync('support_link', JSON.stringify(res.data.support_link))
						this.$tools.toastSwitchTab(res.msg, '../home/home');
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
			},
			// async login(){
			// 	let that=this
			// 	this.$refs.v5dialog.verify(function(result){
					
			// 		if(result.success){
			// 			var verifyId=result.verifyId;
			// 			// bar(verifyId);
			// 			that.logins();
			// 		}
			// 	});

			// }
		}
	}
</script>

<style lang="scss" scoped>
	
</style>