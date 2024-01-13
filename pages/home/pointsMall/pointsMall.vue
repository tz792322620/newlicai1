<template>
	<view class="pointsMall">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="tabbar">
			<image src="@/static/images/hfh.png" mode="" @click="back"></image>
			<text>{{$t('Points Mall')}}</text>
			<image src="@/static/images/home/pointsMall/right-icon.png" mode=""></image>
		</view>
		<view class="content" :style="[{marginTop: `${statusBarHeight*2 + 88}rpx`}]">
			<view class="box1">
				<view class="box1_left">
					<view class="points">
						{{Number(pointsCount).toFixed(2)}}<text>{{$t('points')}}</text>
					</view>
					<view class="desc">
						{{$t('pointsHints')}}
					</view>
				</view>
				<view class="box1_right">
					<image src="@/static/images/home/pointsMall/currency.png" mode=""></image>
				</view>
			</view>
			<view class="box2">
				<view class="box2_top">
					<view class="myOrder">
						{{$t('myOrder')}}
					</view>
					<view class="more" @click="toOrder">
						{{$t('more')}} <u-icon name="arrow-right-double" size="24" color="#35cba6"></u-icon>
					</view>
				</view>
				<view class="box2_bottom">
					<view class="item">
						<view class="item_image">
							<image src="@/static/images/home/pointsMall/ship.png" mode=""></image>
						</view>
						<view class="item_text">
							{{$t('Awaiting shipment')}}
						</view>
					</view>
					<view class="item">
						<view class="item_image active" :data-attr="shipped_count" v-if="shipped_count != 0">
							<image src="@/static/images/home/pointsMall/shouhuo.png" mode=""></image>
						</view>
						<view class="item_image" v-else>
							<image src="@/static/images/home/pointsMall/shouhuo.png" mode=""></image>
						</view>
						<view class="item_text">
							{{$t('Awaiting receipt')}}
						</view>
					</view>
					<view class="item">
						<view class="item_image">
							<image src="@/static/images/home/pointsMall/complete.png" mode=""></image>
						</view>
						<view class="item_text">
							{{$t('Completed')}}
						</view>
					</view>
				</view>
			</view>
			<view class="box3">
				<view class="title">
					<view class="title_img">
						<image src="@/static/images/home/pointsMall/exchange-img.png" mode=""></image>
					</view>
					<view class="title_text">
						{{$t('Exchange good things')}}
					</view>
					<view class="title_img">
						<image src="@/static/images/home/pointsMall/exchange-img.png" mode=""></image>
					</view>
				</view>
				<view class="list">
					<view class="list_item" :class="index === activeIndex ? 'active' : ''" v-for="(item,index) in goodsList" :key="index" @click="activeIndex = index">
						<view class="list_item_left">
							<image :src="item.image_url[0]" mode=""></image>
						</view>
						<view class="list_item_right">
							<view class="list_item_right_title">
								{{item.goods_name}}
							</view>
							<view class="list_item_right_desc">
								{{$t('limit')}}{{item.stock_quantity}}{{$t('pieces')}}
							</view>
							<view class="list_item_right_bottom">
								<view class="points-count">
									{{item.points_required}}{{$t('points')}}
								</view>
								<view class="exchange" @click="toDetails(item)">
									{{$t('exchange')}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getUserInfo,getUserOrderStatusCount,getGoodsList} from '@/api/api.js'
	export default {
		data() {
			return {
				statusBarHeight: 0, // 状态栏高度
				activeIndex: 0, // 当前选中兑换下标
				pointsCount: 0, // 积分数量
				shipped_count: 0, // 待收货订单数量
				goodsList: [] // 商品列表
			}
		},
		onShow() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			this.getUserInfo()
			this.getOrderCount()
			this.getGoodsList()
		},
		methods: {
			async getUserInfo() {
				const res = await getUserInfo()
				if (res.code == 1) {
					this.pointsCount = res.data.gift_points
				}
			},
			async getOrderCount() {
				const res = await getUserOrderStatusCount()
				if (res.code == 1) {
					this.shipped_count = res.data.shipped_count
				}
			},
			async getGoodsList() {
				const res = await getGoodsList()
				console.log(res, '商品列表')
				if (res.code == 1) {
					this.goodsList = res.data
					this.goodsList.forEach((item,index) => {
						item.image_url = item.image_url.split(',')
					})
					console.log(this.goodsList)
				}
			},
			toOrder() {
				uni.navigateTo({
					url: `/pages/home/pointsMall/order/order`
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			toDetails(item) {
				uni.navigateTo({
					url: `/pages/home/pointsMall/goodsDetails/goodsDetails?id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pointsMall {
		background: url('@/static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		padding-bottom: 30rpx;
		.tabbar {
			position: fixed;
			width: 100%;
			left: 0;
			top: var(--status-bar-height);
			background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);
			z-index: 999;
			display: flex;
			height: 88rpx;
			padding: 20rpx 40rpx;
			justify-content: space-between;
		
			image {
				width: 48rpx;
				height: 48rpx;
			}
		
			text {
				font-size: 36rpx;
				font-weight: 600;
				color: #333333;
			}
		}
		.content {
			padding: 0 30rpx;
			.box1 {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 40rpx 0;
				&_left {
					.points {
						font-size: 64rpx;
						font-weight: bold;
						color: #333333;
						text {
							font-size: 28rpx;
							font-weight: 400;
							margin-left: 10rpx;
						}
					}
					.desc {
						font-size: 28rpx;
						font-weight: 400;
						color: #999999;
					}
				}
				&_right {
					width: 240rpx;
					height: 196rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
			.box2 {
				background: #FFFFFF;
				border-radius: 12rpx;
				&_top {
					display: flex;
					justify-content: space-between;
					padding: 20rpx;
					border-bottom: 2rpx solid #F9F9F9;
					.myOrder {
						font-size: 28rpx;
						font-weight: 500;
						color: #000000;
					}
					.more {
						font-size: 24rpx;
						font-weight: 400;
						color: #35CBA5;
						display: flex;
						align-items: center;
						.img {
							width: 40rpx;
							height: 40rpx;
							background-color: #35CBA5;
							image {
								width: 100%;
								height: 100%;
							}
						}
					}
				}
				&_bottom {
					padding: 30rpx 60rpx;
					display: flex;
					justify-content: space-between;
					.item {
						display: flex;
						flex-direction: column;
						align-items: center;
						&_image {
							width: 60rpx;
							height: 60rpx;
							margin-bottom: 10rpx;
							image {
								width: 100%;
								height: 100%;
							}
						}
						&_text {
							font-size: 24rpx;
							font-weight: 400;
							color: #333333;
							line-height: 34rpx;
						}
					}
					// .item:nth-child(2) {
					// }
					.item_image {
						&.active {
							position: relative;
							&::after {
								content: attr(data-attr);
								position: absolute;
								top: 0rpx;
								right: 0rpx;
								width: 24rpx;
								height: 24rpx;
								border-radius: 50%;
								background-color: #FA4535;
								text-align: center;
								line-height: 24rpx;
								font-size: 16rpx;
								color: #FFFFFF;
							}
						}
					}
				}
			}
			.box3 {
				margin-top: 40rpx;
				.title {
					display: flex;
					// align-items: center;
					justify-content: center;
					&_img {
						width: 38rpx;
						height: 22rpx;
						image {
							width: 100%;
							height: 100%;
						}
					}
					&_text {
						margin: 0 20rpx;
						font-size: 32rpx;
						font-weight: 500;
						color: #000000;
					}
				}
				.list {
					&_item {
						margin-top: 30rpx;
						display: flex;
						padding: 20rpx;
						background: #FFFFFF;
						border-radius: 12rpx;
						border: 2rpx solid rgba(53,203,165,0.4);
						&.active {
							border-color: #35CBA5;
						}
						&_left {
							width: 180rpx;
							height: 204rpx;
							margin-right: 18rpx;
							background-color: #f9f9f9;
							border-radius: 12rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							image {
								width: 124rpx;
								height: 172rpx;
							}
						}
						&_right {
							flex: 1;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							&_title {
								font-size: 28rpx;
								font-weight: 500;
								color: #000000;
								line-height: 40rpx;
							}
							&_desc {
								font-size: 24rpx;
								font-weight: 500;
								color: #999999;
								line-height: 34rpx;
							}
							&_bottom {
								display: flex;
								justify-content: space-between;
								align-items: center;
								.points-count {
									font-size: 28rpx;
									font-weight: 500;
									color: #35CBA5;
									line-height: 40rpx
								}
								.exchange {
									height: 44rpx;
									font-size: 32rpx;
									font-weight: 500;
									color: #FFFFFF;
									line-height: 44rpx;
									padding: 0 38rpx;
									background: linear-gradient(90deg, #69EEAB 0%, #21CCBA 100%);
									border-radius: 46rpx;
									filter: blur(0px);
								}
							}
						}
					}
				}
			}
		}
	}
</style>
