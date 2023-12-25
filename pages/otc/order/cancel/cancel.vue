<template>
	<view class="cancel">
		<view class="title">
			{{$t('cancelTips1')}}
		</view>
		<view class="sub-title">
			{{$t('cancelTips2')}}
		</view>
		<view class="content">
			<view class="cell" v-for="(item,index) in list" :key="index" @click="activeIndex = index">
				<image v-if="activeIndex !== index" src="../../../../static/images/otc/order/cancel/unchecked.png" mode=""></image>
				<image v-else src="../../../../static/images/otc/order/cancel/checked.png" mode=""></image>
				{{item}}
			</view>
		</view>
		<view class="tips">
			<view class="tips_title">
				{{$t('tips')}}
			</view>
			<view class="tips_content">
				<view class="text">
					{{$t('cancelTips3')}}
				</view>
				<view class="text">
					{{$t('cancelTips4')}}<text>{{$t('cancelTips5')}}</text>；
				</view>
				<view class="text">
					{{$t('cancelTips6')}}<text>{{$t('cancelTips7')}}</text>{{$t('cancelTips8')}}
				</view>
			</view>
		</view>
		<view class="button" @click="cancelOrder">
			{{$t('cancelButton')}}
		</view>
	</view>
</template>

<script>
	import { cancelTrade } from '@/api/api.js'
	export default {
		data() {
			return {
				tradeId: '',
				activeIndex: 0,
				// list:['我不想交易了','我不满足广告交易条款的要求','卖家要额外收取费用','卖家收款方式有问题，无法成功打款','卖家无法放行，卖家已退款给我','其他']
			}
		},
		onLoad(params) {
			if(params.id) {
				this.tradeId = params.id
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('cancelOrder')
			})
		},
		computed: {
			list() {
				return [
					this.$t('cancelItem1'),
					this.$t('cancelItem2'),
					this.$t('cancelItem3'),
					this.$t('cancelItem4'),
					this.$t('cancelItem5'),
					this.$t('cancelItem6')
				]
			}
		},
		methods: {
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
	.cancel {
		padding: 40rpx;
		.title {
			font-size: 32rpx;
			font-weight: 600;
			color: #333333;
			line-height: 44rpx;
			margin-bottom: 14rpx;
		}
		.sub-title {
			font-size: 24rpx;
			font-weight: 400;
			color: #999999;
			line-height: 34rpx;
		}
		.content {
			height: 500rpx;
			background: #F7F9F9;
			border-radius: 12rpx;
			padding: 34rpx 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin: 40rpx 0;
			.cell {
				display: flex;
				align-items: center;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				image {
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
				}
			}
		}
		.tips {
			&_title {
				font-size: 24rpx;
				font-weight: 600;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 16rpx;
			}
			&_content {
				.text {
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
					line-height: 34rpx;
					margin-bottom: 20rpx;
					text {
						color: #35CBA5;
					}
				}
			}
		}
		.button {
			margin-top: 58rpx;
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			font-size: 32rpx;
			text-align: center;
			font-weight: 600;
			color: #FFFFFF;
			line-height: 90rpx;
			letter-spacing: 1px;
		}
	}
</style>
