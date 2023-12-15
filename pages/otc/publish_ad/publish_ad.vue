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
							:class="activeTypeIndex == index ? 'active' : ''" @click="typeClick(item,index)"
							style="padding: 30rpx 0;">
							<text style="width: 100%; text-align: center;">{{ item.name }}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="desc">{{ $t('priceUnit') }}</view>
				<!-- <view class="input" @click="isPrice = !isPrice">
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
                </view> -->
				<view class="input">
					<u-input :placeholder="$t('enterPriceUnit')" v-model="data.price"></u-input>
				</view>
			</view>
		</view>
		<view class="item">
			<view class="desc">{{ $t('minAmount') }}</view>
			<view class="input" style="width: 100%;">
				<u-input :placeholder="$t('enterMinAmount')" v-model="data.min_amount"></u-input>
			</view>
		</view>
		<view class="item">
			<view class="desc">{{ $t('maxAmount') }}</view>
			<view class="input" style="width: 100%;">
				<u-input :placeholder="$t('enterMaxAmount')" v-model="data.max_amount"></u-input>
			</view>
		</view>
		<view class="item1">
			<view class="item">
				<view class="desc">{{ $t('paymentMethod') }}</view>
				<view class="input" @click="isPay = !isPay">
					<text>{{ data.payment_method }}</text>
					<uni-icons type="bottom"></uni-icons>
				</view>
				<view class="u-flex-popup" v-if="isPay">
					<view class="u-flex-popup-content">
						<view class="u-flex-popup-content-item" v-for="(item, index) in payList" :key="index"
							:class="item.isTrue ? 'active' : ''" @click="payClick(item)">
							<image :src="item.url" mode="" style="width: 40rpx; height: 42rpx;"></image>
							<text>{{ item.name }}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="desc">{{ $t('quantity') }}</view>
				<view class="input">
					<u-input :placeholder="$t('enterTransactionQuantity')" v-model="data.amount"></u-input>
				</view>
			</view>
			<!-- <view class="item">
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
            </view> -->
		</view>
		<view class="item">
			<view class="desc">{{ $t('note') }}</view>
			<view class="input" style="width: 100%; height: 240rpx; align-items: flex-start; padding: 26rpx 20rpx">
				<u-input type="textarea" :placeholder="$t('enterNote')" v-model="data.remark" maxlength="20"></u-input>
			</view>
		</view>
		<view class="button" @click="submit">{{ $t('publish') }}</view>
	</view>
</template>

<script>
	import {
		createListing
	} from '@/api/api.js'
	export default {
		data() {
			return {
				data: {
					listing_type: 'Buy',
					amount: '',
					price: '',
					currency: 'HKD',
					min_amount: '',
					max_amount: '',
					payment_method: '微信',
					remark: ''
				},
				isAbP: false, // 控制币种弹出隐藏
				ab: 'HKD', // 币种缩写
				isType: false, // 控制广告类型弹出隐藏
				activeTypeIndex: 0,
				isPrice: false, // 控制价格单位弹出隐藏
				activePrice: '实时价格',
				activePriceIndex: 0,
				priceList: [{
					id: 0,
					name: '实时价格'
				}, {
					id: 1,
					name: '固定价格'
				}],
				isPay: false, // 控制收款方式弹出隐藏
				activePayIndex: 0,
				isTime: false, // 控制交易期限弹出隐藏
				activeTime: '5分钟',
				activeTimeIndex: 0,
				timeList: [{
					id: 0,
					name: '5分钟'
				}, {
					id: 1,
					name: '15分钟'
				}, {
					id: 2,
					name: '30分钟'
				}]
			}
		},
		computed: {
			abName() {
				return this.$t('hkd')
			},
			// 币种集合
			currencyList() {
				return [{
					url: '../../static/images/otc/gangbi.png',
					ab: 'HKD',
					name: this.$t('hkd')
				}, {
					url: '../../static/images/otc/taibi.png',
					ab: 'TWD',
					name: this.$t('twd')
				}, {
					url: '../../static/images/otc/renminbi.png',
					ab: 'CNY',
					name: this.$t('cny')
				}]
			},
			activeType() {
				return this.$t('buy')
			},
			typeList() {
				return [{
					id: 'Buy',
					name: this.$t('buy')
				}, {
					id: 'Sell',
					name: this.$t('sell')
				}]
			},
			activePay(){
				return [this.$t('wechat')]
			},
			payList() {
				return [{
					url: '../../../static/images/otc/publish_ad/0.png',
					id: 0,
					name: this.$t('wechat'),
					isTrue: true
				}, {
					url: '../../../static/images/otc/publish_ad/1.png',
					id: 1,
					name: this.$t('alipay'),
					isTrue: false
				}, {
					url: '../../../static/images/otc/publish_ad/2.png',
					id: 2,
					name: this.$t('bankCard'),
					isTrue: false
				}]
			},
		},
		methods: {
			// 币种点击事件
			abClick(item) {
				this.ab = item.ab
				this.data.currency = item.ab
				this.abName = item.name
				this.isAbP = false
			},
			typeClick(item, index) {
				this.activeType = item.name
				this.activeTypeIndex = index
				this.data.listing_type = item.id
				this.isType = false
			},
			priceClick(item) {
				this.activePrice = item.name
				this.activePriceIndex = item.id
				this.isPrice = false
			},
			payClick(item) {
				item.isTrue = !item.isTrue
				if (item.isTrue) {
					this.activePay.push(item.name)
				} else {
					this.activePay = this.activePay.filter(item1 => item1 !== item.name)
				}
				console.log(this.activePay)
				this.data.payment_method = this.activePay.join()
				console.log(this.data.payment_method)
				// this.activePayIndex = item.id
				// this.data.payment_method = item.name
				this.isPay = false
			},
			timeClick(item) {
				this.activeTime = item.name
				this.activeTimeIndex = item.id
				this.isTime = false
			},
			async submit() {
				console.log(this.data)
				if (this.$u.test.isEmpty(this.data.price)) {
					return uni.showToast({
						title: this.$t('enterPriceUnit'),
						icon: 'none'
					})
				}
				if (this.$u.test.isEmpty(this.data.min_amount)) {
					return uni.showToast({
						title: this.$t('enterMinAmount'),
						icon: 'none'
					})
				}
				if (this.$u.test.isEmpty(this.data.max_amount)) {
					return uni.showToast({
						title: this.$t('enterMaxAmount'),
						icon: 'none'
					})
				}
				if (this.$u.test.isEmpty(this.data.payment_method)) {
					return uni.showToast({
						title: this.$t('enterChoosePayment'),
						icon: 'none'
					})
				}
				if (this.$u.test.isEmpty(this.data.amount)) {
					return uni.showToast({
						title: this.$t('enterTransactionQuantity'),
						icon: 'none'
					})
				}
				if (this.$u.test.isEmpty(this.data.remark)) {
					return uni.showToast({
						title: this.$t('enterRemark'),
						icon: 'none'
					})
				}
				const res = await createListing(this.data)
				if (res.code === 1) {
					uni.showToast({
						title: res.msg,
						duration: 2000,
						success: () => {
							uni.redirectTo({
								url: '/pages/otc/my_ad/my_ad'
							})
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.publish_ad {
		padding: 40rpx;
		background: #e6fcf6 url('../../../static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
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
				background: #FFFFFF;
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
