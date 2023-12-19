<template>
	<view class="fail">
		<view class="tips">
			<image src="../../../static/images/verify/fail.png" mode=""></image>
			<text class="title">{{$t('AuthenticationFailed')}}</text>
			<text class="sub-title">{{$t('AuthenticationFailedTips')}}</text>
		</view>
		<view class="button" @click="toVerify">
			{{$t('AuthenticationFailedButton')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('realNameAuthentication')
			})
		},
		methods: {
			toVerify() {
				uni.redirectTo({
					url: '/pages/verify/verify'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fail {
		padding: 0 40rpx;
		.tips {
			padding-top: 140rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			image {
				width: 360rpx;
				height: 256rpx;
				margin-bottom: 30rpx;
			}
			text {
				line-height: 44rpx;
			}
			.title {
				font-size: 32rpx;
				color: #333333;
				font-weight: 600;
				margin-bottom: 12rpx;
				text-align: center;
			}
			.sub-title {
				font-size: 24rpx;
				color: #999999;
				font-weight: 500;
			}
		}
		.button {
			margin-top: 100rpx;
			height: 90rpx;
			background: linear-gradient(270deg, #24CCBC 0%, #6BEEAB 100%);
			border-radius: 12rpx;
			line-height: 90rpx;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
			text-align: center;
		}
	}
</style>
