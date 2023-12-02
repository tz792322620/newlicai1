<template>
	<view class="my_ad">
		<uni-nav-bar left-icon="left" right-icon="plus" :title="$t('myAds')" :border="false" @clickLeft="back()" @clickRight="addAd"></uni-nav-bar>
		<view class="empty" v-if="list.length === 0">
			<image src="../../../static/images/otc/my_ad/empty.png" mode=""></image>
			<text>{{ $t('noActiveAds') }}</text>
			<view class="button" @click="addAd()">
				<image src="../../../static/images/otc/my_ad/publish.png" mode=""></image>
				<text>{{ $t('publishNow') }}</text>
			</view>
		</view>
		<view class="content" v-if="list.length !== 0">
			<view class="item" v-for="(item, index) in list" :key="index" @click="toDetails(item)">
				<view class="top">
					<view class="top_left">
						{{ $t('pair') }}
					</view>
					<view class="top_right">
						<uni-icons type="right"></uni-icons>
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('adType') }}
					</view>
					<view class="cell_right">
						{{ $t('buy') }}
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('priceUnit') }}
					</view>
					<view class="cell_right">
						{{ $t('realTimePrice') }}
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('quantity') }}
					</view>
					<view class="cell_right">
						100 USDT
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('note') }}
					</view>
					<view class="cell_right">
						{{ $t('guess') }}
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('publishTime') }}
					</view>
					<view class="cell_right">
						2023-03-03 10:25:39
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				list: [1]
			}
		},
		methods: {
			back () {
				uni.navigateBack()
			},
			addAd() {
				uni.navigateTo({
					url: '/pages/otc/publish_ad/publish_ad'
				})
			},
			toDetails() {
				uni.navigateTo({
					url: '/pages/otc/my_ad/details/details'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my_ad {
		/deep/.uni-nav-bar-text {
			font-size: 36rpx;
			font-weight: 600;
		}
		/deep/.uni-icons {
			font-size: 48rpx !important;
		}
		.content {
			padding: 30rpx;
			.item {
				padding: 30rpx 0;
				border-bottom: 2rpx solid #F3F3F3;
				.top {
					display: flex;
					justify-content: space-between;
					align-items: center;
					&_left {
						font-size: 32rpx;
						font-weight: 600;
						color: #333333;
						line-height: 44rpx;
					}
					/deep/.uni-icons {
						font-size: 34rpx !important;
					}
				}
				.cell {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 28rpx;
					font-weight: 400;
					color: #333333;
					line-height: 40rpx;
					margin-top: 30rpx;
				}
			}
		}
		.empty {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 240rpx;
			image {
				width: 240rpx;
				height: 240rpx;
			}
			text {
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
				line-height: 34rpx;
				margin: 20rpx 0 60rpx 0;
			}
			.button {
				width: 600rpx;
				height: 90rpx;
				background: #FFFFFF;
				border-radius: 12px;
				border: 2rpx dashed #35CBA5;
				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 20rpx;
				}
				text {
					margin: 0;
					font-size: 32rpx;
					font-weight: 600;
					color: #35CBA5;
					line-height: 44rpx;
				}
			}
		}
	}
</style>
