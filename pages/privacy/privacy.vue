<template>
	<view class="privacy" v-html="data.content">
	</view>
</template>

<script>
	import {getGonggaoLogById} from '@/api/api.js'
	export default {
		data() {
			return {
				data: ''
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			async getData() {
				const res = await getGonggaoLogById(8) 
				if (res.code == 1) {
					this.data = res.data
					uni.setNavigationBarTitle({
						title: this.data.title
					})
				}
				 console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.privacy {
		padding: 40rpx;
	}
</style>