<template>
    <view class="add-payment">
        <view class="payment">
            <view class="desc">{{ $t('addPaymentMethod') }}</view>
            <view class="select">
                <view class="select-c" @click="isShow = !isShow">
                    <view class="select-c_left">{{ $t(activeName) }}</view>
                    <view class="select-c_right">
                        <uni-icons :type="isShow ? 'top' : 'bottom'"></uni-icons>
                    </view>
                </view>
                <view class="u-flex-popup" v-if="isShow">
                    <view class="u-flex-popup-content">
                        <view class="u-flex-popup-content-item" v-for="(item,index) in paymentList" :key="index"
                            :class="activeIndex == item.id ? 'active' : ''" @click="payClick(item)">
                            <text>{{ $t(item.name) }}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="item">
            <view class="desc">{{ $t('name') }}</view>
            <view class="input">
                <u-input :placeholder="$t('enterName')" v-model="name"></u-input>
            </view>
        </view>
        <view class="item" v-if="activeIndex === 0">
            <view class="desc">{{ $t('WeChatAccount') }}</view>
            <view class="input">
                <u-input :placeholder="$t('enterWeChatAccount')" v-model="wechatAccount"></u-input>
            </view>
        </view>
        <view class="item" v-if="activeIndex === 1">
            <view class="desc">{{ $t('AlipayAccount') }}</view>
            <view class="input">
                <u-input :placeholder="$t('enterAlipayAccount')" v-model="alipayAccount"></u-input>
            </view>
        </view>
        <view class="item" v-if="activeIndex === 2">
            <view class="desc">{{ $t('BankCardAccount') }}</view>
            <view class="input">
                <u-input :placeholder="$t('enterBankCardAccount')" v-model="bankAccount"></u-input>
            </view>
        </view>
        <view class="item" v-if="activeIndex === 2">
            <view class="desc">{{ $t('BankName') }}</view>
            <view class="input">
                <u-input :placeholder="$t('enterBankName')" v-model="bankName"></u-input>
            </view>
        </view>
        <view class="item" v-if="activeIndex === 2">
            <view class="desc">{{ $t('BranchBank') }}</view>
            <view class="input">
                <u-input :placeholder="$t('enterBranchBank')" v-model="branchBank"></u-input>
            </view>
        </view>
        <view class="item">
            <view class="desc">{{ $t('remark') }}</view>
            <view class="textarea">
                <textarea :placeholder="$t('enterRemark')" v-model="remark" cols="30" rows="10"></textarea>
            </view>
        </view>
        <view class="item">
            <view class="desc">{{ $t('tips') }}</view>
            <view class="tips">
                <view class="text">{{ $t('tip1') }}</view>
                <view class="text">{{ $t('tip2') }}</view>
            </view>
        </view>
        <view class="button">{{ $t('save') }}</view>
    </view>
</template>



<script>
	export default {
		data() {
			return {
				name: '',
				activeIndex: 0,
				activeName: '微信',
				isShow: false,
				// 支付方式集合
				paymentList: [{
					name: '微信',
					id: 0
				}, {
					name: '支付宝',
					id: 1
				}, {
					name: '银行卡',
					id: 2
				}]
			}
		},
		methods: {
			payClick(item) {
				this.activeIndex = item.id
				this.activeName = item.name
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-payment {
		padding: 40rpx;

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
				line-height: 34rpx
				&:first-child {
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
