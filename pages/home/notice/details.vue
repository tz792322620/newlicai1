<template>
	<view class="details">
		<nav-bar :title="$t('noticeDetails')"></nav-bar>
		<view class="content1">
			<view class="title">
				{{details.title}}
			</view>
			<view class="content" v-html="details.content">
				
			</view>
		</view>
	</view>
</template>

<script>
	import { getGonggaoLogById } from '@/api/api.js'
	export default {
		data() {
			return {
				details: ''
			}
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('noticeDetails')
			// })
		},
		onLoad(params) {
			console.log(params)
			if (params.id) {
				this.getDetails(params.id)
			} 
		},
		methods: {
			async getDetails(name) {
				const res = await getGonggaoLogById(name)
				if(res.code === 1) {
					this.details = res.data
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.details {
		.content1{
			padding: 188rpx 40rpx 30rpx 40rpx;
			.title {
				font-size: 36rpx;
				font-weight: 600;
				color: #333333;
				line-height: 50rpx;
				margin-bottom: 40rpx;
			}
		}
	}
</style>
