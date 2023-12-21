<template>
	<view>
		<view>
			<image class="logo_bg" src="../../static/images/logo_bg.png"></image>
		</view>
		<view class="b_colfff logo_bk">
			<view class="col33 f_s36 f_bod" style="display: flex;justify-content: space-between;">{{ $t('register') }}<language></language></view>
			<view class="u-flex" style="margin-top:40rpx;">
				<view class="col35" style="width:320rpx;">{{ $t('emailRegister') }}</view>
				<view style="width: 320rpx;" class="u-text-right" @click="$tools.jump('../login/register_ph')">{{ $t('phoneRegister') }}</view>
			</view>

			<view style="margin-top:60rpx;">
				<view class="logo_input u-flex">
					<view><image style="width: 48rpx;height: 48rpx;margin-top:10rpx;" src="../../static/images/em1.png"></image></view>
					<u-input v-model="username" type="text" :placeholder="$t('enterEmail')" />
				</view>
				<view class="logo_input u-flex">
					<view><image style="width: 48rpx;height: 48rpx;margin-top:10rpx;" src="../../static/images/em2.png"></image></view>
					<u-input v-model="password" type="password" :placeholder="$t('setLoginPassword')" />
				</view>
<!-- 				<view class="logo_input u-flex">
					<view><image style="width: 48rpx;height: 48rpx;margin-top:10rpx;" src="../../static/images/em3.png"></image></view>
					<u-input type="text" :placeholder="$t('enterCaptcha')" />
				</view> -->
				<view class="logo_input u-flex">
					<view><image style="width: 48rpx;height: 48rpx;margin-top:10rpx;" src="../../static/images/em3.png"></image></view>
					<u-input v-model="code" type="text" :placeholder="$t('enterEmailCode')" />
					<button class="col35 fasong" @click="sendCode()" :disabled="countdown > 0">
						{{ countdown > 0 ? countdown + $t('resend') : $t('send') }}
					</button>
				</view>
				<view class="logo_input u-flex">
					<view><image style="width: 48rpx;height: 48rpx;margin-top:10rpx;" src="../../static/images/em4.png"></image></view>
					<u-input v-model="referrerCode" type="text" :placeholder="$t('referrerID')" />
				</view>
				<view class="u-flex" style="margin-top:30rpx;font-size: 24rpx;">
					<view style="width: 320rpx;">
						<u-radio-group v-model="tongyi">
							<u-radio active-color="#35CBA5" label-size="24" :name="1">{{ $t('readAndAgree') }}<text class="col35">{{ $t('userAgreement') }}</text>{{ $t('and') }}<text class="col35">{{ $t('privacyPolicy') }}</text></u-radio>
						</u-radio-group>
					</view>
				</view>
			</view>
			<view style="margin-top: 10px;">
				<V5Dialog :lang="v5lang" :mournful="false" ref="v5dialog" :trustLevel="5" :host="v5host" :token="v5token"/>
<!-- 				<V5Button  :trustLevel="5" :mournful="false" @success="onSuccess" :lang="v5lang" name="v5field" ref="v2" :host="v5host" :token="v5token"/> -->
			</view>
			
			<view style="margin-top: 40rpx;">
				<u-button @click="reg()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;" :custom-style="customStyle1" shape="circle" type="primary">
					{{ $t('registerNow') }}
				</u-button>
			</view>
			<view class="u-text-center" style="margin-top: 30rpx; font-size: 24rpx;color: #666666;">
				{{ $t('alreadyHaveAccount') }}<text class="col35" @click="$tools.jump('../login/login_em')">{{ $t('loginNow') }}</text>
			</view>
		</view>
	</view>
</template>


<script>
	import { emsSend,register } from '@/api/api.js'
	import V5Dialog from '@/components/verify5-ui/V5Dialog'
	import V5Button from '@/components/verify5-ui/V5Button'
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
				username:'',
				password:'',
				code:'',
				referrerCode:'',
				
				lock: true,
				
				//验证码
				sms_code: '',
				remain: '发送',
				isSend: true,
				time: 60,
				timer: null,
				countdown: 0,
				tongyi:0,
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

			// async reg(){
			// 	let that=this
			// 	this.$refs.v5dialog.verify(function(result){
			// 		if(result.success){
			// 			var verifyId=result.verifyId;
			// 			// bar(verifyId);
			// 			 that.regs();
			// 		}
			// 	});
				
			// },
			async reg(){
				if (this.username == '') {
					return this.$tools.toast('请输入邮箱');
				}else if (this.password == '') {
					return this.$tools.toast('请输入登录密码');
				}
				// if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,32}$/.test(this.password)) {
				//     return this.$tools.toast('请输入8-32位，两种以上字母/数字/符号组合的登录密码');
				// }
				if (this.code == '') {
					return this.$tools.toast('请输入邮箱验证码');
				}else if (this.referrerCode == '') {
					return this.$tools.toast('请输入推荐人ID');
				}else if (this.tongyi == 0) {
					return this.$tools.toast('请先阅读并同意协议');
				}
				if (this.lock) {
					this.lock = false
					var data = {};
					data['username']=this.username
					data['password']=this.password
					data['code']=this.code
					data['referrerCode']=this.referrerCode
					data['authenticate'] = this.ypauthenticate;
					data['token'] = this.yptoken; 
					const res = await register(data)
					if (res.code == "1") {
						this.$tools.toast('注册成功');
						setTimeout(() => {
							this.$tools.back(1);
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
			
			
			async sendCode() {
				if (this.username == '') {
					return this.$tools.toast('请输入邮箱');
				}
				uni.showLoading({
					title: '发送中',
					mask: true
				});
				var data = {};
				data['email'] = this.username;
				const res = await emsSend(data)
				if (res.code == '1') {
					// 开始倒计时
					this.$tools.toast('发送成功');
					this.countdown = 60;
					const timer = setInterval(() => {
						if (this.countdown > 0) {
							this.countdown--;
						} else {
							clearInterval(timer);
						}
					}, 1000);
				} else {
					this.$tools.toast(res.msg)
					// this.$tools.toastSwitchTab(res.msg, '../register/register');
				}
				console.log(res)
	
				uni.hideLoading();
			
			},

		}
	}
</script>

<style lang="scss" scoped>
	button::after {
		border: none;
	}
	button{
		background-color: #F3F3F3!important;
		font-size: 26rpx;
	}
</style>