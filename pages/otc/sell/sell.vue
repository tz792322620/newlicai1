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
				<image style="width: 28rpx;height: 28rpx;margin-left: 20rpx;"
					src="../../../static/images/otc/sell/refresh.png" mode=""></image>
			</view>

			<view class="u-flex" style="margin-top:15rpx;">
				<view style="margin-right:30rpx;">限额</view>
				<view>¥1000-¥50000</view>
			</view>
		</view>
		<view class="b_colfff" style="padding: 30rpx;margin-top: 20rpx;border-radius: 12rpx;">
			<view class="u-flex" style="color:#AFAFAF;font-size: 32rpx;font-weight: bold;">
				<view :class="{'xuan3':but==0}" style="" @click="getbut(0)">按金额</view>
				<view :class="{'xuan3':but==1}" style="margin-left:20rpx;" @click="getbut(1)">按数量</view>
			</view>
			<view class="u-flex"
				style="margin-top: 30rpx;font-size:32rpx;border-bottom: 4rpx solid #35CBA5;padding-bottom: 20rpx;">
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
			<view class="u-flex" style="margin-top: 20rpx;justify-content: space-between;position: relative;">
				<view class="payment" style="width: 320rpx;font-size: 32rpx;font-weight: bold;">{{activePay}}</view>
				<view style="display: flex;" class="u-text-right" @click="isPay = !isPay">
					<view class="tips">
						2
					</view>
					<u-icon name="arrow-down" color="#333333" size="28"></u-icon>
				</view>
				<view class="u-flex-popup" v-if="isPay">
					<view class="u-flex-popup-content">
						<view class="u-flex-popup-content-item" v-for="(item,index) in payList" :key="index" 
						:class="activePayIndex == item.id ? 'active' : ''" @click="payClick(item)">
						<image :src="item.url" mode="" style="width: 40rpx; height: 42rpx;"></image>
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="b_colfff" style="padding: 30rpx;border-radius: 12rpx;margin-top: 20rpx;">
			<view style="font-size: 32rpx;font-weight: bold;">商家信息</view>
			<view class="u-flex" style="margin-top: 20rpx;">
				<view style="width: 320rpx;">付款时限</view>
				<view style="width: 300rpx;" class="u-text-right">20分钟</view>
			</view>
			<view class="u-flex" style="margin-top: 20rpx;">
				<view style="width: 320rpx;">商家昵称</view>
				<view style="width: 300rpx;" class="u-text-right">高启强</view>
			</view>
		</view>
		<view style="margin-top:100rpx;">
			<u-button @click="reg()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;"
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
						name: '精选区'
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
				but: 0,
				isPay: false, // 控制收款方式弹出隐藏
				activePay: '微信',
				activePayIndex: 0,
				payList: [{
					url: '../../../static/images/otc/publish_ad/0.png',
					id: 0,
					name: '微信'
				},{
					url: '../../../static/images/otc/publish_ad/1.png',
					id: 1,
					name: '支付宝'
				},{
					url: '../../../static/images/otc/publish_ad/2.png',
					id: 2,
					name: '银行卡'
				}]
			}
		},
		methods: {
			payClick(item) {
				this.activePay = item.name
				this.activePayIndex = item.id
				this.isPay = false
			},
			getbut(e) {
				this.but = e;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tips {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		background-color: #35cba5;
		text-align: center;
		line-height: 44rpx;
		color: #fff;
		margin-right: 22rpx;
	}
	.payment {
		position: relative;
		padding-left: 14rpx;

		&::before {
			content: '';
			position: absolute;
			width: 4rpx;
			height: 20rpx;
			background: #FFAC00;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.u-flex-popup {
		position: absolute;
		z-index: 10;
		width: 250rpx;
		top: 64rpx;
		right: -36rpx;
		// height: 316rpx;
		background-color: #fff;
		box-shadow: 0px 0px 20rpx 0px rgba(0,0,0,0.09);
		border-radius: 20rpx;
		&::before {
			content: '';
			position: absolute;
			top: -20rpx;
			right: 30rpx;
			width: 0;
			height: 0;
			border-left: 20rpx solid transparent;
			border-right: 20rpx solid transparent;
			border-bottom: 20rpx solid #fff;
		}
		.u-flex-popup-content {
			padding-top: 10rpx;
			.u-flex-popup-content-item {
				padding: 30rpx 0 30rpx 40rpx;
				display: flex;
				align-items: center;
				&.active {
					text {
						color: #35CBA5 !important;
					}
				}
				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 18rpx;
				}
				text {
					font-size: 28rpx;
					font-weight: 500;
					color: #333333;
				}
			}
		}
	}
</style>
