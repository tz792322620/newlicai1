<template>
	<view class="earnings">
		<view class="earnings_item">
			<view class="title">
				第3期 跨越星空的爱
			</view>
			<view class="cell">
				<view class="cell_left">
					状态
				</view>
				<view class="cell_right green">
					已完成
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					支付日
				</view>
				<view class="cell_right">
					2023-03-14 20:20:00
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					支付金额
				</view>
				<view class="cell_right">
					7108.65
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.earnings {
		padding: 10rpx 40rpx;
		&_item {
			padding: 30rpx 0;
			.title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				line-height: 40rpx;
				margin-bottom: 10rpx;
			}
			.cell {
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 400;
				line-height: 40rpx;
				&_left {
					color: #999999;
				}
				&_right {
					color: #333333;
					&.green {
						color: #35CBA5;
					}
					&.red {
						color: #F75F52;
					}
				}
			}
		}
	}
</style>
