<template>
	<view class="submit-successfully">
		<image src="../../../static/images/verify/failed.png" mode=""></image>
		<text class="title">{{$t('realNameTips1')}}</text>
		<text class="sub-title">{{$t('realNameTips2')}}</text>
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
			uni.setNavigationBarTitle({
				title: this.$t('realNameAuthentication')
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.submit-successfully {
		padding-top: 240rpx;
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
</style>
