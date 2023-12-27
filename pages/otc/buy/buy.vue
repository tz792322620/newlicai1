<template>
	<view class="buy">
		<view class="box1">
			<view class="box1_title">
				<text class="box1_title_left" :class="dataInfo.listing_type == 'Sell' ? '' : 'red'">
					{{dataInfo.listing_type == 'Sell' ? $t('buy') : dataInfo.listing_type == 'Buy' ? $t('sell') : ''}}
				</text>
				<text class="box1_title_right">
					USDT
				</text>
			</view>
			<view class="box1_cell">
				<text class="box1_cell_left">{{$t('unitPrice')}}</text>
				<text class="box1_cell_right">
					{{dataInfo.currency | currencySymbol}}{{dataInfo.price}}
				</text>
			</view>
			<view class="box1_cell">
				<text class="box1_cell_left">{{$t('quantity')}}</text>
				<text class="box1_cell_right">{{dataInfo.amount}} USDT</text>
			</view>
			<view class="box1_cell">
				<text class="box1_cell_left">{{$t('quota')}}</text>
				<text class="box1_cell_right">{{dataInfo.currency | currencySymbol}}{{dataInfo.min_amount}}-{{dataInfo.currency | currencySymbol}}{{dataInfo.max_amount}}</text>
			</view>
		</view>
		<view class="box2">
			<view class="box2_title">
				{{$t('byAmount')}}
			</view>
			<view class="box2_input">
				<input type="number" placeholder="0.00" @input="confirm" v-model="data.amount">
				<view class="box2_input_right">
					<view class="box2_input_right_curreny">
						{{dataInfo.currency}}
					</view>
					<view class="box2_input_right_all">
						{{$t('allItem')}}
					</view>
				</view>
			</view>
			<view class="box2_cell">
				<view class="box2_cell_left">
					{{$t('acceptedQuantity')}}
				</view>
				<view class="box2_cell_right">
					{{usdtAmount ? usdtAmount : '--' }} USDT
				</view>
			</view>
			<view class="box2_cell">
				<view class="box2_cell_left">
					{{$t('fiatAmount')}}
				</view>
				<view class="box2_cell_right">
					{{price}} {{dataInfo.currency}}
				</view>
			</view>
			<view class="box2_payment">
				<view class="box2_payment_title">
					{{$t('payMethod')}}
				</view>
				<view class="box2_payment_method">
					{{dataInfo.payment_method}}
				</view>
			</view>
		</view>
		<view class="box3">
			<view class="box3_title">
				{{$t('merchantInfo')}}
			</view>
			<view class="box3_cell">
				<text class="box3_cell_left">{{$t('paymentTime')}}</text>
				<text class="box3_cell_left">20{{$t('minutes')}}</text>
			</view>
			<view class="box3_cell">
				<text class="box3_cell_left">{{$t('businessNickname')}}</text>
				<text class="box3_cell_left">{{dataInfo.user_nickname}}</text>
			</view>
		</view>
		<view class="button" @click="$noMultipleClicks(buy)" :class="dataInfo.listing_type == 'Sell' ? '' : 'red'">
			{{dataInfo.listing_type == 'Sell' ? $t('buyUSDT') : dataInfo.listing_type == 'Buy' ? $t('sellUSDT') : ''}}
		</view>
	</view>
</template>

<script>
	import { getListingById,getCurrencyRate,createTrade } from "@/api/api.js"
	export default {
		data() {
			return {
				noClick: true,
				data: {
					listing_id: '',
					amount: ''
				},
				dataInfo: '',
				usdtAmount: '',
				price: '--'
			}
		},
		onLoad(params) {
			if (params.id) {
				this.data.listing_id = params.id
				this.getData(params.id)
				uni.setNavigationBarTitle({
					title: this.dataInfo.listing_type == 'Sell' ? this.$t('buy') : this.$t('sell')
				})
			}
		},
		methods: {
			async buy() {
				if (this.$u.test.isEmpty(this.data.amount)) {
					return uni.showToast({
						title: this.$t('enterAmount'),
						icon: "none"
					})
				}
				const res = await createTrade(this.data)
				if(res.code === 1) {
					this.data.amount = ''
					if (this.dataInfo.listing_type == 'Sell') {
						uni.navigateTo({
							url: `/pages/otc/order/order?id=${res.data.trade_id}`
						})						
					} else {
						uni.navigateTo({
							url: `/pages/otc/order/collect/collect_sell?id=${res.data.trade_id}`
						})
					}
				}
				console.log(res)
			},
			async confirm(e) {
				uni.showLoading({
					mask: true
				})
				const res = await getCurrencyRate(this.dataInfo.currency)
				console.log(res)
				if (res.code === 1) {
					this.usdtAmount = (e.detail.value / res.data.rates[0].rate_to_usdt).toFixed(2)
					this.price = e.detail.value ? e.detail.value : '0.00'
				}
				uni.hideLoading()
				console.log(this.usdtAmount)
			},
			async getData(id) {
				const res = await getListingById(id)
				if (res.code === 1) {
					this.dataInfo = res.data
					console.log(this.dataInfo)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
	}
	.buy {
		background-color: #f5f5f5;
		min-height: 100vh;
		padding: 40rpx;
		.box1 {
			height: 284rpx;
			background: #FFFFFF;
			border-radius: 12rpx;
			padding: 30rpx;
			&_title {
				font-size: 32rpx;
				font-weight: 600;
				line-height: 44rpx;
				&_left {
					color: #35CBA5;
					margin-right: 10rpx;
					&.red {
						color: #F75F52;
					}
				}
				&_right {
					color: #333333;
				}
			}
			&_cell {
				margin-top: 20rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
				&_left {
					margin-right: 40rpx;
				}
			}
		}
		.box2 {
			background: #FFFFFF;
			border-radius: 12rpx;
			padding: 40rpx 30rpx;
			margin: 20rpx 0;
			&_title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333;
				line-height: 40rpx;
			}
			&_input {
				margin-top: 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 2rpx solid #35CBA5;
				padding-bottom: 20rpx;
				input {
					font-size: 48rpx;
					font-weight: 500;
					color: #333;
					line-height: 66px;
				}
				&_right {
					width: 250rpx;
					display: flex;
					align-items: center;
					font-size: 32rpx;
					font-weight: 600;
					line-height: 44rpx;
					&_curreny {
						color: #333333;
						padding-right: 20rpx;
						border-right: 2rpx solid #EDEDED;
						margin-right: 20rpx;
					}
					&_all {
						color: #35CBA5;
					}
				}
			}
			&_cell {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 500;
				line-height: 40rpx;
				margin-top: 30rpx;
				&_left {
					color: #999999;
				}
				&_right {
					color: #333333;
				}
			}
			&_payment {
				margin-top: 40rpx;
				&_title {
					font-size: 28rpx;
					font-weight: 600;
					color: #333333;
					line-height: 40rpx;
					margin-bottom: 20rpx;
				}
				&_method {
					padding-left: 14rpx;
					font-size: 32rpx;
					font-weight: 600;
					color: #333333;
					line-height: 44rpx;
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
		}
		.box3 {
			padding: 30rpx;
			border-radius: 12rpx;
			background: #FFFFFF;
			margin-bottom: 80rpx;
			&_title {
				font-size: 32rpx;
				font-weight: 600;
				color: #333333;
				line-height: 44rpx;
			}
			&_cell {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 30rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
			}
		}
		.button {
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			line-height: 90rpx;
			text-align: center;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
			&.red {
				background: #f75e52;
			}
		}
	}
</style>
