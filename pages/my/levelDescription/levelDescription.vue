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
		background: url('../../../static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		font-size: 32rpx !important;
		/* Border styles */
		/deep/table thead, /deep/table tr {
		border-top-width: 1px;
		border-top-style: solid;
		border-top-color: rgb(235, 242, 224);
		}
		/deep/table {
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: rgb(235, 242, 224);
		}
		 
		 
		/* Padding and font style */
		/deep/table td, /deep/table th {
		// padding: 5px 10px;
		font-size: 28rpx;
		font-family: Verdana;
		color: rgb(149, 170, 109);
		}
		 
		 
		/* Alternating background colors */
		/deep/table tr:nth-child(even) {
		background: rgb(230, 238, 214)
		}
		/deep/table tr:nth-child(odd) {
		background: #FFF
		}
	}
</style>
