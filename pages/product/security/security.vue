<template>
	<view class="security">
		<view class="item">
			<view class="desc">
				密码
			</view>
			<view class="input">
				<u-input placeholder="输入密码" type="password" v-model="investData.pay_password"></u-input>
			</view>
		</view>
		<view class="item">
			<view class="desc">
				签名
			</view>
			<view class="sign">
				<view class="sign_full">
					<image src="../../../static/images/product/security/full.png" mode=""></image>
				</view>
				<view class="sign_box">
					<jp-signature ref="signatureRef"></jp-signature>
				</view>
				<view class="sign_btns">
					<view class="sign_btns_one" @click="clear">
						重签
					</view>
					<view class="sign_btns_two" @click="save">
						完成
					</view>
				</view>
			</view>
		</view>
		<view class="buttons" @click="submit">
			提交
		</view>
		<view class="tips">
			忘记密码?
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
				investData: {
					product_id: '',
					investment_amount: '',
					signature_image_path: '',
					pay_password:''
				}
			}
		},
		onLoad(params) {
			console.log(params)
			if (params) {
				this.investData.product_id = params.id
				this.investData.investment_amount = params.amount
			}
		},
		methods: {
			save() {
				// uni.chooseImage({
				// 	success: (chooseImageRes) => {
				// 		const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		console.log(tempFilePaths[0])
				// 		uni.uploadFile({
				// 			url: 'https://xingu.bianceok.info/api/image/upload', //仅为示例，非真实的接口地址
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
								title: '请签名',
								icon: 'none'
							})
						}
						// 生成图片的临时路径
						// H5 生成的是base64
						this.investData.signature_image_path = res.tempFilePath
						uni.showToast({
							title: '签名完成',
							icon: 'none'
						})
						// console.log(this.url)
						// let file = this.parseBlob(this.url)
						// console.log(file)
						// uni.uploadFile({
						// 	url: 'https://xingu.bianceok.info/api/image/upload', //仅为示例，非真实的接口地址
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
				if (this.investData.pay_password.trim() === '' || this.investData.pay_password.length === 0) {
					return uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
				}
				if (this.investData.signature_image_path.length === 0) {
					return uni.showToast({
						title: '请签名',
						icon: 'none'
					})
				}
				const res = await createStockOrder(this.investData)
				console.log(res)
				if (res.code === 1) {
					uni.switchTab({
						url: '/pages/product/product'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.security {
		padding: 40rpx;

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
			font-size: 24rpx;
			font-weight: 400;
			color: #35CBA5;
			line-height: 34rpx;
		}
	}
</style>
