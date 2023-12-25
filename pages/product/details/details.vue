<template>
	<view style="background-color:#F5F5F5 !important;min-height: 100vh;" v-if="productInfo">
		<view
			style="background-color: #B9F0E2;height: 300rpx;border-bottom-left-radius:100rpx;border-bottom-right-radius: 100rpx;">
		</view>
		<view style="padding: 40rpx;">

			<view class="u-text-center"
				style="background-color: #ffffff;padding: 30rpx; border-radius:12rpx;position: relative;margin-top: -300rpx;">
				<view>{{$t('dailyRate')}}</view>
				<view style="color: #F75F52;font-size: 44rpx;font-weight: bold;margin-top: 20rpx;">
					{{Number(productInfo.interest_rate) * 100}}%</view>
				<view style="margin-top: 20rpx;">{{$t('holdingPeriod')}}<text style="color: #F75F52;margin-right: 40rpx;">{{$t('whenFull')}}</text>
					{{$t('qtAmount')}}<text style="color: #F75F52;"> {{productInfo.min_purchase_amount}}</text>{{$t('yuan')}}
					<view style="margin-top: 20rpx;">
						<u-line-progress active-color="#6BEEAB" height="22" :percent="Number(productInfo.progress)">
						</u-line-progress>
					</view>
					<view class="u-flex" style="margin-top: 20rpx;">
						<view style="width: 300rpx;text-align: left;">
							<text style="margin-right: 10rpx;color: #AFAFAF;">{{$t('totalAmount')}}</text><br/>
							{{productInfo.total_fundraising}}USDT
						</view>
						<view style="width: 300rpx;margin-left:200rpx;" class="u-text-right">
							<text style="margin-right: 10rpx;color: #AFAFAF;">{{$t('residue')}}</text><br/>
							{{productInfo.sold_units}}USDT
						</view>
					</view>
				</view>
			</view>


			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<u-row gutter="16">
					<u-col span="4">
						<view class="">
							<image style="width: 80rpx;height: 80rpx;margin-left: 20rpx;"
								src="../../../static/images/p5.png"></image>
							<view>{{$t('complianceGuarantee')}}</view>
						</view>
					</u-col>
					<u-col span="4">
						<view class="u-text-center">
							<image style="width: 80rpx;height: 80rpx;" src="../../../static/images/p4.png"></image>
							<view>{{$t('riskControl')}}</view>
						</view>
					</u-col>
					<u-col span="4">
						<view class="u-text-right">
							<image style="width: 80rpx;height: 80rpx;margin-right:20rpx;"
								src="../../../static/images/p6.png"></image>
							<view>{{$t('fundGuarantee')}}</view>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view style="color:#ffffff;">
					<text
						style="background-color: #52CABC;font-size: 24rpx;padding: 12rpx 20rpx 10rpx 20rpx;">{{$t('productName')}}</text>
				</view>
				<view style="margin-top:20rpx;color: #666666;">{{productInfo.product_name_cn}}</view>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view style="color:#ffffff;">
					<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">{{$t('recruitmentCycle')}}</text>
				</view>
				<view style="margin-top:20rpx;color: #666666;">{{$t('residueTime')}}：{{productInfo.investment_period}}</view>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view style="color:#ffffff;">
					<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">{{$t('dailyRate')}}{{$t('rule')}}</text>
				</view>
				<view style="margin-top:20rpx;color: #666666;">{{$t('everyday')}}{{Number(productInfo.interest_rate) * 100}}%{{$t('earnings')}}（{{$t('break-evenInterest')}}）
				</view>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view style="color:#ffffff;">
					<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">{{$t('limitNumber')}}</text>
				</view>
				<view style="margin-top:20rpx;color: #666666;">{{$t('unlimitedTimes')}}</view>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view style="color:#ffffff;">
					<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">{{$t('cooperativeInsurer')}}</text>
				</view>
				<view style="margin-top:20rpx;color: #666666;">{{productInfo.guarantor_company_name}}</view>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view style="color:#ffffff;">
					<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">{{$t('amountCalculationRule')}}</text>
				</view>
				<view style="margin-top:20rpx;color: #666666;">
					{{$t('dailyDividend')}}{{Number(productInfo.interest_rate) * Number(productInfo.min_purchase_amount)}}{{$t('yuan')}}*{{productInfo.investment_period}}{{$t('days')}}={{$t('totalRevenue')}}{{Number(productInfo.interest_rate) * Number(productInfo.min_purchase_amount) * productInfo.investment_period}}{{$t('yuan')}}
				</view>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view style="color:#ffffff;">
					<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">{{$t('fundsWhere')}}</text>
				</view>
				<view style="margin-top:20rpx;color: #666666;">{{$t('fundsWhereText')}}</view>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view style="color:#ffffff;">
					<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">{{$t('safetyPlan')}}</text>
				</view>
				<view style="margin-top:20rpx;color: #666666;">{{$t('safetyPlanText')}}</view>
			</view>

			<view style="margin-top:30rpx;">
				<u-button @click="reg()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;"
					:custom-style="customStyle1" shape="circle" type="primary">
					{{$t('immediateInvestment')}}</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getStockProductById
	} from '@/api/api.js'
	export default {
		data() {
			return {
				customStyle1: {
					height: '90rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '670rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)'
				},
				productId: '',
				productInfo: ''
			}
		},
		onLoad(params) {
			this.productId = params.id
			if (this.productId) {
				this.getStockProduct()
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('investDetails')
			})
		},
		methods: {
			reg() {
				uni.navigateTo({
					url: `/pages/product/bidding/bidding?id=${this.productId}`
				})
			},
			async getStockProduct() {
				const res = await getStockProductById(this.productId)
				if (res.code === 1) {
					this.productInfo = res.data
				}
				console.log(this.productInfo, 'res=======>')
			}
		}
	}
</script>

<style>

</style>
