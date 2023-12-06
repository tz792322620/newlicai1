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
							购买
						</view>
						<view class="sell" v-if="item.seller_id === userInfo.user_id">
							出售
						</view>
						<view class="unit">
							USDT
						</view>
					</view>
					<view class="content_item_top_right">
						<view class="status" v-if="item.status == 'Pending'&&item.payment_proof_status == 'Pending'">
							待上传付款截图
						</view>
						<view class="status" v-else-if="item.status == 'Pending'">
							未完成
						</view>
						<view class="complete" v-if="item.status == 'Completed'">
							已完成
						</view>
						<view class="status" v-if="item.status == 'Cancelled'">
							取消
						</view>
						<uni-icons type="right"></uni-icons>
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						总额
					</view>
					<view class="content_item_cell_right">
						{{item.trade_price * item.trade_amount}} {{item.trade_currency}}
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						单价
					</view>
					<view class="content_item_cell_right">
						{{item.trade_price}} {{item.trade_currency}}
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						数量
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
						创建时间
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
					订单筛选
				</view>
				<view class="popup_body">
					<view class="popup_body_item">
						<view class="popup_body_item_title">
							订单状态
						</view>
						<view class="popup_body_item_cell" v-for="(item,index) in orderStatusList"
							:key="index" @click="orderStatusIndex = index,status = item.status">
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
							交易类型
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
							下单日期
						</view>
						<view class="popup_body_item_time" @click="show = true">
							<view class="popup_body_item_time_box">{{startDate}}</view>
							至
							<view class="popup_body_item_time_box">{{endDate}}</view>
						</view>
						<view class="popup_body_item_date">
							<view class="popup_body_item_date_item" :class="dateRangeActiveIndex === index ? 'active' : ''" 
								v-for="(item,index) in dateRangeList" :key="index" @click="dateRangeChange(index)">
								{{item.desc}}
							</view>
						</view>
					</view>
					<view class="buttons">
						<view class="buttons_left">
							清除条件
						</view>
						<view class="buttons_right" @click="complete">
							完成
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<u-calendar v-model="show" :min-date="minDate" :mode="mode" @change="change" btn-type="success" active-bg-color="#35CBA5" range-color="#35CBA5" range-bg-color="rgba(53, 203, 165,0.13)">
			<view slot="tooltip">
				<view class="title" style="margin: 40rpx;">
					*选择{{dateRangeActiveIndex === 0 ? '7天' : dateRangeActiveIndex === 1 ? '3个月' : dateRangeActiveIndex === 2 ? '6个月' : dateRangeActiveIndex === 3 ? '1年' : ''}}内的时间范围
				</view>
			</view>
		</u-calendar>
	</view>
</template>

<script>
	import { getUserTrades } from '@/api/api.js'
	export default {
		data() {
			return {
				userInfo: JSON.parse(uni.getStorageSync('userInfo')),
				trade_type: 'Buy',
				start_date: '',
				end_date: '',
				status: 'Pending',
				orderList: [],
				startDate: '开始日期',
				endDate: '结束日期',
				show: false,
				mode: 'range',
				minDate: '',
				dateRangeActiveIndex: 0,
				dateRangeList: [{
					time: 0,
					desc: '近7天'
				},{
					time: 1,
					desc: '近3个月'
				},{
					time: 2,
					desc: '近6个月'
				},{
					time: 3,
					desc: '近1年'
				}],
				orderStatusIndex: 0,
				orderStatusList: [{
					desc: '未完成',
					status: 'Pending'
				},{
					desc: '已完成',
					status: 'Completed'
				},{
					desc: '取消',
					status: 'Cancelled'
				}],
				activeIndex: 0,
				tabsList: ['未完成', '已完成'],
				unShow: false, // 未完成弹窗
				unStatusActiveIndex: 0,
				unStatusList: ['待支付', '待放币', '支付中'],
				statusActiveIndex: 0,
				statusList: ['交易完成', '交易取消'],
				typeActiveIndex: 0,
				typeList: [{
					desc: '购买',
					type: 'Buy'
				},{
					desc: '出售',
					type: 'Sell'
				}]
			}
		},
		onShow() {
			var today = new Date() //当天
			today.setDate(today.getDate()-6)//七天前，时间戳
			this.minDate = today.toLocaleDateString().replaceAll('/','-')//格式化时间
			console.log(this.minDate)
		},
		onLoad() {
			this.getOrderList()
		},
		methods: {
			async getOrderList() {
				const res = await getUserTrades(this.trade_type,this.start_date,this.end_date,this.status)
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
					success: function () {
						console.log('success');
					}
				})
			},
			dateRangeChange(index) {
				this.dateRangeActiveIndex = index
				var today = new Date() //当天
				switch (index) {
					case 0:
						today.setDate(today.getDate()-6)//七天前，时间戳
					break;
					case 1:
						today.setMonth(today.getMonth()-3)//三个月前，时间戳
					break;
					case 2:
						today.setMonth(today.getMonth()-6)//六个月前，时间戳
					break;
					case 3:
						today.setFullYear(today.getFullYear()-1)//一年前，时间戳
					break;
				}
				this.minDate = today.toLocaleDateString().replaceAll('/','-')//格式化时间
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
