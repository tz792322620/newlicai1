<template>
	<view class="pending">
		<nav-bar :title="$t('realNameAuthentication')"></nav-bar>
		<view class="content">
			<image src="../../../static/images/verify/failed.png" mode=""></image>
			<text class="title">{{$t('realNameTips3')}}</text>
			<text class="sub-title">{{$t('realNameTips2')}}</text>			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onBackPress(event) {
			console.log(event, 'event======>')
			uni.switchTab({
				url: '/pages/my/my'
			})
			return true
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('realNameAuthentication')
			// })
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.pending {
		.content {
			padding-top: 340rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			image {
				width: 240rpx;
				height: 260rpx;
				margin-bottom: 30rpx;
			}
			text {
				line-height: 44rpx;
			}
			.title {
				font-size: 32rpx;
				color: #333333;
				font-weight: 600;
			}
			.sub-title {
				font-size: 24rpx;
				color: #999999;
				font-weight: 500;
			}
		}
	}
</style>
