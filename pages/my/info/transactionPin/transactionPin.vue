<template>
	<view class="transaction-pin">
		<view class="cell">
			<view class="cell_title">
				旧密码
			</view>
			<view class="cell_input">
				<u-input type="password" placeholder="输入旧密码" v-model="data.old_pay_password"/>
			</view>
		</view>
		<view class="cell">
			<view class="cell_title">
				新密码
			</view>
			<view class="cell_input">
				<u-input type="password" placeholder="输入新密码" v-model="data.new_pay_password"/>
			</view>
		</view>
		<view class="cell">
			<view class="cell_title">
				确认密码
			</view>
			<view class="cell_input">
				<u-input type="password" placeholder="确认新密码" v-model="new_pay_password2"/>
			</view>
		</view>
		<view class="button" @click="submit">
			提交
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
		methods: {
			async submit() {
				if(this.$u.test.isEmpty(this.data.old_pay_password)) {
					return uni.showToast({
						title: '请输入旧密码',
						icon: 'none'
					})
				}
				if(this.$u.test.isEmpty(this.data.new_pay_password)) {
					return uni.showToast({
						title: '请输入新密码',
						icon: 'none'
					})
				}
				if(this.$u.test.isEmpty(this.new_pay_password2)) {
					return uni.showToast({
						title: '请确认新密码',
						icon: 'none'
					})
				}
				if(this.data.new_pay_password !== this.new_pay_password2) {
					return uni.showToast({
						title: '两次输入的密码不一致',
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
		padding: 40rpx;
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
				background: #F4F5F7;
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
