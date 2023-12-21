<template>
	<view style="background-color: #f5f5f5;min-height: 100vh;">
		<view
			style="background-image: url('../../static/images/my/1.png');background-repeat: no-repeat;background-size: 100%;min-height:560rpx;padding:40rpx;">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<view style="border-radius: 12rpx;background-color: #fff;padding:30rpx;margin-top: 200rpx;">
				<view class="u-flex" style="position: relative;top: -80rpx;">
					<view class="avatar"
						:style="`position: relative;width:188rpx;height:188rpx;border-radius: 50%;background: url(${$url + userInfo.avatar}) center center no-repeat;background-size: 100% 100%;margin-right: 30rpx;`">
						<!-- <image style="width:188rpx;height:188rpx;border-radius: 50%;" :src="user.avatar"></image> -->
						<image style="position: absolute;bottom: 0;right: 0;width: 48rpx;height: 48rpx;"
							src="../../static/images/my/edit.png" mode="" @click="navigateTo('/pages/my/info/info')">
						</image>
					</view>
					<view style="margin-top:60rpx;">
						<view style="font-weight: bold;font-size: 32rpx;display: flex;align-items: center;">
							{{ userInfo.nickname }}
							<image style="width: 36rpx;height: 36rpx;margin-left: 10rpx;"
								:src="`../../static/images/my/v${userInfo.level}.png`" mode=""></image>
								<!-- <text v-if="userInfo.level === 0" style="color: #999999;margin-left: 10rpx;font-size: 20rpx;">普通会员</text> -->
						</view>
						<!-- <view style="color: #999999;margin-top: 10rpx;">ID: {{ user.id }} <image style="width: 24rpx;height: 24rpx;margin-left: 10rpx;" src="../../static/images/my/copy.png" mode=""></image> </view> -->
					</view>
				</view>
				<view style="margin-top: -50rpx;margin-bottom: 20rpx;">
					<u-line color="#F3F3F3"></u-line>
				</view>
				<view class="u-flex" style="justify-content: space-between;">
					<view style="color: #999999;">{{$t('totalAssets')}}</view>
					<view style="color: #FF7354;display: flex;align-items: center;"
						@click="navigateTo('/pages/my/sign/sign')">
						<image style="width: 36rpx;height: 36rpx;margin-right: 10rpx;"
							src="../../static/images/my/sign.png" mode=""></image> {{$t('signIn')}}
					</view>
				</view>
				<view style="margin-top: 20rpx;font-size:50rpx;font-weight: bold;">
					{{ userInfo.total_amount }}
				</view>
				<view style="margin-top: 30rpx;">
					<u-row gutter="16">
						<u-col v-for="(detail, index) in accountDetails" :key="index" span="4">
							<view class="u-text-center" @click="navigateTo(accountDetails.url)">
								<view style="color: #999999;margin-bottom: 10rpx;font-size: 24rpx;">{{ detail.title }}
								</view>
								<view style="font-size: 34rpx;">{{ detail.value }}</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<u-row gutter="16">
					<u-col v-for="(feature, index) in features" :key="index" span="4">
						<view class="u-text-center" @click="navigateTo(feature.url)">
							<image :src="feature.image"></image>
							<view>{{ feature.title }}</view>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="b_colfff" style="font-size: 24rpx; border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<u-row gutter="16">
					<u-col v-for="(service, index) in services" :key="index" span="3">
						<view class="u-text-center" @click="navigateTo(service.url)">
							<image :src="service.image"></image>
							<view>{{ service.title }}</view>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="b_colfff" style="color: #333333; border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<view v-for="(record, index) in records" :key="index" class="u-flex"
					:style="{ marginTop: index === 0 ? '0' : '50rpx' }" @click="navigateTo(record.url)">
					<image :src="record.image" style="margin-right: 20rpx;"></image>
					<view style="width: 520rpx;">{{ record.title }}</view>
					<u-icon name="arrow-right" color="#B2B2B2" size="34"></u-icon>
				</view>
			</view>
			<view style="margin-top:80rpx;">
				<u-button @click="logout()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;"
					:custom-style="customStyle1" shape="circle" type="primary">
					{{$t('safeLogout')}}
				</u-button>
			</view>
		</view>
	</view>
</template>


<script>
	import {
		getUserInfo,
		getVerificationStatus
	} from '@/api/api.js'
	export default {
		data() {
			return {
				userInfo: '',
				customStyle1: {
					height: '90rpx',
					margin: 'auto',
					color: '#FFFFFF',
					width: '670rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},
			};
		},
		onShow(){
			let that = this
			that.getUser()
		}, 
		computed: {
			accountDetails() {
				return [{
						title: this.$t('availableToOpenPosition'),
						value: '0.0000'
					},
					{
						title: this.$t('pickableness'),
						value: '0.0000'
					},
					{
						title: this.$t('points'),
						value: '0.0000'
					}
				]
			},
			features() {
				return [{
						image: '../../static/images/my/2.png',
						title: this.$t('recharge'),
						url: '/pages/recharge/recharge'
					},
					{
						image: '../../static/images/my/3.png',
						title: this.$t('withdraw'),
						url: '/pages/withdraw/withdraw'
					},
					{
						image: '../../static/images/my/4.png',
						title: this.$t('yulibao'),
						url: '/pages/yulibao/yulibao'
					}
				]
			},
			services() {
				return [{
						image: '../../static/images/my/5.png',
						title: this.$t('teamManagement'),
						url: '/pages/my/team/team'
					},
					{
						image: '../../static/images/my/6.png',
						title: this.$t('realNameAuthentication'),
						url: '/pages/verify/verify'
					},
					{
						image: '../../static/images/my/7.png',
						title: this.$t('profitRecord'),
						url: '/pages/my/earnings/earnings'
					},
					{
						image: '../../static/images/my/8.png',
						title: this.$t('inviteFriends'),
						url: '/pages/invite/invite'
					}
				]
			},
			records() {
				return [{
						image: '../../static/images/my/d1.png',
						title: this.$t('newStockOrders'),
						url: '/pages/my/order/order'
					},
					{
						image: '../../static/images/my/d2.png',
						title: this.$t('rechargeRecord'),
						url: '/pages/recharge/records/records'
					},
					{
						image: '../../static/images/my/d3.png',
						title: this.$t('withdrawalRecord'), 
						url: '/pages/withdraw/records/records'
					},
					{
						image: '../../static/images/my/d4.png',
						title: this.$t('fundsDetails'),
						url: '/pages/my/funds/funds'
					},
					{
						image: '../../static/images/my/d4.png',
						title: this.$t('integralTitle'),
						url: '/pages/my/integral/integral'
					},
					{
						image: '../../static/images/my/d5.png',
						title: this.$t('paymentInformation'),
						url: '/pages/otc/payment/payment'
					}
				]
			}
		},

		methods: {
			// 退出登录
			logout() {
				// 清除本地存储的用户信息和令牌
				uni.removeStorageSync('token');
				uni.removeStorageSync('userInfo');

				// 可选：执行任何其他清理操作，例如清除Vuex状态

				// 提示用户
				this.$tools.toast('已退出登录');

				// 重定向到登录页面或首页
				uni.reLaunch({
					url: '/pages/login/login_em'
				});
			},
			navigateTo(url) {
				console.log(url)
				if (url == '/pages/verify/verify') {
					this.getUserVerificationStatus()
					return
				}
				// 使用uni-app的跳转方式
				uni.navigateTo({
					url: url
				});
			},
			// ...其他方法...
			// 获取用户个人信息
			async getUser() {
				const res = await getUserInfo()
				if (res.code === 1) {
					this.userInfo = res.data
					this.accountDetails[0].value = res.data.buildable_amount // 可建仓
					this.accountDetails[1].value = res.data.withdrawable_amount // 可提
					this.accountDetails[2].value = res.data.gift_points // 积分
				}
				console.log(this.userInfo)
			},
			// 获取用户实名认证状态
			async getUserVerificationStatus() {
				const res = await getVerificationStatus()
				console.log(res)
				if (res.code === 1) {
					if (res.data.verification_status == 'Verified') {
						uni.navigateTo({
							url: '/pages/verify/successfully/successfully'
						})						
					} else if (res.data.verification_status == 'Pending') {
						uni.navigateTo({
							url: '/pages/verify/pending/pending'
						})						
					} else if (res.data.verification_status == 'Rejected') {
						uni.navigateTo({
							url: '/pages/verify/fail/fail'
						})					
					} else if (res.data.verification_status == '') {
						uni.navigateTo({
							url: '/pages/verify/fail/fail'
						})				
					}
				} else if(res.code === 0) {
					uni.navigateTo({
						url: '/pages/verify/verify'
					})	
				}		
			}
		}
	}
</script>

<style scoped lang="scss">
	.avatar {
		background-size: 100% 100% !important;
	}

	image {
		width: 50rpx;
		/* 自定义宽度 */
		height: 50rpx;
		/* 自定义高度 */
	}

	page {
		background-color: #f5f5f5;
		// padding-bottom: 200rpx;
	}
</style>
