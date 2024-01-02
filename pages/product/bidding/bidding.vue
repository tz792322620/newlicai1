<template>
	<view>
		<nav-bar :title="$t('bidNow')"></nav-bar>
		<view class="content" style="padding-top: 208rpx;background-image: url('../../../static/images/hm_bg.png');background-repeat: no-repeat;background-size: 100% 100%;min-height: 100vh;">
			<view style="padding:30rpx;" v-if="productInfo">
				<view
					style="background-image: url('../../../static/images/bidd_bg.png');background-repeat: no-repeat;background-size: 100%;height: 190rpx;color: #FFFFFF; padding: 40rpx 30rpx 40rpx 30rpx;">
					<view class="u-flex">
						<view style="width:280rpx;">{{$t('availableBalance')}}</view>
						<view class="u-text-right" style="width:280rpx;margin-left:60rpx;">{{$t('investableAmount')}}</view>
					</view>
					<view class="u-flex" style="margin-top: 30rpx;font-size: 34rpx;">
						<view style="width:280rpx;">{{ userInfo.total_amount }}</view>
						<view class="u-text-right" style="width:280rpx;margin-left:60rpx;">
							{{productInfo.max_purchase_amount * productInfo.remaining_purchase_times}}
						</view>
					</view>
				</view>
				<view style="background-color: #FFFFFF;border-radius: 12rpx;padding: 30rpx;margin-top: 30rpx;">
					<!-- 				  <view class="u-flex" style="margin-bottom:30rpx;">
						<view style="width:200rpx;color: #666666;">{{$t('qtAmount')}}</view>
						<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;"><text
							class="col35" style="margin-left:6rpx;margin-right: 6rpx;">{{productInfo.min_purchase_amount}}</text>{{$t('yuan')}}</view>
					  </view> -->
					<view class="u-flex" style="margin-bottom:30rpx;">
						<view style="width:200rpx;color: #666666;">{{$t('remainingPurchaseTimes')}}</view>
						<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;"><text
								class="col35"
								style="margin-left:6rpx;margin-right: 6rpx;">{{productInfo.remaining_purchase_times}}</text>{{$t('times')}}
						</view>
					</view>
					<u-line color="#F3F3F3"></u-line>
					<view class="u-flex" style="margin-bottom:30rpx;margin-top:30rpx;">
						<view style="width:200rpx;color: #666666;">{{$t('jxTime')}}</view>
						<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;"
							v-if="productInfo.payment_method == 'Daily'">
							{{$t('full')}}<text class="col35"
								style="margin-left:6rpx;margin-right: 6rpx;">{{$t('24Hours')}}</text>{{$t('zdInterest')}}
						</view>
						<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;"
							v-if="productInfo.payment_method == 'Weekly'">
							{{$t('full')}}<text class="col35"
								style="margin-left:6rpx;margin-right: 6rpx;">{{$t('week')}}</text>{{$t('zdInterest')}}
						</view>
						<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;"
							v-if="productInfo.payment_method == 'Monthly'">
							{{$t('full')}}<text class="col35"
								style="margin-left:6rpx;margin-right: 6rpx;">{{$t('month')}}</text>{{$t('zdInterest')}}
						</view>
						<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;"
							v-if="productInfo.payment_method == 'OnMaturity'">
							<text class="col35"
								style="margin-left:6rpx;margin-right: 6rpx;">{{$t('inTime')}}</text>{{$t('interest')}}
						</view>
					</view>
					<u-line color="#F3F3F3"></u-line>
					<view class="u-flex" style="margin-bottom:30rpx;margin-top: 30rpx;">
						<view style="width:200rpx;color: #666666;">{{$t('tzAmount')}}</view>
						<view class="u-text-right" style="width:500rpx;margin-left:60rpx;color: #333333;">
							<!-- 						<u-number-box color="#ffffff" :min="parseInt(Number(productInfo.amount_per_unit))" :step="parseInt(Number(productInfo.amount_per_unit))" bg-color="#35CBA5" v-model="value" @change="valChange">
							</u-number-box> -->
							<u-field type="digit" v-model="investmentAmount" :placeholder="$t('tzAmount')">
							</u-field>
						</view>{{$t('yuan')}}
					</view>
					<u-line color="#F3F3F3"></u-line>
					<view style="margin-bottom:30rpx;margin-top:30rpx;">
			
						<view class="u-text-right" style="margin-left:60rpx;color: #333333;">
							<view>{{$t('minInvest')}}<text class="col35"
									style="margin-left:6rpx;margin-right: 6rpx;">{{productInfo.min_purchase_amount}}</text>
								{{$t('yuan')}}
							</view>
							<view>{{$t('addOne')}}<text class="col35"
									style="margin-left:6rpx;margin-right: 6rpx;">{{productInfo.max_purchase_amount}}</text>
								{{$t('yuan')}}
							</view>
						</view>
					</view>
			
					<!-- 				<u-line color="#F3F3F3"></u-line>
					<view class="u-flex" style="margin-top:30rpx;">
						<view style="width:200rpx;color: #666666;">{{$t('payPassword')}}</view>
						<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;">{{$t('defaultLoginPassword')}}</view>
					</view> -->
				</view>
				<u-cell-group style="margin-top: 40rpx;" :border="false">
					<u-cell-item :border-bottom="false" icon="coupon" :title="$t('Discount Coupon')" @click="isDikou ? cellClick(0) : ''"
						:value-style="{color: isDikou ? '#000000' : '#AFAFAF'}" 
						:value="isDikou&&!dikouName&&dikouActiveIndex == -1 ? $t('dikouChoose') : !isDikou&&!dikouName&&dikouActiveIndex == -1 ? $t('dikouEmpty') : dikouName"
						:arrow="isDikou"></u-cell-item>
					<u-cell-item :border-bottom="false" icon="coupon" :title="$t('Interest Coupon')" @click="isJiaxi ? cellClick(1) : ''"
						:value-style="{color: isJiaxi ? '#000000' : '#AFAFAF'}" 
						:value="isJiaxi&&!jiaxiName&&jiaxiActiveIndex == -1 ? $t('jiaxiChoose') : !isJiaxi&&!jiaxiName&&jiaxiActiveIndex == -1 ? $t('jiaxiEmpty') : jiaxiName"
						:arrow="isJiaxi"></u-cell-item>
				</u-cell-group>
				<view style="margin-top: 80rpx;">
					<u-button ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;" :custom-style="customStyle1"
						shape="circle" type="primary" @click="toInvest">{{$t('immediateInvestment')}}</u-button>
				</view>
				<!-- 抵扣券弹窗 -->
				<u-popup v-model="isDikouShow" mode="bottom" border-radius="14">
					<view class="popup-content">
						<scroll-view scroll-y="true" style="height: 100%;">
							<view class="popup-content_item" v-for="(item,index) in productInfo.userdiscountCoupons" :key="item.id"
								@click="dikouClick(item,index)">
								<view class="popup-content_item_top">
									<view class="left">
										<view class="title">
											<u-icon name="coupon" color="#2ebd85" size="48"></u-icon>
											<text>{{item.discount_coupon.coupon_name}}</text>
										</view>
										<view class="date">
											{{$t('Time')}}: {{item.discount_coupon.created_at}}
										</view>
									</view>
									<view class="right">
										<text>{{item.discount_coupon.discount_amount}} USDT</text>
										<text>{{$t('Deduction')}}</text>
									</view>
								</view>
								<view class="popup-content_item_bottom">
									<view class="left">
										{{$t('Discount Coupon')}}
									</view>
									<view class="right">
										<image v-if="dikouActiveIndex !== index" src="@/static/images/otc/my_order/unchecked.png" mode=""></image>
										<image v-else src="@/static/images/otc/my_order/checked.png" mode=""></image>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</u-popup>
				<!-- 加息券弹窗 -->
				<u-popup v-model="isJiaxiShow" mode="bottom" border-radius="14">
					<view class="popup-content">
						<scroll-view scroll-y="true" style="height: 100%;">
							<view class="popup-content_item" v-for="(item,index) in productInfo.userinterestCoupons" :key="item.id"
								@click="jiaxiClick(item,index)">
								<view class="popup-content_item_top">
									<view class="left">
										<view class="title">
											<u-icon name="coupon" color="#2ebd85" size="48"></u-icon>
											<text>{{item.interest_coupon.name}}</text>
										</view>
										<view class="date">
											{{$t('Time')}}: {{item.interest_coupon.expiry_date}}
										</view>
									</view>
									<view class="right">
										<text>{{item.interest_coupon.rate}} %</text>
										<text>{{$t('Interest Increase')}}</text>
									</view>
								</view>
								<view class="popup-content_item_bottom">
									<view class="left">
										{{$t('Interest Coupon')}}
									</view>
									<view class="right">
										<image v-if="jiaxiActiveIndex !== index" src="@/static/images/otc/my_order/unchecked.png" mode=""></image>
										<image v-else src="@/static/images/otc/my_order/checked.png" mode=""></image>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</u-popup>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo,
		getStockProductById
	} from '@/api/api.js'
	export default {
		data() {
			return {
				userInfo: '',
				value: 1,
				customStyle1: {
					height: '90rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '670rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},
				productId: '',
				productInfo: '',
				investmentAmount: '',
				discount_coupon_id: '', // 抵扣券ID
				isDikou: true, // 是否有可用抵扣券
				isDikouShow: false, // 是否显示抵扣券弹窗
				dikouActiveIndex: -1, // 当前选中抵扣券下标
				dikouName: '', // 抵扣券名称
				interest_coupon_id: '', // 加息券ID
				isJiaxi: true, // 是否有可用加息券
				isJiaxiShow: false, // 是否显示加息券弹窗
				jiaxiActiveIndex: -1, // 当前选中加息券下标
				jiaxiName: '', // 加息券名称
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('bidNow')
			})
			let that = this
			that.getUser()
		},
		onLoad(params) {
			this.productId = params.id
			if (this.productId) {
				this.getStockProduct()
			}
		},
		watch: {
			'_i18n.locale': {
				handler() {

				},
				immediate: true
			}
		},
		methods: {
			dikouClick(item,index) {
				console.log(item)
				this.dikouName = item.discount_coupon.coupon_name
				this.discount_coupon_id = item.id
				setTimeout(() => {
					this.isDikouShow = false
				}, 300)
				if(this.dikouActiveIndex == index) {
					this.dikouActiveIndex = -1
					this.dikouName = ''
					return
				}
				this.dikouActiveIndex = index
			},
			jiaxiClick(item,index) {
				console.log(item)
				this.jiaxiName = item.interest_coupon.name
				this.interest_coupon_id = item.id
				setTimeout(() => {
					this.isJiaxiShow = false
				}, 300)
				if(this.jiaxiActiveIndex == index) {
					this.jiaxiActiveIndex = -1
					this.jiaxiName = ''
					return
				}
				this.jiaxiActiveIndex = index
			},
			cellClick(index) {
				console.log(index)
				if (index == 0) {
					this.isDikouShow = true
				} else if (index == 1) {
					this.isJiaxiShow = true
				}
			},
			async getUser() {
				const res = await getUserInfo()
				if (res.code === 1) {
					this.userInfo = res.data
				}
				console.log(this.userInfo)
			},
			async getStockProduct() {
				uni.showLoading({
					mask: true
				})
				const res = await getStockProductById(this.productId)
				if (res.code === 1) {
					this.productInfo = res.data
					this.isDikou = res.data.userdiscountCoupons.length !== 0 ? true : false
					this.isJiaxi = res.data.userinterestCoupons.length !== 0 ? true : false
					// this.investmentAmount = parseInt(res.data.amount_per_unit)
				}
				uni.hideLoading()
				console.log(this.productInfo, 'res=======>')
			},
			valChange(e) {
				this.investmentAmount = e.value
				console.log('当前值为: ' + e.value)
			},
			toInvest() {
				console.log(this.investmentAmount)
				if (this.productInfo.remaining_purchase_times <= 0) {
					return uni.showToast({
						title: this.$t('bidding.tips1'),
						icon: 'none'
					})

				}
				if (this.investmentAmount > Number(this.userInfo.total_amount)) {
					return uni.showToast({
						title: this.$t('bidding.tips2'),
						icon: 'none'
					})
				}
				if (this.investmentAmount < Number(this.productInfo.min_purchase_amount)) {
					return uni.showToast({
						title: this.$t('bidding.tips3'),
						icon: 'none'
					})
				}
				if (this.investmentAmount > Number(this.productInfo.max_purchase_amount)) {
					return uni.showToast({
						title: this.$t('bidding.tips4'),
						icon: 'none'
					})
				}
				uni.navigateTo({
					url: `/pages/product/security/security?id=${this.productId}&amount=${this.investmentAmount}&discountId=${this.discount_coupon_id}&interestId=${this.interest_coupon_id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.u-cell-box {}

	/deep/.u-cell-item-box {
		background: transparent !important;
	}

	/deep/.u-icon__icon {
		color: #000 !important;
	}

	/deep/.u-cell {
		box-shadow: 0px 0px 24rpx 0px rgba(0, 0, 0, 0.05);
		border-radius: 12rpx;
		margin-top: 20rpx;
		height: 80rpx;
		background-color: #fff !important;
		padding-right: 20rpx;
	}
	.popup-content {
		height: 800rpx;
		padding: 20rpx;
		/deep/.u-icon__icon {
			color: #2ebd85 !important;
		}
		&_item {
			box-shadow: 0px 0px 24rpx 0px rgba(0, 0, 0, 0.05);
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			border-bottom: 2rpx solid #f5f5f5;
			padding: 30rpx 20rpx;
			&_top,&_bottom {
				display: flex;
				align-items: center;
				justify-content: space-between;
				
			}
			&_top {
				padding-bottom: 30rpx;
				border-bottom: 2rpx solid #F4F5F7;
				.left {
					.title {
						display: flex;
						align-items: center;
						margin-bottom: 20rpx;
						text {
							font-size: 26rpx;
							color: #000;
							// font-weight: 600;
							margin-left: 20rpx;
						}
					}
					.date {
						font-size: 24rpx;
						color: #000;
						// font-weight: 600;
					}
				}
				.right {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					text {
						font-size: 24rpx;
						color: #999999;
					}
					text:first-child {
						margin-bottom: 20rpx;
						color: #000;
						font-size: 40rpx;
					}
				}
			}
			&_bottom {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-top: 30rpx;
				.left {
					font-size: 24rpx;
					color: #999999;
				}
				.right {
					width: 36rpx;
					height: 36rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
