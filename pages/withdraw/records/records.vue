<template>
	<view class="records">
		<nav-bar :title="$t('withdrawalRecord')"></nav-bar>
		<view class="content">
			<u-empty v-if="recordsList.length === 0" :text="$t('depositEmpty')" margin-top="100"></u-empty>
			<view v-if="recordsList.length !== 0" class="records_item" v-for="(item,index) in recordsList" :key="index"
				@click="toDetails(item)">
				<view class="records_item_title">
					<view class="records_item_title_left">
						{{item.currency_type}}
					</view>
					<view class="records_item_title_right" :class="item.withdrawal_status == 'Failed' ? 'fail' : ''">
						<!-- {{item.recharge_status == 'Confirmed' ? '充值成功' : item.recharge_status == 'Failed' ? '充值失败' : item.recharge_status == 'Pending' ? '待确认' : ''}} -->
						<!-- 		{{item.withdrawal_status}} -->
						{{ getStatusTranslation(item.withdrawal_status) }}
					</view>
				</view>
				<view class="records_item_cell">
					<view class="records_item_cell_left">
						{{$t('quantityReceived')}}
					</view>
					<view class="records_item_cell_right">
						{{item.withdrawal_amount}}
					</view>
				</view>
				<!-- <view class="records_item_cell">
					<view class="records_item_cell_left">
						TXID
					</view>
					<view class="records_item_cell_right">
						{{item.transaction_hash}}
					</view>
				</view> -->
				<view class="records_item_cell">
					<view class="records_item_cell_left">
						{{$t('address')}}
					</view>
					<view class="records_item_cell_right">
						{{item.withdrawal_address | ellipsis}}
					</view>
				</view>
				<view class="records_item_cell">
					<view class="records_item_cell_left">
						{{$t('time')}}
					</view>
					<view class="records_item_cell_right">
						{{item.withdrawal_date}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getUserWithdrawals
	} from '@/api/api.js'
	export default {
		data() {
			return {
				recordsList: []
			}
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('withdrawalRecord')
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
			async toDetails(item) {
				uni.navigateTo({
					url: `/pages/withdraw/records/details?id=${item.withdrawal_id}`
				})
			},
			async getData() {
				uni.showLoading({
					mask: true
				})
				const res = await getUserWithdrawals()
				uni.hideLoading()
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
		.content {
			padding: 208rpx 40rpx 30rpx 40rpx;
			background: #e6fbf6 url('../../../static/images/hm_bg.png') center center no-repeat;
			background-size: 100% 100%;
			min-height: 100vh;
		}

		&_item {
			padding: 30rpx;
			// border-bottom: 2rpx solid #F3F3F3;
			border-radius: 20rpx;
			background-color: #fff;
			margin-bottom: 30rpx;

			&_title,
			&_cell {
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
