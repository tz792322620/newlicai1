<template>
	<view class="user-agreement">
		<nav-bar :title="data.title"></nav-bar>
		<view class="content" v-html="data.content">

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
				const res = await getGonggaoLogById(7)
				if (res.code == 1) {
					this.data = res.data
				}
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-agreement {
		/deep/.navbar uni-text{
		    position: absolute;
		    left: 50%;
		    -webkit-transform: translateX(-50%);
		    transform: translateX(-50%);
		    font-size: 15px;
		    font-weight: 600;
		    color: #333333;
		}
		.content {
			padding: 168rpx 40rpx 40rpx 40rpx;
		}
	}
</style>
