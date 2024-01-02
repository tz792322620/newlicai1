<template>
	<view class="order">
		<nav-bar :title="$t('order')"></nav-bar>
		<view class="content">
			<view class="title">
				{{$t('orderCompleted')}}
			</view>
			<view class="sub-title">
				{{$t('please')}}<u-count-down :timestamp="timestamp" :show-hours="false" font-size="32" color="#21BF90"
					separator-color="#21BF90" @change="change"></u-count-down>{{$t('payMerchant')}}
			</view>
			<view class="user">
				<view class="info">
					<view class="info_left">
						<!-- <view class="avatar">
							
						</view> -->
						<view class="name">
							{{tradeInfo.seller_nickname}}
						</view>
					</view>
					<view class="info_right">
						<uni-icons type="right"></uni-icons>
					</view>
				</view>
				<view class="desc">
					<image src="../../../static/images/otc/order/checked.png" mode=""></image>
					{{$t('orderTips1')}}
				</view>
				<view class="desc">
					<image src="../../../static/images/otc/order/checked.png" mode=""></image>
					{{$t('orderTips2')}}
				</view>
			</view>
			<view class="deal">
				<view class="deal_title">
					{{$t('buy')}}
					<text class="unit">USDT</text>
				</view>
				<view class="deal_cell">
					<view class="deal_cell_left">
						{{$t('totalAmount')}}
					</view>
					<view class="deal_cell_right">
						¥{{Number(tradeInfo.trade_price) * Number(tradeInfo.trade_amount)}}
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
			<view class="payment">
				<view class="payment_title">
					{{$t('tradeMethod')}}
				</view>
				<view class="payment_desc">
					<text v-for="(item,index) in tradeInfo.payment_infos" :key="index">
						{{item.payment_type == '微信' ? $t('wechat') : item.payment_type == '支付宝' ? $t('alipay') : item.payment_type == '银行卡' ? $t('bankCard') : ''}}
					</text>
				</view>
			</view>
			<view class="buttons">
				<view class="cancel" @click="cancelOrder">
					{{$t('cancelOrder')}}
				</view>
				<view class="pay" @click="toPay">
					{{$t('toPay')}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getTradeById,
		cancelTrade
	} from '@/api/api.js'
	export default {
		data() {
			return {
				timestamp: 1200,
				tradeInfo: '',
				tradeId: '',
				currentTimestamp: 0
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('order')
			})
		},
		onLoad(params) {
			console.log(params.id)
			if (params.id) {
				this.tradeId = params.id
				this.getTradeInfo(params.id)
			}

		},
		methods: {
			// 事件触发，每秒一次
			change(timestamp) {
				this.currentTimestamp = timestamp
			},
			// 取消订单
			async cancelOrder() {
				const res = await cancelTrade({
					trade_id: this.tradeId
				})
				if (res.code === 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none',
						success: () => {
							setTimeout(() => {
							  uni.navigateBack({
							  	delta: 1
							  })
							}, 1000);
						}
					})
				}
			},
			async getTradeInfo(id) {
				const res = await getTradeById(id)
				console.log(res)
				if (res.code === 1) {
					this.tradeInfo = res.data
				}
			},
			toPay() {
				uni.navigateTo({
					url: `/pages/otc/order/pay/pay?timestamp=${this.currentTimestamp}&id=${this.tradeId}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		.content {
			padding: 208rpx 40rpx 40rpx;
			
		}
		.title {
			font-size: 48rpx;
			font-weight: 600;
			color: #333333;
			line-height: 66rpx;
		}

		.sub-title {
			margin-top: 10rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #333333;
			line-height: 34rpx;
		}

		.user {
			padding: 22rpx 30rpx 26rpx 30rpx;
			background-color: #F7F9F9;
			border-radius: 12rpx;
			margin: 40rpx 0 20rpx 0;

			.info {
				display: flex;
				justify-content: space-between;
				align-items: center;

				&_left {
					display: flex;
					align-items: center;

					.avatar {
						width: 48rpx;
						height: 48rpx;
						border-radius: 50%;
						margin-right: 10rpx;
						background-color: #333333;
					}

					.name {
						font-size: 28rpx;
						font-weight: 500;
						color: #333333;
					}
				}
			}

			.desc {
				margin-top: 30rpx;
				display: flex;
				align-items: center;
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;

				image {
					width: 24rpx;
					height: 24rpx;
					margin-right: 12rpx;
				}
			}
		}

		.deal {
			padding: 30rpx 30rpx 10rpx 30rpx;
			background-color: #F7F9F9;
			border-radius: 12rpx;

			&_title {
				font-size: 32rpx;
				font-weight: 600;
				color: #21BF90;
				line-height: 44rpx;
				margin-bottom: 38rpx;

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

		.payment {
			margin-top: 22rpx;
			padding: 20rpx 30rpx;
			background-color: #F7F9F9;
			border-radius: 12rpx;

			&_title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				line-height: 40rpx;
				margin-bottom: 20rpx;
			}

			&_desc {
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
				padding-left: 14rpx;
				position: relative;

				&::before {
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					width: 4rpx;
					height: 20rpx;
					background: #FFAC00;
				}
			}
		}

		.buttons {
			margin-top: 80rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 32rpx;
			font-weight: 600;
			line-height: 90rpx;

			.cancel {
				width: 170rpx;
				height: 90rpx;
				border-radius: 12rpx;
				background: #E2F8F2;
				color: #35CBA5;
				text-align: center;
			}

			.pay {
				width: 480rpx;
				height: 90rpx;
				background: #35CBA5;
				border-radius: 12rpx;
				text-align: center;
				color: #fff;
			}
		}
	}
</style>
