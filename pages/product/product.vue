<template>
	<view style="background-image: url('../../static/images/hm_bg.png');background-repeat: no-repeat;background-size: 100% 100%;min-height: 100vh;">
		<view class="status_bar" style="position: fixed;width: 100%;background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);z-index: 999;">
			<!-- 这里是状态栏 -->
		</view>
		<view style="padding:30rpx;">
			<view class="u-flex" style="position: fixed;width: 100%;height: 88rpx;align-items: center;justify-content: center;left: 0;top: var(--status-bar-height);background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);z-index: 999;">
				<view style="margin-left: 10rpx;width:600rpx;">
					<u-search bg-color="#FFFFFF" :placeholder="$t('enterFund')" :disabled="false" :show-action="false">
					</u-search>
				</view>
				<view>
					<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left: 30rpx;"
						src="../../static/images/hm1.png"></image>
				</view>
			</view>
			<view :style="[{marginTop: `${statusBarHeight*2 + 88}rpx`}]">
				<u-subsection v-if="forceRefresh" :list="tabList" @change="sectionChange" mode="button"
					button-color="#E6F9F4" active-color="#35CBA5" bgColor="#ffffff" :current="current"></u-subsection>
			</view>
			<view
				style="margin-top: 30rpx;background-color: #ffffff;box-shadow: 0px 0px 24rpx 0px rgba(0,0,0,0.05); padding: 30rpx;border-radius: 12rpx;"
				v-for="(item,index) in stockProductListTab" :key="index" @click="toDetails(item)">
				<view>{{item.product_name_cn}}</view>
				<view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
					<view style="width: 300rpx;">收益率：<text
							style="color: #21BF90;">{{Number(item.interest_rate * 100)}}%</text></view>
					<view style="width: 300rpx;" class="u-text-right">限购次数：<text
							style="color: #21BF90;">{{item.limit_purchase_times}} 次</text>
					</view>
				</view>
				<view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
					<view style="width: 300rpx;">最低购买限额：<text
							style="color: #21BF90;">{{item.min_purchase_amount}}U</text></view>
					<view style="width: 300rpx;" class="u-text-right">最高购买限额：<text
							style="color: #21BF90;">{{item.max_purchase_amount}}U</text>
					</view>
				</view>
				<view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
					<view style="width: 300rpx;">已售出份额：<text
							style="color: #21BF90;">{{item.sold_units}}U</text></view>
					<view style="width: 300rpx;" class="u-text-right">募资总额	：<text
							style="color: #21BF90;">{{item.total_fundraising}}U</text>
					</view>
				</view>
				<view style="width:540rpx;margin-top: 6rpx;">
					<u-line-progress active-color="#6BEEAB" height="22" :percent="Number(item.progress)">
					</u-line-progress>
				</view>
				<view class="u-flex" style="margin-top: 20rpx;">
					<view style="background-color:#E1F7F2;color: #666666;font-size: 24rpx;
						border-radius: 8rpx;padding-left:10rpx;padding-right:30rpx;">
						<u-icon style="margin-right: 10rpx;" name="clock" color="#7ADDC4" size="24"></u-icon>
						投资周期{{item.investment_period}}天
					</view>
					<view style="margin-left:200rpx;">
						<u-button ripple-bg-color="#fff" @click="reg(item)" :ripple="true" style="font-size:28rpx;"
							:custom-style="customStyle1" shape="circle" type="primary">{{$t('buyNow')}}</u-button>
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
				tabName: '',
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
					this.tabList = [{
							name: this.$t('allItem')
						},
						{
							name: this.$t('hotItem')
						},
						{
							name: this.$t('newItem')
						},
						{
							name: this.$t('eliteItem')
						},
						{
							name: this.$t('vipItem')
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
					case 0:
						this.tabName = ''
						break;
					case 1:
						this.tabName = 'Hot'
						break;
					case 2:
						this.tabName = 'Newbie'
						break;
					case 3:
						this.tabName = 'Activity'
						break;
					case 4:
						this.tabName = 'VIP'
						break;
				}
				this.getStockProductListTab()
			},
			// 选项卡切换查询
			async getStockProductListTab() {
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
				console.log(this.stockProductListTab, '选项卡查询=======>')
			}
		}
	}
</script>

<style scoped>
</style>
