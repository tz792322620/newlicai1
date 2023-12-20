<template>
	<view class="funds">
		<view class="cell" v-for="(item,index) in list" :key="index">
			<view class="cell_left">
				<view class="description">
			<!-- 		{{item.description}} -->
					{{ getStatusTranslation(item.description) }}
				</view>
				<view class="date">
					{{item.create_time | timestampFilter}}
				</view>
			</view>
			<view class="cell_right" :class="Number(item.amount) < 0 ? 'red' : ''">
				<view>{{item.amount}}</view> 
				<!-- <view>{{ getStatusTranslation(item.change_type) }}</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import { getGiftPointsRecords } from '@/api/api.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('integralTitle')
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
				const res = await getGiftPointsRecords()
				if (res.code === 1) {
					this.list = res.data
				}
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.funds {
		padding: 30rpx 40rpx;
		background: #e6fbf6 url('../../../static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		.cell {
			padding: 30rpx;
			// border-bottom: 2rpx solid #F3F3F3;
			border-radius: 20rpx;
			background-color: #fff;
			margin-bottom: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&_left {
				.description {
					font-size: 32rpx;
					font-weight: 600;
					color: #333333;
					margin-bottom: 10rpx;
				}
				.date {
					font-size: 24rpx;
					font-weight: 400;
					color: #999999;
					line-height: 34rpx;
				}
			}
			&_right {
				font-size: 32rpx;
				font-weight: 500;
				color: #F75F52;
				text-align: end;
				.green {
					color: #35CBA5;
				}
			}
		}
	}
</style>
