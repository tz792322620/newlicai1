<template>
	<view class="level-description">
		<nav-bar :title="data.title"></nav-bar>
		<view class="content" >
			<img alt="level.jpg" src="https://api.broadreachvip.top/uploads/20240106/e0883aa7cc0474bf5c03252047a67d8a.jpg" width="750" height="2782">
		</view>
	</view>
</template>

<script>
	import {
		getGonggaoLogById
	} from '@/api/api.js'
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
				}
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.level-description {
		.content {
			padding-top: 50px;
			background: url('../../../static/images/hm_bg.png') center center no-repeat;
			background-size: 100% 100%;
			font-size: 32rpx !important;
			img {
				    max-width: 100%;
				    height: auto;
			}
		}
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
