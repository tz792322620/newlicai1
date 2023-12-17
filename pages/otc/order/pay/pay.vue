<template>
	<view class="pay">
		<view class="title">
			{{$t('paySeller')}}
		</view>
		<view class="sub-title">
			{{$t('orderWill')}}<u-count-down :timestamp="timestamp" font-size="32" color="#21BF90" separator-color="#21BF90"  @change="change">
			</u-count-down>{{$t('cancelAfter')}}
		</view>
		<view class="price">
			¥{{Number(tradeInfo.trade_price) * Number(tradeInfo.trade_amount)}}
		</view>
		<view class="content">
			<view class="one">
				<view class="one_title">
					{{$t('payTips1')}}
				</view>
				<view class="one_sub-title">
					{{$t('payTips2')}}
				</view>
				<swiper class="swiper" circular :indicator-dots="false" :autoplay="false">
					<swiper-item v-for="(item,index) in tradeInfo.payment_infos" :key="index">
						<view class="one_item">
							<view class="one_item_title">
								{{item.payment_type == '微信' ? $t('wechat') : item.payment_type == '支付宝' ? $t('alipay') : item.payment_type == '银行卡' ? $t('bankCard') : ''}}
							</view>
							<view class="one_item_cell">
								<view class="one_item_cell_left">
									{{$t('accountName')}}
								</view>
								<view class="one_item_cell_right">
									{{item.user_name}}
									<image src="../../../../static/images/otc/order/copy.png" mode="" @click="copy(item.user_name)"></image>
								</view>
							</view>
							<view class="one_item_cell">
								<view class="one_item_cell_left" v-if="item.payment_type == '银行卡'">
									{{$t('BankCardAccount')}}
								</view>
								<view class="one_item_cell_left" v-if="item.payment_type == '微信'">
									{{$t('WeChatAccount')}}
								</view>
								<view class="one_item_cell_left" v-if="item.payment_type == '支付宝'">
									{{$t('AlipayAccount')}}
								</view>
								<view class="one_item_cell_right">
									{{item.account_number}}
									<image src="../../../../static/images/otc/order/copy.png" mode="" @click="copy(item.account_number)"></image>
								</view>
							</view>
							<view class="one_item_cell" v-if="item.payment_type == '银行卡'">
								<view class="one_item_cell_left">
									{{$t('BankName')}}
								</view>
								<view class="one_item_cell_right">
									{{item.bank_name}}
									<image src="../../../../static/images/otc/order/copy.png" mode="" @click="copy(item.bank_name)"></image>
								</view>
							</view>
							<view class="one_item_cell" style="margin-top: 20rpx;padding-right: 10rpx;"
								v-if="item.payment_type != '银行卡'">
								<view class="one_item_cell_left">
									{{$t('PaymentQRcode')}}
								</view>
								<view class="one_item_cell_right">
									<image @click="clickImage(item.qr_code_image)" style="width: 60rpx;height: 60rpx;"
										:src="$url + item.qr_code_image" mode=""></image>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<view class="one_bottom">
					{{$t('payTips3')}}
				</view>
			</view>
			<view class="item">
				<view class="desc">
					{{$t('paymentVoucher')}}
				</view>
				<view class="slot-btn" @click="uploadImage" v-if="!payment_image">
					<image src="@/static/images/otc/payment/add/upload.png" mode=""></image>
					<text>{{$t('uploadPaymentVoucher')}}</text>
				</view>
				<view style="width: 280rpx;height: 200rpx;border-radius: 12rpx;" @click="uploadImage" v-else>
					<image :src="$url + payment_image" mode="" style="width: 100%;height: 100%;"></image>
				</view>
			</view>
			<view class="buttons" @click="toCollect">
				{{$t('notifySeller')}}
			</view>
			<view class="tips" @click="toCancelOrder">
				{{$t('questionOrder')}}
			</view>
		</view>
	</view>
</template>

<script>
	import { uploadPaymentImage,getTradeById } from '@/api/api.js'
	export default {
		data() {
			return {
				timestamp: 0,
				tradeInfo: '',
				payment_image: '',
				currentTimestamp: 0
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('order')
			})
		},
		onLoad(params) {
			if (params) {
				this.timestamp = params.timestamp
				this.getTradeInfo(params.id)
			}
		},
		methods: {
			async getTradeInfo(id) {
				const res = await getTradeById(id)
				console.log(res)
				if (res.code === 1) {
					this.tradeInfo = res.data
				}
			},
			uploadImage() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(tempFilePaths[0])
						uni.uploadFile({
							url: this.$url + '/api/image/upload',
							filePath: tempFilePaths[0],
							name: 'image',
							formData: {
								'image': tempFilePaths[0]
							},
							success: (uploadFileRes) => {
								const res = JSON.parse(uploadFileRes.data)
								if (res.code === 1) {
									this.payment_image = res.data.url
									console.log(this.payment_image)
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
			},
			// 事件触发，每秒一次
			change(timestamp) {
				this.currentTimestamp = timestamp
			},
			async toCollect() {
				if (this.$u.test.isEmpty(this.payment_image)) {
					return uni.showToast({
						title: this.$t('uploadPaymentVoucher'),
						icon: "none"
					})
				}
				const res = await uploadPaymentImage({
					trade_id: this.tradeInfo.trade_id,
					payment_image: this.payment_image
				})
				if (res.code === 1) {
					uni.showToast({
						title: res.msg,
						success: () => {
							setTimeout(() => {
								uni.navigateTo({
									url: `/pages/otc/order/collect/collect?timestamp=${this.currentTimestamp}&id=${this.tradeInfo.trade_id}`
								})
							}, 1000);
						}
					})
				}
			},
			toCancelOrder() {
				uni.navigateTo({
					url: `/pages/otc/order/cancel/cancel?id=${this.tradeInfo.trade_id}`
				})
			},
			clickImage(url) {
				uni.previewImage({
					urls: [this.$url + url]
				});
			},
			copy(item) {
				let that = this
				uni.setClipboardData({
					data: item,
					showToast: false,
					success: function() {
						uni.showToast({
							title: that.$t('contentCopied'),
							icon: 'success'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		text-align: center;
		font-size: 36rpx;
		font-weight: 600;
		color: #333333;
		line-height: 50rpx;
		margin-top: 60rpx;
	}

	.sub-title {
		text-align: center;
		margin: 8rpx 0 20rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #333333;
		line-height: 34rpx;
	}

	.price {
		text-align: center;
		font-size: 60rpx;
		font-weight: 600;
		color: #35CBA5;
		line-height: 84rpx;
		margin-bottom: 60rpx;
	}

	.content {
		padding: 0 40rpx 40rpx;

		.one {
			padding-left: 58rpx;
			position: relative;

			&::before {
				content: '';
				width: 4rpx;
				height: 484rpx;
				position: absolute;
				top: 58rpx;
				left: 22rpx;
				background: url('../../../../static/images/otc/order/pay/line.png') center center no-repeat;
				background-size: 100% 100%;
			}

			&_title {
				font-size: 32rpx;
				font-weight: 400;
				color: #333333;
				line-height: 44rpx;

				&::before {
					content: '';
					width: 48rpx;
					height: 48rpx;
					position: absolute;
					top: 0;
					left: 0;
					background: url('../../../../static/images/otc/order/pay/1.png') center center no-repeat;
					background-size: 100% 100%;
				}
			}

			&_sub-title {
				margin: 20rpx 0 30rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #F75F52;
				line-height: 34rpx;
			}

			.swiper {
				background: #FFFFFF;
				box-shadow: 0px 0px 24rpx 0px rgba(0, 0, 0, 0.06);
				border-radius: 24rpx;
			}

			&_item {
				height: 316rpx;
				background: #FFFFFF;
				box-shadow: 0px 0px 24rpx 0px rgba(0, 0, 0, 0.06);
				padding: 20rpx 30rpx 30rpx;

				&_title {
					padding-left: 14rpx;
					font-size: 32rpx;
					font-weight: 600;
					color: #333333;
					line-height: 44rpx;
					position: relative;
					margin-bottom: 18rpx;

					&::before {
						content: '';
						position: absolute;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						width: 4rpx;
						height: 20rpx;
						background: #FFAC00;
					}
				}

				image {
					width: 24rpx;
					height: 24rpx;
					margin-left: 20rpx;
				}

				&_cell {
					margin-top: 30rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 28rpx;
					font-weight: 400;
					color: #333333;
					line-height: 40rpx;
				}
			}

			&_bottom {
				margin-top: 30rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #333333;
				line-height: 44rpx;
				position: relative;

				&::before {
					content: '';
					width: 48rpx;
					height: 48rpx;
					position: absolute;
					top: 0;
					left: -58rpx;
					background: url('../../../../static/images/otc/order/pay/2.png') center center no-repeat;
					background-size: 100% 100%;
				}
			}
		}
		.item {
			margin-top: 40rpx;
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
		}
		.buttons {
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			line-height: 90rpx;
			text-align: center;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
			margin: 80rpx 0 20rpx;
		}

		.tips {
			font-size: 24rpx;
			font-weight: 400;
			color: #35CBA5;
			line-height: 34rpx
		}
	}
</style>
