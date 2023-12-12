<template>
	<view class="order-details">
		<view class="overview">
			<view class="title" @click="isOverview = !isOverview">
				<view class="title_left">
					{{$t('overview')}}
				</view>
				<view class="title_right">
					<u-icon :name="isOverview ? 'arrow-up-fill' :'arrow-down-fill'" color="#666666" size="28"></u-icon>
				</view>
			</view>
			<view class="overview_content" v-if="isOverview">
				<view class="item">
					<view class="item_title">
						<view class="item_title_left">
							{{dataInfo.product.product_name_cn}}
						</view>
						<view class="item_title_right" :class="dataInfo.order_status == 'Failed' ? 'red' : ''">
							{{dataInfo.order_status}}
						</view>
					</view>
					<view class="item_cell">
						<view class="item_cell_box">
							<view class="item_cell_box_top">
								{{$t('tzAmount')}}
							</view>
							<view class="item_cell_box_bottom">
								{{dataInfo.purchase_amount}}
							</view>
						</view>
						<view class="item_cell_box" style="text-align: right;">
							<view class="item_cell_box_top">
								{{$t('investmentTime')}}
							</view>
							<view class="item_cell_box_bottom">
								{{dataInfo.purchase_date}}
							</view>
						</view>
					</view>
					<!-- <view class="item_cell">
						<view class="item_cell_box">
							<view class="item_cell_box_top">
								预期效益
							</view>
							<view class="item_cell_box_bottom">
								0.000987
							</view>
						</view>
						<view class="item_cell_box">
							<view class="item_cell_box_top">
								到期时间
							</view>
							<view class="item_cell_box_bottom">
								2023-02-28 12:30:00
							</view>
						</view>
					</view> -->
				</view>
				<view class="box1">
					<text>{{$t('incomeMethod')}}</text>
					<text>{{$t('incomeMethodTips')}}</text>
				</view>
			</view>
			<view class="overview_box" v-if="isOverview">
				
			</view>
		</view>
		<view class="details">
			<view class="title">
				{{$t('detail')}}
			</view>
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="item_title">
					<view class="item_title_left">
						{{item.earnings_type}}
					</view>
					<!-- <view class="item_title_right">
						已完成
					</view> -->
				</view>
				<view class="item_cell">
					<view class="item_cell_box">
						<view class="item_cell_box_top">
							{{$t('tzAmount')}}
						</view>
						<view class="item_cell_box_bottom">
							{{item.earnings_amount}}
						</view>
					</view>
					<view class="item_cell_box">
						<view class="item_cell_box_top">
							{{$t('expectedBenefit')}}
						</view>
						<view class="item_cell_box_bottom">
							{{item.accumulated_earnings}}
						</view>
					</view>
				</view>
				<view class="item_cell">
					<view class="item_cell_box">
						<view class="item_cell_box_top">
							{{$t('investmentTime')}}
						</view>
						<view class="item_cell_box_bottom">
							{{item.earnings_date}}
						</view>
					</view>
					<!-- <view class="item_cell_box">
						<view class="item_cell_box_top">
							到期时间
						</view>
						<view class="item_cell_box_bottom">
							2023-02-28 12:30:00
						</view>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getEarningsByOrderId } from '@/api/api.js'
	export default {
		data() {
			return {
				isOverview: false,
				list: [],
				dataInfo: ''
			}
		},
		onLoad(params) {
			console.log(JSON.parse(params.dataInfo))
			if(params.dataInfo) {
				this.dataInfo = JSON.parse(params.dataInfo)
				this.getData(this.dataInfo.order_id)
			}
		},
		methods: {
			async getData(id) {
				const res = await getEarningsByOrderId(id)
				if (res.code === 1) {
					this.list = res.data
				}
				console.log(this.list)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-details {
		padding-top: 20rpx;
		.item {
			padding: 30rpx 0;
			border-bottom: 2rpx solid #F3F3F3;
			&_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 600;
				line-height: 40rpx;
				&_left {
					color: #333333;
				}
				&_right {
					color: #35CBA5;
					&.red {
						color: #F75F52;
					}
				}
			}
			&_cell {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 30rpx;
				&_box {
					font-size: 24rpx;
					font-weight: 400;
					color: #666666;
					line-height: 48rpx;
					text-align: left;
					&_bottom {
						font-size: 32rpx;
						color: #333333;
					}
					// &:last-child {
					// 	text-align: right;
					// }
				}
			}
		}
		.overview {
			.title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2rpx solid #F3F3F3;
				height: 48rpx;
				padding: 0 40rpx 10rpx;
				&_left {
					font-size: 28rpx;
					font-weight: 600;
					color: #333333;
				}
			}
			&_box {
				height: 20rpx;
				background-color: #f5f5f5;
				margin-top: 20rpx;
			}
			&_content {
				padding: 0 40rpx;
				.box1 {
					height: 56rpx;
					background: rgba(53, 203, 165, .16);
					border-radius: 8rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 24rpx;
					line-height: 56rpx;
					text {
						font-size: 28rpx;
						font-weight: 400;
						color: #35CBA5;
					}
				}
			}
		}
		.details {
			padding: 0 40rpx;
			.title {
				padding: 30rpx 0;
				border-bottom: 2rpx solid #F3F3F3;
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				line-height: 40rpx;
			}
		}
	}
</style>
