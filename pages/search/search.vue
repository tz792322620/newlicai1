<template>

	<view style="background-image: url('../../static/images/hm_bg.png');background-repeat: no-repeat;background-size: 100% 100%;min-height: 100vh;">
		<view class="status_bar" style="position: fixed;width: 100%;background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);z-index: 999;">
			<!-- 这里是状态栏 -->
		</view>
		<view style="padding:30rpx;">
			<view class="u-flex" style="position: fixed;width: 100%;height: 88rpx;align-items: center;left: 0;top: var(--status-bar-height);background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);z-index: 999;">
				<view style="padding: 0 40rpx; width:100%;">
					<u-search bg-color="#FFFFFF" v-model="product_name_cn" :placeholder="$t('search')" :action-text="$t('search')"
					:disabled="false" :show-action="true" @custom="getStockProductListTab">
					</u-search>
				</view>
			</view>
            <view class="" style="margin-top: 168rpx;">
				<u-empty v-if="stockProductListTab.length == 0" :text="$t('depositEmpty')" margin-top="268"></u-empty>
            	<view
				v-if="stockProductListTab.length != 0"
            	    style="margin-top: 30rpx;background-color: #ffffff;box-shadow: 0px 0px 24rpx 0px rgba(0,0,0,0.05); padding: 30rpx;border-radius: 12rpx;"
            	    v-for="(item,index) in stockProductListTab" :key="index" @click="toDetails(item)">
            		<view>{{item.product_code}}</view>
            	    <view>{{item.product_name_cn}}</view>
            	    <view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
            	        <view style="width: 300rpx;">{{ $t('yieldRate') }}：<text
            	                style="color: #21BF90;">{{Number(item.interest_rate * 100).toFixed(2)}}%</text></view>
            	        <view style="width: 300rpx;" class="u-text-right">{{ $t('purchaseLimit') }}：<text
            	                style="color: #21BF90;">{{item.limit_purchase_times}} {{$t('times')}}</text>
            	        </view>
            	    </view>
            	    <view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
            	        <view style="width: 300rpx;">{{ $t('minPurchase') }}：<text
            	                style="color: #21BF90;">{{Number(item.min_purchase_amount) | tranNumber}}USDT</text></view>
            	        <view style="width: 300rpx;" class="u-text-right">{{ $t('maxPurchase') }}：<text
            	                style="color: #21BF90;">{{Number(item.max_purchase_amount) | tranNumber}}USDT</text>
            	        </view>
            	    </view>
            	
            		  <view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
            		  		
            			<view style="width: 600rpx;">
            			  {{ $t('totalAmountRaised') }}：<text style="color: #21BF90;">{{Number(item.total_fundraising) | tranNumber}}USDT</text>
            			</view>
            		  </view>
            		  <view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
            		  					<view style="width: 600rpx;">
            		  					  {{ $t('remainingTotalAmountRaised') }}：<text style="color: #21BF90;">{{(Number(item.total_fundraising) - item.sold_units) | tranNumber}}USDT</text>
            		  					</view>
            		  				
            		  </view>
            		<view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
            		    <view style="width: 300rpx;">{{$t('pointsMultiplier')}}：<text
            		            style="color: #21BF90;">X{{item.point_multiplier}}</text></view>
            		</view>
            	    <view style="width:540rpx;margin-top: 6rpx;">
            	        <u-line-progress active-color="#6BEEAB" height="22" :percent="Number(item.progress)">
            	        </u-line-progress>
            	    </view>
            	    <view class="u-flex" style="margin-top: 20rpx;">
            	        <view style="background-color:#E1F7F2;color: #666666;font-size: 24rpx;
            	            border-radius: 8rpx;padding-left:10rpx;padding-right:30rpx;">
            	            <u-icon style="margin-right: 10rpx;" name="clock" color="#7ADDC4" size="24"></u-icon>
            	            {{$t('investmentCycle')}}{{item.investment_period}}{{$t('days')}}
            	        </view>
            	        <view style="margin-left:200rpx;">
            	            <u-button ripple-bg-color="#fff" @click="toDetails(item)" :ripple="true" style="font-size:28rpx;"
            	                :custom-style="customStyle1" shape="circle" type="primary">{{$t('immediateInvestment')}}</u-button>
            	        </view>
            	    </view>
            	</view>
            </view>
		</view>
	</view>
</template>


<script>
	import {
		getStockProductListByName
	} from '@/api/api'
	export default {
		data() {
			return {
				product_name_cn: '',
				customStyle1: {
					height: '56rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '170rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},
				stockProductListTab: [],
				statusBarHeight: 0 // 状态栏高度
			}
		},
		onShow() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			this.getStockProductListTab()
		},
		methods: {
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/product/details/details?id=${item.product_id}`
				})
			},
			// 选项卡切换查询
			async getStockProductListTab() {
				uni.showLoading({
					mask: true
				})
				const res = this.product_name_cn ? await getStockProductListByName(this.product_name_cn) : await getStockProductListByName()
				uni.hideLoading()
				if (res.code == 1) {
					this.stockProductListTab = res.data
				}
				console.log(this.stockProductListTab, '选项卡查询=======>', res)
			}
		}
	}
</script>

<style scoped>
</style>
