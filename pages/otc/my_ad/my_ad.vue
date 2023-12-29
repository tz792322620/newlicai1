<template>
	<view class="my_ad">
		<uni-nav-bar statusBar fixed left-icon="left" right-icon="plus" :title="$t('myAds')" :border="false"
			@clickLeft="back()" @clickRight="addAd"></uni-nav-bar>
		<view class="empty" v-if="list.length === 0">
			<image src="../../../static/images/otc/my_ad/empty.png" mode=""></image>
			<text>{{ $t('noActiveAds') }}</text>
			<view class="button" @click="addAd()">
				<image src="../../../static/images/otc/my_ad/publish.png" mode=""></image>
				<text>{{ $t('publishNow') }}</text>
			</view>
		</view>
		<view class="content" v-if="list.length !== 0">
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="top" @click="toDetails(item)">
					<view class="top_left">
						USDT/{{ item.currency }}
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
						{{item.listing_type === 'Buy' ? $t('buy') : $t('sell') }}
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('priceUnit') }}
					</view>
					<view class="cell_right">
						{{ item.price }} USDT
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('quantity') }}
					</view>
					<view class="cell_right">
						{{item.amount}} USDT
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('note') }}
					</view>
					<view class="cell_right">
						{{ item.remark }}
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('publishTime') }}
					</view>
					<view class="cell_right">
						{{item.creation_date}}
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{ $t('status') }}
					</view>
					<view class="cell_right" style="color: #35CBA5;">
						{{getStatusTranslation(item.status)}}
					</view>
				</view>
				<view class="buttons" v-if="item.status == 'Active'">
					<view class="cancel" @click="show = true,listing_id = item.listing_id">
						{{$t('cancel')}}
					</view>
				</view>
			</view>
		</view>
		<u-modal v-model="show" @confirm="confirm" :content="$t('cancelAdButton')" :cacel-text="$t('cancel')"
			:confirm-text="$t('verify')" :show-title="false" show-cancel-button confirm-color="#35CBA5"></u-modal>
	</view>
</template>


<script>
	import {
		getUserListings,
		cancelListing
	} from '@/api/api.js'
	export default {
		data() {
			return {
				show: false,
				list: [],
				listing_id: ''
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getStatusTranslation(status) {
				// console.log(status)
				return this.$t(status)
			},
			async confirm() {
				const res = await cancelListing({
					listing_id: this.listing_id
				})
				if (res.code == 1) {
					this.getData()
				}
			},
			async getData() {
				uni.showLoading({
					mask: true
				})
				const res = await getUserListings()
				uni.hideLoading()
				if (res.code === 1) {
					this.list = res.data
				}
				console.log(res)
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			addAd() {
				uni.navigateTo({
					url: '/pages/otc/publish_ad/publish_ad'
				})
			},
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/otc/my_ad/details/details?id=${item.listing_id}`
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
			background: #e6fcf6 url('../../../static/images/hm_bg.png') center center no-repeat;
			background-size: 100% 100%;
			min-height: 100vh;

			.item {
				padding: 30rpx;
				// border-bottom: 2rpx solid #F3F3F3;
				border-radius: 20rpx;
				background-color: #fff;
				margin-bottom: 30rpx;

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

				.buttons {
					display: flex;
					justify-content: flex-end;
					margin-top: 20rpx;

					.cancel {
						width: 240rpx;
						height: 80rpx;
						background: #E2F8F2;
						border-radius: 12rpx;
						font-size: 32rpx;
						font-weight: 600;
						color: #35CBA5;
						line-height: 80rpx;
						text-align: center;
					}
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
