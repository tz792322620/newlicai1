<template>
	<view class="order">
		<nav-bar :title="$t('order')"></nav-bar>
		<view class="content">
			<view class="tab">
				<view class="tab_item" :class="currentIndex == index ? 'active' : ''" v-for="(item,index) in tabList"
					:key="index" @click="tabClick(index)">
					{{item}}
				</view>
			</view>
			<view class="list">
				<view class="list_item" v-for="(item,index) in list" :key="index">
					<view class="list_item_top">
						<view class="list_item_top_left">
							<view class="list_item_top_left_image">
								<image style="width: 86rpx;" :src="item.goods.image_url[0]" mode="widthFix"></image>
							</view>
							
							<view class="list_item_top_left_center">
								<view>{{item.order_number}}</view>
								<view>{{item.goods.goods_name}}</view>
							</view>
							
						</view>
						<view class="list_item_top_right" :class="item.order_status == '已完成' ? 'gray' : ''">
							{{statusFilters(item.order_status)}}
						</view>
					</view>
					<view class="list_item_bottom" v-if="item.order_status == '已发货'">
						<view class="select" @click="selectLogistics(item)">
							{{$t('check logistics')}}
						</view>
						<view class="confirm" @click="confirmGoods(item)">
							{{$t('Confirm receipt')}}
						</view>
					</view>
					<view class="list_item_bottom" v-if="item.order_status == '已完成'">
						<view class="select" @click="selectLogistics(item)">
							{{$t('check logistics')}}
						</view>
					</view>
				</view>
			</view>
			<u-popup v-model="logisticsShow" mode="bottom" border-radius="12" :closeable="true">
				<scroll-view style="height: 1000rpx;" :scroll-y="true">
					<view class="popup-content">
						<view class="title">
							{{$t('Logistics information')}}
						</view>
						<view class="expressDelivery-info">
							<view class="expressDelivery-info_left">
								<view class="company">
									<view class="name">
										{{currentItem.express_company}}
									</view>
									<view class="copy" @click="copy">
										{{$t('Copy')}}
									</view>
								</view>
								<view class="order-number">
									{{currentItem.tracking_number}}
								</view>
							</view>
							<view class="expressDelivery-info_right">
								<image src="@/static/images/home/pointsMall/express-delivery.png" mode=""></image>
							</view>
						</view>
						<view class="line"></view>
						<view class="steps">
							<timeAxis :dataArray="dataArray"></timeAxis>
						</view>
					</view>
				</scroll-view>
			</u-popup>
			<u-modal v-model="show" @confirm="confirm" :content="$t('Confirm receipt or not?')" :cancel-text="$t('cancel')"
				:confirm-text="$t('verify')" :show-title="false" show-cancel-button confirm-color="#35CBA5"></u-modal>
		</view>
	</view>
</template>

<script>
	import {
		getOrderRecordsList,
		cxexpress,
		confirmReceipt
	} from '@/api/api.js'
	import timeAxis from '@/components/time_axis/time_axis.vue'
	export default {
		data() {
			return {
				show: false,
				currentIndex: 0,
				status: '',
				list: [],
				logisticsShow: false,
				currentItem: '', // 当前选中的订单项
				dataArray: []
			}
		},
		components: {
			timeAxis
		},
		computed: {
			tabList() {
				return [this.$t('allOrder'),this.$t('Awaiting shipment'),this.$t('Awaiting receipt'),this.$t('Completed')]
			}
		},
		onLoad(params) {
			this.currentIndex = params.index
			this.tabClick(Number(params.index))
		},
		methods: {
			copy() {
				let that = this
				uni.setClipboardData({
					data: that.currentItem.tracking_number,
					showToast: false,
					success: function() {
						uni.showToast({
							title: that.$t('contentCopied'),
							icon: 'none'
						})
						// console.log('success');
					}
				})
			},
			statusFilters(value) {
				if (value == '已支付') {
					return this.$t('Awaiting shipment')
				} else if (value == '已发货') {
					return this.$t('Awaiting receipt')
				} else if (value == '已完成') {
					return this.$t('Completed')
				}
			},
			confirmGoods(item) {
				this.currentItem = item
				this.show = true
			},
			async confirm() {
				const res = await confirmReceipt({
					order_id: this.currentItem.id
				})
				if (res.code == 1) {
					this.getOrderList()
				}
			},
			selectLogistics(item) {
				this.logisticsShow = true
				this.currentItem = item
				this.getLogisticsInfo()
			},
			async getLogisticsInfo() {
				const res = await cxexpress({
					expressname: this.currentItem.express_company,
					expresssn: this.currentItem.tracking_number
				})
				if (res.code == 1) {
					this.dataArray = res.data.data
				}
			},
			async getOrderList() {
				uni.showLoading({
					mask: true
				})
				const res = await getOrderRecordsList(this.status)
				uni.hideLoading()
				if (res.code == 1) {
					this.list = res.data
					this.list.forEach((item,index) => {
						item.goods.image_url = item.goods.image_url.split(',')
					})
					console.log(this.list, '订单列表')
				}
			},
			tabClick(index) {
				this.currentIndex = index
				switch (index) {
					case 0:
						this.status = ''
						break;
					case 1:
						this.status = '已支付'
						break;
					case 2:
						this.status = '已发货'
						break;
					case 3:
						this.status = '已完成'
						break;
					default:
						this.status = ''
						break;
				}
				this.getOrderList()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		background: url('@/static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		.content {
			// background-color: #fbfbfb;
			min-height: 100vh;
			padding: 208rpx 30rpx 0;

			.popup-content {
				.title {
					padding: 34rpx 0 0 30rpx;
					font-size: 28rpx;
					font-weight: 600;
					color: #333333;
					line-height: 40rpx;
					margin-bottom: 10rpx;
				}

				.line {
					width: 100%;
					height: 10rpx;
					background-color: #fbfbfb;
				}

				.steps {
					padding: 20rpx 70rpx 30rpx 30rpx;
				}

				.expressDelivery-info {
					padding: 30rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					&_left {
						.company {
							display: flex;
							align-items: center;
							margin-bottom: 16rpx;

							.name {
								font-size: 24rpx;
								font-weight: 400;
								color: #333333;
								line-height: 34rpx;
							}

							.copy {
								padding: 0 20rpx;
								height: 34rpx;
								border-radius: 46rpx;
								border: 2rpx solid #35CBA5;
								filter: blur(0px);
								font-size: 20rpx;
								font-weight: 500;
								color: #35CBA5;
								line-height: 30rpx;
								text-align: center;
								margin-left: 10rpx;
							}
						}

						.order-number {
							font-size: 20rpx;
							font-weight: 400;
							color: #333333;
							line-height: 28rpx;
						}
					}

					&_right {
						width: 270rpx;
						height: 120rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}

			.tab {
				display: flex;
				align-items: center;

				&_item {
					flex: 1;
					font-size: 28rpx;
					font-weight: 500;
					color: #999999;
					line-height: 40rpx;
					margin-right: 60rpx;
					text-align: center;
					&.active {
						color: #35CBA5;
					}
				}
			}

			.list {
				margin-top: 40rpx;

				&_item {
					padding: 20rpx;
					background-color: #ffffff;
					border-radius: 12rpx;
					margin-bottom: 40rpx;
					box-shadow: 0px 4px 4px 0px rgba(240,240,240,0.5);
					&_top {
						display: flex;

						&_left {
							flex: 1;
							display: flex;
							align-items: center;

							&_image {
								width: 160rpx;
								height: 160rpx;
								background-color: #f9f9f9;
								border-radius: 12rpx;
								margin-right: 20rpx;
								display: flex;
								align-items: center;
								justify-content: center;
							}

							&_center {
								flex: 1;
								font-size: 24rpx;
								font-weight: 400;
								color: #000000;
								line-height: 34rpx;
							}
						}

						&_right {
							font-size: 24rpx;
							font-weight: 500;
							color: #35CBA5;
							line-height: 34rpx;

							&.gray {
								color: #999999;
							}
						}
					}

					&_bottom {
						display: flex;
						justify-content: flex-end;
						margin-top: 10rpx;

						.select,
						.confirm {
							height: 50rpx;
							border-radius: 46rpx;
							border: 2rpx solid #35CBA5;
							filter: blur(0px);
							padding: 0 22rpx;
							line-height: 46rpx;
							text-align: center;
							font-size: 24rpx;
							font-weight: 500;
							color: #35CBA5;
						}

						.select {
							margin-right: 20rpx;
							border-color: #E6E6E6;
							color: #666666;
						}
					}
				}
			}
		}
	}
</style>
