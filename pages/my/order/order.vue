<template>
	<view class="order">
		<nav-bar :title="$t('newStockOrders')"></nav-bar>
		<view class="content">
			<view style="display: flex;
					justify-content: space-between;
					text-align: center;"  class="content_item">
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
			<u-empty v-if="list.length === 0" :text="$t('depositEmpty')" margin-top="100"></u-empty>
			<view v-if="list.length !== 0" class="content_item" v-for="(item,index) in list" :key="index">
				<view class="content_item_cell" @click="toDetails(item)">
					<view class="content_item_cell_left">
						{{item.product.product_name_cn}}
					</view>
					<view class="content_item_cell_right">
						<uni-icons type="right"></uni-icons>
					</view>
				</view>
				   <view class="content_item_cell">
					  <view class="content_item_cell_left">
						{{ $t('receivablePrincipalInterest') }}
					  </view>
					  <view class="content_item_cell_right">
						{{ item.receivable_principal_interest }}
					  </view>
					</view>
					<view class="content_item_cell">
					  <view class="content_item_cell_left">
						{{ $t('receivedPrincipalInterest') }}
					  </view>
					  <view class="content_item_cell_right">
						{{ item.received_principal_interest }}
					  </view>
					</view>
					<view class="content_item_cell">
					  <view class="content_item_cell_left">
						{{ $t('pendingPrincipalInterest') }}
					  </view>
					  <view class="content_item_cell_right">
						{{ item.pending_principal_interest }}
					  </view>
					</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						{{$t('status')}}
					</view>
					<view class="content_item_cell_right" :class="item.order_status == 'Failed' ? 'red' : 'green'">
						{{ getStatusTranslation(item.order_status) }}
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						{{$t('tzAmount')}}
					</view>
					<view class="content_item_cell_right">
						{{item.purchase_amount}}
					</view>
				</view>
			
			
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						{{$t('investmentTime')}} {{item.purchase_date}}
					</view>
					<view class="content_item_cell_right" @click="toDetail(item)">
						{{$t('contractDetails')}}
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						 {{$t('investmentPeriod')}}
					</view>
					<view class="content_item_cell_right">
						{{item.product.investment_period}}{{$t('days')}}
					</view>
				</view>
				<view class="content_item_cell" v-if="userlevel.extra_interest>0">
					<view class="content_item_cell_left">
						  {{$t('levelInterestRate')}}
					</view>
					<view class="content_item_cell_right">
						{{userlevel.extra_interest*100}}%
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { currentUserStockOrder,getTotalPrincipalInterest,getUserLevelInfo} from '@/api/api.js'
	export default {
		data() {
			return {
				list: [],
				total: {},
				userlevel:{},
			}
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('newStockOrders')
			// })
		},
		onBackPress(event) {
			console.log(event, 'event======>')
			uni.switchTab({
				url: '/pages/my/my'
			})
			return true
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
				const res2 = await getUserLevelInfo()
				console.log(res)
				if (res2.code === 1) {
					this.userlevel = res2.data
				}
				
				const res = await currentUserStockOrder()
				console.log(res)
				if (res.code === 1) {
					this.list = res.data
				}
				
				const res1 = await getTotalPrincipalInterest()
				console.log(res1)
				uni.hideLoading()
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
		.content {
			padding: 188rpx 40rpx 40rpx 30rpx;
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
						.content_item_cell_right {
							&.green {
								color: #35CBA5;
							}
							&.red {
								color: #F75F52;
							}
						}
					}
					&:nth-child(3) {
						.content_item_cell_right {
							color: #333333;
						}
					}
					&:nth-child(7) {
						.content_item_cell_right {
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
	}
</style>
