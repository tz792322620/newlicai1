<template>
	<view class="team">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navbar">
			<image src="../../../static/images/hfh.png" mode="" @click="back"></image>
			<text v-if="!title">{{$t('teamManagement')}}</text>
			<text v-else>{{title}}</text>
		</view>
			<!-- <uni-nav-bar statusBar fixed left-icon="left" backgroundColor="transparent" :title="$t('teamManagement')" :border="false" @clickLeft="back"></uni-nav-bar> -->
		<view class="content" v-if="dataInfo">
			<view class="balance">
				<view class="balance_top">
					<view class="desc">
						
						{{$t('teamBalance')}}
						<image style="width: 36rpx;height: 36rpx;margin-left: 10rpx;"
							:src="`../../../static/images/my/v${dataInfo.team_level}.png`" mode=""></image>
					</view>
					<view class="date" @click="show = true">
						{{$t('chooseDate')}}
					</view>
				</view>
				<view class="balance_count">
					{{(dataInfo.available_amount).toFixed(2)}}
				</view>

				<view class="balance_bottom">
					<view class="balance_bottom_item">
						<text>{{$t('totalTopUp')}}</text>
						<text class="bold">{{dataInfo.recharge_amount}}</text>
					</view>
					<view class="balance_bottom_item">
						<text>{{$t('headcount')}}</text>
						<text class="bold">{{dataInfo.team_member_count}}</text>
					</view>
				</view>
			</view>
			<view class="price">
				<view class="price_item">
					<image src="../../../static/images/my/team/jine.png" mode=""></image>
					<view class="price_item_right">
						<view class="desc">
							{{$t('totalWithdrawal')}}
						</view>
						<view class="count">
							{{dataInfo.withdrawal_amount}}
						</view>
					</view>
				</view>
				<view class="price_item">
					<image src="../../../static/images/my/team/yongjin.png" mode=""></image>
					<view class="price_item_right">
						<view class="desc">
							{{$t('orderCommission')}}
						</view>
						<view class="count">
							{{dataInfo.stock_order_amount}}
						</view>
					</view>
				</view>
			</view>
			<view class="user-info">
				<view class="user-info_title">
					{{$t('personnelInfo')}}
				</view>
				<u-empty v-if="list.length === 0" :text="$t('depositEmpty')" margin-top="100"></u-empty>
				<view v-if="list.length !== 0" class="user-info_item" v-for="(item,index) in list" :key="index" @click="toNext(item)">
					<view class="info">
						<view class="info_avatar">
							<image :src="item.referrer.avatar" mode=""></image>
						</view>
						<view class="info_text">
							<view class="name" style="display: flex;align-items: center;">
								<text>{{item.referrer.nickname}}</text>
								<!-- <image style="width: 36rpx;height: 36rpx;margin-left: 10rpx;"
									:src="`../../../static/images/my/v${item.referrer.team_level}.png`" mode=""></image> -->
									<!-- <text v-if="item.referrer.team_level === 0" style="color: #999999;margin-left: 10rpx;font-size: 20rpx;">普通会员</text> -->
							</view>
							<view class="phone" style="display: flex;align-items: center;">
								<view style="display: flex;align-items: center;"> 
									<text>{{$t('temeLevel')}}:</text>
									<image style="width: 36rpx;height: 36rpx;margin-left: 10rpx;"
									:src="`../../../static/images/my/v${item.referrer.team_level}.png`" mode=""></image>
								</view>
								<view style="display: flex;align-items: center;margin-left: 40rpx;">
									<text>{{$t('personalLevel')}}:</text>
									<image style="width: 36rpx;height: 36rpx;margin-left: 10rpx;"
									:src="`../../../static/images/my/v${item.referrer.level}.png`" mode=""></image>
								</view>
							</view>
<!-- 							<view class="date">
								{{$t('registerDate')}}:{{item.referrer.createtime | timestampFilter}}
							</view> -->
						</view>
					</view>
					<view class="data">
						<view class="data_item">
							<view class="desc">
								{{$t('recharge')}}(USDT)
							</view>
							<view class="count">
								{{item.team_stats.recharge_amount}}
							</view>
						</view>
						<view class="data_item">
							<view class="desc">
								{{$t('withdraw')}}(USDT)
							</view>
							<view class="count">
								{{item.team_stats.withdrawable_amount}}
							</view>
						</view>
						<view class="data_item">
							<view class="desc">
								{{$t('referrals')}}
							</view>
							<view class="count">
								{{item.team_stats.direct_referrals_count}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-calendar v-model="show" :mode="mode" @change="change" btn-type="success" active-bg-color="#35CBA5" range-color="#35CBA5" range-bg-color="rgba(53, 203, 165,0.13)">
			<view slot="tooltip">
				<view class="title" style="margin: 40rpx;">
					{{$t('chooseDate')}}
				</view>
			</view>
		</u-calendar>
	</view>
</template>

<script>
	import { getTeamStats,getDirectReferrals } from '@/api/api.js'
	export default {
		data() {
			return {
				show: false,
				mode: 'range',
				data: {
					start_date: '',
					end_date: '',
					user_id: ''
				},
				dataInfo: '',
				list: [],
				title: ''
			}
		},
		onLoad(params) {
			console.log(params)
			if (params.id) {
				this.data.user_id = params.id
			}
			if (params.title) {
				this.title = params.title
			}
			this.getData()
			this.getList()
		},
		onShow() {
			
		},
		methods: {
			toNext(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/my/team/team?id=${item.referrer.id}&title=${item.referrer.nickname}`
				})
			},
			copy(phone) {
				let that = this
				uni.setClipboardData({
					data: phone,
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
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			change(e) {
				console.log(e);
				this.data.start_date = e.startDate
				this.data.end_date = e.endDate
				this.getData()
			},
			async getData() {
				const res = await getTeamStats(this.data)
				 console.log(res)
				 if (res.code === 1) {
					 this.dataInfo = res.data
				 }
			},
			async getList() {
				const res = await getDirectReferrals(this.data.user_id)
				if (res.code === 1) {
					this.list = res.data.first_level
				}
				console.log(this.list)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.team {
		background: url('@/static/images/my/team/bgc-img.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		/deep/.u-icon__icon {
			color: #999999 !important;
		}
		/deep/.u-btn--success {
			border-color: #35CBA5;
			background-color: #35CBA5;
		}
		.status_bar {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;
			height: var(--status-bar-height);
			width: 100%;
			background: linear-gradient(to right, #ecfaf6 0%, #f8f9f8 100%) !important;
		}
		.title {
			// padding: 34rpx 0 20rpx 40rpx;
			font-size: 28rpx;
			font-weight: 600;
			color: #333333;
			line-height: 40rpx;
			// border-bottom: 2rpx solid #F3F3F3;
		}
		.navbar {
			position: fixed;
			top: var(--status-bar-height);
			left: 0;
			height: 88rpx;
			display: flex;
			align-items: center;
			background: linear-gradient(to right, #ecfaf6 0%, #f8f9f8 100%);
			width: 100%;
			z-index: 1000;
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
			padding-top: 168rpx;
			padding-left: 40rpx;
			padding-right: 40rpx;
			padding-bottom: 30rpx;
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
