<template>

	<view style="background-image: url('../../static/images/hm_bg.png');background-repeat: no-repeat;background-size: 100% 100%;min-height: 100vh;">
		<view class="status_bar" style="position: fixed;width: 100%;background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);z-index: 999;">
			<!-- 这里是状态栏 -->
		</view>
		<view style="padding:30rpx;">
			<view class="u-flex" style="position: fixed;width: 100%;height: 88rpx;align-items: center;justify-content: center;left: 0;top: var(--status-bar-height);background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);z-index: 999;">
				<view style="margin-left: 10rpx;width:600rpx;">
					<u-search bg-color="#FFFFFF" :placeholder="$t('enterFund')" :disabled="true"  @click="toSearch" :show-action="false">
					</u-search>
				</view>
				<view>
					<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left: 30rpx;"
						src="../../static/images/hm1.png"></image>
				</view>
			</view>
			<view :style="[{marginTop: `${statusBarHeight*2 + 88}rpx`}]">
				<!-- <u-subsection v-if="forceRefresh" :list="tabList" @change="sectionChange" mode="button"
					button-color="#E6F9F4" active-color="#35CBA5" bgColor="#ffffff" :current="current"></u-subsection> -->
					<uv-subsection :list="tabList" @change="sectionChange" mode="button"				 activeColor="#35CBA5" bgColor="#ffffff" :current="curNow"></uv-subsection>
			</view>
            <view
                style="margin-top: 30rpx;background-color: #ffffff;box-shadow: 0px 0px 24rpx 0px rgba(0,0,0,0.05); padding: 30rpx;border-radius: 12rpx;"
                v-for="(item,index) in stockProductListTab" :key="index" @click="toDetails(item)">
				
				<view style="display: flex;justify-content: space-between;align-items: center;" v-if="item.is_gift_red_packet == 1">
					<view>{{item.product_code}}</view>
					<view>
						<image  mode="aspectFit" style="width: 20px;height: 18px;" src="../../static/images/product/hb1.png"></image><span style="color: rgb(33, 191, 144);font-size: 13px;">{{Number(item.red_packet_amount).toFixed(2)}}USDT</span>
					</view>
					
				</view>
				<view v-else >{{item.product_code}}</view>
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
                <view style="margin-top: 6rpx;display: flex;align-items: center;">
                    <u-line-progress active-color="#6BEEAB" height="22" :percent="Number(item.progress)">
                    </u-line-progress>
					<text style="font-size: 24rpx;color: #21BF90;margin-left: 20rpx;">{{Number(item.progress).toFixed(2)}}%</text>
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
</template>


<script>
	import {
		getStockProductList,
		getStockProductAllList
	} from '@/api/api'
	export default {
		data() {
			return {
				forceRefresh: false,
				tabList: [],
				current: 0,
				customStyle1: {
					height: '56rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '170rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},
				curNow: 0,
				tabName: 'Hot',
				stockProductListTab: [],
				statusBarHeight: 0 // 状态栏高度
			}
		},
		onShow() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			this.forceRefresh = false;
			this.$nextTick(() => {
				this.forceRefresh = true;
			})
			this.getStockProductListTab()
		},
		computed: {
			lang() {
				return this.$t('lang')
			}
		},
		watch: {
			'_i18n.locale': {
				handler(value) {
					console.log(value, 'watch=======>')
					this.tabList = [
						// {
						// 	name: this.$t('allItem')
						// },
						{
							name: this.$t('hotItem1')
						},
						{
							name: this.$t('newItem1')
						},
						{
							name: this.$t('eliteItem1')
						},
						{
							name: this.$t('vipItem1')
						},
						{
							name: this.$t('activityItem1')
						}
					]
				},
				immediate: true
			}
		},
		onLoad() {
			this.getStockProductListTab()
		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/product/details/details?id=${item.product_id}`
				})
			},
			reg(item) {
				uni.navigateTo({
					url: `/pages/product/bidding/bidding?id=${item.product_id}`
				})
			},
			getxuan(e) {
				this.xuan = e;
			},
			sectionChange(index) {
				this.curNow = index;
				switch (index) {
					// case 0:
					// 	this.tabName = ''
					// 	break;
					case 0:
						this.tabName = 'Hot'
						break;
					case 1:
						this.tabName = 'Newbie'
						break;
					case 2:
						this.tabName = 'Selected'
						break;
					case 3:
						this.tabName = 'VIP'
						break;
						case 4:
							this.tabName = 'Activity'
							break;
				}
				this.getStockProductListTab()
			},
			// 选项卡切换查询
			async getStockProductListTab() {
				uni.showLoading({
					mask: true
				})
				if (!this.tabName) {
					const result = await getStockProductAllList()
					if (result.code === 1) {
						this.stockProductListTab = result.data
					}
				} else {
					const res = await getStockProductList(this.tabName)
					if (res.code === 1) {
						this.stockProductListTab = res.data
					}
				}
				uni.hideLoading()
				console.log(this.stockProductListTab, '选项卡查询=======>')
			}
		}
	}
</script>

<style scoped>
</style>
