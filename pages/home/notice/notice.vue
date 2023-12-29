<template>
	<view class="notice">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="item" v-for="(item,index) in list" :key="index" >
			<view>
				<view class="item_title">
					{{item.name}}
				</view>
				<view class="item_description" v-for="(items,indexs) in item.gonggao_logs" :key="indexs" @click="toDetails(items)">
					{{items.title}}
					<uni-icons type="right"></uni-icons>
				</view>
			</view>
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
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('notice')
			})
			this.getNotice()
		},
		onLoad() {
			this.getNotice()
		},
		methods: {
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/home/notice/details?id=${item.id}`
				})
			},
			async getNotice() {
				uni.showLoading({
					mask: true
				})
				const res = await getGonggaoTypes()
				uni.hideLoading()
				if (res.code === 1) {
					this.list = res.data
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.notice {
		padding: 40rpx;
		background: #e6fbf6 url('../../../static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		.item {
			padding: 30rpx;
			// border-bottom: 2rpx solid #F3F3F3;
			border-radius: 20rpx;
			background-color: #fff;
			margin-bottom: 30rpx;
			&_title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				margin-bottom: 24rpx;
			}
			&_description {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 24rpx;
				font-weight: 300;
				color: #a9a9a9;
				margin-bottom: 20rpx;
			}
		}
	}
</style>
