<template>
	<view
		style="background-image: url('../static/images/hm_bg.png');background-repeat: no-repeat;background-size: 100%;height: 100vh;">
		<view style="padding:30rpx;">

			<view class="u-flex">

				<view style="margin-left: 10rpx;width:600rpx;">
					<u-search bg-color="#FFFFFF" placeholder="请输入基金" :disabled="false" :show-action="false"></u-search>
				</view>
				<view>
					<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left: 30rpx;"
						src="../../static/images/hm1.png"></image>
				</view>

			</view>

			<view style="margin-top: 30rpx;">
				<u-subsection :list="list" mode="button" button-color="#E6F9F4" active-color="#35CBA5" bgColor="#ffffff"
					:current="current"></u-subsection>
			</view>

			<view style="margin-top: 30rpx;background-color: #ffffff;padding: 30rpx;border-radius: 12rpx;">
				<view>60MW光伏发电项目</view>
				<view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
					<view style="width: 300rpx;">收益率：<text style="color: #21BF90;">0.81%</text></view>
					<view style="width: 300rpx;" class="u-text-right">起购金额：：<text style="color: #21BF90;">180U</text>
					</view>
				</view>
				<view style="width:540rpx;margin-top: 6rpx;"><u-line-progress active-color="#6BEEAB" height="22"
						:percent="70"></u-line-progress></view>
				<view class="u-flex" style="margin-top: 20rpx;">

					<view style="background-color:#E1F7F2;color: #666666;font-size: 24rpx;
						border-radius: 8rpx;padding-left:10rpx;padding-right:30rpx;"><u-icon style="margin-right: 10rpx;" name="clock"
							color="#7ADDC4" size="24"></u-icon>投资周期10天</view>
					<view style="margin-left:200rpx;">
						<u-button  ripple-bg-color="#fff" :ripple="true"
							style="font-size:28rpx;" :custom-style="customStyle1" shape="circle"
							type="primary">立即购买</u-button>
					</view>
				</view>
			</view>

	<view style="margin-top: 30rpx;background-color: #ffffff;padding: 30rpx;border-radius: 12rpx;">
				<view>60MW光伏发电项目</view>
				<view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
					<view style="width: 300rpx;">收益率：<text style="color: #21BF90;">0.81%</text></view>
					<view style="width: 300rpx;" class="u-text-right">起购金额：：<text style="color: #21BF90;">180U</text>
					</view>
				</view>
				<view style="width:540rpx;margin-top: 6rpx;"><u-line-progress active-color="#6BEEAB" height="22"
						:percent="70"></u-line-progress></view>
				<view class="u-flex" style="margin-top: 20rpx;">

					<view style="background-color:#E1F7F2;color: #666666;font-size: 24rpx;
						border-radius: 8rpx;padding-left:10rpx;padding-right:30rpx;"><u-icon style="margin-right: 10rpx;" name="clock"
							color="#7ADDC4" size="24"></u-icon>投资周期10天</view>
					<view style="margin-left:200rpx;">
						<u-button ripple-bg-color="#fff" :ripple="true"
							style="font-size:28rpx;" :custom-style="customStyle1" shape="circle"
							type="primary">立即购买</u-button>
					</view>
				</view>
			</view>
			
			<view style="margin-top: 30rpx;background-color: #ffffff;padding: 30rpx;border-radius: 12rpx;">
				<view>60MW光伏发电项目</view>
				<view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
					<view style="width: 300rpx;">收益率：<text style="color: #21BF90;">0.81%</text></view>
					<view style="width: 300rpx;" class="u-text-right">起购金额：：<text style="color: #21BF90;">180U</text>
					</view>
				</view>
				<view style="width:540rpx;margin-top: 6rpx;"><u-line-progress active-color="#6BEEAB" height="22"
						:percent="70"></u-line-progress></view>
				<view class="u-flex" style="margin-top: 20rpx;">
			
					<view style="background-color:#E1F7F2;color: #666666;font-size: 24rpx;
						border-radius: 8rpx;padding-left:10rpx;padding-right:30rpx;"><u-icon style="margin-right: 10rpx;" name="clock"
							color="#7ADDC4" size="24"></u-icon>投资周期10天</view>
					<view style="margin-left:200rpx;">
						<u-button ripple-bg-color="#fff" :ripple="true"
							style="font-size:28rpx;" :custom-style="customStyle1" shape="circle"
							type="primary">立即购买</u-button>
					</view>
				</view>
			</view>
			<view style="margin-top: 30rpx;background-color: #ffffff;padding: 30rpx;border-radius: 12rpx;">
				<view>60MW光伏发电项目</view>
				<view class="u-flex" style="font-size: 24rpx;color: #AFAFAF;margin-top: 10rpx;">
					<view style="width: 300rpx;">收益率：<text style="color: #21BF90;">0.81%</text></view>
					<view style="width: 300rpx;" class="u-text-right">起购金额：：<text style="color: #21BF90;">180U</text>
					</view>
				</view>
				<view style="width:540rpx;margin-top: 6rpx;"><u-line-progress active-color="#6BEEAB" height="22"
						:percent="70"></u-line-progress></view>
				<view class="u-flex" style="margin-top: 20rpx;">
			
					<view style="background-color:#E1F7F2;color: #666666;font-size: 24rpx;
						border-radius: 8rpx;padding-left:10rpx;padding-right:30rpx;"><u-icon style="margin-right: 10rpx;" name="clock"
							color="#7ADDC4" size="24"></u-icon>投资周期10天</view>
					<view style="margin-left:200rpx;">
						<u-button  ripple-bg-color="#fff" :ripple="true"
							style="font-size:28rpx;" :custom-style="customStyle1" shape="circle"
							type="primary">立即购买</u-button>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '全部'
					},
					{
						name: '热门区'
					},
					{
						name: '新手区'
					},
					{
						name: '精英区'
					},
					{
						name: 'VIP区'
					}
				],
				current: 0,
				customStyle1: {
					height: '56rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '170rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},
			}
		},
		methods: {
			getxuan(e) {
				this.xuan = e;
			},
		}
	}
</script>

<style>

</style>