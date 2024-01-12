<template>
	<view class="mission-center">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="tabbar">
			<image src="@/static/images/hfh.png" mode="" @click="back"></image>
			<text>{{$t('mission center')}}</text>
		</view>
		<view class="content" :style="[{marginTop: `${statusBarHeight*2 + 88}rpx`}]">
			<view class="list">
				<view class="list_item" 
				v-if="data.tasks.length != 0" v-for="(item,index) in data.tasks" :key="index"
				@click="item.is_qualified&&!item.is_completed ? goGet(item) : ''">
					<view class="list_item_left">
						<view class="count">
							{{item.reward_amount}}
						</view>
						<view class="unit">
							USDT
						</view>
					</view>
					<view class="list_item_center">
						<view class="one">
							<view class="one_name">
								{{item.task_name}}
							</view>
							<view class="one_right" :class="!item.is_qualified || (item.is_qualified&&item.is_completed) ? 'gray' : ''">
								<text v-if="!item.is_qualified">{{$t('unfinished')}}</text>
								<text v-else-if="item.is_qualified&&!item.is_completed">{{$t('To be collected')}}</text>
								<text v-else-if="item.is_qualified&&item.is_completed">{{$t('Received')}}</text>
							</view>
						</view>
						<view class="two">
							{{$t('Assessment team size')}}(<text>{{data.team_size}}</text>/{{item.team_size_required}})
						</view>
						<view class="three">
							{{$t('Team position amount')}}(<text>{{data.stock_order_amount}}</text>/{{item.team_building_amount}})
						</view>
					</view>
				</view>
			</view>
			<u-modal v-model="show" @confirm="confirm" :content="$t('isReceived')" :cancel-text="$t('cancel')"
				:confirm-text="$t('verify')" :show-title="false" show-cancel-button confirm-color="#35CBA5"></u-modal>
		</view>
	</view>
</template>

<script>
	import { getTaskList, claimTaskReward } from '@/api/api.js'
	export default {
		data() {
			return {
				statusBarHeight: 0, // 状态栏高度
				data: '',
				show: false,
				task_id: 0
			}
		},
		onShow() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			this.getList()
		},
		methods: {
			async getList() {
				uni.showLoading({
					mask: true
				})
				const res = await getTaskList()
				uni.hideLoading()
				console.log(res, '任务列表')
				if (res.code == 1) {
					this.data = res.data
				}
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			goGet(item) {
				this.task_id = item.id
				this.show = true
			},
			async confirm() {
				const res = await claimTaskReward({
					task_id: this.task_id
				})
				if (res.code == 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none',
						success: () => {
							setTimeout(() => {
								this.getList()
							}, 1000)
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mission-center {
		background: url('@/static/images/hm_bg.png') center center no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		padding-bottom: 30rpx;
		.tabbar {
			position: fixed;
			top: var(--status-bar-height);
			left: 0;
			height: 88rpx;
			padding: 20rpx 40rpx;
			display: flex;
			align-items: center;
			background: linear-gradient(to right, #e3fcf5 0%, #bcf6e7 100%);
			width: 100%;
			z-index: 1000;
			
			image {
				width: 48rpx;
				height: 48rpx;
			}
			
			text {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				// margin-left: 218rpx;
				font-size: 36rpx;
				font-weight: 600;
				color: #333333;
			}
		}
		.content {
			padding: 30rpx;
			.list{
				&_item {
					margin-bottom: 20rpx;
					display: flex;
					border-radius: 12rpx;
					background-color: #FFFFFF;
					&_left {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						width: 180rpx;
						height: 200rpx;
						background: url('@/static/images/my/missionCenter/list-item-left.png') center center no-repeat;
						background-size: 100% 100%;
						font-size: 44rpx;
						font-weight: 500;
						color: #3CBE9D;
						line-height: 60rpx;
						.unit {
							font-size: 24rpx;
						}
					}
					&_center {
						flex: 1;
						padding: 30rpx 20rpx 30rpx 40rpx;
						.one {
							display: flex;
							align-items: center;
							justify-content: space-between;
							&_name {
								font-size: 28rpx;
								font-weight: 500;
								color: #333333;
								line-height: 40rpx;
								margin-bottom: 12rpx;								
							}
							&_right {
								// width: 140rpx;
								height: 50rpx;
								padding: 0 28rpx;
								background: linear-gradient(90deg, #69EEAB 0%, #21CCBA 100%);
								border-radius: 46rpx;
								filter: blur(0px);
								line-height: 50rpx;
								text-align: center;
								font-size: 28rpx;
								font-weight: 500;
								color: #FFFFFF;
								&.gray {
									color: #666666;
									background: #F9F9F9;
								}
							}
						}
						.two,.three {
							font-size: 24rpx;
							font-weight: 400;
							color: #999999;
							line-height: 44rpx;
							text {
								color: #35CBA5;
							}
						}
					}
				}
			}
		}
	}
</style>
