<template>
	<view class="records">
		<view class="records_item" v-for="(item, index) in recordsList" :key="index" @click="toDetails(item)">
			  <view class="records_item_cell">
				<view class="records_item_cell_left">
				  {{$t('Type')}}
				</view>
				<view class="records_item_cell_right" v-if="item.type == 'interest'">
				  {{$t('Interest Coupon')}}
				</view>
				<view class="records_item_cell_right" v-if="item.type == 'discount'">
				  {{$t('Discount Coupon')}}
				</view>
			  </view>
			<view class="records_item_cell" v-if="item.type == 'interest'">
				<view class="records_item_cell_left">
					{{$t('Interest Coupon Name')}}
				</view>
				<view class="records_item_cell_right">
					{{item.interest_coupon.name}}
				</view>
			</view>
			<view class="records_item_cell" v-if="item.type == 'discount'">
				<view class="records_item_cell_left">
					{{$t('Discount Coupon Name')}}
				</view>
				<view class="records_item_cell_right">
					{{item.discount_coupon.coupon_name}}
				</view>
			</view>
			<view class="records_item_cell" v-if="item.type == 'interest'">
				<view class="records_item_cell_left">
					{{$t('Interest Increase')}}
				</view>
				<view class="records_item_cell_right">
					{{item.interest_coupon.rate}}%
				</view>
			</view>
			<view class="records_item_cell" v-if="item.type == 'discount'">
				<view class="records_item_cell_left">
					{{$t('Deduction')}}
				</view>
				<view class="records_item_cell_right">
					{{item.discount_coupon.discount_amount}}
				</view>
			</view>
			<view class="records_item_cell">
				<view class="records_item_cell_left">
					{{$t('Time')}}
				</view>
				<view class="records_item_cell_right">
					{{item.obtained_date}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getUserCoupons } from '@/api/api.js'
	export default {
		data() {
			return {
				recordsList: []
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: '加息优惠劵管理'
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
			// async toDetails(item) {
			// 	uni.navigateTo({
			// 		url: `/pages/withdraw/records/details?id=${item.withdrawal_id}`
			// 	})
			// },
			async getData() {
				const res = await getUserCoupons()
				if (res.code === 1) {
					this.recordsList = res.data
				}
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.records {
		padding: 30rpx 40rpx;
		background: #e6fbf6 url('../../static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		&_item {
			padding: 30rpx;
			// border-bottom: 2rpx solid #F3F3F3;
			border-radius: 20rpx;
			background-color: #fff;
			margin-bottom: 30rpx;
			&_title,&_cell {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			font-size: 28rpx;
			font-weight: 600;
			color: #333333;
			line-height: 40rpx;
			&_title {
				&_right {
					color: #35CBA5;
					&.fail {
						color: #F75F52;
					}
				}
			}
			&_cell {
				margin-top: 30rpx;
				font-weight: 400;
				&_left {
					color: #999999;
				}
			}
		}
	}
</style>
