<template>
	<view class="details">
		<view class="title">
			{{details.title}}
		</view>
		<view class="content" v-html="details.content">
			
		</view>
	</view>
</template>

<script>
	import { GonggaoTypeList } from '@/api/api.js'
	export default {
		data() {
			return {
				details: ''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('noticeDetails')
			})
		},
		onLoad(params) {
			console.log(params)
			if (params.name) {
				this.getDetails(params.name)
			}
		},
		methods: {
			async getDetails(name) {
				const res = await GonggaoTypeList(name)
				if(res.code === 1) {
					this.details = res.data[0]
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.details {
		padding: 40rpx 30rpx;
		.title {
			font-size: 36rpx;
			font-weight: 600;
			color: #333333;
			line-height: 50rpx;
			margin-bottom: 40rpx;
		}
	}
</style>
