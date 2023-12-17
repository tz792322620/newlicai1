<template>
	<view class="successfully">
		<view class="tips">
			<image src="../../../static/images/verify/successfully.png" mode=""></image>
			<text class="title">恭喜您认证成功！</text>
			<text class="sub-title">您已完成身份认证，快去开启您的交易吧！</text>
		</view>
		<view class="info">
			<view class="info_title">
				身份信息
			</view>
			<view class="info_cell">
				<view class="info_cell_left">
					认证姓名
				</view>
				<view class="info_cell_right">
					张美女
				</view>
			</view>
			<view class="info_cell">
				<view class="info_cell_left">
					证件号
				</view>
				<view class="info_cell_right">
					4111**********0000
				</view>
			</view>
			<view class="info_cell">
				<view class="info_cell_left">
					认证时间
				</view>
				<view class="info_cell_right">
					2023-03-14 20:20:00
				</view>
			</view>
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
			
		}
	}
</script>

<style lang="scss" scoped>
	.successfully {
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
			}
			.sub-title {
				font-size: 24rpx;
				color: #999999;
				font-weight: 500;
			}
		}
		.info {
			margin-top: 80rpx;
			padding: 0 40rpx;
			&_title {
				font-size: 32rpx;
				font-weight: 500;
				color: #333333;
				line-height: 44rpx;
			}
			&_cell {
				margin-top: 30rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 500;
				line-height: 40rpx;
				&_left {
					color: #999999;
				}
				&_right {
					color: #333333;
				}
			}
		}
	}
</style>
