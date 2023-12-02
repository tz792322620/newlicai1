<template>
	<view class="order">
		<view class="title">
			订单已生成
		</view>
		<view class="sub-title">
			请在<u-count-down :timestamp="timestamp" font-size="32" color="#21BF90" separator-color="#21BF90"></u-count-down>内付款给商家
		</view>
		<view class="user">
			<view class="info">
				<view class="info_left">
					<view class="avatar">
						
					</view>
					<view class="name">
						谢威
					</view>					
				</view>
				<view class="info_right">
					<uni-icons type="right"></uni-icons>
				</view>
			</view>
			<view class="desc">
				<image src="../../../static/images/otc/order/checked.png" mode=""></image>
				卖家的数字货币现已存入***托管帐户，请放心付款
			</view>
			<view class="desc">
				<image src="../../../static/images/otc/order/checked.png" mode=""></image>
				****7*24小时客服支持
			</view>
		</view>
		<view class="deal">
			<view class="deal_title">
				购买
				<text class="unit">USDT</text>
			</view>
			<view class="deal_cell">
				<view class="deal_cell_left">
					总额
				</view>
				<view class="deal_cell_right">
					¥100.00
				</view>
			</view>
			<view class="deal_cell">
				<view class="deal_cell_left">
					单价
				</view>
				<view class="deal_cell_right">
					¥7.04
				</view>
			</view>
			<view class="deal_cell">
				<view class="deal_cell_left">
					数量
				</view>
				<view class="deal_cell_right">
					14.20 USDT
				</view>
			</view>
			<u-line color="#EDEDED" style="margin-top: 30rpx;"/>
			<view class="deal_cell" style="margin-bottom: 30rpx;margin-top: 30rpx;">
				<view class="deal_cell_left">
					订单号
				</view>
				<view class="deal_cell_right" style="display: flex;align-items: center;">
					20230304123142154
					<image src="../../../static/images/otc/order/copy.png" mode="" style="width: 24rpx;height: 24rpx;margin-left: 20rpx;"></image>
				</view>
			</view>
			<view class="deal_cell">
				<view class="deal_cell_left">
					创建时间
				</view>
				<view class="deal_cell_right">
					2023-03-04 12:31:20
				</view>
			</view>
		</view>
		<view class="payment">
			<view class="payment_title">
				交易方式
			</view>
			<view class="payment_desc">
				银行卡
			</view>
		</view>
		<view class="buttons">
			<view class="cancel">
				取消订单
			</view>
			<view class="pay">
				去付款
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
	.order {
		padding: 40rpx;
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
