<template>
	<view class="order">
		<view class="tabs">
			<view class="tabs_left">
				<view class="tabs_left_item" :class="activeIndex === index ? 'active' : ''" v-for="(item,index) in tabsList" :key="index" @click="activeIndex = index">
					{{item}}
				</view>
			</view>
			<view class="tabs_right" @click="unShow = true">
				<image src="../../../static/images/otc/my_order/screen.png" mode=""></image>
			</view>
		</view>
		<view class="content">
			<view class="content_item" v-for="(item,index) in 3" :key="index">
				<view class="content_item_top">
					<view class="content_item_top_left">
						<view class="deal">
							购买
						</view>
						<view class="unit">
							USDT
						</view>
					</view>
					<view class="content_item_top_right">
						<view class="status">
							待支付
						</view>
						<uni-icons type="right"></uni-icons>
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						总额
					</view>
					<view class="content_item_cell_right">
						1000 CNY
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						单价
					</view>
					<view class="content_item_cell_right">
						7.20 CNY
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						数量
					</view>
					<view class="content_item_cell_right">
						14.24 USDT
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						订单号
					</view>
					<view class="content_item_cell_right">
						20230304123142154 
						<image src="../../../static/images/copy-icon.png" mode=""></image>
					</view>
				</view>
				<view class="content_item_cell">
					<view class="content_item_cell_left">
						创建时间
					</view>
					<view class="content_item_cell_right">
						2023-03-04 12:31:42
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
						<view class="popup_body_item_cell">
							<view class="popup_body_item_cell_left">
								待支付
							</view>
							<view class="popup_body_item_cell_right">
								<image src="../../../static/images/otc/my_order/checked.png" mode=""></image>
							</view>
						</view>
						<view class="popup_body_item_cell">
							<view class="popup_body_item_cell_left">
								待放币
							</view>
							<view class="popup_body_item_cell_right">
								<image src="../../../static/images/otc/my_order/unchecked.png" mode=""></image>
							</view>
						</view>
						<view class="popup_body_item_cell">
							<view class="popup_body_item_cell_left">
								申诉中
							</view>
							<view class="popup_body_item_cell_right">
								<image src="../../../static/images/otc/my_order/unchecked.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="popup_body_item">
						<view class="popup_body_item_title">
							交易类型
						</view>
						<view class="popup_body_item_cell">
							<view class="popup_body_item_cell_left">
								购买
							</view>
							<view class="popup_body_item_cell_right">
								<image src="../../../static/images/otc/my_order/unchecked.png" mode=""></image>
							</view>
						</view>
						<view class="popup_body_item_cell">
							<view class="popup_body_item_cell_left">
								出售
							</view>
							<view class="popup_body_item_cell_right">
								<image src="../../../static/images/otc/my_order/unchecked.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="buttons">
						<view class="buttons_left">
							清除条件
						</view>
						<view class="buttons_right">
							完成
						</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				tabsList: ['未完成', '已完成'],
				unShow: false, // 未完成弹窗
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f5f5f5;
	}
	.order {
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
					&_left,&_right {
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
