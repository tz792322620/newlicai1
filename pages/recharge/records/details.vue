<template>
	<view class="details">
		<view class="details_top">
			<view class="details_top_desc">
				{{$t('quantityReceived')}}
			</view>
			<view class="details_top_count">
				+{{data.recharge_amount}}
				<text>{{data.currency_type}}</text>
			</view>
		</view>
		<view class="details_content">
			<view class="details_content_cell">
				<view class="left">
					{{$t('nowStatus')}}
				</view>
				<view class="right">
					{{data.recharge_status}}
				</view>
			</view>
			<view class="details_content_cell">
				<view class="left">
					{{$t('verify')}}
				</view>
				<view class="right">
					{{data.confirmation_status}}
				</view>
			</view>
			<view class="details_content_cell">
				<view class="left">
					{{$t('transferHash')}}
				</view>
				<view class="right">
					{{data.transaction_hash}}
				</view>
			</view>
			<view class="details_content_cell">
				<view class="left">
					{{$t('date')}}
				</view>
				<view class="right">
					{{data.recharge_date}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getRechargeById } from '@/api/api.js'
	export default {
		data() {
			return {
				data: ''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('rechargeDetails')
			})
		},
		onLoad(params) {
			if(params.id) {
				this.getData(params.id)
			}
		},
		methods: {
			async getData(id) {
				const res = await getRechargeById(id) 
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
		&_top {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 60rpx;
			padding-bottom: 40rpx;
			border-bottom: 2rpx solid #F5F5F5;
			&_desc {
				font-size: 32rpx;
				font-weight: 400;
				color: #999999;
				line-height: 44rpx;
				margin-bottom: 10rpx;
			}
			&_count {
				font-size: 60rpx;
				font-weight: 600;
				color: #35CBA5;
				line-height: 84rpx;
				text {
					margin-left: 10rpx;
					font-size: 36rpx;
					color: #666666;
				}
			}
		}
		&_content {
			padding: 30rpx 40rpx;
			&_cell {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				font-size: 28rpx;
				font-weight: 400;
				line-height: 40rpx;
				margin-bottom: 30rpx;
				.left {
					color: #999999;
				}
				.right {
					width: 448rpx;
					color: #333333;
					text-align: right;
					word-break:break-all;
				}
				&:first-child {
					.right {
						color: #35CBA5;
					}
				}
				&:nth-child(3) {
					.right {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
