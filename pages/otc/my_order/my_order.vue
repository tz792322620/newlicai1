<template>
	<view class="order">
		<view class="tabs">
			<!-- <view class="tabs_left">
				<view class="tabs_left_item" :class="activeIndex === index ? 'active' : ''"
					v-for="(item,index) in tabsList" :key="index" @click="activeIndex = index">
					{{item}}
				</view>
			</view> -->
			<view class="tabs_right" @click="unShow = true">
				<image src="../../../static/images/otc/my_order/screen.png" mode=""></image>
			</view>
		</view>
		<view class="content">
			<view class="content_item" v-for="(item,index) in orderList" :key="index">
				<view class="content_item_top">
					<view class="content_item_top_left">
						<view class="deal" v-if="item.buyer_id === userInfo.user_id">
							{{$t('buy')}}
						</view>
						<view class="sell" v-if="item.seller_id === userInfo.user_id">
							{{$t('sell')}}
						</view>
						<view class="unit">
							USDT
						</view>
					</view>
					<view class="content_item_top_right" @click="toOrderStatus(item)">
						<view class="status" v-if="item.status == 'Pending'&&item.payment_proof_status == 'Pending'">
							{{$t('paymentScreenshot')}}
						</view>
						<view class="status" v-else-if="item.status == 'Pending'">
							{{$t('unfinished')}}
						</view>
						<view class="complete" v-if="item.status == 'Completed'">
							{{$t('completed')}}
						</view>
						<view class="status" v-if="item.status == 'Cancelled'">
							{{$t('cancel')}}
						</view>
						<uni-icons type="right"></uni-icons>
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						{{$t('totalAmount')}}
					</view>
					<view class="content_item_cell_right">
						{{item.trade_price * item.trade_amount}} {{item.trade_currency}}
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						{{$t('unitPrice')}}
					</view>
					<view class="content_item_cell_right">
						{{item.trade_price}} {{item.trade_currency}}
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						{{$t('quantity')}}
					</view>
					<view class="content_item_cell_right">
						{{item.trade_amount}} USDT
					</view>
				</view>
				<!-- <view class="content_item_cell">
					<view class="content_item_cell_left">
						订单号
					</view>
					<view class="content_item_cell_right">
						20230304123142154
						<image src="../../../static/images/copy-icon.png" mode="" @click="copy(item)"></image>
					</view>
				</view> -->
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						{{$t('creationTime')}}
					</view>
					<view class="content_item_cell_right">
						{{item.created_at}}
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="unShow" mode="bottom" border-radius="30" closeable close-icon-color="#999999">
			<view class="popup_content">
				<view class="title">
					{{$t('orderFilter')}}
				</view>
				<view class="popup_body">
					<view class="popup_body_item">
						<view class="popup_body_item_title">
							{{$t('orderStatus')}}
						</view>
						<view class="popup_body_item_cell" v-for="(item,index) in orderStatusList" :key="index"
							@click="orderStatusIndex = index,status = item.status">
							<view class="popup_body_item_cell_left">
								{{item.desc}}
							</view>
							<view class="popup_body_item_cell_right">
								<image v-if="orderStatusIndex === index"
									src="../../../static/images/otc/my_order/checked.png" mode=""></image>
								<image v-else src="../../../static/images/otc/my_order/unchecked.png" mode=""></image>
							</view>
						</view>
						<!-- <view class="popup_body_item_cell" v-if="activeIndex === 0" v-for="(item,index) in unStatusList"
							:key="index" @click="unStatusActiveIndex = index">
							<view class="popup_body_item_cell_left">
								{{item}}
							</view>
							<view class="popup_body_item_cell_right">
								<image v-if="unStatusActiveIndex === index"
									src="../../../static/images/otc/my_order/checked.png" mode=""></image>
								<image v-else src="../../../static/images/otc/my_order/unchecked.png" mode=""></image>
							</view>
						</view>
						<view class="popup_body_item_cell" v-if="activeIndex === 1" v-for="(item,index) in statusList"
							:key="index" @click="statusActiveIndex = index">
							<view class="popup_body_item_cell_left">
								{{item}}
							</view>
							<view class="popup_body_item_cell_right">
								<image v-if="statusActiveIndex === index"
									src="../../../static/images/otc/my_order/checked.png" mode=""></image>
								<image v-else src="../../../static/images/otc/my_order/unchecked.png" mode=""></image>
							</view>
						</view> -->
					</view>
					<view class="popup_body_item">
						<view class="popup_body_item_title">
							{{$t('transactionType')}}
						</view>
						<view class="popup_body_item_cell" v-for="(item,index) in typeList" :key="index"
							@click="typeActiveIndex = index,trade_type = item.type">
							<view class="popup_body_item_cell_left">
								{{item.desc}}
							</view>
							<view class="popup_body_item_cell_right">
								<image v-if="typeActiveIndex === index"
									src="../../../static/images/otc/my_order/checked.png" mode=""></image>
								<image v-else src="../../../static/images/otc/my_order/unchecked.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="popup_body_item">
						<view class="popup_body_item_title">
							{{$t('orderDate')}}
						</view>
						<view class="popup_body_item_time" @click="show = true">
							<view class="popup_body_item_time_box">{{startDate}}</view>
							-
							<view class="popup_body_item_time_box">{{endDate}}</view>
						</view>
						<view class="popup_body_item_date">
							<view class="popup_body_item_date_item"
								:class="dateRangeActiveIndex === index ? 'active' : ''"
								v-for="(item,index) in dateRangeList" :key="index" @click="dateRangeChange(index)">
								{{item.desc}}
							</view>
						</view>
					</view>
					<view class="buttons">
						<view class="buttons_left">
							{{$t('clearConditions')}}
						</view>
						<view class="buttons_right" @click="complete">
							{{$t('complete')}}
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<u-calendar v-model="show" :min-date="minDate" :mode="mode" @change="change" btn-type="success"
			active-bg-color="#35CBA5" range-color="#35CBA5" range-bg-color="rgba(53, 203, 165,0.13)">
			<view slot="tooltip">
				<view class="title" style="margin: 40rpx;">
					*{{$t('choose')}}{{dateRangeActiveIndex === 0 ? $t('sevenDays') : dateRangeActiveIndex === 1 ? $t('threeMonths') : dateRangeActiveIndex === 2 ? $t('sixMonths') : dateRangeActiveIndex === 3 ? $t('oneYears') : ''}}{{$t('timeFrame')}}
				</view>
			</view>
		</u-calendar>
	</view>
</template>

<script>
	import {
		getUserTrades
	} from '@/api/api.js'
	export default {
		data() {
			return {
				userInfo: JSON.parse(uni.getStorageSync('userInfo')),
				trade_type: '',
				start_date: '',
				end_date: '',
				status: '',
				orderList: [],
				show: false,
				mode: 'range',
				minDate: '',
				dateRangeActiveIndex: 0,
				orderStatusIndex: -1,
				activeIndex: 0,
				tabsList: ['未完成', '已完成'],
				unShow: false, // 未完成弹窗
				unStatusActiveIndex: 0,
				unStatusList: ['待支付', '待放币', '支付中'],
				statusActiveIndex: 0,
				statusList: ['交易完成', '交易取消'],
				typeActiveIndex: -1
			}
		},
		computed: {
			startDate() {
				return this.$t('startDate')
			},
			endDate() {
				return this.$t('endDate')
			},
			orderStatusList() {
				return [{
					desc: this.$t('unfinished'),
					status: 'Pending'
				}, {
					desc: this.$t('completed'),
					status: 'Completed'
				}, {
					desc: this.$t('cancel'),
					status: 'Cancelled'
				}]
			},
			typeList() {
				return [{
					desc: this.$t('buy'),
					type: 'Buy'
				}, {
					desc: this.$t('sell'),
					type: 'Sell'
				}]
			},
			dateRangeList() {
				return [{
					time: 0,
					desc: this.$t('sevenDays')
				}, {
					time: 1,
					desc: this.$t('threeMonths')
				}, {
					time: 2,
					desc: this.$t('sixMonths')
				}, {
					time: 3,
					desc: this.$t('oneYears')
				}]
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('order')
			})
			var today = new Date() //当天
			today.setDate(today.getDate() - 6) //七天前，时间戳
			this.minDate = today.toLocaleDateString().replaceAll('/', '-') //格式化时间
			console.log(this.minDate)
		},
		onLoad() {
			this.getOrderList()
		},
		methods: {
			toOrderStatus(item) {
				const dateTime = Date.parse(new Date())/1000 // 获取当前时间戳秒级
				const currentTimestamp = 1200 - (dateTime - item.create_time)
				console.log(currentTimestamp)
				if (item.status == 'Pending'&&item.payment_proof_status == 'Pending') {
					uni.navigateTo({
						url: `/pages/otc/order/pay/pay?timestamp=${currentTimestamp}&id=${item.trade_id})}`
					})
					return
				}
				if (item.status == 'Pending'&&item.payment_proof_status != 'Pending') {
					return uni.navigateTo({
						url: `/pages/otc/order/collect/collect?timestamp=${currentTimestamp}&id=${item.trade_id}`
					})
					return
				}
				if (item.status!= 'Pending') {
					uni.navigateTo({
						url: `/pages/otc/order/status/status?id=${item.trade_id}`
					})
				}
			},
			async getOrderList() {
				uni.showLoading({
					mask: true
				})
				const res = await getUserTrades(this.trade_type, this.start_date, this.end_date, this.status)
				uni.hideLoading()
				if (res.code === 1) {
					this.orderList = res.data
				}
				console.log(res, '订单======>')
			},
			complete() {
				this.getOrderList()
				this.unShow = false
			},
			copy(item) {
				uni.setClipboardData({
					data: 'hello',
					success: function() {
						console.log('success');
					}
				})
			},
			dateRangeChange(index) {
				this.dateRangeActiveIndex = index
				var today = new Date() //当天
				switch (index) {
					case 0:
						today.setDate(today.getDate() - 6) //七天前，时间戳
						break;
					case 1:
						today.setMonth(today.getMonth() - 3) //三个月前，时间戳
						break;
					case 2:
						today.setMonth(today.getMonth() - 6) //六个月前，时间戳
						break;
					case 3:
						today.setFullYear(today.getFullYear() - 1) //一年前，时间戳
						break;
				}
				this.minDate = today.toLocaleDateString().replaceAll('/', '-') //格式化时间
				console.log(this.minDate)
			},
			change(e) {
				console.log(e);
				this.startDate = e.startDate
				this.endDate = e.endDate
				this.start_date = e.startDate
				this.end_date = e.endDate
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f5f5f5;
	}

	.order {
		/deep/.u-icon__icon {
			color: #999999 !important;
		}

		/deep/.u-btn--success {
			border-color: #35CBA5;
			background-color: #35CBA5;
		}

		.tabs {
			margin-bottom: 20rpx;
			background-color: #fff;
			padding: 30rpx 40rpx 22rpx 40rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #999999;
			line-height: 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			&_left {
				display: flex;
				align-items: center;

				&_item {
					margin-right: 60rpx;

					&.active {
						font-size: 32rpx;
						font-weight: 600;
						color: #35CBA5;
						position: relative;

						&::before {
							content: '';
							position: absolute;
							bottom: -26rpx;
							left: 50%;
							transform: translateX(-50%);
							width: 40rpx;
							height: 4rpx;
							background: #35CBA5;
							border-radius: 20rpx;
						}
					}
				}
			}

			&_right {
				width: 48rpx;
				height: 48rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.content {
			&_item {
				background-color: #fff;
				padding: 30rpx 40rpx;
				margin-bottom: 20rpx;

				&_top {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 10rpx;

					&_left {
						display: flex;
						align-items: center;
						font-size: 32rpx;
						font-weight: 600;
						line-height: 44rpx;

						.deal {
							color: #35CBA5;
							margin-right: 10rpx;
						}

						.sell {
							color: #F75F52;
							margin-right: 10rpx;
						}

						.unit {
							color: #333333;
						}
					}

					&_right {
						display: flex;
						align-items: center;

						.status {
							font-size: 32rpx;
							font-weight: 500;
							color: #F75F52;
							line-height: 44rpx;
							margin-right: 10rpx;
						}

						.complete {
							font-size: 32rpx;
							font-weight: 500;
							color: #35CBA5;
							line-height: 44rpx;
							margin-right: 10rpx;
						}
					}
				}

				&_cell {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 30rpx;

					&_left {
						font-size: 28rpx;
						font-weight: 400;
						color: #999999;
						line-height: 40rpx;
					}

					&_right {
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
						line-height: 40rpx;
						display: flex;
						align-items: center;

						image {
							width: 48rpx;
							height: 48rpx;
							margin-left: 8rpx;
						}
					}
				}
			}
		}

		.popup_content {
			.title {
				padding: 34rpx 0 20rpx 40rpx;
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				line-height: 40rpx;
				border-bottom: 2rpx solid #F3F3F3;
			}

			.popup_body {
				padding: 0 40rpx 20rpx 40rpx;

				&_item {
					padding: 30rpx 0;
					border-bottom: 2rpx solid #F3F3F3;

					&_title {
						font-size: 28rpx;
						font-weight: 600;
						color: #333333;
						line-height: 40rpx;
					}

					&_time {
						margin: 20rpx 0;
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;

						&_box {
							width: 300rpx;
							height: 60rpx;
							background: #F4F5F7;
							border-radius: 12rpx;
							text-align: center;
							line-height: 60rpx;
							font-size: 28rpx;
							font-weight: 400;
							color: #999999;
						}
					}

					&_date {
						display: flex;
						align-items: center;
						justify-content: space-between;

						&_item {
							width: 150rpx;
							height: 60rpx;
							background: #F4F5F7;
							border-radius: 12rpx;
							text-align: center;
							line-height: 60rpx;
							font-size: 24rpx;
							font-weight: 400;
							color: #333333;

							&.active {
								background: #E2F8F2;
								color: #35CBA5;
							}
						}
					}

					&_cell {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 16rpx;

						&_left {
							font-size: 28rpx;
							font-weight: 400;
							color: #333333;
							line-height: 40rpx;
						}

						&_right {
							width: 36rpx;
							height: 36rpx;

							image {
								width: 100%;
								height: 100%;
							}
						}
					}
				}

				.buttons {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 52rpx;

					&_left,
					&_right {
						width: 320rpx;
						height: 70rpx;
						border-radius: 12rpx;
						text-align: center;
						line-height: 70rpx;
						font-size: 32rpx;
						font-weight: 600;
					}

					&_left {
						border: 2rpx solid #35CBA5;
						color: #35CBA5;
					}

					&_right {
						background: #35CBA5;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>
