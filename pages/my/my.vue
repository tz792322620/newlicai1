<template>
    <view style="background-color:#F5F5F5 !important;height: 100vh;">
        <view style="background-image: url('../static/images/my/1.png');background-repeat: no-repeat;background-size: 100%;height:560rpx;padding:40rpx;">
            <view style="border-radius: 12rpx;background-color: #fff;padding:30rpx;margin-top: 200rpx;">
                <view class="u-flex" style="position: relative;top: -80rpx;">
					<view class="avatar" style="position: relative;width:188rpx;height:188rpx;border-radius: 50%;background-color: #80b7f9;margin-right: 30rpx;">
						<!-- <image style="width:188rpx;height:188rpx;border-radius: 50%;" :src="user.avatar"></image> -->
						<image style="position: absolute;bottom: 0;right: 0;width: 48rpx;height: 48rpx;" src="../../static/images/my/edit.png" mode="" @click="navigateTo('/pages/my/info/info')"></image>
					</view>
                    <view style="margin-top:60rpx;">
                        <view style="font-weight: bold;font-size: 32rpx;display: flex;align-items: center;">{{ user.name }} <image style="width: 36rpx;height: 36rpx;margin-left: 10rpx;" src="@/static/images/my/d6.png" mode=""></image> </view>
                        <view style="color: #999999;margin-top: 10rpx;">ID: {{ user.id }} <image style="width: 24rpx;height: 24rpx;margin-left: 10rpx;" src="../../static/images/my/copy.png" mode=""></image> </view>
                    </view>
                </view>
                <view style="margin-top: -50rpx;margin-bottom: 20rpx;">
                    <u-line color="#F3F3F3"></u-line>
                </view>
                <view class="u-flex" style="justify-content: space-between;">
                    <view style="color: #999999;">总资产(¥)</view>
                    <view style="color: #FF7354;display: flex;align-items: center;" @click="navigateTo('/pages/my/sign/sign')"><image style="width: 36rpx;height: 36rpx;margin-right: 10rpx;" src="../../static/images/my/sign.png" mode=""></image> 签到</view>
                </view>
                <view style="margin-top: 20rpx;font-size:50rpx;font-weight: bold;">
                    {{ user.totalAssets }}
                </view>
                <view style="margin-top: 30rpx;">
                    <u-row gutter="16">
                        <u-col v-for="(detail, index) in accountDetails" :key="index" span="4">
                            <view class="u-text-center" @click="navigateTo(accountDetails.url)">
                                <view style="color: #999999;margin-bottom: 10rpx;font-size: 24rpx;">{{ detail.title }}</view>
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
                <view v-for="(record, index) in records" :key="index" class="u-flex" :style="{ marginTop: index === 0 ? '0' : '50rpx' }" @click="navigateTo(record.url)">
                    <image :src="record.image" style="margin-right: 20rpx;"></image>
                    <view style="width: 520rpx;">{{ record.title }}</view>
                    <u-icon name="arrow-right" color="#B2B2B2" size="34"></u-icon>
                </view>
            </view>
            <view style="margin-top:80rpx;">
                <u-button @click="reg()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;" :custom-style="customStyle1" shape="circle" type="primary">
                    安全退出</u-button>
            </view>
        </view>
    </view>
</template>


<script>
export default {
    data() {
        return {
            user: {
                avatar: '../../static/images/my.png',
                name: '会飞的哈利波特',
                id: '1234567890',
                totalAssets: '¥2345.5678',
            },
            accountDetails: [
                { title: '合规保障', value: '0.0000' },
                { title: '可建仓(USDT)', value: '0.0000' },
                { title: '积分', value: '0.0000' }
            ],
			features: [
				{ image: '../../static/images/my/2.png', title: '充值', url: '/pages/recharge/recharge' },
				{ image: '../../static/images/my/3.png', title: '提现', url: '/pages/withdraw/withdraw' },
				{ image: '../../static/images/my/4.png', title: '余利宝', url: '/pages/yulibao/yulibao' }
			],
			services: [
				{ image: '../../static/images/my/5.png', title: '团队管理', url: '/pages/my/team/team' },
				{ image: '../../static/images/my/6.png', title: '实名认证', url: '/pages/verify/verify' },
				{ image: '../../static/images/my/7.png', title: '收益记录', url: '/path/to/profit' },
				{ image: '../../static/images/my/8.png', title: '邀请好友', url: '/pages/invite/invite' }
			],
			records: [
				{ image: '../../static/images/my/d1.png', title: '新股订单', url: '/path/to/orders' },
				{ image: '../../static/images/my/d2.png', title: '充值记录', url: '/path/to/rechargeHistory' },
				{ image: '../../static/images/my/d3.png', title: '提现记录', url: '/path/to/withdrawHistory' },
				{ image: '../../static/images/my/d4.png', title: '资金明细', url: '/path/to/fundsDetails' },
				{ image: '../../static/images/my/d5.png', title: '收款信息', url: '/path/to/paymentInfo' }
			],
            customStyle1: {
                height: '90rpx',
                margin: 'auto',
                color: '#FFFFFF',
                width: '670rpx',
                background: 'linear-gradient(#69EEAB,#21CCBA)',
            },
        };
    },
	methods: {
		navigateTo(url) {
			console.log(url)
			// 使用uni-app的跳转方式
			uni.navigateTo({
				url: url
			});
		},
		// ...其他方法...
	}
}
</script>

<style scoped lang="scss">
image {
    width: 50rpx;  /* 自定义宽度 */
    height: 50rpx; /* 自定义高度 */
}
page {
	background-color: #f0f2f5;
	padding-bottom: 500rpx;
}
</style>
