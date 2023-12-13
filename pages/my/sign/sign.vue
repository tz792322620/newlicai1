<template>
	<view class="sign">
		<view class="bgc-image">
			<view class="navbar">
				<image src="../../../static/images/bfh.png" mode="" @click="back"></image>
				<text>{{$t('signIn')}}</text>
			</view>
		</view>
		<view class="content">
<!-- 			<view class="title">
				20<text>{{$t('points')}}</text>
			</view> -->
			<!-- <view class="sub-title">
				明日签到可得30积分
			</view>	 -->
			<view class="sign_box">
				<view class="sign_box_title">
					{{$t('check-in')}} <text>{{signinDays}}</text> {{$t('days')}}
				</view>
				<view class="sign_box_list">
					<view class="sign_box_list_item" v-for="(item,index) in 7" :key="index" :class="{'expired' : index  < signinDays,'active' : index === activeIndex}" @click="tabClick(index)">
						<view class="days">
							{{$t('the')}}{{index + 1}}{{$t('days')}}
						</view>
						<image v-if="index < 6" src="../../../static/images/my/sign/unchecked.png" mode=""></image>
						<!-- <view class="points">
							{{index + 1}}0积分
						</view> -->
					</view>
				</view>
				<view class="sign-in" @click="sign">
					{{$t('punchIn')}}
				</view>
			</view>
			<view class="records">
				<view class="records_title">
					{{$t('signRecord')}}
				</view>
				<view class="records_cell" v-for="(item,index) in signRecords" :key="index">
					<view class="records_cell_left">
						<view class="records_cell_left_desc">
							{{$t('signSuccess')}}
						</view>
						<view class="records_cell_left_date">
							{{item.signin_date}}
						</view>
					</view>
					<view class="records_cell_right">
						+{{item.reward_points}}{{$t('points')}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getConsecutiveSigninDay,signIn,currentUserSignin } from '@/api/api.js'
	export default {
		data() {
			return {
				activeIndex: 0,
				signinDays: 0,
				signRecords: []
			}
		},
		onLoad() {
			this.getSigninDays()
			this.activeIndex = this.signinDays
			this.getSignRecords()
		},
		methods: {
			// 获取用户连续签到天数
			async getSigninDays() {
				const res = await getConsecutiveSigninDay()
				if (res.code === 1) {
					this.signinDays = res.data.days
				}
				console.log(res)
			},
			tabClick(index) {
				if (index < this.signinDays) {
					return
				}
				this.activeIndex = index
			},
			async sign() {
				const res =await signIn()
				if (res.code === 1) {
					this.getSignRecords()
					this.getSigninDays()
				}
				console.log(res)
			},
			// 获取签到记录
			async getSignRecords() {
				const res = await currentUserSignin()
				if(res.code === 1) {
					this.signRecords = res.data
				}
				console.log(res)
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sign {
		.bgc-image {
			width: 100%;
			height: 314rpx;
			background: url('@/static/images/my/sign/bgc-img.png') center center no-repeat;
			background-size: 100% 100%;
			padding-top: 562rpx;
			position: absolute;
			.navbar {
				position: absolute;
				top: 88rpx;
				left: 0;
				display: flex;
				align-items: center;
				height: 88rpx;
				image {
					width: 48rpx;
					height: 48rpx;
					margin-left: 40rpx;
				}
				text {
					margin-left: 278rpx;
					font-size: 36rpx;
					font-weight: 600;
					color: #fff;
				}
			}
		}
		.content {
			padding: 0 40rpx;
			position: absolute;
			top: 206rpx;
			.title {
				font-size: 84rpx;
				font-weight: bold;
				color: #FFFFFF;
				line-height: 76rpx;
				text {
					font-size: 26rpx;
				}
			}
			.sub-title {
				font-size: 24rpx;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 34rpx;
			}
			.sign_box {
				margin-top: 50rpx;
				width: 670rpx;
				height: 684rpx;
				background: #FFFFFF;
				box-shadow: 0px 4rpx 12rpx 0px rgba(0,0,0,0.05);
				border-radius: 24rpx;
				padding: 52rpx 30rpx 58rpx;
				&_title {
					font-size: 32rpx;
					font-weight: 500;
					color: #333333;
					line-height: 44rpx;
					margin-bottom: 40rpx;
					text {
						color: #FB6D45;
					}
				}
				&_list {
					display: flex;
					flex-wrap: wrap;
					&_item {
						width: 130rpx;
						height: 160rpx;
						border-radius: 12rpx;
						background-color: #FAFAFA;
						margin-right: 30rpx;
						margin-bottom: 20rpx;
						border: 2rpx solid #ECECEC;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						.days {
							font-size: 20rpx;
							font-weight: 800;
							color: #333333;
							line-height: 28rpx;
						}
						image {
							width: 48rpx;
							height: 48rpx;
							margin: 10rpx 0;
						}
						.points {
							font-size: 20rpx;
							font-weight: 800;
							color: #999999;
							line-height: 28rpx;
						}
						&.expired {
							background-color: #ffbaa1;
							.days {
								color: #fff;
							}
							.points {
								color: #fff;
							}
							position: relative;
							&::before {
								content: '';
								width: 80rpx;
								height: 50rpx;
								position: absolute;
								left: 50%;
								top: 50%;
								transform: translate(-50%,-50%);
								background: url('../../../static/images/my/sign/expired.png') center center no-repeat;
								background-size: 100% 100%;
								z-index: 10;
							}
						}
						&:nth-child(4) {
							margin-right: 0;
						}
						
						&:nth-child(7) {
							margin-right: 0;
							width: 290rpx;
							justify-content: flex-start;
							align-items: flex-start;
							padding: 22rpx 0 0 32rpx;
							background: url('../../../static/images/my/sign/seven.png') center center no-repeat;
							background-size: 100% 100%;
							.days {
								margin-bottom: 10rpx;
							}
							&.active {
								background: url('../../../static/images/my/sign/seven_selected.png') center center no-repeat;
								background-size: 100% 100%;
								border: none;
								.days {
									color: #fff;
								}
								.points {
									color: #fff;
								}
							}
						}
						&.active {
							background: linear-gradient(230deg, #FFC5AB 0%, #FFAE96 100%);
							border-color: #ffbda3;
							.days {
								color: #fff;
							}
							.points {
								color: #fff;
							}
						}
					}
				}
				.sign-in {
					margin-top: 60rpx;
					height: 90rpx;
					background: linear-gradient(230deg, #FF8D5A 0%, #F5422A 100%);
					border-radius: 16rpx;
					text-align: center;
					line-height: 90rpx;
					font-size: 32rpx;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
			.records {
				margin-top: 60rpx;
				padding-bottom: 100rpx;
				&_title {
					font-size: 28rpx;
					font-weight: 600;
					color: #333333;
					line-height: 40rpx;
				}
				&_cell {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0;
					border-bottom: 2rpx solid #F3F3F3;
					&_left {
						&_desc {
							font-size: 28rpx;
							font-weight: 400;
							color: #333333;
							line-height: 40rpx;
							margin-bottom: 4rpx;
						}
						&_date {
							font-size: 24rpx;
							font-weight: 400;
							color: #999999;
							line-height: 34rpx
						}
					}
					&_right {
						font-size: 28rpx;
						font-weight: 500;
						color: #F75F52;
						line-height: 40rpx;
					}
				}
			}
		}
	}
</style>
