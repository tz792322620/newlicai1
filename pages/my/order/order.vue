<template>
	<view class="order">
		<view style="display: flex;
				justify-content: space-between;
				text-align: center;"  class="order_item">
			<view>
			  <view>{{$t('totalReceivablePrincipalInterest')}}</view>
			  <view>{{total.total_receivable_principal_interest}}</view>
			</view>
			<view>
			  <view>{{$t('totalReceivedPrincipalInterest')}}</view>
			  <view>{{total.total_received_principal_interest}}</view>
			</view>
			<view>
			  <view>{{$t('totalPendingPrincipalInterest')}}</view>
			  <view>{{total.total_pending_principal_interest}}</view>
			</view>
		</view>
		<view class="order_item" v-for="(item,index) in list" :key="index">
			<view class="order_item_cell" @click="toDetails(item)">
				<view class="order_item_cell_left">
					{{item.product.product_name_cn}}
				</view>
				<view class="order_item_cell_right">
					<uni-icons type="right"></uni-icons>
				</view>
			</view>
			   <view class="order_item_cell">
				  <view class="order_item_cell_left">
					{{ $t('receivablePrincipalInterest') }}
				  </view>
				  <view class="order_item_cell_right">
					{{ item.receivable_principal_interest }}
				  </view>
				</view>
				<view class="order_item_cell">
				  <view class="order_item_cell_left">
					{{ $t('receivedPrincipalInterest') }}
				  </view>
				  <view class="order_item_cell_right">
					{{ item.received_principal_interest }}
				  </view>
				</view>
				<view class="order_item_cell">
				  <view class="order_item_cell_left">
					{{ $t('pendingPrincipalInterest') }}
				  </view>
				  <view class="order_item_cell_right">
					{{ item.pending_principal_interest }}
				  </view>
				</view>
			<view class="order_item_cell">
				<view class="order_item_cell_left">
					{{$t('status')}}
				</view>
				<view class="order_item_cell_right" :class="item.order_status == 'Failed' ? 'red' : 'green'">
					{{ getStatusTranslation(item.order_status) }}
				</view>
			</view>
			<view class="order_item_cell">
				<view class="order_item_cell_left">
					{{$t('tzAmount')}}
				</view>
				<view class="order_item_cell_right">
					{{item.purchase_amount}}
				</view>
			</view>


			<view class="order_item_cell">
				<view class="order_item_cell_left">
					{{$t('investmentTime')}} {{item.purchase_date}}
				</view>
				<view class="order_item_cell_right" @click="toDetail(item)">
					{{$t('contractDetails')}}
				</view>
			</view>
			<view class="order_item_cell">
				<view class="order_item_cell_left">
					 {{$t('investmentPeriod')}}
				</view>
				<view class="order_item_cell_right">
					{{item.product.investment_period}}{{$t('days')}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { currentUserStockOrder,getTotalPrincipalInterest } from '@/api/api.js'
	export default {
		data() {
			return {
				list: [],
				total: {},
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('newStockOrders')
			})
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
				const res = await currentUserStockOrder()
				console.log(res)
				if (res.code === 1) {
					this.list = res.data
				}
				
				const res1 = await getTotalPrincipalInterest()
				console.log(res1)
				if (res1.code === 1) {
					this.total = res1.data
				}
			},
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/my/order/details?dataInfo=${JSON.stringify(item)}`
				})
			},
			toDetail(item) {
				uni.navigateTo({
					url: `/pages/my/order/contract?id=${item.order_id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		padding: 30rpx 40rpx;
		background: #e6fbf6 url('../../../static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		&_item {
			padding: 30rpx;
			// border-bottom: 2rpx solid #F3F3F3;
			border-radius: 20rpx;
			background-color: #fff;
			margin-bottom: 30rpx;
			&_cell {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 30rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #999999;
				&:first-child {
					font-weight: 600;
					color: #333333;
				}
				&:nth-child(2) {
					.order_item_cell_right {
						&.green {
							color: #35CBA5;
						}
						&.red {
							color: #F75F52;
						}
					}
				}
				&:nth-child(3) {
					.order_item_cell_right {
						color: #333333;
					}
				}
				&:nth-child(7) {
					.order_item_cell_right {
						width: 160rpx;
						height: 56rpx;
						background: rgba(53, 203, 165, .16);
						border-radius: 12rpx;
						// opacity: 0.16;
						line-height: 56rpx;
						text-align: center;
						color: #35CBA5;
					}
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
