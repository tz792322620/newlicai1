<template>
	<view class="collect">
		<nav-bar :title="$t('order')"></nav-bar>
		<view class="content">
			<view class="collect_top">
				<view class="collect_top_left">
					<view class="title" v-if="tradeInfo.status == 'Pending'">
						{{$t('waitingBuyers')}}
					</view>
					<view class="title" v-if="tradeInfo.status == 'Processing'">
						{{$t('waitingCollection')}}
					</view>
					<view class="sub-title">
						{{$t('waiting30')}}
					</view>
				</view>
				<view class="collect_top_right" v-if="timestamp > 0">
					<u-count-down :show-hours="false" :timestamp="timestamp" font-size="44" color="#21BF90" separator-color="#21BF90"></u-count-down>
				</view>
				<view class="red" v-else>
					{{$t('timeOut')}}
				</view>
			</view>
			<view class="deal">
				<view class="deal_title">
					{{$t('sell')}}
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
			<view class="item" v-if="tradeInfo.status == 'Processing'">
				<view class="desc">
					{{$t('paymentVoucher')}}
				</view>
				<view class="slot-btn" v-if="tradeInfo.payment_image">
					<image :src="tradeInfo.payment_image" mode=""></image>
				</view>
			</view>

			<view class="buttons" v-if="tradeInfo.status == 'Processing'">
			<view class="buttons_appeal"  @click="toAppeal">
				{{$t('appeal')}}
			</view>
				<view class="buttons_cancel" @click="confirm">
					{{$t('confirmPayment')}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getTradeById,confirmPayment } from '@/api/api.js'
	export default {
		data() {
			return {
				userId: JSON.parse(uni.getStorageSync('userInfo')).user_id,
				timestamp: 1800,
				tradeInfo: '',
				identity: ''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('order')
			})
		},
		onBackPress(event) {
			console.log(event, 'event======>')
			uni.switchTab({
				url: '/pages/otc/otc'
			})
			return true
		},
		onLoad(params) {
			if (params) {
				this.timestamp = params.timestamp
				this.getTradeInfo(params.id)
			}
		},
		methods: {
			toAppeal() {
				uni.navigateTo({
					url: `/pages/otc/order/appeal/appeal?identity=${this.identity}&id=${this.tradeInfo.trade_id}`
				})
			},
			async getTradeInfo(id) {
				const res = await getTradeById(id)
				console.log(res)
				if (res.code === 1) {
					this.tradeInfo = res.data
					const userId = JSON.parse(uni.getStorageSync('userInfo')).user_id
					this.identity = userId == res.data.seller_id ? 'seller' : userId == res.data.buyer_id ? 'buyer' : ''
					const dateTime = Date.parse(new Date())/1000 // 获取当前时间戳秒级
					const currentTimestamp = 1800 - (dateTime - res.data.update_time)
					this.timestamp = currentTimestamp
					console.log(currentTimestamp)
				}
			},
			async confirm() {
				const res = await confirmPayment({
					trade_id: this.tradeInfo.trade_id
				})
				if (res.code === 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none',
						success: () => {
							setTimeout(() => {
							  uni.switchTab({
							  	url: '/pages/otc/otc'
							  })
							}, 1000);
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.collect {
		.content {
			padding: 208rpx 40rpx 40rpx;
			
		}
		&_top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30rpx;
			.red {
				font-size: 36rpx;
				font-weight: 600;
				color: #F75F52;
			}
			&_left {
				.title {
					font-size: 36rpx;
					font-weight: 600;
					color: #333333;
					line-height: 50rpx;
					margin-bottom: 10rpx;
				}
				.sub-title {
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
					line-height: 34rpx;
					text {
						color: #21BF90;
					}
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
				color: #F75F52;
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
		.swiper {
			background: #f6f9f8;
			box-shadow: 0px 0px 24rpx 0px rgba(0, 0, 0, 0.06);
			border-radius: 24rpx;
			margin-top: 40rpx;
			height: 316rpx;
		}
		.one_item {
			background: #f6f9f8;
			border-radius: 24rpx;
			padding: 20rpx 30rpx 30rpx;
			&_title {
				padding-left: 14rpx;
				font-size: 32rpx;
				font-weight: 600;
				color: #333333;
				line-height: 44rpx;
				position: relative;
				margin-bottom: 18rpx;
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
			image {
				width: 24rpx;
				height: 24rpx;
				margin-left: 20rpx;
			}
			&_cell {
				margin-top: 30rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
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
		.item {
			margin-top: 40rpx;
			.desc {
				font-size: 24rpx;
				font-weight: 500;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 20rpx;
			}
		
			.slot-btn {
				width: 280rpx;
				height: 200rpx;
				border-radius: 12rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.buttons {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 80rpx;
			&_cancel,&_appeal {
				width: 320rpx;
				height: 90rpx;
				border-radius: 12rpx;
				line-height: 90rpx;
				text-align: center;
				font-size: 32rpx;
				font-weight: 600;
				background: #35CBA5;
				color: #FFFFFF;
			}
			&_appeal {
				background: #E2F8F2;
				color: #35CBA5;
			}
		}
	}
</style>
