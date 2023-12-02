<template>
	<view class="details">
		<view class="content">
			<view class="top">
				<view class="top_left">
					{{ $t('pair') }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('adNumber') }}
				</view>
				<view class="cell_right">
					1234567890098765
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('adType') }}
				</view>
				<view class="cell_right">
					{{ $t('buy') }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('displayPosition') }}
				</view>
				<view class="cell_right">
					{{ $t('webpage') }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('priceUnit') }}
				</view>
				<view class="cell_right">
					{{ $t('realTimePrice') }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('currency') }}
				</view>
				<view class="cell_right">
					USDT
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('quantity') }}
				</view>
				<view class="cell_right">
					100 USDT
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('minAmount') }}
				</view>
				<view class="cell_right">
					100 CNY
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('maxAmount') }}
				</view>
				<view class="cell_right">
					5000 CNY
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('transactionLimit') }}
				</view>
				<view class="cell_right">
					{{ $t('30min') }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('note') }}
				</view>
				<view class="cell_right">
					{{ $t('honestBusiness') }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('publishTime') }}
				</view>
				<view class="cell_right">
					2023-03-03 10:25:39
				</view>
			</view>
			<view class="button">
				<view class="button_c">
					{{ $t('delete') }}
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
