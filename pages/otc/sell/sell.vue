<template>
	<view style="background-color: #F5F5F5;height: 100vh;padding: 30rpx;">
		
		<view class="b_colfff" style="padding: 30rpx;border-radius: 12rpx;font-size:28rpx;">
				<view class="u-flex">
					<view style="color: #F75F52;margin-right: 20rpx;">出售</view>
					<view>USDT</view>
				</view>
				<view class="u-flex" style="margin-top:15rpx;">
					<view style="margin-right:30rpx;">单价</view>
					<view>¥7.04</view>
				</view>
				<view class="u-flex" style="margin-top:15rpx;">
					<view style="margin-right:30rpx;">数量</view>
					<view>12345 USDT</view>
				</view>
				
				<view class="u-flex" style="margin-top:15rpx;">
					<view style="margin-right:30rpx;">限额</view>
					<view>¥1000-¥50000</view>
				</view>
		</view>
		<view class="b_colfff" style="padding: 30rpx;margin-top: 20rpx;border-radius: 12rpx;">
				<view class="u-flex" style="color:#AFAFAF;font-size: 32rpx;font-weight: bold;">
					<view :class="{'xuan3':but==0}" style="" @click="getbut(0)">按金额</view>
					<view :class="{'xuan3':but==1}" style="margin-left:20rpx;"@click="getbut(1)">按数量</view>
				</view>
				<view class="u-flex" style="margin-top: 30rpx;font-size:32rpx;border-bottom: 4rpx solid #35CBA5;padding-bottom: 20rpx;">
					<view style="width: 440rpx;margin-right: 20rpx;">
						<input v-model="account" type="text" style="font-size:40rpx;" placeholder="0.00" />
					</view>
					<view>
						CNY
					</view>
					<view class="col35" style="margin-left: 20rpx;">
						全部
					</view>
				</view>
				<view class="u-flex" style="margin-top: 20rpx;">
					<view style="color: #999999;width: 320rpx;">接受数量</view>
					<view style="width: 300rpx;" class="u-text-right">- - USDT</view>
				</view>
				<view class="u-flex" style="margin-top: 20rpx;">
					<view style="color: #999999;width: 320rpx;">法币金额</view>
					<view style="width: 300rpx;" class="u-text-right">- - CNY</view>
				</view>
				<view style="margin-top:30rpx;">支付方式</view>
				<view class="u-flex" style="margin-top: 20rpx;">
					<view style="width: 320rpx;font-size: 32rpx;font-weight: bold;">银行卡</view>
					<view style="width: 300rpx;" class="u-text-right"><u-icon name="arrow-down
" color="#333333" size="28"></u-icon></view>
				</view>
		</view>
		
		<view class="b_colfff" style="padding: 30rpx;border-radius: 12rpx;margin-top: 20rpx;">
				<view style="font-size: 32rpx;font-weight: bold;">商家信息</view>
				<view class="u-flex" style="margin-top: 20rpx;">
					<view style="width: 320rpx;">付款时限</view>
					<view style="width: 300rpx;" class="u-text-right">20分钟</view>
				</view>
				<view class="u-flex" style="margin-top: 20rpx;">
					<view style="width: 320rpx;">付款时限</view>
					<view style="width: 300rpx;" class="u-text-right">20分钟</view>
				</view>
		</view>
		<view style="margin-top:100rpx;">
			<u-button  @click="reg()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;"
				:custom-style="customStyle1" shape="circle" type="primary">
				出售USDT</u-button>
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
					height: '90rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '670rpx',
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