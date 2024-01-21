<template>
	<view class="status" v-if="tradeInfo">
		<nav-bar :title="$t('order')"></nav-bar>
		<view class="content">
			<view class="title" v-if="tradeInfo.status == 'Cancelled'">
				<image src="../../../../static/images/otc/order/cancel.png" mode=""></image>
				{{$t('Cancelled')}}
			</view>
			<view class="title" style="color: #21BF90;" v-if="tradeInfo.status == 'Completed'">
				<image src="../../../../static/images/otc/order/successfully.png" mode=""></image>
				{{$t('completed')}}
			</view>
			<view class="sub-title" v-if="tradeInfo.status == 'Completed'">
				{{$t('successfullyUSDT')}}
			</view>
			<view class="deal">
				<view class="deal_title" :class="identity == 1 ? 'sell' : ''">
					{{identity == 0 ? $t('buy') : identity == 1 ? $t('sell') : ''}}
					<text class="unit">USDT</text>
				</view>
				<view class="deal_cell">
					<view class="deal_cell_left">
						{{$t('totalAmount')}}
					</view>
					<view class="deal_cell_right">
						¥{{Number(Number(tradeInfo.trade_price) * Number(tradeInfo.trade_amount)).toFixed(2)}}
						
					</view>
				</view>
				<view class="deal_cell">
					<view class="deal_cell_left">
						{{$t('unitPrice')}}
					</view>
					<view class="deal_cell_right">
						¥{{tradeInfo.trade_price}}
					</view>
				</view>
				<view class="deal_cell">
					<view class="deal_cell_left">
						{{$t('quantity')}}
					</view>
					<view class="deal_cell_right">
						{{tradeInfo.trade_amount}} USDT
					</view>
				</view>
				<u-line color="#EDEDED" style="margin-top: 30rpx;" />
				<!-- <view class="deal_cell" style="margin-bottom: 30rpx;margin-top: 30rpx;">
					<view class="deal_cell_left">
						订单号
					</view>
					<view class="deal_cell_right" style="display: flex;align-items: center;">
						20230304123142154
						<image src="../../../static/images/otc/order/copy.png" mode="" style="width: 24rpx;height: 24rpx;margin-left: 20rpx;"></image>
					</view>
				</view> -->
				<view class="deal_cell" style="margin-top: 30rpx;">
					<view class="deal_cell_left">
						{{$t('creationTime')}}
					</view>
					<view class="deal_cell_right">
						{{tradeInfo.trade_date}}
					</view>
				</view>
			</view>
			<view class="buttons" @click="buyAgain" :class="identity == 1 ? 'sell' : ''">
				{{identity == 0 ? $t('buyAgain') : identity == 1 ?  $t('sellAgain') : ''}}
			</view>
			<view class="tips" :class="identity == 1 ? 'sell' : ''" @click="toCancelOrder">
				{{$t('questionOrder')}}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getTradeById
	} from '@/api/api.js'
	export default {
		data() {
			return {
				tradeInfo: '',
				identity: '' // 0: 买,1: 卖
			}
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('order')
			// })
		},
		onLoad(params) {
			if (params) {
				// this.tradeInfo = JSON.parse(params.item)
				this.getTradeInfo(params.id)
			}
		},
		methods: {
			async getTradeInfo(id) {
				uni.showLoading({
					mask: true
				})
				const res = await getTradeById(id)
				uni.hideLoading()
				console.log(res)
				if (res.code === 1) {
					this.tradeInfo = res.data
					const userId = JSON.parse(uni.getStorageSync('userInfo')).user_id
					this.identity = userId == res.data.seller_id ? 1 : userId == res.data.buyer_id ? 0 : ''
				}
			},
			toCancelOrder() {
				uni.navigateTo({
					url: `/pages/otc/order/cancel/cancel?id=${this.tradeInfo.trade_id}`
				})
			},
			buyAgain() {
				uni.switchTab({
					url: '/pages/otc/otc'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status {
		.content {
			padding: 188rpx 40rpx 40rpx 40rpx;
			
			.title {
				display: flex;
				align-items: center;
			
				image {
					height: 48rpx;
					width: 48rpx;
					margin-right: 10rpx;
				}
			
				font-size: 36rpx;
				font-weight: 600;
				color: #F75F52;
				margin-bottom: 10rpx;
			}
			
			.sub-title {
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
				line-height: 34rpx;
			}
			
			.deal {
				margin-top: 40rpx;
				padding: 30rpx 30rpx 10rpx 30rpx;
				background-color: #F7F9F9;
				border-radius: 12rpx;
			
				&_title {
					font-size: 32rpx;
					font-weight: 600;
					color: #21BF90;
					line-height: 44rpx;
					margin-bottom: 38rpx;
			
					&.sell {
						color: #F75F52;
						margin-right: 10rpx;
					}
			
					.unit {
						margin-left: 10rpx;
						color: #333333;
					}
				}
			
				&_cell {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 28rpx;
					font-weight: 400;
					color: #333333;
					line-height: 40rpx;
					margin-bottom: 20rpx;
				}
			}
			
			.buttons {
				height: 90rpx;
				background: #35CBA5;
				border-radius: 12rpx;
				line-height: 90rpx;
				text-align: center;
				font-size: 32rpx;
				font-weight: 600;
				color: #FFFFFF;
				margin: 80rpx 0 20rpx;
				&.sell {
					background: #F75F52;
				}
			}
			
			.tips {
				font-size: 24rpx;
				font-weight: 400;
				color: #35CBA5;
				line-height: 34rpx;
				&.sell {
					color: #F75F52;
				}
			}
		}
	}
</style>
