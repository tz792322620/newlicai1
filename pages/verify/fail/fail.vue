<template>
	<view class="fail">
		<nav-bar :title="$t('realNameAuthentication')"></nav-bar>
		<view class="content">
			<view class="tips">
				<image src="../../../static/images/verify/fail.png" mode=""></image>
				<text class="title">{{$t('AuthenticationFailed')}}</text>
				<text class="sub-title">{{$t('AuthenticationFailedTips')}}</text>
				<text class="sub-title">{{$t('failReason')}}{{data.audit_opinion}}</text>
			</view>
			<view class="button" @click="toVerify">
				{{$t('AuthenticationFailedButton')}}
			</view>	
		</view>
	</view>
</template>

<script>
	import { getVerificationStatus } from '@/api/api.js'
	export default {
		data() {
			return {
				data: ''
			}
		},
		onShow() {
			this.getData()
			// uni.setNavigationBarTitle({
			// 	title: this.$t('realNameAuthentication')
			// })
		},
		methods: {
			async getData() {
				const res = await getVerificationStatus()
				if (res.code === 1) {
					this.data = res.data
				}
			},
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
		.content {
			padding: 0 40rpx;
			.tips {
				padding-top: 240rpx;
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
	}
</style>
