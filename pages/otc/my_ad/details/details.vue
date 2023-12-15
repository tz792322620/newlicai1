<template>
	<view class="details">
		<view class="content">
			<view class="top">
				<view class="top_left">
					USDT/{{ data.currency }}
				</view>
			</view>
			<!-- <view class="cell">
				<view class="cell_left">
					{{ $t('adNumber') }}
				</view>
				<view class="cell_right">
					1234567890098765
				</view>
			</view> -->
			<view class="cell">
				<view class="cell_left">
					{{ $t('adType') }}
				</view>
				<view class="cell_right">
					{{ data.listing_type == 'Buy' ? $t('buy') : $t('sell') }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{$t('paymentMethod')}}
				</view>
				<view class="cell_right">
					{{ data.payment_method }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{$t('legalTender')}}
				</view>
				<view class="cell_right">
					{{ data.currency }}
				</view>
			</view>
			<!-- <view class="cell">
				<view class="cell_left">
					{{ $t('displayPosition') }}
				</view>
				<view class="cell_right">
					{{ $t('webpage') }}
				</view>
			</view> -->
			<view class="cell">
				<view class="cell_left">
					{{ $t('priceUnit') }}
				</view>
				<view class="cell_right">
					{{ data.price }}
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
					{{data.amount}} USDT
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('minAmount') }}
				</view>
				<view class="cell_right">
					{{data.min_amount}} {{data.currency}}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('maxAmount') }}
				</view>
				<view class="cell_right">
					{{data.max_amount}} {{data.currency}}
				</view>
			</view>
			<!-- <view class="cell">
				<view class="cell_left">
					{{ $t('transactionLimit') }}
				</view>
				<view class="cell_right">
					{{ $t('30min') }}
				</view>
			</view> -->
			<view class="cell">
				<view class="cell_left">
					{{ $t('note') }}
				</view>
				<view class="cell_right">
					{{ data.remark }}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{ $t('publishTime') }}
				</view>
				<view class="cell_right">
					{{data.creation_date}}
				</view>
			</view>
			<!-- <view class="button">
				<view class="button_c">
					{{ $t('delete') }}
				</view>
			</view> -->
		</view>
	</view>
</template>


<script>
	import { getListingById } from '@/api/api.js'
	export default {
		data() {
			return {
				id: '',
				data: ''
			}
		},
		onLoad(params) {
			console.log(params)
			if(params.id) {
				this.id = params.id
				this.getInfoById()
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('adDetails')
			})
		},
		methods: {
			async getInfoById() {
				const res = await getListingById(this.id)
				console.log(res)
				if (res.code === 1) {
					this.data = res.data
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.details {
		padding: 40rpx 30rpx;
		background: url('../../../../static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		.content {
			padding: 40rpx 30rpx;
			background-color: #fff;
			border-radius: 20rpx;
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
