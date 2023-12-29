<template>
	<view class="level-description" v-html="data.content">
		<!-- <u-parse v-if="data.content" :content="data.content"/> -->
	</view>
</template>

<script>
	// import uParse from '@/components/gaoyia-parse/parse.vue' //引入组件
	import {
		getGonggaoLogById
	} from '@/api/api.js'
	export default {
		// components: {
		// 	uParse //注册组件
		// },
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
	// @import url("/components/gaoyia-parse/parse.css");
	.level-description {
		padding: 40rpx;

		/deep/table,
		/deep/table td,
		/deep/table th {
			border: 1px solid #000000;
		}
	}
</style>
