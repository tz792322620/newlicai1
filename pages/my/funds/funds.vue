<template>
	<view class="funds">
		<nav-bar :title="$t('fundsDetails')"></nav-bar>
		<view class="content">
			<u-empty v-if="list.length === 0" :text="$t('depositEmpty')" margin-top="100"></u-empty>
			<view v-if="list.length !== 0" class="cell-box" v-for="(item,index) in list" :key="index">
				<view class="cell">
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
						<view>{{item.amount}} USDT</view> 
						<view style="font-size: 13px;">{{ getStatusTranslation(item.change_type) }}</view>
					</view>
				</view>
				<text v-if="item.related_id !== 0&&item.product">{{$t('from')}} <text v-if="item.from_user_id&&item.from_user_id > 0">{{$t('member')}}--{{item.from_user_nickname}},</text> {{item.product.product_name_cn}}({{item.product.product_code}})</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { getUserFlow } from '@/api/api.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('fundsDetails')
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
				const res = await getUserFlow()
				uni.hideLoading()
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
		.content {
			padding: 208rpx 40rpx 40rpx 30rpx;
			background: #e6fbf6 url('../../../static/images/hm_bg.png') center center no-repeat;
			background-size: 100% 100%;
			min-height: 100vh;
			.cell-box {
				padding: 30rpx;
				// border-bottom: 2rpx solid #F3F3F3;
				border-radius: 20rpx;
				background-color: #fff;
				margin-bottom: 30rpx;
				.cell {
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
				text {
					font-size: 24rpx;
					font-weight: 400;
					color: #999999;
				}
			}
		}
	}
</style>
