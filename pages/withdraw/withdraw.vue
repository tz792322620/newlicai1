<template>
	<view class="withdraw">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="tabbar">
			<image src="../../static/images/hfh.png" mode="" @click="goBack()"></image>
			<text>提现</text>
			<image src="../../static/images/camera-icon.png" mode="" @click="toRecords"></image>
		</view>
		<view class="content">
			<view class="network">
				<view class="title">
					充值网络
				</view>
				<view class="select" @click="show = true">
					<view class="select_value">
						<u-input type="text" placeholder="选择充值网络" disabled v-model="address_value" />
					</view>
					<uni-icons type="bottom"></uni-icons>
				</view>
			</view>
			<view class="network">
				<view class="title">
					提现地址
				</view>
				<view class="select" @click="show = true">
					<view class="select_value" style="width: 100%;">
						<u-input type="text" placeholder="请输入提币地址" v-model="data.withdrawal_address" />
					</view>
					<!-- <uni-icons type="bottom"></uni-icons> -->
				</view>
			</view>
			<view class="network">
				<view class="title">
					提币数量
				</view>
				<view class="select" @click="show = true">
					<view class="select_value">
						<u-input type="text" placeholder="请输入提币数量" v-model="data.withdrawal_amount"
							@confirm="confirm" />
					</view>
					<view class="right">
						USDT <text>全部</text>
					</view>
				</view>
				<view class="description">
					可用:{{withdrawable_amount}}USDT
				</view>
			</view>
			<view class="buttons">
				<view class="description">
					到账数量:<text>{{account_amount}}USDT</text>
				</view>
				<view class="button" @click="submit">
					提交
				</view>
			</view>
			<u-popup v-model="show" mode="bottom" border-radius="30" closeable>
				<view class="popup-content">
					<view class="title">
						选择网络
					</view>
					<view class="tabs">
						<view class="tabs_item" v-for="(item,index) in networkList" :key="index"
							:class="index === activeIndex ? 'active' : ''" @click="tabsClick(item,index)">
							<view class="tabs_item_left">
								{{item.name}}
							</view>
							<view class="tabs_item_right" v-if="activeIndex === index">
								<image src="../../static/images/my/true.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo,
		calculateFee,
		withdraw
	} from '@/api/api.js'
	export default {
		data() {
			return {
				withdrawable_amount: 0, // 可用数量
				account_amount: 0, // 到账数量
				data: {
					withdrawal_amount: '',
					withdrawal_address: '',
					network_type: ''
				},
				address_value: '',
				show: false,
				activeIndex: -1,
				address: '',
				networkList: [{
					name: 'USDT-ERC20',
					value: 'erc20'
				}, {
					name: 'USDT-TRC20',
					value: 'trc20'
				}]
			};
		},
		onLoad() {
			this.getUser()
		},
		methods: {
			async confirm(e) {
				console.log(e)
				// if (e) {
				e = !e ? 0 : e
				const res = await calculateFee({
					amount: e
				})
				if (res.code === 1) {
					this.account_amount = e - res.data.fee
				} else {
					this.account_amount = 0
				}
				// }
			},
			// 获取用户个人信息
			async getUser() {
				const res = await getUserInfo()
				if (res.code === 1) {
					this.withdrawable_amount = res.data.withdrawable_amount
				}

			},
			goBack() {
				// 返回上一页
				uni.navigateBack({
					delta: 1,
				});
			},
			toRecords() {
				uni.navigateTo({
					url: '/pages/withdraw/records/records'
				})
			},
			tabsClick(item, index) {
				this.data.network_type = item.value
				this.address_value = item.name
				this.activeIndex = index
				this.show = false
			},
			async submit() {
				if (this.$u.test.isEmpty(this.data.network_type)) {
					return uni.showToast({
						title: '请选择充值网络',
						icon: "none"
					})
				}
				if (this.$u.test.isEmpty(this.data.withdrawal_address)) {
					return uni.showToast({
						title: '请输入提币地址',
						icon: "none"
					})
				}
				if (this.$u.test.isEmpty(this.data.withdrawal_amount)) {
					return uni.showToast({
						title: '请输入提币数量',
						icon: "none"
					})
				}
				const res = await withdraw(this.data)
				if (res.code === 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					uni.navigateTo({
						url: '/pages/withdraw/records/records'
					})
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.withdraw {
		/deep/.u-iconfont {
			color: #9a9a9a !important;
		}

		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.tabbar {
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
			padding: 40rpx;

			.network {
				margin-bottom: 40rpx;

				.title {
					font-size: 24rpx;
					font-weight: 500;
					color: #333333;
					line-height: 34rpx;
					margin-bottom: 20rpx;
				}

				.select {
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 90rpx;
					background: #F4F5F7;
					border-radius: 10rpx;
					padding: 0 20rpx;

					&_value {
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
					}

					.right {
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;

						text {
							color: #21BF90;
							margin-left: 10rpx;
						}
					}
				}

				.description {
					font-size: 24rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 34rpx;
					margin-top: 10rpx;
				}
			}

			.buttons {
				margin-top: 400rpx;

				.description {
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
					line-height: 34rpx;

					text {
						color: #35CBA5;
					}
				}

				.button {
					margin-top: 8rpx;
					height: 90rpx;
					background: #35CBA5;
					border-radius: 12rpx;
					text-align: center;
					line-height: 90rpx;
					font-size: 32rpx;
					font-weight: 600;
					color: #FFFFFF;
				}
			}

			.popup-content {
				.title {
					padding: 34rpx 40rpx;
					border-bottom: 2rpx solid #F3F3F3;
					font-size: 28rpx;
					font-weight: 600;
					color: #333333;
				}

				.tabs {
					padding: 40rpx 40rpx 70rpx 40rpx;

					&_item {
						padding: 0 20rpx;
						height: 90rpx;
						background: #FFFFFF;
						border-radius: 10rpx;
						border: 2rpx solid #EEEEEE;
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 40rpx;

						&.active {
							border-color: #35CBA5;
						}

						&_left {
							font-size: 28rpx;
							font-weight: 400;
							color: #333333;
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
				}
			}
		}
	}
</style>
