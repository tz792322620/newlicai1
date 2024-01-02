<template>
	<view class="transaction-pin">
		<nav-bar :title="$t('transactionPasswordManagement')"></nav-bar>
		<view class="content">
			<view class="cell">
				<view class="cell_title">
					{{$t('oldPwd')}}
				</view>
				<view class="cell_input">
					<u-input type="password" :placeholder="$t('enterOldPwd')" v-model="data.old_pay_password"/>
				</view>
			</view>
			<view class="cell">
				<view class="cell_title">
					{{$t('newPwd')}}
				</view>
				<view class="cell_input">
					<u-input type="password" :placeholder="$t('enterNewPwd')" v-model="data.new_pay_password"/>
				</view>
			</view>
			<view class="cell">
				<view class="cell_title">
					{{$t('confirmPwd')}}
				</view>
				<view class="cell_input">
					<u-input type="password" :placeholder="$t('enterConfirmPwd')" v-model="new_pay_password2"/>
				</view>
			</view>
			<view class="button" @click="submit">
				{{$t('submit')}}
			</view>
		</view>
	</view>
</template>

<script>
	import { setUserPayPassword } from '@/api/api.js'
	export default {
		data() {
			return {
				data: {
					new_pay_password: '',
					old_pay_password: ''
				},
				new_pay_password2: ''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('transactionPasswordManagement')
			})
		},
		methods: {
			async submit() {
				if(this.$u.test.isEmpty(this.data.old_pay_password)) {
					return uni.showToast({
						title: this.$t('enterOldPwd'),
						icon: 'none'
					})
				}
				if(this.$u.test.isEmpty(this.data.new_pay_password)) {
					return uni.showToast({
						title: this.$t('enterNewPwd'),
						icon: 'none'
					})
				}
				if(this.$u.test.isEmpty(this.new_pay_password2)) {
					return uni.showToast({
						title: this.$t('enterConfirmPwd'),
						icon: 'none'
					})
				}
				if(this.data.new_pay_password !== this.new_pay_password2) {
					return uni.showToast({
						title: this.$t('pwdDifferent'),
						icon: 'none'
					})
				}
				const res = await setUserPayPassword(this.data)
				if (res.code === 1) {
					uni.redirectTo({
						url: '/pages/my/info/info'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.transaction-pin {
		.content {
			padding: 208rpx 40rpx 40rpx;
			background: url('../../../../static/images/hm_bg.png') center center no-repeat;
			background-size: 100% 100%;
			min-height: 100vh;
		}
		.cell {
			margin-bottom: 40rpx;
			&_title {
				font-size: 24rpx;
				font-weight: 500;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 20rpx;
			}
			&_input {
				padding: 10rpx 20rpx;
				height: 90rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
			}
		}
		.button {
			margin-top: 80rpx;
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			text-align: center;
			line-height: 90rpx;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
		}
	}
</style>
