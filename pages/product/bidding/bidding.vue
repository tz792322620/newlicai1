<template>
	<view
		style="background-image: url('../../../static/images/hm_bg.png');background-repeat: no-repeat;background-size: 100% 100%;min-height: 100vh;">
		<view style="padding:30rpx;">
			<view
				style="background-image: url('../../../static/images/bidd_bg.png');background-repeat: no-repeat;background-size: 100%;height: 190rpx;color: #FFFFFF; padding: 40rpx 30rpx 40rpx 30rpx;">
				<view class="u-flex">
					<view style="width:280rpx;">{{$t('availableBalance')}}</view>
					<view class="u-text-right" style="width:280rpx;margin-left:60rpx;">{{$t('investableAmount')}}</view>
				</view>
				<view class="u-flex" style="margin-top: 30rpx;font-size: 34rpx;">
					<view style="width:280rpx;">¥ {{productInfo.total_units - productInfo.sold_units}}</view>
					<view class="u-text-right" style="width:280rpx;margin-left:60rpx;">¥ {{productInfo.total_units}}</view>
					</view>
		</view>
			<view style="background-color: #FFFFFF;border-radius: 12rpx;padding: 30rpx;margin-top: 30rpx;">
				<view class="u-flex" style="margin-bottom:30rpx;">
					<view style="width:200rpx;color: #666666;">{{$t('qtAmount')}}</view>
					<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;">¥<text
							class="col35" style="margin-left:6rpx;margin-right: 6rpx;">{{productInfo.amount_per_unit}}</text>元</view>
				</view>
				<u-line color="#F3F3F3"></u-line>
				<view class="u-flex" style="margin-bottom:30rpx;margin-top:30rpx;">
					<view style="width:200rpx;color: #666666;">{{$t('jxTime')}}</view>
					<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;" v-if="productInfo.payment_method == 'Daily'">
						{{$t('full')}}<text class="col35" style="margin-left:6rpx;margin-right: 6rpx;">{{$t('24Hours')}}</text>{{$t('zdInterest')}}
					</view>
					<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;" v-if="productInfo.payment_method == 'Weekly'">
						{{$t('full')}}<text class="col35" style="margin-left:6rpx;margin-right: 6rpx;">{{$t('week')}}</text>{{$t('zdInterest')}}
					</view>
					<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;" v-if="productInfo.payment_method == 'Monthly'">
						{{$t('full')}}<text class="col35" style="margin-left:6rpx;margin-right: 6rpx;">{{$t('month')}}</text>{{$t('zdInterest')}}
					</view>
					<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;" v-if="productInfo.payment_method == 'OnMaturity'">
						<text class="col35" style="margin-left:6rpx;margin-right: 6rpx;">{{$t('inTime')}}</text>{{$t('interest')}}
					</view>
				</view>
				<u-line color="#F3F3F3"></u-line>
				<view class="u-flex" style="margin-bottom:30rpx;margin-top: 30rpx;">
					<view style="width:200rpx;color: #666666;">{{$t('tzAmount')}}</view>
					<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;">
<!-- 						<u-number-box color="#ffffff" :min="parseInt(Number(productInfo.amount_per_unit))" :step="parseInt(Number(productInfo.amount_per_unit))" bg-color="#35CBA5" v-model="value" @change="valChange">
						</u-number-box> -->
						<u-field
							v-model="productInfo.amount_per_unit"
							placeholder="购买金额"
						>
						</u-field>
					</view>{{$t('yuan')}}
				</view>
				<u-line color="#F3F3F3"></u-line>
				<view class="u-flex" style="margin-bottom:30rpx;margin-top:30rpx;">

					<view class="u-text-right" style="width:560rpx;margin-left:60rpx;color: #333333;">
						{{$t('minInvest')}}<text class="col35" style="margin-left:6rpx;margin-right: 6rpx;">{{productInfo.min_purchase_amount}}</text> {{$t('yuan')}}，{{$t('addOne')}}
						<text class="col35" style="margin-left:6rpx;margin-right: 6rpx;">{{productInfo.max_purchase_amount}}</text> {{$t('yuan')}}
					</view>
				</view>
				<u-line color="#F3F3F3"></u-line>
				<view class="u-flex" style="margin-top:30rpx;">
					<view style="width:200rpx;color: #666666;">{{$t('payPassword')}}</view>
					<view class="u-text-right" style="width:360rpx;margin-left:60rpx;color: #333333;">{{$t('defaultLoginPassword')}}</view>
				</view>
			</view>

			<view style="margin-top: 80rpx;">
				<u-button ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;" :custom-style="customStyle1"
					shape="circle" type="primary" @click="toInvest">{{$t('immediateInvestment')}}</u-button>
			</view>

		</view>
	</view>
</template>

<script>
	import { getStockProductById } from '@/api/api.js'
	export default {
		data() {
			return {
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
				investmentAmount: ''
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('bidNow')
			})
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
			async getStockProduct() {
				const res = await getStockProductById(this.productId)
				if (res.code === 1) {
					this.productInfo = res.data
					this.investmentAmount = parseInt(res.data.amount_per_unit)
				}
				console.log(this.productInfo, 'res=======>')
			},
			valChange(e) {
				this.investmentAmount = e.value
				console.log('当前值为: ' + e.value)
			},
			toInvest() {
				uni.navigateTo({
					url: `/pages/product/security/security?id=${this.productId}&amount=${this.investmentAmount}`
				})
			}
		}
	}
</script>

<style>

</style>
