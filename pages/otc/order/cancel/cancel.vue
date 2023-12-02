<template>
	<view class="cancel">
		<view class="title">
			请告诉我们您为什么要取消订单？
		</view>
		<view class="sub-title">
			我们对您的反馈保密，并致力于下次更好地为您服务。
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
				温馨提示
			</view>
			<view class="tips_content">
				<view class="text">
					1.如果您已经付款给卖家,请勿取消订单；
				</view>
				<view class="text">
					2.如果卖家未在15分钟内回复您的消息，您可以无责取消订单,完成率并不受影响。您一天可以<text>无责取消五次</text>；
				</view>
				<view class="text">
					3.若您一天内<text>有责取消订单超过3次</text>，您当天不可再下单；
				</view>
			</view>
		</view>
		<view class="button">
			确认取消订单
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				list:['我不想交易了','我不满足广告交易条款的要求','卖家要额外收取费用','卖家收款方式有问题，无法成功打款','卖家无法放行，卖家已退款给我','其他']
			}
		},
		methods: {
			
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
