<template>
	<view class="collect">
		<view class="collect_top">
			<view class="collect_top_left">
				<view class="title">
					等待卖家确认收款
				</view>
				<view class="sub-title">
					此卖家95%的订单会在<text>05</text>分钟内完成
				</view>
			</view>
			<view class="collect_top_right">
				<u-count-down :timestamp="timestamp" font-size="44" color="#21BF90" separator-color="#21BF90"></u-count-down>
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
					<image src="@/static/images/otc/order/copy.png" mode="" style="width: 24rpx;height: 24rpx;margin-left: 20rpx;"></image>
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
		<view class="buttons">
			<view class="buttons_cancel">
				取消订单
			</view>
			<view class="buttons_appeal">
				申诉
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
	.collect {
		padding: 40rpx;
		&_top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30rpx;
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
		.one_item {
			margin-top: 22rpx;
			height: 316rpx;
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
