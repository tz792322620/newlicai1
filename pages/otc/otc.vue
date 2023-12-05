<template>
	<view
		style="background-image: url('../static/images/hm_bg.png');background-repeat: no-repeat;background-size: 100%;height: 100vh;">
		<view style="height: 88rpx;display: flex;align-items: center;justify-content: center;">

			<view class="u-flex" style="">

				<view class="u-flex_left">
					<view style="display: flex;align-items: center; width: 100rpx;" @click="isAbP = !isAbP">
						<view style="font-size: 32rpx;width: 60%;">{{ab}}</view>
						<view>
							<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left:20rpx;"
								src="../../static/images/otc/1.png"></image>
						</view>						
					</view>
					<view class="u-flex-popup" v-if="isAbP">
						<view class="u-flex-popup-content">
							<view class="u-flex-popup-content-item" v-for="(item,index) in currencyList" :key="index" 
							:class="ab == item.ab ? 'active' : ''" @click="abClick(item)">
								<image :src="item.url" mode=""></image>
								<text>{{item.name}}</text>
							</view>
						</view>
					</view>
				</view>
				<view style="margin-left:140rpx;font-size: 36rpx;font-weight: bold;">OTC交易</view>
                <view class="u-flex_right">
					<u-icon style="margin-left: 200rpx;" name="more-dot-fill"
						color="#333333" size="36" @click="isTool = !isTool"></u-icon>
					<view class="u-flex-popup" v-if="isTool">
						<view class="u-flex-popup-content">
							<view class="u-flex-popup-content-item" v-for="(item,index) in toolsList" :key="index" @click="skip(item,index)">
								<image :src="item.url" mode=""></image>
								<text>{{item.name}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="b_colfff" style="padding: 40rpx;border-radius: 32rpx; 32rpx 0 0">
			<view class="u-flex" style="color:#AFAFAF;font-size: 32rpx;font-weight: bold;">
				<view :class="{'xuan1':but==0}" style="" @click="getbut(0)">买币</view>
				<view :class="{'xuan2':but==1}" style="margin-left:20rpx;"@click="getbut(1)">卖币</view>
			</view>
			<view style="background-color:#E1F7F2;color:#35CBA5;
				border-radius:12rpx;padding-left:10rpx;width:98rpx;margin-top: 20rpx;">
				USDT</view>
				
				<view style="color: #333333;margin-top: 20rpx;" v-for="(item,index) in otcList" :key="index">
					<view class="u-flex">
						<view>
							<image style="width:48rpx;height:48rpx;position: relative;margin-top:10rpx;margin-left:10rpx;"
								:src="$url + item.user_avatar"></image>
						</view>
						<view style="margin-left: 10rpx;width:300rpx;">{{item.user_nickname}}</view>
						<!-- <view style="width: 300rpx;color: #AFAFAF;font-size: 24rpx;" class="u-text-right">508订单｜94%</view> -->
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="font-size: 36rpx;color: #F75F52;width:500rpx;">¥{{item.price}}</view>
					<!-- <view style="width:160rpx;color: #AFAFAF;" class="u-text-right">在线</view> -->
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="color:#AFAFAF;margin-right: 20rpx;">数量</view>
						<view>{{item.amount}} USDT</view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;">
						<view style="color:#AFAFAF;margin-right: 20rpx;">限额</view>
						<view>¥{{item.min_amount}}-{{item.max_amount}} </view>
					</view>
					<view class="u-flex" style="margin-top: 10rpx;margin-bottom: 20rpx;">
						<view class="u-flex"style="width: 520rpx;">
							<view v-for="(item1,index1) in item.payment_list" :key="index1">
								<image v-if="item1 == '银行卡'" style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/3.png"></image>
								<image v-if="item1 == '支付宝'" style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/4.png"></image>
								<image v-if="item1 == '微信'" style="width:48rpx;height:48rpx;margin-left:10rpx;"
									src="../../static/images/otc/5.png"></image>
							</view>
						</view>
					
						<view>
							<u-button v-if="but === 0" ripple-bg-color="#fff" :ripple="true"
							style="font-size:28rpx;" :custom-style="customStyle2" shape="circle"
							type="primary">购买</u-button>
							<u-button v-if="but === 1" ripple-bg-color="#fff" :ripple="true"
							style="font-size:28rpx;" :custom-style="customStyle1" shape="circle"
							type="primary">出售</u-button>
						</view>
					</view>
					<u-line color="#F3F3F3"></u-line>
				</view>
				<u-modal v-model="modalShow" :zoom="false" confirm-color="#35CBA5" @confirm="confirm" show-cancel-button :title="'温馨提示'" :content="'请前往完成身份认证后，开启发布广告'"></u-modal>
		</view>
	</view>
</template>

<script>
	import { otcGetListing,getVerificationStatus } from '@/api/api.js'
	export default {
		data() {
			return {
				modalShow: false,
				isAbP: false, // 控制币种弹出隐藏
				ab: 'HKD', // 币种缩写
				// 币种集合
				currencyList: [{
					url: '../../static/images/otc/gangbi.png',
					ab: 'HKD',
					name: '港币'
				},{
					url: '../../static/images/otc/taibi.png',
					ab: 'TWD',
					name: '台币'
				},{
					url: '../../static/images/otc/renminbi.png',
					ab: 'CNY',
					name: '人民币'
				}],
				isTool: false, //是否显示操作弹窗
				// 操作集合
				toolsList: [{
					url: '../../static/images/otc/fabu.png',
					skipUrl: '/pages/otc/publish_ad/publish_ad',
					name: '发布广告'
				},{
					url: '../../static/images/otc/wode.png',
					skipUrl: '/pages/otc/my_ad/my_ad',
					name: '我的广告'
				},{
					url: '../../static/images/otc/shoukuan.png',
					skipUrl: '/pages/otc/payment/payment',
					name: '收款方式'
				},{
					url: '../../static/images/otc/dingdan.png',
					skipUrl: '/pages/otc/my_order/my_order',
					name: '我的订单'
				}],
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
				customStyle2: {
					height: '56rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '140rpx',
					background: '#35CBA5',
				},
				but:0,
				type: 'Buy',
				otcList: []
			}
		},
		onLoad() {
			this.getOtcList()
		},
		methods: {
			// 币种点击事件
			abClick(item) {
				this.ab = item.ab
				this.isAbP = false
			},
			// 右侧操作台点击事件
			async skip(item,index) {
				console.log(item)
				if (index === 0) {
					const res = await getVerificationStatus()
					console.log(res)
					if (!res.data || res.data.status != 'Verified') {
						this.modalShow = true
						return
					}
				}
				uni.navigateTo({
					url: item.skipUrl
				})
			},
			// modal框确认按钮点击事件(跳转实名认证)
			confirm() {
				uni.navigateTo({
					url: '/pages/verify/verify'
				})
			},
			getbut(e) {
				this.but= e;
				if (e == 0) {
					this.type = 'Buy'
				} else if (e == 1) {
					this.type = 'Sell'
				}
				this.getOtcList()
			},
			async getOtcList() {
				const res = await otcGetListing(this.type)
				if (res.code === 1) {
					this.otcList = res.data
					this.otcList.forEach(item => {
						item.payment_list = item.payment_method.split(',')
					})
					console.log(this.otcList)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.xuan1 {
		color: #35CBA5;
	}
	.u-flex_left,.u-flex_right {
		display: flex;
		align-items: center;
		position: relative;
		.u-flex-popup {
			position: absolute;
			z-index: 10;
			width: 250rpx;
			top: 84rpx;
			height: 316rpx;
			background-color: #fff;
			box-shadow: 0px 0px 20rpx 0px rgba(0,0,0,0.09);
			border-radius: 20rpx;
			&::before {
				content: '';
				position: absolute;
				top: -20rpx;
				left: 30rpx;
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
	}
	.u-flex_right {
		.u-flex-popup {
			height: 416rpx;
			right: -35rpx;
			top: 70rpx;
			&::before {
				left: 180rpx;
			}
		}
	}
</style>