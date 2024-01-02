<template>
	<view class="security">
		<nav-bar :title="$t('security')"></nav-bar>
		<view class="content">
			<view class="item">
				<view class="desc">
					{{$t('password')}}
				</view>
				<view class="input">
					<u-input :placeholder="$t('enterPwd')" type="password" v-model="investData.pay_password"></u-input>
				</view>
			</view>
			<view class="item">
				<view class="desc">
					{{$t('sign')}}
				</view>
				<view class="sign">
					<view class="sign_full">
						<image src="../../../static/images/product/security/full.png" mode=""></image>
					</view>
					<view class="sign_box">
						<jp-signature ref="signatureRef"></jp-signature>
					</view>
					<view class="sign_btns">
						<view class="sign_btns_one" @click="$noMultipleClicks(clear)">
							{{$t('aginSign')}}
						</view>
						<view class="sign_btns_two" @click="$noMultipleClicks(save)">
							{{$t('complete')}}
						</view>
					</view>
				</view>
			</view>
			<view class="buttons" @click="$noMultipleClicks(submit)">
				{{$t('agreeAndSubmit')}}
			</view>
			<view class="tips">
				<view class="tip">
					{{$t('forgotPassword')}}
				</view>
				<view class="tip" @click="toContractDetail()">
					{{$t('contractDetails')}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		createStockOrder,
		uploadImage
	} from '@/api/api.js'
	export default {
		data() {
			return {
				noClick: true,
				investData: {
					product_id: '',
					investment_amount: '',
					signature_image_path: '',
					pay_password:'',
					discount_coupon_id: '',
					interest_coupon_id: ''
				}
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('security')
			})
		},
		onLoad(params) {
			console.log(params)
			if (params) {
				this.investData.product_id = params.id
				this.investData.investment_amount = params.amount
				this.investData.interest_coupon_id = params.interestId
				this.investData.discount_coupon_id = params.discountId
			}
		},
		methods: {
			toContractDetail() {
				uni.navigateTo({
					url: '/pages/product/security/contract/contract'
				})
			},
			save() {
				// uni.chooseImage({
				// 	success: (chooseImageRes) => {
				// 		const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		console.log(tempFilePaths[0])
				// 		uni.uploadFile({
				// 			url: 'https://api.broadreachvip.top/api/image/upload', //仅为示例，非真实的接口地址
				// 			filePath: tempFilePaths[0],
				// 			name: 'image',
				// 			formData: {
				// 				'image': tempFilePaths[0]
				// 			},
				// 			success: (uploadFileRes) => {
				// 				console.log(uploadFileRes.data);
				// 			}
				// 		});
				// 	}
				// })
				// return
				this.$refs.signatureRef.canvasToTempFilePath({
					success: (res) => {
						// 是否为空画板 无签名
						console.log(res.isEmpty)
						if (res.isEmpty) {
							return uni.showToast({
								title: this.$t('pleaseEnterPwd'),
								icon: 'none'
							})
						}
						// 生成图片的临时路径
						// H5 生成的是base64
						this.investData.signature_image_path = res.tempFilePath
						uni.showToast({
							title: this.$t('sign') + this.$t('complete'),
							icon: 'none'
						})
						// console.log(this.url)
						// let file = this.parseBlob(this.url)
						// console.log(file)
						// uni.uploadFile({
						// 	url: 'https://api.broadreachvip.top/api/image/upload', //仅为示例，非真实的接口地址
						// 	filePath: file,
						// 	name: 'image',
						// 	formData: {
						// 		'image': file
						// 	},
						// 	success: (uploadFileRes) => {
						// 		console.log(uploadFileRes.data);
						// 	}
						// });
					}
				})
			},
			// base64转blob二进制文件流
			parseBlob(base64) {
				var arr = base64.split(',');
				var mime = arr[0].match(/:(.*?);/)[1];
				var bstr = atob(arr[1]);
				var n = bstr.length;
				var u8arr = new Uint8Array(n);
				for (var i = 0; i < n; i++) {
					u8arr[i] = bstr.charCodeAt(i);
				}
				var url = URL || webkitURL;
				return url.createObjectURL(new Blob([u8arr], {
					type: mime
				}));
			},
			clear() {
				this.$refs.signatureRef.clear()
			},
			async submit() {
				console.log(this.investData)
				if (this.investData.pay_password.trim() === '' || this.investData.pay_password.length === 0) {
					return uni.showToast({
						title: this.$t('pleaseEnterPwd'),
						icon: 'none'
					})
				}
				if (this.investData.signature_image_path.length === 0) {
					return uni.showToast({
						title: this.$t('pleaseSign'),
						icon: 'none'
					})
				}
				const res = await createStockOrder(this.investData)
				uni.hideLoading()
				if (res.code === 1) {
					// uni.reLaunch({
					// 	url: '/pages/my/order/order'
					// })
					uni.showToast({
						title: res.msg,
						icon: 'none',
						success: () => {
							setTimeout(() => {
								uni.switchTab({
									url: '/pages/my/my'
								})
							}, 1000)
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.security {
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

			.input {
				height: 90rpx;
				background: #F4F5F7;
				border-radius: 12rpx;
				padding: 0 20rpx;
				padding-top: 10rpx;
			}

			.sign {
				height: 500rpx;
				background-color: #F4F5F7;
				border-radius: 12rpx;
				position: relative;

				&_full {
					position: absolute;
					top: 30rpx;
					right: 30rpx;
					width: 40rpx;
					height: 40rpx;
					z-index: 11111111111;
					background-color: #F4F5F7;

					image {
						width: 100%;
						height: 100%;
					}
				}

				&_box {
					height: 418rpx;
					// padding: 70rpx 70rpx 0 0;
				}

				&_btns {
					display: flex;
					align-items: center;
					border-top: 2rpx solid #E1E1E1;

					&_one,
					&_two {
						flex: 1;
						text-align: center;
						line-height: 80rpx;
						font-size: 32rpx;
						font-weight: 500;
						color: #35CBA5;
					}

					&_two {
						border-left: 2rpx solid #E1E1E1;
					}
				}
			}
		}

		.buttons {
			margin: 80rpx 0 20rpx;
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			line-height: 90rpx;
			text-align: center;
			font-size: 32rpx;
			font-family: PingFangSC, PingFang SC;
			font-weight: 600;
			color: #FFFFFF;
		}

		.tips {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.tip {
				font-size: 24rpx;
				font-weight: 400;
				color: #35CBA5;
				line-height: 34rpx;	
			}
		}
	}
</style>
