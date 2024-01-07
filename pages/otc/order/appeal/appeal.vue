<template>
	<view class="appeal">
		<!-- <view class="item">
			<view class="desc">
				联系姓名
			</view>
			<view class="input">
				<u-input placeholder="请输入您的姓名" v-model="name"></u-input>
			</view>
		</view>
		<view class="item">
			<view class="desc">
				联系电话
			</view>
			<view class="input">
				<u-input placeholder="请输入联系电话" v-model="name"></u-input>
			</view>
		</view> -->
		<nav-bar :title="$t('appeal')"></nav-bar>
		<view class="content">
			<view style="margin-bottom: 12rpx;">
				<view class="item" style="margin-bottom: 0;">
					<view class="desc">
						{{$t('appealReasons')}}
					</view>
					<view class="textarea">
						<textarea style="height: 180rpx;"  :maxlength="500" v-model="data.complaint_content"  :placeholder="$t('appealPlaceholder')"></textarea>
					</view>
				</view>
				<view class="text" style="font-size: 20rpx;font-weight: 400;color: #333333;line-height: 28rpx;text-align: right;">
					{{data.complaint_content.length}}/500
				</view>
			</view>
			<view class="item">
				<view class="desc">
					{{$t('appealVoucher')}}
				</view>
				<view class="slot-btn" @click="uploadImage" v-if="!data.appeal_proof">
					<image src="@/static/images/otc/payment/add/upload.png" mode=""></image>
					<text>{{$t('uploadVoucher')}}</text>
				</view>
				<view style="width: 280rpx;height: 200rpx;border-radius: 12rpx;" @click="uploadImage" v-else>
					<image :src="data.appeal_proof" mode="" style="width: 100%;height: 100%;"></image>
				</view>
			</view>
			<view class="tips">
				<view class="tips_title">
					{{$t('tips')}}
				</view>
				<view class="tips_text">
					{{$t('appealTips1')}}
				</view>
				<view class="tips_text">
					{{$t('appealTips2')}}
				</view>
				<view class="tips_text">
					{{$t('appealTips3')}}
				</view>
			</view>
			<view class="button" @click="confirm">
				{{$t('submit')}}
			</view>
		</view>
	</view>
</template>

<script>
	import { createComplaint } from '@/api/api.js'
	export default {
		data() {
			return {
				data: {
					trade_id: '',
					complaint_content: '',
					appeal_proof: '',
					complainant: ''
				}
			}
		},
		onLoad(params) {
			console.log(params, 'params')
			if(params) {
				this.data.trade_id = params.id
				this.data.complainant = params.identity
			}
		},
		methods: {
			async confirm() {
				if (this.$u.test.isEmpty(this.data.complaint_content)) {
					return uni.showToast({
						title: this.$t('appealPlaceholder'),
						icon: "none"
					})
				}
				if (this.$u.test.isEmpty(this.data.appeal_proof)) {
					return uni.showToast({
						title: this.$t('uploadVoucherPlaceholder'),
						icon: "none"
					})
				}
				console.log(this.data)
				const res = await createComplaint(this.data)
				if (res.code === 1) {
					uni.navigateTo({
						url: `/pages/otc/order/appeal/appealResult?id=${this.data.trade_id}`
					})
				}
			},
			uploadImage() {
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
						uni.uploadFile({
							url: this.$url + '/common/upload',
							filePath: tempFilePaths[0],
							name: 'file',
							header: header,
							// formData: {
							// 	'image': tempFilePaths[0]
							// },
							success: (uploadFileRes) => {
								const res = JSON.parse(uploadFileRes.data)
								if (res.code === 1) {
									this.data.appeal_proof = res.data.url
									console.log(this.data.appeal_proof)
								} else {
									uni.showToast({
										title: res.msg,
										icon: 'none'
									})
								}
							}
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.appeal {
		.content {
			padding: 208rpx 40rpx 40rpx;
		}
		.item {
			margin-bottom: 40rpx;
			.desc {
				font-size: 24rpx;
				font-weight: 500;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 20rpx;
			}
			.slot-btn {
				border: 1rpx dashed #35CBA5;
				width: 280rpx;
				height: 200rpx;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #F4F5F7;
				image {
					width: 48rpx;
					height: 48rpx;
				}
					
				text {
					font-size: 28rpx;
					font-weight: 500;
					color: #35CBA5;
					line-height: 40rpx;
					letter-spacing: 1rpx;
				}
			}
			.input {
				height: 90rpx;
				background: #F4F5F7;
				border-radius: 12rpx;
				padding: 0 20rpx;
				padding-top: 10rpx;
			}
			.textarea {
				height: 220rpx;
				line-height: 90rpx;
				background: #F4F5F7;
				border-radius: 12rpx;
				padding: 20rpx;
			}
			.slot-btn {
				border: 1rpx dashed #35CBA5;
				width: 280rpx;
				height: 200rpx;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #F4F5F7;
				image {
					width: 48rpx;
					height: 48rpx;
				}
				text {
					font-size: 28rpx;
					font-weight: 500;
					color: #35CBA5;
					line-height: 40rpx;
					letter-spacing: 1rpx;
				}
			}
		}
		.tips {
			margin-bottom: 60rpx;
			&_title {
				font-size: 24rpx;
				font-weight: 600;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 16rpx;
			}
			&_text {
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 20rpx;
			}
		}
		.button {
			text-align: center;
			line-height: 90rpx;
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
		}
	}
</style>
