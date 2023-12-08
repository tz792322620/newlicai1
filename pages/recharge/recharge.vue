<template>
	<view class="recharge">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="tabbar">
			<image src="../../static/images/hfh.png" mode="" @click="back"></image>
			<text>充值</text>
			<image src="../../static/images/camera-icon.png" mode="" @click="toRecords"></image>
		</view>
		<view class="content">
			<view class="Q-code" v-if="address">
				<uqrcode ref="uqrcode" canvas-id="qrcode" :value="address" size="160" :options="{ margin: 10 }"></uqrcode>
			</view>
			<view class="address" v-if="address">
				<view class="desc">
					充值地址
				</view>
				<view class="value">
					{{address}}
					<image src="../../static/images/copy-icon.png" mode="" @click="copy"></image>
				</view>
			</view>
			<view class="network">
				<view class="title">
					充值网络
				</view>
				<view class="select" @click="show = true">
					<view class="select_value">
						<u-input type="text" placeholder="选择充值网络" disabled v-model="address_type" />
					</view>
					<uni-icons type="bottom"></uni-icons>
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
		getOrAllocateWalletAddress
	} from '@/api/api.js'
	export default {
		data() {
			return {
				address_type: '',
				address_value: '',
				show: false,
				activeIndex: -1,
				address: '',
				networkList: [{
					name: 'USDT-ERC20',
					value: 'ethereum'
				}, {
					name: 'USDT-TRC20',
					value: 'tron'
				}]
			};
		},
		onLoad() {},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			toRecords() {
				uni.navigateTo({
					url: '/pages/recharge/records/records'
				})
			},
			copy () {
				uni.setClipboardData({
					data: this.address,
					success: function () {
						// console.log('success');
					}
				})
			},
			async getAdress() {
				const res = await getOrAllocateWalletAddress({
					address_type: this.address_value
				})
				if (res.code === 1) {
					this.address = res.data.address
				} else {
					this.address = ''
				}
				console.log(res)
			},
			tabsClick(item, index) {
				this.address_type = item.name
				this.address_value = item.value
				this.activeIndex = index
				this.getAdress()
				this.show = false
			}
		}
	};
</script>

<style scoped lang="scss">
	.recharge {
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

			.Q-code {
				width: 320rpx;
				height: 320rpx;
				margin: 80rpx auto;
				// background-color: #333333;
			}

			.address {
				margin-bottom: 40rpx;

				.desc {
					font-size: 28rpx;
					font-weight: 500;
					color: #999999;
					line-height: 40rpx;
					margin-bottom: 24rpx;
				}

				.value {
					display: flex;
					align-items: center;
					font-size: 28rpx;
					font-weight: 500;
					color: #333333;

					image {
						margin-left: 10rpx;
						width: 48rpx;
						height: 48rpx;
					}
				}
			}

			.network {
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
