<template>
	<view class="level-description" v-html="data.content">
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
				const res = await getGonggaoLogById(9) 
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
	.level-description {
		padding: 40rpx;
	}
</style>