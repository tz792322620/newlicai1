<template>
	<view class="collect">
		<nav-bar :title="$t('order')"></nav-bar>
		<view class="content">
			<view class="collect_top">
				<view class="collect_top_left">
					<view class="title">
						{{$t('waitingSeller')}}
					</view>
					<view class="sub-title">
						{{$t('collectTips1')}}<text>05</text>{{$t('collectTips2')}}
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
			<swiper class="swiper" circular :indicator-dots="false" :autoplay="false">
				<swiper-item v-for="(item,index) in tradeInfo.payment_infos" :key="index">
					<view class="one_item">
						<view class="one_item_title">
							{{item.payment_type == '微信' ? $t('wechat') : item.payment_type == '支付宝' ? $t('alipay') : item.payment_type == '银行卡' ? $t('bankCard') : ''}}
						</view>
						<view class="one_item_cell">
							<view class="one_item_cell_left">
								{{$t('accountName')}}
							</view>
							<view class="one_item_cell_right">
								{{item.user_name}}
								<image src="../../../../static/images/otc/order/copy.png" mode="" @click="copy(item.user_name)"></image>
							</view>
						</view>
						<view class="one_item_cell">
							<view class="one_item_cell_left" v-if="item.payment_type == '银行卡'">
								{{$t('BankCardAccount')}}
							</view>
							<view class="one_item_cell_left" v-if="item.payment_type == '微信'">
								{{$t('WeChatAccount')}}
							</view>
							<view class="one_item_cell_left" v-if="item.payment_type == '支付宝'">
								{{$t('AlipayAccount')}}
							</view>
							<view class="one_item_cell_right">
								{{item.account_number}}
								<image src="../../../../static/images/otc/order/copy.png" mode="" @click="copy(item.account_number)"></image>
							</view>
						</view>
						<view class="one_item_cell" v-if="item.payment_type == '银行卡'">
							<view class="one_item_cell_left">
								{{$t('BankName')}}
							</view>
							<view class="one_item_cell_right">
								{{item.bank_name}}
								<image src="../../../../static/images/otc/order/copy.png" mode="" @click="copy(item.bank_name)"></image>
							</view>
						</view>
						<view class="one_item_cell" style="margin-top: 20rpx;padding-right: 10rpx;"
							v-if="item.payment_type != '银行卡'">
							<view class="one_item_cell_left">
								{{$t('PaymentQRcode')}}
							</view>
							<view class="one_item_cell_right">
								<image @click="clickImage(item.qr_code_image)" style="width: 60rpx;height: 60rpx;"
									:src="$url + item.qr_code_image" mode=""></image>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="buttons">
				<view class="buttons_cancel" @click="cancelOrder">
					{{$t('cancelOrder')}}
				</view>
				<view class="buttons_appeal" @click="toAppeal">
					{{$t('appeal')}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { cancelTrade,getTradeById } from '@/api/api.js'
	export default {
		data() {
			return {
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
		onLoad(params) {
			if (params) {
				// this.tradeInfo = JSON.parse(params.item)
				this.timestamp = params.timestamp
				this.getTradeInfo(params.id)
			}
		},
		onBackPress(event) {
			console.log(event, 'event======>')
			uni.switchTab({
				url: '/pages/otc/otc'
			})
			return true
		},
		methods: {
			async getTradeInfo(id) {
				const res = await getTradeById(id)
				console.log(res)
				if (res.code === 1) {
					this.tradeInfo = res.data
					const userId = JSON.parse(uni.getStorageSync('userInfo')).user_id
					this.identity = userId == res.data.seller_id ? 'seller' : userId == res.data.buyer_id ? 'buyer' : ''
				}
			},
			// 取消订单
			async cancelOrder() {
				const res = await cancelTrade({
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
			},
			clickImage(url) {
				uni.previewImage({
					urls: [this.$url + url]
				});
			},
			copy(item) {
				let that = this
				uni.setClipboardData({
					data: item,
					showToast: false,
					success: function() {
						uni.showToast({
							title: that.$t('contentCopied'),
							icon: 'success'
						})
					}
				})
			},
			toAppeal() {
				uni.navigateTo({
					url: `/pages/otc/order/appeal/appeal?identity=${this.identity}&id=${this.tradeInfo.trade_id}`
				})
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
