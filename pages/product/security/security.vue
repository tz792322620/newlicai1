<template>
	<view class="security">
		<view class="item">
			<view class="desc">
				密码
			</view>
			<view class="input">
				<u-input placeholder="输入名字密码" type="password" v-model="password"></u-input>
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
		<view class="buttons">
			提交
		</view>
		<view class="tips">
			忘记密码?
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: '',
				url: '',
			}
		},
		methods: {
			save() {
				this.$refs.signatureRef.canvasToTempFilePath({
					success: (res) => {
			 		// 是否为空画板 无签名
						console.log(res.isEmpty)
						// 生成图片的临时路径
						// H5 生成的是base64
						this.url = res.tempFilePath
						console.log(this.url)
					}
				})
			},
			clear() {
				this.$refs.signatureRef.clear()
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
