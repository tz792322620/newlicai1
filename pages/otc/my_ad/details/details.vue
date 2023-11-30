<template>
	<view class="details">
		<view class="content">
			<view class="top">
				<view class="top_left">
					USDT/CNY
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					广告编号
				</view>
				<view class="cell_right">
					1234567890098765
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					广告类型
				</view>
				<view class="cell_right">
					购买
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					展示位置
				</view>
				<view class="cell_right">
					网页
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					价格单价
				</view>
				<view class="cell_right">
					实时价格
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					币种
				</view>
				<view class="cell_right">
					USDT
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					数量
				</view>
				<view class="cell_right">
					100 USDT
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					最小金额
				</view>
				<view class="cell_right">
					100 CNY
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					最大金额
				</view>
				<view class="cell_right">
					5000 CNY
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					交易期限
				</view>
				<view class="cell_right">
					30分钟
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					备注
				</view>
				<view class="cell_right">
					诚信经营,收款秒放币
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					发布时间
				</view>
				<view class="cell_right">
					2023-03-03 10:25:39
				</view>
			</view>
			<view class="button">
				<view class="button_c">
					删除
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
	.details {
		.content {
			padding: 40rpx 30rpx;
			.button {
				display: flex;
				justify-content: flex-end;
				margin-top: 30rpx;
				&_c {
					width: 120rpx;
					height: 60rpx;
					border-radius: 12rpx;
					border: 2rpx solid #F75F52;
					line-height: 60rpx;
					text-align: center;
					font-size: 28rpx;
					font-weight: 500;
					color: #F75F52;
				}
			}
			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				&_left {
					font-size: 32rpx;
					font-weight: 600;
					color: #333333;
					line-height: 44rpx;
				}
			}
			.cell {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
				margin-top: 30rpx;
			}
		}
	}
</style>
