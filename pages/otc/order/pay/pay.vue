<template>
	<view class="pay">
		<view class="title">
			请向卖家付款
		</view>
		<view class="sub-title">
			订单将在<u-count-down :timestamp="timestamp" font-size="32" color="#21BF90" separator-color="#21BF90"></u-count-down>后取消
		</view>
		<view class="price">
			¥100.00
		</view>
		<view class="content">
			<view class="one">
				<view class="one_title">
					登录您下方收款账户，确认买家的付款已到账。  
				</view>
				<view class="one_sub-title">
					转账请勿备注BTC、USDT、区块链等敏感信息，防止汇款被拦截、付款账户被冻结等问题！
				</view>
				<view class="one_item">
					<view class="one_item_title">
						银行卡
					</view>
					<view class="one_item_cell">
						<view class="one_item_cell_left">
							账户名
						</view>
						<view class="one_item_cell_right">
							李少华
							<image src="../../../../static/images/otc/order/copy.png" mode=""></image>
						</view>
					</view>
					<view class="one_item_cell">
						<view class="one_item_cell_left">
							银行卡号
						</view>
						<view class="one_item_cell_right">
							6222  *** **** **** 2222
							<image src="../../../../static/images/otc/order/copy.png" mode=""></image>
						</view>
					</view>
					<view class="one_item_cell">
						<view class="one_item_cell_left">
							银行名称
						</view>
						<view class="one_item_cell_right">
							工商银行
							<image src="../../../../static/images/otc/order/copy.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="one_bottom">
					请确保付款成功，然后点击“我已付款，通知卖家”。
				</view>
			</view>
			<view class="buttons">
				我已付款，通知卖家
			</view>
			<view class="tips">
				对订单有疑问？
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timestamp: 86400
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		text-align: center;
		font-size: 36rpx;
		font-weight: 600;
		color: #333333;
		line-height: 50rpx;
		margin-top: 60rpx;
	}
	.sub-title {
		text-align: center;
		margin: 8rpx 0 20rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #333333;
		line-height: 34rpx;
	}
	.price {
		text-align: center;
		font-size: 60rpx;
		font-weight: 600;
		color: #35CBA5;
		line-height: 84rpx;
		margin-bottom: 60rpx;
	}
	.content {
		padding: 0 40rpx;
		.one {
			padding-left: 58rpx;
			position: relative;
			&::before {
				content: '';
				width: 4rpx;
				height: 484rpx;
				position: absolute;
				top: 58rpx;
				left: 22rpx;
				background: url('../../../../static/images/otc/order/pay/line.png') center center no-repeat;
				background-size: 100% 100%;
			}
			&_title {
				font-size: 32rpx;
				font-weight: 400;
				color: #333333;
				line-height: 44rpx;
				&::before {
					content: '';
					width: 48rpx;
					height: 48rpx;
					position: absolute;
					top: 0;
					left: 0;
					background: url('../../../../static/images/otc/order/pay/1.png') center center no-repeat;
					background-size: 100% 100%;
				}
			}
			&_sub-title {
				margin: 20rpx 0 30rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #F75F52;
				line-height: 34rpx;
			}
			&_item {
				height: 316rpx;
				background: #FFFFFF;
				box-shadow: 0px 0px 24rpx 0px rgba(0,0,0,0.06);
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
			&_bottom {
				margin-top: 30rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #333333;
				line-height: 44rpx;
				position: relative;
				&::before {
					content: '';
					width: 48rpx;
					height: 48rpx;
					position: absolute;
					top: 0;
					left: -58rpx;
					background: url('../../../../static/images/otc/order/pay/2.png') center center no-repeat;
					background-size: 100% 100%;
				}
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
		}
		.tips {
			font-size: 24rpx;
			font-weight: 400;
			color: #35CBA5;
			line-height: 34rpx
		}
	}
</style>
