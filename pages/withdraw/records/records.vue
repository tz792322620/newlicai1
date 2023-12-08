<template>
	<view class="records">
		<view class="records_item" v-for="(item,index) in recordsList" :key="index" @click="toDetails(item)">
			<view class="records_item_title">
				<view class="records_item_title_left">
					{{item.currency_type}}
				</view>
				<view class="records_item_title_right" :class="item.withdrawal_status == 'Failed' ? 'fail' : ''">
					<!-- {{item.recharge_status == 'Confirmed' ? '充值成功' : item.recharge_status == 'Failed' ? '充值失败' : item.recharge_status == 'Pending' ? '待确认' : ''}} -->
					{{item.withdrawal_status}}
				</view>
			</view>
			<view class="records_item_cell">
				<view class="records_item_cell_left">
					到账数量
				</view>
				<view class="records_item_cell_right">
					{{item.withdrawal_amount}}
				</view>
			</view>
			<view class="records_item_cell">
				<view class="records_item_cell_left">
					地址
				</view>
				<view class="records_item_cell_right">
					{{item.withdrawal_address | ellipsis}}
				</view>
			</view>
			<view class="records_item_cell">
				<view class="records_item_cell_left">
					TXID
				</view>
				<view class="records_item_cell_right">
					{{item.transaction_hash}}
				</view>
			</view>
			<view class="records_item_cell">
				<view class="records_item_cell_left">
					时间
				</view>
				<view class="records_item_cell_right">
					{{item.withdrawal_date}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getUserWithdrawals } from '@/api/api.js'
	export default {
		data() {
			return {
				recordsList: []
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async toDetails(item) {
				uni.navigateTo({
					url: `/pages/withdraw/records/details?id=${item.withdrawal_id}`
				})
			},
			async getData() {
				const res = await getUserWithdrawals()
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
		&_item {
			padding: 30rpx 0;
			border-bottom: 2rpx solid #F3F3F3;
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
