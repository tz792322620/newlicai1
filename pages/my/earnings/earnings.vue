<template>
	<view class="earnings">
		<view class="earnings_item" v-for="(item,index) in list" :key="index">
			<view class="title">
				{{item.earnings_type}}
			</view>
			<!-- <view class="cell">
				<view class="cell_left">
					状态
				</view>
				<view class="cell_right green">
					已完成
				</view>
			</view> -->
			<view class="cell">
				<view class="cell_left">
					{{$t('payDays')}}
				</view>
				<view class="cell_right">
					{{item.earnings_date}}
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					{{$t('payAmount')}}
				</view>
				<view class="cell_right">
					{{item.earnings_amount}}
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
			uni.setNavigationBarTitle({
				title: this.$t('profitRecord')
			})
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async getData() {
				const res = await getAllEarnings()
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
		padding: 40rpx;
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
</style>
