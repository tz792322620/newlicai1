<template>
    <view class="publish_ad">
        <view class="item1">
            <view class="item">
                <view class="desc">{{ $t('currency') }}</view>
                <view class="input">{{ $t('usdt') }}</view>
            </view>
            <view class="item">
                <view class="desc">{{ $t('currency') }}</view>
                <view class="input" @click="isAbP = !isAbP">
                    <text>{{ abName }}</text>
                    <uni-icons type="bottom"></uni-icons>
                </view>
                <view class="u-flex-popup" v-if="isAbP">
                    <view class="u-flex-popup-content">
                        <view class="u-flex-popup-content-item" v-for="(item, index) in currencyList" :key="index" 
                        :class="ab == item.ab ? 'active' : ''" @click="abClick(item)">
                            <image :src="item.url" mode=""></image>
                            <text>{{ item.name }}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="item1">
            <view class="item">
                <view class="desc">{{ $t('adType') }}</view>
                <view class="input" @click="isType = !isType">
                    <text>{{ activeType }}</text>
                    <uni-icons type="bottom"></uni-icons>
                </view>
                <view class="u-flex-popup" v-if="isType">
                    <view class="u-flex-popup-content">
                        <view class="u-flex-popup-content-item" v-for="(item, index) in typeList" :key="index" 
                        :class="activeTypeIndex == item.id ? 'active' : ''" @click="typeClick(item)" style="padding: 30rpx 0;">
                            <text style="width: 100%; text-align: center;">{{ item.name }}</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="item">
                <view class="desc">{{ $t('priceUnit') }}</view>
                <view class="input" @click="isPrice = !isPrice">
                    <text>{{ activePrice }}</text>
                    <uni-icons type="bottom"></uni-icons>
                </view>
                <view class="u-flex-popup" v-if="isPrice">
                    <view class="u-flex-popup-content">
                        <view class="u-flex-popup-content-item" v-for="(item, index) in priceList" :key="index" 
                        :class="activePriceIndex == item.id ? 'active' : ''" @click="priceClick(item)" style="padding: 30rpx 0;">
                            <text style="width: 100%; text-align: center;">{{ item.name }}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="item">
            <view class="desc">{{ $t('quantity') }}</view>
            <view class="input" style="width: 100%;">
                <u-input :placeholder="$t('enterTransactionQuantity')"></u-input>
            </view>
        </view>
        <view class="item">
            <view class="desc">{{ $t('minAmount') }}</view>
            <view class="input" style="width: 100%;">
                <u-input :placeholder="$t('enterMinAmount')"></u-input>
            </view>
        </view>
        <view class="item">
            <view class="desc">{{ $t('maxAmount') }}</view>
            <view class="input" style="width: 100%;">
                <u-input :placeholder="$t('enterMaxAmount')"></u-input>
            </view>
        </view>
        <view class="item1">
            <view class="item">
                <view class="desc">{{ $t('paymentMethod') }}</view>
                <view class="input" @click="isPay = !isPay">
                    <text>{{ activePay }}</text>
                    <uni-icons type="bottom"></uni-icons>
                </view>
                <view class="u-flex-popup" v-if="isPay">
                    <view class="u-flex-popup-content">
                        <view class="u-flex-popup-content-item" v-for="(item, index) in payList" :key="index" 
                        :class="activePayIndex == item.id ? 'active' : ''" @click="payClick(item)">
                            <image :src="item.url" mode="" style="width: 40rpx; height: 42rpx;"></image>
                            <text>{{ item.name }}</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="item">
                <view class="desc">{{ $t('transactionLimit') }}</view>
                <view class="input" @click="isTime = !isTime">
                    <text>{{ activeTime }}</text>
                    <uni-icons type="bottom"></uni-icons> 
                </view>
                <view class="u-flex-popup" v-if="isTime">
                    <view class="u-flex-popup-content">
                        <view class="u-flex-popup-content-item" v-for="(item, index) in timeList" :key="index" 
                        :class="activeTimeIndex == item.id ? 'active' : ''" @click="timeClick(item)" style="padding: 30rpx 0;">
                            <text style="width: 100%; text-align: center;">{{ item.name }}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="item">
            <view class="desc">{{ $t('note') }}</view>
            <view class="input" style="width: 100%; height: 240rpx; align-items: flex-start; padding: 26rpx 20rpx">
                <u-input type="textarea" :placeholder="$t('enterNote')" maxlength="20"></u-input>
            </view>
        </view>
        <view class="button">{{ $t('publish') }}</view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				isAbP: false, // 控制币种弹出隐藏
				ab: 'HKD', // 币种缩写
				abName: '港币',
				// 币种集合
				currencyList: [{
					url: '../../../static/images/otc/gangbi.png',
					ab: 'HKD',
					name: '港币'
				},{
					url: '../../../static/images/otc/taibi.png',
					ab: 'TWD',
					name: '台币'
				},{
					url: '../../../static/images/otc/renminbi.png',
					ab: 'CNY',
					name: '人民币'
				}],
				isType: false, // 控制广告类型弹出隐藏
				activeType: '购买',
				activeTypeIndex: 0,
				typeList: [{
					id: 0,
					name: '购买'
				},{
					id: 1,
					name: '出售'
				}],
				isPrice: false, // 控制价格单位弹出隐藏
				activePrice: '实时价格',
				activePriceIndex: 0,
				priceList: [{
					id: 0,
					name: '实时价格'
				},{
					id: 1,
					name: '固定价格'
				}],
				isPay: false, // 控制收款方式弹出隐藏
				activePay: '微信',
				activePayIndex: 0,
				payList: [{
					url: '../../../static/images/otc/publish_ad/0.png',
					id: 0,
					name: '微信'
				},{
					url: '../../../static/images/otc/publish_ad/1.png',
					id: 1,
					name: '支付宝'
				},{
					url: '../../../static/images/otc/publish_ad/2.png',
					id: 2,
					name: '银行卡'
				}],
				isTime: false, // 控制交易期限弹出隐藏
				activeTime: '5分钟',
				activeTimeIndex: 0,
				timeList: [{
					id: 0,
					name: '5分钟'
				},{
					id: 1,
					name: '15分钟'
				},{
					id: 2,
					name: '30分钟'
				}]
			}
		},
		methods: {
			// 币种点击事件
			abClick(item) {
				this.ab = item.ab
				this.abName = item.name
				this.isAbP = false
			},
			typeClick(item) {
				this.activeType = item.name
				this.activeTypeIndex = item.id
				this.isType = false
			},
			priceClick(item) {
				this.activePrice = item.name
				this.activePriceIndex = item.id
				this.isPrice = false
			},
			payClick(item) {
				this.activePay = item.name
				this.activePayIndex = item.id
				this.isPay = false
			},
			timeClick(item) {
				this.activeTime = item.name
				this.activeTimeIndex = item.id
				this.isTime = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.publish_ad {
		padding: 40rpx;
		.button {
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			margin-top: 80rpx;
			line-height: 90rpx;
			text-align: center;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
			letter-spacing: 1rpx;
		}
		.item1 {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.item {
			position: relative;
			margin-bottom: 40rpx;
			.u-flex-popup {
				position: absolute;
				z-index: 10;
				width: 250rpx;
				top: 150rpx;
				right: -16rpx;
				// height: 316rpx;
				background-color: #fff;
				box-shadow: 0px 0px 20rpx 0px rgba(0,0,0,0.09);
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
					padding-top: 10rpx;
					.u-flex-popup-content-item {
						padding: 30rpx 0 30rpx 40rpx;
						display: flex;
						align-items: center;
						&.active {
							text {
								color: #35CBA5 !important;
							}
						}
						image {
							width: 40rpx;
							height: 40rpx;
							margin-right: 18rpx;
						}
						text {
							font-size: 28rpx;
							font-weight: 500;
							color: #333333;
						}
					}
				}
			}
			.desc {
				font-size: 24rpx;
				font-weight: 500;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 20rpx;
			}
			.input {
				width: 320rpx;
				height: 90rpx;
				background: #F4F5F7;
				border-radius: 12rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				letter-spacing: 1rpx;
			}
		}
	}
</style>
