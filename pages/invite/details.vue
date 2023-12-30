<template>
	<view class="invite-details">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="tabbar">
			<image src="../../static/images/hfh.png" mode="" @click="goBack()"></image>
			<text>{{$t('inviteRecords')}}</text>
			<!-- <image src="../../static/images/camera-icon.png" mode="" @click="toRecords"></image> -->
		</view>
		<view class="content">
			<view class="count">
				<view class="count_item">
					<image src="../../static/images/invite/total.png" mode=""></image>
					<view class="count_item_right">
						<view class="description">
							{{$t('headcount')}}
						</view>
						<view class="count-unit">
							{{dataInfo.direct_referrals_count}}{{$t('people')}}
						</view>
					</view>
				</view>
				<view class="count_item">
					<image src="../../static/images/invite/today.png" mode=""></image>
					<view class="count_item_right">
						<view class="description">
							{{$t('dailyInvitees')}}
						</view>
						<view class="count-unit">
							{{dataInfo.direct_referrals_today_count}}{{$t('people')}}
						</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="list_title">
					<view class="list_title_item">
						{{$t('username')}}
					</view>
					<view class="list_title_item">
						{{$t('newEquityInvestment')}}
					</view>
					<!-- <view class="list_title_item">
						新股收益
					</view> -->
					<view class="list_title_item">
						{{$t('realName')}}
					</view>
				</view>
				<u-empty v-if="dataInfo.direct_referrals_list.length === 0" :text="$t('depositEmpty')" margin-top="60"></u-empty>
				<view v-if="dataInfo.direct_referrals_list.length !== 0" class="list_cell" v-for="(item,index) in dataInfo.direct_referrals_list">
					<view class="list_cell_item">
						{{item.nickname}}
					</view>
					<view class="list_cell_item">
						{{item.stock_investment}}USDT
					</view>
					<!-- <view class="list_cell_item">
						+67%
					</view> -->
					<view class="list_cell_item">
						{{item.is_verified}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getDirectReferralsStats } from '@/api/api.js'
	export default {
		data() {
			return {
				dataInfo: ''
			};
		},
		onLoad() {
			this.getData()
		},
		methods: {
			goBack() {
				// 返回上一页
				uni.navigateBack({
					delta: 1,
				});
			},
			async getData() {
				const res = await getDirectReferralsStats()
				if (res.code === 1) {
					this.dataInfo = res.data
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.invite-details {
		background: url('../../static/images/invite/invite_details_bgc-image.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}
		
		.tabbar {
			display: flex;
			height: 88rpx;
			padding: 20rpx 40rpx;
		
			image {
				width: 48rpx;
				height: 48rpx;
			}
		
			text {
				flex: 1;
				text-align: center;
				font-size: 36rpx;
				font-weight: 600;
				color: #333333;
			}
		}
		.content {
			padding: 40rpx;
			.count {
				display: flex;
				justify-content: space-between;
				&_item {
					width: 324rpx;
					height: 180rpx;
					background: #FFFFFF;
					border-radius: 16rpx;
					padding: 50rpx 30rpx;
					display: flex;
					align-items: center;
					image {
						width: 80rpx;
						height: 80rpx;
						margin-right: 20rpx;
					}
					&_right {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.description {
							font-size: 24rpx;
							font-weight: 400;
							color: #999999;
						}
						.count-unit {
							font-size: 36rpx;
							color: #333333;
						}
					}
				}
			}
			.list {
				margin-top: 20rpx;
				background: #FFFFFF;
				box-shadow: 0px 4rpx 4rpx 0px rgba(240,240,240,0.5);
				border-radius: 24rpx;
				padding: 30rpx;
				&_title {
					display: flex;
					justify-content: space-between;
					margin-bottom: 10rpx;
					&_item {
						text-align: right;
						font-size: 24rpx;
						font-weight: 400;
						color: #999999;
						line-height: 34rpx;
						&:first-child {
							width: 260rpx;
							text-align: left;
						}
						&:nth-child(2) {
							width: 160rpx;
						}
					}
				}
				&_cell {
					border-bottom: 2rpx solid #F3F3F3;
					padding: 30rpx 0;
					display: flex;
					justify-content: space-between;
					&_item {
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
						line-height: 40rpx;
						text-align: right;
						&:first-child {
							width: 260rpx;
							text-align: left;
						}
						&:nth-child(2) {
							width: 160rpx;
						}
					}
				}
			}
		}
	}
</style>
