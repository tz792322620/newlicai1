<template>
	<view
		style="background-image: url('../static/images/hm_bg.png');background-repeat: no-repeat;background-size: 100%;height: 100vh;">
		<view style="padding:30rpx;">

			<view class="u-flex">

				<view style="font-size: 32rpx;">CNY</view>
				<view>
					<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left:10rpx;"
						src="../../static/images/otc/1.png"></image>
				</view>
				<view style="margin-left:140rpx;font-size: 36rpx;font-weight: bold;">OTC交易</view>
                <view>
					<u-icon style="margin-left: 200rpx;" name="more-dot-fill"
						color="#333333" size="36"></u-icon>
				</view>
			</view>

		</view>
		<view class="b_colfff" style="padding: 40rpx;">
			<view class="u-flex" style="color:#AFAFAF;font-size: 32rpx;font-weight: bold;">
				<view :class="{'xuan2':but==0}" style="" @click="getbut(0)">买币</view>
				<view :class="{'xuan2':but==1}" style="margin-left:20rpx;"@click="getbut(1)">卖币</view>
			</view>
			<view style="background-color:#E1F7F2;color:#35CBA5;
				border-radius:12rpx;padding-left:10rpx;width:98rpx;margin-top: 20rpx;">
				USDT</view>
				
				<view style="color: #333333;margin-top: 20rpx;">
					<view class="u-flex">
						<view>
							<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left:10rpx;"
								src="../../static/images/otc/2.png"></image>
						</view>
						<view style="margin-left: 10rpx;width:300rpx;">江浙财阀</view>
						<view style="width: 300rpx;color: #AFAFAF;font-size: 24rpx;" class="u-text-right">508订单｜94%</view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="font-size: 36rpx;color: #F75F52;width:500rpx;">¥6.87</view>
					<view style="width:160rpx;color: #AFAFAF;" class="u-text-right">在线</view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="color:#AFAFAF;margin-right: 20rpx;">数量</view>
						<view>15896.0000 USDT</view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="color:#AFAFAF;margin-right: 20rpx;">限额</view>
						<view>¥15,000.00-30,000.00 </view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;margin-bottom: 20rpx;">
						<view class="u-flex"style="width: 520rpx;">
							<view>
								<image style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/3.png"></image>
							</view>
							<view>
								<image style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/4.png"></image>
							</view>
							<view>
								<image style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/5.png"></image>
							</view>
						</view>
					
						<view><u-button  ripple-bg-color="#fff" :ripple="true"
							style="font-size:28rpx;" :custom-style="customStyle1" shape="circle"
							type="primary" @click="$tools.jump('sell/sell')">出售</u-button></view>
					</view>
					<u-line color="#F3F3F3"></u-line>
				</view>
				
				<view style="color: #333333;margin-top: 20rpx;">
					<view class="u-flex">
						<view>
							<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left:10rpx;"
								src="../../static/images/otc/2.png"></image>
						</view>
						<view style="margin-left: 10rpx;width:300rpx;">江浙财阀</view>
						<view style="width: 300rpx;color: #AFAFAF;font-size: 24rpx;" class="u-text-right">508订单｜94%</view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="font-size: 36rpx;color: #F75F52;width:500rpx;">¥6.87</view>
					<view style="width:160rpx;color: #AFAFAF;" class="u-text-right">在线</view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="color:#AFAFAF;margin-right: 20rpx;">数量</view>
						<view>15896.0000 USDT</view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="color:#AFAFAF;margin-right: 20rpx;">限额</view>
						<view>¥15,000.00-30,000.00 </view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;margin-bottom: 20rpx;">
						<view class="u-flex"style="width: 520rpx;">
							<view>
								<image style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/3.png"></image>
							</view>
							<view>
								<image style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/4.png"></image>
							</view>
							<view>
								<image style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/5.png"></image>
							</view>
						</view>
					
						<view><u-button  ripple-bg-color="#fff" :ripple="true"
							style="font-size:28rpx;" :custom-style="customStyle1" shape="circle"
							type="primary">出售</u-button></view>
					</view>
					<u-line color="#F3F3F3"></u-line>
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
					width: '140rpx',
					background: 'linear-gradient(#F75F52,#F75F52)',
				},
				but:0,
			}
		},
		methods: {
			getbut(e) {
				this.but= e;
			},
		}
	}
</script>

<style>

</style>