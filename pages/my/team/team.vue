<template>
	<view class="team">
		<view class="navbar">
			<image src="../../../static/images/hfh.png" mode="" @click="back"></image>
			<text>团队管理</text>
		</view>
		<view class="content">
			<view class="balance">
				<view class="balance_top">
					<view class="desc">
						团队余额(元)
					</view>
					<view class="date">
						日期选择
					</view>
				</view>
				<view class="balance_count">
					9,888,666.9999
				</view>
				<view class="balance_bottom">
					<view class="balance_bottom_item">
						<text>总充值</text>
						<text class="bold">20000.23</text>
					</view>
					<view class="balance_bottom_item">
						<text>团队流水</text>
						<text class="bold">20000.23</text>
					</view>
				</view>
			</view>
			<view class="price">
				<view class="price_item">
					<image src="../../../static/images/my/team/jine.png" mode=""></image>
					<view class="price_item_right">
						<view class="desc">
							提现总额
						</view>
						<view class="count">
							23368.55
						</view>
					</view>
				</view>
				<view class="price_item">
					<image src="../../../static/images/my/team/yongjin.png" mode=""></image>
					<view class="price_item_right">
						<view class="desc">
							提现总额
						</view>
						<view class="count">
							23368.55
						</view>
					</view>
				</view>
			</view>
			<view class="user-info">
				<view class="user-info_title">
					人员信息
				</view>
				<view class="user-info_item">
					<view class="info">
						<view class="info_avatar">
							
						</view>
						<view class="info_text">
							<view class="name">
								张美妞
							</view>
							<view class="phone">
								电话: 171****8032 <image src="../../../static/images/my/team/copy.png" mode=""></image>
							</view>
							<view class="date">
								注册日期:2023-03-14 20:20:00
							</view>
						</view>
					</view>
					<view class="data">
						<view class="data_item">
							<view class="desc">
								充值(¥)
							</view>
							<view class="count">
								0.000
							</view>
						</view>
						<view class="data_item">
							<view class="desc">
								提现(¥)
							</view>
							<view class="count">
								0.000
							</view>
						</view>
						<view class="data_item">
							<view class="desc">
								推荐人数
							</view>
							<view class="count">
								0.000
							</view>
						</view>
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
				
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.team {
		background: url('@/static/images/my/team/bgc-img.png') center center no-repeat;
		background-size: 100% 100%;
		padding-top: 88rpx;
		min-height: 100vh;
		.navbar {
			height: 88rpx;
			display: flex;
			align-items: center;
			image {
				width: 48rpx;
				height: 48rpx;
				margin-left: 40rpx;
			}
			text {
				margin-left: 218rpx;
				font-size: 36rpx;
				font-weight: 600;
				color: #333333;
			}
		}
		.content {
			padding: 30rpx 40rpx;
			.balance {
				height: 290rpx;
				background: #FFFFFF;
				border-radius: 24rpx;
				padding: 30rpx;
				&_top {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.desc {
						font-size: 28rpx;
						font-weight: 500;
						color: #999999;
						line-height: 40rpx;
					}
					.date {
						width: 144rpx;
						height: 50rpx;
						background: #E2F8F2;
						border-radius: 26rpx;
						text-align: center;
						line-height: 50rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #35CBA5;
					}
				}
				&_count {
					font-size: 60rpx;
					font-weight: normal;
					color: #333333;
					line-height: 60rpx;
					margin: 24rpx 0 62rpx;
				}
				&_bottom {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-right: 24rpx;
					&_item {
						font-size: 28rpx;
						font-weight: 400;
						color: #999999;
						line-height: 40rpx;
						.bold {
							font-weight: bold;
							margin-left: 20rpx;
							color: #000;
						}
					}
				}
			}
			.price {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 30rpx 0 60rpx;
				&_item {
					width: 324rpx;
					height: 180rpx;
					background: #FFFFFF;
					border-radius: 16rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					image {
						width: 80rpx;
						height: 80rpx;
						margin-right: 20rpx;
					}
					&_right {
						.desc {
							font-size: 24rpx;
							font-weight: 400;
							color: #333333;
							line-height: 34rpx;
							margin-bottom: 10rpx;
						}
						.count {
							font-size: 36rpx;
							color: #333333;
							line-height: 44rpx;
						}
					}
				}
			}
			.user-info {
				&_title {
					font-size: 32rpx;
					font-weight: 600;
					color: #333333;
					line-height: 44rpx;
					margin-bottom: 30rpx;
				}
				&_item {
					margin-bottom: 20rpx;
					padding: 30rpx;
					background: #FFFFFF;
					border-radius: 12rpx;
					.info {
						padding-bottom: 38rpx;
						display: flex;
						align-items: center;
						border-bottom: 2rpx solid #F3F3F3;
						&_avatar {
							width: 130rpx;
							height: 130rpx;
							border-radius: 50%;
							margin-right: 20rpx;
							background-color: #35CBA5;
							image {
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}
						&_text {
							.name {
								font-size: 32rpx;
								font-weight: 600;
								color: #333333;
								line-height: 44rpx;
							}
							.phone {
								font-size: 24rpx;
								font-weight: 600;
								color: #999999;
								line-height: 34rpx;
								margin: 10rpx 0;
								image {
									width: 24rpx;
									height: 24rpx;
									margin-left: 10rpx;
								}
							}
							.date {
								font-size: 20rpx;
								font-weight: 400;
								color: #999999;
								line-height: 28rpx;
							}
						}
					}
					.data {
						padding-top: 30rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						&_item {
							flex: 1;
							text-align: center;
							line-height: 40rpx;
							&:first-child {
								text-align: left;
							}
							&:last-child {
								text-align: right;
							}
							.desc {
								font-size: 24rpx;
								color: #999999;
							}
							.count {
								font-size: 32rpx;
								color: #333333;
							}
						}
					}
				}
			}
		}
	}
</style>
