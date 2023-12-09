<template>
	<view class="order">
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
					状态
				</view>
				<view class="order_item_cell_right" :class="item.order_status == 'Failed' ? 'red' : 'green'">
					{{item.order_status}}
				</view>
			</view>
			<view class="order_item_cell">
				<view class="order_item_cell_left">
					投资金额
				</view>
				<view class="order_item_cell_right">
					{{item.purchase_amount}}
				</view>
			</view>
			<view class="order_item_cell">
				<view class="order_item_cell_left">
					投资时间 {{item.purchase_date}}
				</view>
				<view class="order_item_cell_right">
					合同详情
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { currentUserStockOrder } from '@/api/api.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async getData() {
				const res = await currentUserStockOrder()
				console.log(res)
				if (res.code === 1) {
					this.list = res.data
				}
			},
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/my/order/details?dataInfo=${JSON.stringify(item)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		padding: 0 40rpx;
		&_item {
			padding: 30rpx 0;
			border-bottom: 2rpx solid #F3F3F3;
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
				&:nth-child(4) {
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
