<template>
	<view class="add-payment">
		<nav-bar :title="title"></nav-bar>
		<view class="content">
			<view class="payment">
				<view class="desc">{{ $t('choosePaymentMethod') }}</view>
				<view class="select">
					<view class="select-c" @click="isShow = !isShow">
						<view class="select-c_left">{{ activePayment }}</view>
						<view class="select-c_right">
							<uni-icons :type="isShow ? 'top' : 'bottom'"></uni-icons>
						</view>
					</view>
					<view class="u-flex-popup" v-if="isShow">
						<view class="u-flex-popup-content">
							<view class="u-flex-popup-content-item" v-for="(item,index) in paymentList" :key="item.id"
								:class="activeIndex == item.id ? 'active' : ''" @click="payClick(item)">
								<text>{{ item.name }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="desc">{{ $t('name') }}</view>
				<view class="input">
					<u-input :placeholder="$t('enterName')" v-model="data.user_name"></u-input>
				</view>
			</view>
			<view class="item" v-if="activeIndex === 0">
				<view class="desc">{{ $t('WeChatAccount') }}</view>
				<view class="input">
					<u-input :placeholder="$t('enterWeChatAccount')" v-model="data.account_number"></u-input>
				</view>
			</view>
			<view class="item" v-if="activeIndex === 1">
				<view class="desc">{{ $t('AlipayAccount') }}</view>
				<view class="input">
					<u-input :placeholder="$t('enterAlipayAccount')" v-model="data.account_number"></u-input>
				</view>
			</view>
			<view class="item" v-if="activeIndex !== 2">
				<view class="desc">
					{{$t('QCode')}}
				</view>
				<view class="slot-btn" @click="uploadImage" v-if="!data.qr_code_image">
					<image src="@/static/images/otc/payment/add/upload.png" mode=""></image>
					<text>{{$t('enterQCode')}}</text>
				</view>
				<view style="width: 280rpx;height: 280rpx;border-radius: 12rpx;" @click="uploadImage" v-else>
					<image :src="data.qr_code_image" mode="" style="width: 100%;height: 100%;"></image>
				</view>
			</view>
			<view class="item" v-if="activeIndex === 2">
				<view class="desc">{{ $t('BankCardAccount') }}</view>
				<view class="input">
					<u-input :placeholder="$t('enterBankCardAccount')" v-model="data.account_number"></u-input>
				</view>
			</view>
			<view class="item" v-if="activeIndex === 2">
				<view class="desc">{{ $t('BankName') }}</view>
				<view class="input">
					<u-input :placeholder="$t('enterBankName')" v-model="data.bank_name"></u-input>
				</view>
			</view>
			<view class="item" v-if="activeIndex === 2">
				<view class="desc">{{ $t('BranchBank') }}</view>
				<text class="input" style="display: block;">
					<u-input :placeholder="$t('enterBranchBank')" v-model="data.branch_name"></u-input>
				</text>
			</view>
			<view class="item">
				<view class="desc">{{ $t('remark') }}</view>
				<view class="textarea">
					<textarea :placeholder="$t('enterRemark')" v-model="data.remark" cols="30" rows="10"></textarea>
				</view>
			</view>
			<view class="item">
				<view class="desc">{{ $t('tips') }}</view>
				<view class="tips">
					<view class="text">{{ $t('tip1') }}</view>
					<view class="text">{{ $t('tip2') }}</view>
				</view>
			</view>
			<view class="button" @click="$noMultipleClicks(save)">{{ $t('save') }}</view>
		</view>
	</view>
</template>

<script>
	import {
		addPaymentInfo,
		getPaymentInfoById
	} from '@/api/api.js';
	export default {
		data() {
			return {
				noClick: true,
				data: {
					user_name: '',
					payment_type: '微信',
					account_number: '',
					qr_code_image: '',
					bank_name: '',
					branch_name: '',
					remark: ''
				},
				activeIndex: 0,
				activePayment: '',
				isShow: false,
				title: ''
			}
		},
		watch: {
			'_i18n.locale': {
				handler: function(value) {
					console.log(value)
					this.activePayment = this.$t('wechat')
				},
				immediate: true
			}
		},
		computed: {
			// 支付方式集合
			paymentList() {
				return [{
					name: this.$t('WeChat'),
					value: '微信',
					id: 0
				}, {
					name: this.$t('Alipay'),
					value: '支付宝',
					id: 1
				}, {
					name: this.$t('BankCard'),
					value: '银行卡',
					id: 2
				}]
			}
		},
		onLoad(params) {
			console.log(params)
			if (params.id) {
				this.getPaymentInfo(params.id)
			} else {
				uni.setNavigationBarTitle({
					title: this.$t('addPaymentMethod')
				})
				this.title = this.$t('addPaymentMethod')
			}
		},
		methods: {
			// 根据ID查询收款信息
			async getPaymentInfo(id) {
				const res = await getPaymentInfoById(id)
				if (res.code === 1) {
					this.data = res.data
					this.activeIndex = res.data.payment_type === '微信' ? 0 : res.data.payment_type === '支付宝' ? 1 : 2
					uni.setNavigationBarTitle({
						title: this.$t('edit') + this.data.payment_type
					})
					this.title = this.$t('edit') + this.data.payment_type
				}
				console.log(res)
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
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: this.$url + '/image/upload',
							filePath: tempFilePaths[0],
							name: 'image',
							header: header,
							// formData: {
							// 	'image': tempFilePaths[0]
							// },
							success: (uploadFileRes) => {
								const res = JSON.parse(uploadFileRes.data)
								if (res.code === 1) {
									this.data.qr_code_image = res.data.url
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
			payClick(item) {
				console.log(item)
				this.activeIndex = item.id
				this.activePayment = item.name
				this.data.payment_type = item.value
				this.isShow = false
			},
			async save() {
				console.log(this.data)

				try {
					if (this.data.user_name.trim() == '' || this.data.user_name.length === 0) {
						return uni.showToast({
							title: this.$t('enterName'),
							icon: 'none'
						})
					}
					if (this.data.account_number.trim() == '' || this.data.account_number.length === 0) {
						return uni.showToast({
							title: this.activeIndex == 0 ? this.$t('enterWeChatAccount') : this.activeIndex ==
								1 ?
								this.$t('enterAlipayAccount') : this.activeIndex == 2 ? this.$t(
									'enterBankCardAccount') : '',
							icon: 'none'
						})
					}
					if (this.activeIndex == 2) {
						if (this.data.bank_name.trim() == '' || this.data.bank_name.length === 0) {
							return uni.showToast({
								title: this.$t('enterBankName'),
								icon: 'none'
							})
						}
						if (this.data.branch_name.trim() == '' || this.data.branch_name.length === 0) {
							return uni.showToast({
								title: this.$t('enterBranchBank'),
								icon: 'none'
							})
						}
					}
					if (this.data.remark.trim() == '' || this.data.remark.length === 0) {
						return uni.showToast({
							title: this.$t('enterRemark'),
							icon: 'none'
						})
					}
					const res = await addPaymentInfo(this.data)
					if (res.code === 1) {
						uni.showToast({
							title: res.msg,
							icon: 'none',
							success: () => {
								setTimeout(() => {
									uni.navigateTo({
										url: '/pages/otc/payment/payment'
									})
								}, 1000);
							}
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
	}
</script>

<style lang="scss" scoped>
	.add-payment {
		.content {
			padding: 208rpx 40rpx 40rpx;

		}

		.desc {
			font-size: 24rpx;
			font-weight: 500;
			color: #333333;
			line-height: 34rpx;
			margin-bottom: 20rpx;
		}

		.button {
			margin-top: 38rpx;
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			text-align: center;
			line-height: 90rpx;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
		}

		.textarea {
			height: 220rpx;
			line-height: 90rpx;
			background: #F4F5F7;
			border-radius: 12rpx;
			padding: 20rpx;
		}

		.input2 {
			height: 90rpx;
			background: #F4F5F7;
			border-radius: 12rpx;
			padding: 0 20rpx;
			padding-top: 10rpx;
		}

		.input {
			height: 90rpx;
			background: #F4F5F7;
			border-radius: 12rpx;
			padding: 0 20rpx;
			padding-top: 10rpx;
			// display: flex;
			// align-items: center;

			// input {
			// 	// width: 90%;
			// 	font-size: 28rpx;
			// 	font-weight: 400;
			// 	color: #333333;
			// 	letter-spacing: 1rpx;
			// }
		}

		// .pcs {
		// 	font-size: 28rpx;
		// 	font-weight: 400;
		// 	color: #999999;
		// 	letter-spacing: 1rpx;

		// }

		.item {
			margin-top: 40rpx;

			.tips {
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;

				line-height: 34rpx &:first-child {
					margin-bottom: 20rpx;
				}
			}

			.slot-btn {
				border: 1rpx dashed #35CBA5;
				width: 280rpx;
				height: 280rpx;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				justify-content: center;

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

		.payment {
			.select {
				height: 90rpx;
				line-height: 90rpx;
				background: #F4F5F7;
				border-radius: 12rpx;
				padding: 0 20rpx;
				position: relative;

				.select-c {
					display: flex;
					justify-content: space-between;

					&_left {
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
						letter-spacing: 1rpx;
					}
				}

				.u-flex-popup {
					position: absolute;
					z-index: 10;
					width: 250rpx;
					top: 96rpx;
					right: -12rpx;
					height: 316rpx;
					background-color: #fff;
					box-shadow: 0px 0px 20rpx 0px rgba(0, 0, 0, 0.09);
					border-radius: 20rpx;

					&::before {
						content: '';
						position: absolute;
						top: -20rpx;
						right: 30rpx;
						width: 0;
						height: 0;
						border-left: 20rpx solid transparent;
						border-right: 20rpx solid transparent;
						border-bottom: 20rpx solid #fff;
					}

					.u-flex-popup-content {
						padding-top: 16rpx;

						.u-flex-popup-content-item {
							// padding: 60rpx 0 60rpx 80rpx;
							padding-left: 80rpx;
							display: flex;
							align-items: center;

							&.active {
								text {
									color: #35CBA5 !important;
								}
							}

							text {
								font-size: 28rpx;
								font-weight: 500;
								color: #333333;
							}
						}
					}
				}
			}
		}
	}
</style>
