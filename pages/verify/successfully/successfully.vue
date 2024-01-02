<template>
	<view class="successfully">
		<nav-bar :title="$t('realNameAuthentication')"></nav-bar>
		<view class="content">
			<view class="tips">
				<image src="../../../static/images/verify/successfully.png" mode=""></image>
				<text class="title">{{$t('congratulations')}}</text>
				<text class="sub-title">{{$t('verificationComplete')}}</text>
			</view>
		</view>
<!-- 		<view class="info">
			<view class="info_title">
				{{$t('identityInfo')}}
			</view>
			<view class="info_cell">
				<view class="info_cell_left">
					{{$t('authenticatedName')}}
				</view>
				<view class="info_cell_right">
					张美女
				</view>
			</view>
			<view class="info_cell">
				<view class="info_cell_left">
					{{$t('documentNumber')}}
				</view>
				<view class="info_cell_right">
					4111**********0000
				</view>
			</view>
			<view class="info_cell">
				<view class="info_cell_left">
					{{$t('authenticationTime')}}
				</view>
				<view class="info_cell_right">
					2023-03-14 20:20:00
				</view>
			</view>
		</view> -->
	</view>
</template>


<script>
	export default {
		data() {
			return {
				
			}
		},
		onBackPress(event) {
			uni.switchTab({
				url: '/pages/my/my'
			})
			return true
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('realNameAuthentication')
			// })
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.successfully {
		.content {
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
	}
</style>
