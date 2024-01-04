<template>
	<view class="page">
		<!-- 标题栏 -->
		<view class="background-container"
			style="background: url('../../static/images/verify/sfbj.png') center center no-repeat;background-size: 100% 100%;">
			<!-- 这里放置背景图片 -->
			<!-- <image class="background-image" src="../../static/images/verify/sfbj.png"></image> -->
			<!-- 这里放置标题内容 -->
			<!-- <view class="header">
				<view class="back-arrow" @click="goBack"></view>
				<text class="header-title">{{$t('realNameAuthentication')}}</text>
				<view class="header-camera-icon"></view>
			</view> -->
			<uni-nav-bar statusBar fixed left-icon="left" color="#ffffff" backgroundColor="transparent"
				:title="$t('realNameAuthentication')" :border="false" @clickLeft="goBack"></uni-nav-bar>
		</view>
		<view style="background-color: rgb(255, 255, 255);
					border-radius: 40rpx 40rpx 0px 0px;
					position: absolute;
					width: 100%;
					top: 5rem;
					padding: 1rem 1.5rem;">
			<view class="top1">{{$t('name')}}</view>
			<view class="top2">
				<u-input :custom-style="customStyle" :placeholder="$t('enterName')" v-model="data.real_name" />
			</view>
			<view class="top1">{{$t('IDNumber')}}</view>
			<view class="top2">
				<u-input :custom-style="customStyle" :placeholder="$t('enterIDNumber')"
					v-model="data.identity_number" />
			</view>
			<view class="top1">{{$t('uploadIDPhoto')}}</view>
			<view class="top1" style="display: flex;justify-content: space-around;">
				<view style="background-color: #E1F8F2;padding: 1rem;text-align: center;" v-if="!data.front_image"
					@click="uploadImage(0)">
					<view>
						<image style="width: 222rpx;height: 156rpx;" src="../../static/images/verify/sczm.png"></image>
					</view>
					<view style="color: #fff;" class="gradient-background">{{$t('uploadFront')}}</view>
				</view>
				<image v-else :src="$url + data.front_image" style="width: 320rpx;height: 260rpx;" mode=""
					@click="uploadImage(0)"></image>
				<view style="background-color: #E1F8F2;padding: 1rem;text-align: center;" v-if="!data.back_image"
					@click="uploadImage(1)">
					<view>
						<image style="width: 222rpx;height: 156rpx;" src="../../static/images/verify/bm.png"></image>
					</view>
					<view style="color: #fff;" class="gradient-background">{{$t('uploadBack')}}</view>
				</view>
				<image v-else :src="$url + data.back_image" style="width: 320rpx;height: 260rpx;" mode=""
					@click="uploadImage(1)"></image>
			</view>
			<view class="top1">{{$t('tokenNotice')}}</view>
			<view class="top1" style="display: flex;
						justify-content: space-around;
						align-items: center;
						text-align: center;">
				<view>
					<image style="width: 140rpx;height: 100rpx;" src="../../static/images/verify/1.png"></image>
					<view>{{$t('norm')}}</view>
				</view>
				<view>
					<image style="width: 140rpx;height: 100rpx;" src="../../static/images/verify/2.png"></image>
					<view>{{$t('borderMissing')}}</view>
				</view>
				<view>
					<image style="width: 140rpx;height: 100rpx;" src="../../static/images/verify/3.png"></image>
					<view>{{$t('photoBlur')}}</view>
				</view>
				<view>
					<image style="width: 140rpx;height: 100rpx;" src="../../static/images/verify/4.png"></image>
					<view>{{$t('flashIntensity')}}</view>
				</view>
			</view>
			<view style="margin-top: 3rem;">
				<!-- :class="noClick ? 'buttons' : 'gray'" -->
				<view class="buttons" @click="$noMultipleClicks(submit)">{{$t('submit')}}</view>
			</view>

		</view>
		<!-- <u-mask :show="show" duration="30000" z-index="1000" :custom-style="{background: 'rgba(0, 0, 0, .8)'}">
			<view class="" style="height: 100%;display: flex;justify-content: center;align-items: center;">
				<u-loading mode="flower" size="48" :show="show"></u-loading>
			</view>
		</u-mask> -->
	</view>

</template>

<script>
	import {
		submitVerification,
		getVerificationStatus
	} from '@/api/api.js'
	export default {
		data() {
			return {
				show: false,
				noClick: true,
				customStyle: {},
				data: {
					real_name: '',
					identity_number: '',
					front_image: '',
					back_image: ''
				}
			};
		},
		onLoad() {
			// this.getData()
		},
		methods: {
			async getData() {
				this.show = true
				this.show = false
				const res = await getVerificationStatus()
				console.log(res)
				if (res.code === 1) {
					if (res.data.verification_status == 'Verified') {
						uni.navigateTo({
							url: '/pages/verify/successfully/successfully'
						})
					} else if (res.data.verification_status == 'Pending') {
						uni.navigateTo({
							url: '/pages/verify/pending/pending'
						})
					} else if (res.data.verification_status == 'Rejected') {
						uni.navigateTo({
							url: '/pages/verify/fail/fail'
						})
					} else if (res.data.verification_status == '') {
						uni.navigateTo({
							url: '/pages/verify/fail/fail'
						})
					}
				} else if (res.code === 0) {
					uni.navigateTo({
						url: '/pages/verify/fail/fail'
					})
				}
			},
			goBack() {
				// 返回上一页
				uni.switchTab({
					url: '/pages/my/my'
				})
			},

			uploadImage(type) {
				let header = {}
				// #ifdef APP-PLUS
				if (uni.getSystemInfoSync().platform == 'ios') {
					header['content-type'] = 'multipart/form-data'
				}
				// #endif
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(tempFilePaths[0])
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: this.$url + '/api/image/upload',
							filePath: tempFilePaths[0],
							name: 'image',
							header: header,
							// formData: {
							// 	'image': tempFilePaths[0],
							// },
							success: (uploadFileRes) => {
								const res = JSON.parse(uploadFileRes.data)
								if (res.code === 1) {
									if (type === 0) {
										this.data.front_image = res.data.url
									} else if (type === 1) {
										this.data.back_image = res.data.url
									}
								} else {
									uni.showToast({
										title: res.msg,
										icon: 'none'
									})
								}
								uni.hideLoading()
							}
						});
					}
				})
			},
			async submit() {
				try {
					if (this.data.real_name.trim() == '' || this.data.real_name.length === 0) {
						return uni.showToast({
							title: this.$t('enterName'),
							icon: 'none'
						})
					}
					if (this.data.identity_number.trim() == '' || this.data.identity_number.length === 0) {
						return uni.showToast({
							title: this.$t('enterIDNumber'),
							icon: 'none'
						})
					}
					if (!/^[a-zA-Z0-9]{6,}$/.test(this.data.identity_number)) {
						return uni.showToast({
							title: this.$t('enterTrueIDNumber'),
							icon: 'none'
						})
					}
					if (this.data.front_image.trim() == '' || this.data.front_image.length === 0) {
						return uni.showToast({
							title: this.$t('enterUploadFront'),
							icon: 'none'
						})
					}
					if (this.data.back_image.trim() == '' || this.data.back_image.length === 0) {
						return uni.showToast({
							title: this.$t('enterUploadBack'),
							icon: 'none'
						})
					}
					const res = await submitVerification(this.data)
					if (res.code === 1) {
						uni.navigateTo({
							url: '/pages/verify/submitSuccessfully/submitSuccessfully'
						})
					} else if (res.code === 0) {
						uni.navigateTo({
							url: '/pages/verify/pending/pending'
						})
					}
				} catch (e) {
					//TODO handle the exception
				} finally {
					setTimeout(() => {
						this.noClick = true
					}, 2000)
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	/deep/.u-input {
		padding-left: 20rpx;
	}

	.top2 {
		margin-top: .5rem;
		background: #F4F5F7;
		padding: 0 20rpx;
		border-radius: 0.5rem;
	}

	.buttons {
		height: 90rpx;
		background: #35CBA5;
		border-radius: 12rpx;
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
		font-weight: 600;
		color: #FFFFFF;
	}

	.gray {
		height: 90rpx;
		background: #888;
		border-radius: 12rpx;
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
		font-weight: 600;
		color: #FFFFFF;
	}

	/* /deep/.uni-input-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    background: #F4F5F7;
    border-radius: 0.5rem;
} */
	.gradient-background {
		background: linear-gradient(to right, #24CCBC, #6BEEAB);
		/* 定义渐变的方向和颜色 */
	}

	.top1 {
		margin-top: .5rem;
	}

	.uni-input-input {
		position: relative;
		display: block;
		height: 100%;
		background: none;
		color: inherit;
		opacity: 1;
		font: inherit;
		line-height: inherit;
		letter-spacing: inherit;
		text-align: inherit;
		text-indent: inherit;
		text-transform: inherit;
		text-shadow: inherit;
		background: #F4F5F7;
		border-radius: 0.5rem;
	}

	.background-container {
		position: relative;
		/* 相对定位，以便内部元素可以相对于此容器定位 */
		width: 100%;
		height: 300px;
		/* 根据你的需求设置高度 */
	}

	.background-image {
		width: 100%;
		height: 100%;
		/* 图片铺满容器 */
		object-fit: cover;
		/* 图片等比例缩放以覆盖整个容器 */
	}

	.title-container {
		position: absolute;
		/* 绝对定位，相对于父容器定位 */
		bottom: 0;
		/* 标题悬浮在底部 */
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		/* 可选的半透明背景色 */
		padding: 10px;
		box-sizing: border-box;
		/* 内边距包含在宽度内 */
	}

	.title {
		color: #fff;
		/* 标题文本颜色 */
		font-size: 20px;
		/* 标题字体大小 */
	}


	.confirm-withdraw-button {
		margin-top: 20px;
		background-color: #35CBA5;
		color: #FFFFFF;
		border: none;
		border-radius: 5px;
		text-align: center;
	}

	.page {
		display: flex;
		flex-direction: column;
		height: 100vh;
		/*  background-image: url('../../static/images/zbg.png'); */
		background-size: cover;
		background-position: center;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		position: absolute;
		/* 绝对定位，相对于父容器定位 */
		top: 0;
		/* 标题悬浮在底部 */
		left: 0;
		width: 100%;
		background-color: #ffffff00;
		/* 可选的半透明背景色 */
		padding: 10px;
		box-sizing: border-box;
		/* 内边距包含在宽度内 */

	}

	.back-arrow {
		width: 30px;
		height: 30px;
		background-image: url('../../static/images/bfh.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.header-title {
		flex: 1;
		text-align: center;
		font-size: 18px;
		color: #fff;
	}



	.withdraw-section {
		padding: 10px;
		background-color: #FFFFFF;
		margin-top: 10px;
	}

	.withdraw-amount-label,
	.withdraw-network-label,
	.actual-amount-label {
		font-size: 16px;
		color: #333;
		margin-bottom: 5px;
	}

	.withdraw-amount-input {
		font-size: 14px;
		color: #666;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 10px;
		margin-bottom: 10px;
	}

	.network-selector,
	.actual-amount-section {
		font-size: 14px;
		color: #666;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		margin-bottom: 10px;
	}

	.selector-dropdown-icon {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		width: 24px;
		height: 24px;
		background-image: url('../../static/images/camera-icon.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.actual-amount {
		font-size: 14px;
		color: #35CBA5;
	}

	.action-button2 {
		background-color: #35CBA5;
		color: #FFFFFF;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		text-align: center;
		margin-top: 20px;
	}

	.copy-icon {
		width: 24px;
		height: 24px;
		background-image: url('../../static/images/copy-icon.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		margin-left: 10px;
	}

	.address-section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		background-color: #FFFFFF;
		margin-top: 10px;
	}

	.wallet-address {
		font-size: 14px;
		color: #666;
		word-break: break-all;
	}
</style>
