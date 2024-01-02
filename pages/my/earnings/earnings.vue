<template>
	<view class="earnings">
		<nav-bar :title="$t('profitRecord')"></nav-bar>
		<view class="content">
			<u-empty v-if="list.length === 0" :text="$t('depositEmpty')" margin-top="100"></u-empty>
			<view v-if="list.length !== 0" class="earnings_item" v-for="(item,index) in list" :key="index">
				<view class="title">
			<!-- 		{{item.earnings_type}} -->
					{{ getStatusTranslation(item.earnings_type) }}
				</view>
				<view class="cell">
					<view class="cell_left">
						{{$t('status')}}
					</view>
					<view class="cell_right green">
						{{getStatusTranslation(item.earnings_status)}}
						<!-- {{item.earnings_status == 'Pending' ? $t('status.Pending') 
						: item.earnings_status == 'Completed' ? $t('status.Completed')
						: item.earnings_status == 'Cancelled' ? $t('status.Cancelled') : ''}} -->
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{$t('productNameLabel')}}
					</view>
					<view class="cell_right">
						{{item.product.product_name_cn}}
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{$t('revenueCycle')}}
					</view>
					<view class="cell_right"
						v-if="item.product.payment_method == 'Daily'">
						<text class="col35"
							style="margin-left:6rpx;margin-right: 6rpx;">{{$t('24Hours')}}</text>
					</view>
					<view class="cell_right"
						v-if="item.product.payment_method == 'Weekly'">
						<text class="col35"
							style="margin-left:6rpx;margin-right: 6rpx;">{{$t('week')}}</text>
					</view>
					<view class="cell_right"
						v-if="item.product.payment_method == 'Monthly'">
						<text class="col35"
							style="margin-left:6rpx;margin-right: 6rpx;">{{$t('month')}}</text>
					</view>
					<view class="cell_right"
						v-if="item.product.payment_method == 'OnMaturity'">
						<text class="col35"
							style="margin-left:6rpx;margin-right: 6rpx;">{{$t('inTime')}}</text>
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{$t('time')}}
					</view>
					<view class="cell_right">
						{{item.earnings_date}}
					</view>
				</view>
				<view class="cell">
					<view class="cell_left">
						{{$t('amount')}}
					</view>
					<view class="cell_right">
						{{item.earnings_amount}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getAllEarnings } from '@/api/api.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('profitRecord')
			// })
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getStatusTranslation(status) {
							// console.log(status)
			  return this.$t(status);
			},
			async getData() {
				uni.showLoading({
					mask: true
				})
				const res = await getAllEarnings()
				uni.hideLoading()
				if (res.code === 1) {
					this.list = res.data
				}
				console.log(this.list)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.earnings {
		.content {
			padding: 208rpx 40rpx 40rpx 40rpx;
			background: #e6fbf6 url('../../../static/images/hm_bg.png') center center no-repeat;
			background-size: 100% 100%;
			min-height: 100vh;
			&_item {
				padding: 30rpx 30rpx;
				// border-bottom: 1px solid #d1d1d1;
				border-radius: 20rpx;
				background-color: #fff;
				margin-bottom: 30rpx;
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
	}
</style>
