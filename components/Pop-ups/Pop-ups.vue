<template>
	<view class="pop-ups">
		<u-mask :show="show">
			<view class="warp">
				<view class="warp_content">
					<view class="warp_content_image">
						<image :src="image" mode=""></image>
					</view>
					<view class="warp_content_close" @click="close">
						<image src="@/static/images/home/popup/close.png" mode=""></image>
					</view>
				</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	import {getLatestPopupGonggao} from '@/api/api.js'
	export default {
		name: "Pop-ups",
		props: {
			image: {
				type: String,
				defalut: ''
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			close() {
				this.$emit('closed', false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		&_content {
			display: flex;
			flex-direction: column;
			align-items: center;
			&_image {
				width: 560rpx;
				height: 660rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			&_close {
				margin-top: 20rpx;
				width: 40rpx;
				height: 40rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
