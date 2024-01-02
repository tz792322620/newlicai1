<template>
	<view class="nav-bar">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navbar">
			<image src="@/static/images/hfh.png" mode="" @click="back"></image>
			<text>{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "nav-bar",
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		height: var(--status-bar-height);
		width: 100%;
		background: #fff !important;
	}

	.navbar {
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		height: 88rpx;
		display: flex;
		align-items: center;
		background: #fff;
		width: 100%;
		z-index: 1000;

		image {
			width: 48rpx;
			height: 48rpx;
			margin-left: 40rpx;
		}

		text {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			// margin-left: 218rpx;
			font-size: 36rpx;
			font-weight: 600;
			color: #333333;
		}
	}
</style>
