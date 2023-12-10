<template>
	<view class="notice">
		<view class="item" v-for="(item,index) in list" :key="index" @click="toDetails(item)">
			<view>
				<view class="item_title">
					{{item.name}}
				</view>
				<view class="item_description">
					{{item.description}}
				</view>
			</view>
			<uni-icons type="right"></uni-icons>
		</view>
	</view>
</template>

<script>
	import { getGonggaoTypes } from '@/api/api.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getNotice()
		},
		methods: {
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/home/notice/details?name=${item.name}`
				})
			},
			async getNotice() {
				const res = await getGonggaoTypes()
				if (res.code === 1) {
					this.list = res.data
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.notice {
		padding: 10rpx 40rpx;
		.item {
			padding: 20rpx 0;
			border-bottom: 2rpx solid #F3F3F3;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&_title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				margin-bottom: 24rpx;
			}
			&_description {
				font-size: 24rpx;
				font-weight: 300;
				color: #a9a9a9;
			}
		}
	}
</style>
