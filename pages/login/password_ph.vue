<template>
	<view>
		<view>
			<image class="logo_bg" src="../../static/images/logo_bg.png"></image>
		</view>
		<view class="b_colfff logo_bk">
			<view class="col33 f_s36 f_bod" style="display: flex;justify-content: space-between;">
				{{ $t('resetPassword') }}
				<language></language>
			</view>
			<view class="u-flex" style="margin-top:40rpx;">
				<view class="col35" style="width:320rpx;">{{ $t('phone') }}</view>
			</view>

			<view style="margin-top:60rpx;">
				<view class="logo_input u-flex" style="position: relative;">
					<view style="color: #666666;margin-right: 20rpx;" class="u-flex" @click="isAbP = !isAbP">
						<view>{{regionCode}}</view>
						<view style="margin-left: 10rpx;">
							<u-icon color="#9E9E9E" size="24" name="arrow-down-fill"></u-icon>
						</view>
					</view>
					<area-code-select :isAbP="isAbP" @send="getAreaCode"></area-code-select>
					<u-input v-model="account" type="number" :placeholder="$t('enterPhoneNumber')" />
				</view>
				<view class="logo_input">
					<u-input v-model="new_password" type="password" :placeholder="$t('passwordRequirement')" />
				</view>
				<view class="logo_input">
					<u-input v-model="new_password1" type="password" :placeholder="$t('reenterNewPassword')" />
				</view>
				<view class="logo_input u-flex">
					<u-input v-model="code" type="text" :placeholder="$t('enterSMSCode')" />
					<button class="col35 fasong" @click="sendCode()" :disabled="countdown > 0">
						{{ countdown > 0 ? countdown + $t('resend') : $t('send') }}
					</button>
				</view>
			</view>

			<view style="margin-top: 10px;">
				<V5Dialog :lang="v5lang" :mournful="false" ref="v5dialog" :trustLevel="5" :host="v5host"
					:token="v5token" />
				<!-- 	<V5Button  :trustLevel="5" :mournful="false" @success="onSuccess" :lang="v5lang" name="v5field" ref="v2" :host="v5host" :token="v5token"/> -->
			</view>

			<view style="margin-top: 40rpx;">
				<u-button @click="$noMultipleClicks(resetPassword)" ripple-bg-color="#fff" :ripple="true"
					style="font-size: 34rpx;" :custom-style="customStyle1" shape="circle" type="primary">
					{{ $t('resetPassword') }}
				</u-button>
			</view>

			<view class="u-text-center" style="margin-top: 30rpx; font-size: 24rpx;color: #666666;">
				{{ $t('alreadyHaveAccount') }}<text class="col35"
					@click="$tools.jump('../login/login_ph')">{{ $t('loginNow') }}</text>
			</view>
		</view>
	</view>
</template>


<script>
	import {
		resetPassword,
		smsSend
	} from '@/api/api.js'
	import V5Dialog from '@/components/verify5-ui/V5Dialog'
	import V5Button from '@/components/verify5-ui/V5Button'
	export default {
		data() {
			return {
				noClick: true,
				isAbP: false,
				regionCode: '+86', // 区号展示值
				regionValue: '86', // 区号参数值
				customStyle1: {
					height: '90rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '670rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},

				account: '',
				code: '',
				new_password: '',
				new_password1: '',
				lock: true,


				//验证码
				sms_code: '',
				remain: '发送',
				isSend: true,
				time: 60,
				timer: null,
				countdown: 0,
				tongyi: 0,
				yptoken: '',
				ypauthenticate: '',
				v5lang: "zh-CN", //en
				v5host: 'accelerate.verify5.com',
				v5token: 'aaa949126c3e48d6a941a482921ed7cf'
			}
		},
		components: {
			V5Dialog,
			V5Button
		},
		onLoad() {

		},
		mounted() {

		},
		methods: {
			getAreaCode(item, isAbP) {
				this.isAbP = isAbP
				// console.log(item)
				this.regionCode = item.code
				this.regionValue = item.value
			},
			// async resetPassword(){
			// 	let that=this
			// 	this.$refs.v5dialog.verify(function(result){
			// 		if(result.success){
			// 			var verifyId=result.verifyId;
			// 			// bar(verifyId);
			// 			 that.resetPasswords();
			// 		}
			// 	});

			// },
			async resetPassword() {

				try {
					if (this.account == '') {
						return this.$tools.toast(this.$t('enterPhoneNumber'));
					} else if (this.new_password == '') {
						return this.$tools.toast(this.$t('inputPassword'));
					}
					// if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,32}$/.test(this.new_password)) {
					//     return this.$tools.toast(this.$t('passwordRequirement'));
					// }
					if (this.new_password != this.new_password1) {
						return this.$tools.toast(this.$t('twoPwdFail'));
					}
					if (this.code == '') {
						return this.$tools.toast(this.$t('enterSMSCode'));
					}
					// if (this.lock) {
					// 	this.lock = false
					var data = {};
					data['account'] = this.account
					data['new_password'] = this.new_password
					data['code'] = this.code
					data['referrerCode'] = this.referrerCode
					data['authenticate'] = this.ypauthenticate;
					data['region'] = this.regionValue;
					const res = await resetPassword(data)
					if (res.code == "1") {
						this.$tools.toast(res.msg);
						setTimeout(() => {
							this.$tools.back(1);
						}, 1000);

					} else {
						this.$tools.toast(res.msg)
					}
				} catch (e) {
					//TODO handle the exception
				} finally {
					setTimeout(() => {
						this.noClick = true
					}, 2000)
				}
				// setTimeout(() => {
				// 	this.lock = true
				// }, 1000);

				// }

			},


			async sendCode() {
				if (this.account == '') {
					return this.$tools.toast(this.$t('enterPhoneNumber'));
				}
				uni.showLoading({
					title: this.$t('sending'),
					mask: true
				});
				var data = {};
				data['mobile'] = this.account;
				data['event'] = 'resetPassword';
				const res = await smsSend(data)
				if (res.code == '1') {
					// 开始倒计时
					this.$tools.toast(this.$t('sendSuccessfully'));
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

				uni.hideLoading();

			},

		}
	}
</script>

<style lang="scss" scoped>
	button::after {
		border: none;
	}

	button {
		background-color: #F3F3F3 !important;
		font-size: 26rpx;
	}
</style>
