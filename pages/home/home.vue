<template>
	<view
		style="background: url('../../static/images/hm_bg.png') center center no-repeat;background-size: 100% 100%;min-height: 100vh;">
		<view class="status_bar"
			style="position: fixed;width: 100%;background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);z-index: 999;">
			<!-- 这里是状态栏 -->
		</view>
		<view style="padding:30rpx;">
			<view class="u-flex"
				style="position: fixed;width: 100%;height: 88rpx;align-items: center;justify-content: center;left: 0;top: var(--status-bar-height);background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);z-index: 999;">
				<view>
					<image style="width: 60rpx;height: 60rpx;border-radius: 50%;" :src="$url + userInfo.avatar">
					</image>
				</view>
				<view style="margin-left: 10rpx;width:480rpx;">
					<u-search bg-color="#FFFFFF" :placeholder="$t('search')" :disabled="true"  @click="toSearch" :show-action="false">
					</u-search>
				</view>
				<view>
					<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left: 30rpx;"
						src="../../static/images/hm1.png"></image>
				</view>
				<view>
					<!-- <image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left: 30rpx;"
						src="../../static/images/hm2.png"></image> -->
					<language :margin="'10rpx 0 0 10rpx'"></language>
				</view>
			</view>
			<view :style="[{marginTop: `${statusBarHeight*2 + 88}rpx`},{color: '#333333'},{fontSize: '24rpx'}]">
				<u-row gutter="16">
					<u-col span="3" @click="gotoPage('/pages/yulibao/yulibao')">
						<view class="u-text-center">
							<image style="width: 92rpx;height: 92rpx;" src="../../static/images/hm3.png"></image>
							<view>{{$t('yulibao')}}</view>
						</view>
					</u-col>
					<u-col span="3" @click="gotoPage('/pages/my/order/order')">
						<view class="u-text-center">
							<image style="width: 92rpx;height: 92rpx;" src="../../static/images/hm4.png"></image>
							<view>{{$t('newStockOrders')}}</view>
						</view>
					</u-col>
					<u-col span="3" @click="gotoPage('/pages/recharge/recharge')">
						<view class="u-text-center">
							<image style="width: 92rpx;height: 92rpx;" src="../../static/images/hm5.png"></image>
							<view>{{$t('czrk')}}</view>
						</view>
					</u-col>
					<u-col span="3" @click="gotoPage('/pages/withdraw/withdraw')">
						<view class="u-text-center">
							<image style="width: 92rpx;height: 92rpx;" src="../../static/images/hm6.png"></image>
							<view>{{$t('txrk')}}</view>
						</view>
					</u-col>
				</u-row>
			</view>
			<view
				style="background-color: #FFFFFF;border-radius: 12rpx;padding: 13rpx 15rpx 13rpx 15rpx;margin-top:20rpx;"
				class="u-flex" @click="gotoNotice">
				<image style="width:28rpx;height:28rpx;margin-right: 20rpx;" src="../../static/images/hm7.png"></image>
				<view class="f_bod" style="width:580rpx;color: #333333;">{{notice}}</view>
		<!-- 		<u-icon name="close-circle" color="#575B66" size="28"></u-icon> -->
			</view>
		</view>
		<view
			style="padding:60rpx 60rpx 40rpx 60rpx;background-image: url('../../static/images/hm_bg2.png');background-repeat: no-repeat;background-size: 100%;">
			<view class="col35 f_bod" style="font-size:36rpx;">{{$t('hot')}}</view>
			<view style="margin-top: 30rpx;" v-for="(item,index) in ProductList" :key="index" @click="toDetails(item)">
				<view class="u-flex">
					<image v-if="index==0" style="width:64rpx;height:64rpx;margin-right: 20rpx;"
						src="../../static/images/p1.png"></image>
					<image v-if="index==1" style="width:64rpx;height:64rpx;margin-right: 20rpx;"
						src="../../static/images/p2.png"></image>
					<image v-if="index==2" style="width:64rpx;height:64rpx;margin-right: 20rpx;"
						src="../../static/images/p3.png"></image>
					<view style="width:220rpx;">
						<view>{{item.product_code}}</view>
						<view>{{item.product_name_cn}}</view>
						<!-- <view style="color: #999999;font-size: 24rpx;">603809.sz</view> -->
					</view>
					<view class="col35 f_bod" style="font-size: 32rpx;">{{Number(item.interest_rate * 100).toFixed(2)}}%</view>
					<view class="" style="font-size: 32rpx;color:#999999;margin-left:80rpx;">{{item.investment_period}}{{$t('days')}}</view>
				</view>
				<view style="margin-top:15rpx;">
					<u-line color="#F3F3F3"></u-line>
				</view>
			</view>

			<view style="font-weight: bold;font-size: 32rpx;margin-top: 30rpx;" class="col35 u-text-center" @click="toProduct">
				{{$t('more')}}
			</view>

		</view>
		<view style="padding: 30rpx;">
			<view style="font-size: 32rpx;font-weight: bold;">{{$t('selectStock')}}</view>
			<view style="margin-top: 20rpx;">
				<swiper class="orange-content" :display-multiple-items="config.multiple || 3"
					:next-margin="config.nextMargin+'rpx'">
					<swiper-item v-for="(item,index) in stockList" :key="index" @click="toDetails(item)">
						<view class="u-text-center"
							style="display: inline-block; padding-top:30rpx; background-color:#FFFFFF;width: 284rpx;height: 264rpx;border: 1rpx solid; border-color:rgba(0,90,0,0.1); border-radius: 16rpx;margin-right: 20rpx;">
							<view>{{item.product_code}}</view>
							<view>{{item.product_name_cn}}</view>
							<view style="font-weight: bold;font-size: 32rpx;margin-top: 30rpx;" class="col35">
								{{Number(item.interest_rate * 100).toFixed(2)}}%
							</view>
							<view style="margin-top: 20rpx;">{{Number(item.min_purchase_amount) | tranNumber}}{{$t('yuan')}}{{$t('qitou')}}</view>
						</view>

					</swiper-item>


					<!-- 支撑 -->
					<swiper-item></swiper-item>

				</swiper>
			</view>

			<view style="margin-top: 20rpx;">
				<u-row gutter="16">
					<!-- 					<u-col span="3">
						<view class="u-text-center" :class="{'xuan':xuan==0}" @click="getxuan(0,'')"
							style="color: #999999;font-size: 30rpx;font-weight: bold;">
							<view>{{$t('all')}}</view>
							<view
								style="width:120rpx;height:8rpx;margin-left: 20rpx; background:linear-gradient(#35CBA5,#FFFFFF)"
								v-if="xuan==0">
							</view>
						</view>
					</u-col> -->
					<u-col span="3">
						<view class="u-text-center" :class="{'xuan':xuan==1}" @click="getxuan(1,'Newbie')"
							style="color: #999999;font-size: 30rpx;font-weight: bold;">
							<view>{{$t('newItem1')}}</view>
							<view
								style="width:120rpx;height:8rpx;margin-left: 20rpx; background:linear-gradient(#35CBA5,#FFFFFF)"
								v-if="xuan==1">
							</view>
						</view>
					</u-col>
					<u-col span="3">
						<view class="u-text-center" :class="{'xuan':xuan==2}" @click="getxuan(2,'Activity')"
							style="color: #999999;font-size: 30rpx;font-weight: bold;">
							<view>{{$t('eliteItem1')}}</view>
							<view
								style="width:120rpx;height:8rpx;margin-left: 20rpx; background:linear-gradient(#35CBA5,#FFFFFF)"
								v-if="xuan==2">
							</view>
						</view>
					</u-col>
					<u-col span="3">
						<view class="u-text-center" :class="{'xuan':xuan==3}" @click="getxuan(3,'VIP')"
							style="color: #999999;font-size: 30rpx;font-weight: bold;">
							<view>{{$t('vipItem1')}}</view>
							<view
								style="width:120rpx;height:8rpx;margin-left: 20rpx; background:linear-gradient(#35CBA5,#FFFFFF)"
								v-if="xuan==3">
							</view>
						</view>
					</u-col>
				</u-row>
			</view>

			<view style="margin-bottom: 50rpx;padding-bottom: 40rpx;">
				<view class="" style="font-size: 24rpx;color:#999999;margin-top:20rpx;">
					<u-row gutter="16">

						<u-col span="5">
							<view class="" style="color: #666666;" @click="getbut(0)">
								<text class="black" :class="{ shop_xuan: but === 0 }">{{$t('productName')}}</text>
								<!-- <image style="width: 12rpx;height: 16rpx;margin-left: 6rpx;" src="../../static/images/x1.png"></image> -->
							</view>
						</u-col>
						<u-col span="4">
							<view class="u-text-center" style="color: #666666;" @click="getbut(0)">
								<text class="black" :class="{ shop_xuan: but === 0 }">{{$t('holdingPeriod')}}</text>
								<!-- <image style="width: 12rpx;height: 16rpx;margin-left: 6rpx;" src="../../static/images/x1.png"></image> -->
							</view>
						</u-col>
						<u-col span="3">
							<view class="u-text-right" style="color: #666666;" @click="getbut(0)">
								<text class="black" :class="{ shop_xuan: but === 0 }">{{$t('dailyRate')}}</text>
								<!-- <image style="width: 12rpx;height: 16rpx;margin-left: 6rpx;" src="../../static/images/x1.png"></image> -->
							</view>
						</u-col>
					</u-row>

				</view>

				<view style="color:#333333;margin-top: 10rpx;" v-for="(item,index) in stockProductListTab" :key="index"
					@click="toDetails(item)">
					<u-row gutter="16">

						<u-col span="5">
							<view class="">
								<view style="font-size: 30rpx;font-weight: bold;">{{item.product_code}}</view>
								<view style="font-size: 30rpx;font-weight: bold;">{{item.product_name_cn}}</view>
								<view style="display: flex;align-items: center;">
									<u-line-progress active-color="#6BEEAB" height="18"
										:percent="Number(item.progress)"></u-line-progress>
										<text style="font-size: 24rpx;color: #21BF90;margin-left: 20rpx;">{{Number(item.progress).toFixed(2)}}%</text>
								</view>
								<view class="u-flex" style="color: #999999;font-size: 20rpx;">
									<view style="width:50rpx;">{{Number(item.min_purchase_amount) | tranNumber}}{{$t('yuan')}}</view>
									<view class="u-text-right" style="width: 220rpx;">{{Number(item.max_purchase_amount) | tranNumber}}{{$t('yuan')}}</view>
								</view>
							</view>
						</u-col>
						<u-col span="4">
							<view class="u-text-center">
								<view>{{item.investment_period}}{{$t('days')}}</view>
								<view style="margin-top: 10rpx;">{{$t('whenFull')}}</view>
							</view>
						</u-col>
						<u-col span="3">
							<view class="u-text-right">
								<view style="color: #F75F52;">{{Number(item.interest_rate * 100).toFixed(2)}}%</view>
<!-- 								<view style="margin-top: 10rpx;">{{$t('qitou')}}:<text
										style="color: #F75F52;">{{Number(item.min_purchase_amount) | tranNumber}}{{$t('yuan')}}</text></view> -->
							</view>
						</u-col>
					</u-row>
					<view style="margin-top: 20rpx;">
						<u-line color="#F3F3F3"></u-line>
					</view>
				</view>
			</view>
		</view>
		<!-- <floating-customer-service></floating-customer-service> -->
		<liu-drag-button @clickBtn="clickBtn">{{$t('customerService')}}</liu-drag-button>
	</view>
</template>

<script>
	import {
		getStockProductList,
		getStockProductAllList,
		getGonggaoTypes
	} from '@/api/api'
	import FloatingCustomerService from '@/components/FloatingCustomerService/FloatingCustomerService.vue';

	export default {
		components: {
			FloatingCustomerService
		},
		data() {
			return {
				config: {
					title: '我看过的',
					titlemore: '全部>',
					listmore: '查看更多',
					moreurl: 'url',
					multiple: 3,
					radius: 10,
					height: 264,
					nextMargin: -220,

				},
				userInfo: JSON.parse(uni.getStorageSync('userInfo')),
				xuan: 1,
				but: 0,
				ProductList: [],
				stockList: [], // 精选股票
				tabName: 'Newbie', // 选项卡内容(查询参数)
				stockProductListTab: [],
				notice: '', // 公告
				statusBarHeight: 0, // 状态栏高度
				customerServiceUrl: JSON.parse(uni.getStorageSync('support_link')) // 您的客服链接
			}
		},

		onShow() {
			console.log('状态栏高度', uni.getSystemInfoSync().statusBarHeight)
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			// this.stockProductList()
			// this.getStockProductListNewbie() // 精选股票
			// this.getStockProductListTab()
		},
		watch: {
			'_i18n.locale': {
				handler: function(value) {
					console.log(value)
					this.getNotice()
					this.stockProductList()
					this.getStockProductListNewbie() // 精选股票
					this.getStockProductListTab()
					this.setTabbar()
				},
				immediate: true
			}
		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			//点击按钮
			clickBtn() {
				console.log('按钮被点击了')
				// #ifdef H5
				// window.location.href = this.customerServiceUrl;
				window.open(this.customerServiceUrl)
				// #endif
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.customerServiceUrl);
				// #endif
				// APP内部打开客服链接(页面已写,打开注释即可)
				// uni.navigateTo({
				// 	url: `/pages/home/webview/webview?url=${this.customerServiceUrl}`
				// })
			},
			toProduct() {
				uni.switchTab({
					url: '/pages/product/product'
				})
			},
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/product/details/details?id=${item.product_id}`
				})
			},
			setTabbar() {
				uni.setTabBarItem({
					index: 0,
					text: this.$t('tabbar.home')
				});
				uni.setTabBarItem({
					index: 1,
					text: this.$t('tabbar.product')
				});
				uni.setTabBarItem({
					index: 2,
					text: this.$t('tabbar.notice')
				});
				uni.setTabBarItem({
					index: 3,
					text: this.$t('tabbar.otc')
				});
				uni.setTabBarItem({
					index: 4,
					text: this.$t('tabbar.my')
				});
			},
			gotoNotice() {
				uni.switchTab({
					url: '/pages/home/notice/notice'
				})
			},
			gotoPage(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 公告
			async getNotice() {
				const res = await getGonggaoTypes()
				if (res.code === 1) {
					this.notice = res.data[0].name
				}
			},
			//热门专区
			async stockProductList() {
				uni.showLoading({
					mask: true
				})
				const res = await getStockProductList('Hot')
				uni.hideLoading()
				if (res.code === 1) {
					this.ProductList = res.data.slice(0, 3);
					// this.ProductList.slice(0, 3);
				}
				// var data = {};
				// data['area'] = 'Hot'
				// this.$Ajax3(
				// 	'/index/stockProductList?area=' + data.area, {},
				// 	res => {
				// 		if (res.code == 1) {
				// 			this.ProductList = res.data
				// 		} else {}
				// 	},
				// 	fail => {},
				// 	'GET',
				// 	'notoken'
				// );
			},
			// 精选股票
			async getStockProductListNewbie() {
				const res = await getStockProductList('Newbie')
				if (res.code === 1) {
					this.stockList = res.data
				}
			},
			getxuan(e, item) {
				this.xuan = e;
				this.tabName = item
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

<style scoped lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
