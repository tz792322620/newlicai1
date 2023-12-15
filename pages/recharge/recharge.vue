<template>
	<view class="recharge">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="tabbar">
			<image src="../../static/images/hfh.png" mode="" @click="back"></image>
			<text>{{$t('recharge')}}</text>
			<image src="../../static/images/camera-icon.png" mode="" @click="toRecords"></image>
		</view>
		<view class="content">

			<view class="network">
				<view class="title">
					{{$t('rechargeNetwork')}}
				</view>
				<view class="select" @click="show = true">
					<view class="select_value">
						<u-input type="text" :placeholder="$t('chooseRechargeNetwork')" disabled v-model="address_type" />
					</view>
					<uni-icons type="bottom"></uni-icons>
				</view>
			</view>
			<view class="network" style="margin-top: .5rem;">
				<view class="title">
					转入地址
				</view>
				<view class="select" @click="show = true">
					<view class="select_value" style="width: 100%;">
						<u-input type="text" :placeholder="$t('转入地址')" v-model="recharge_address" />
					</view>
					<!-- <uni-icons type="bottom"></uni-icons> -->
				</view>
			</view>
			<view class="network" style="margin-top: .5rem;">
				<view class="title">
					转入金额
				</view>
				<view class="select" @click="show = true">
					<view class="select_value" style="width: 100%;">
						<u-input type="text" :placeholder="$t('转入金额')"  v-model="recharge_amount" />
					</view>
					<!-- <uni-icons type="bottom"></uni-icons> -->
				</view>
			</view>
			<view class="buttons">
<!-- 				<view class="description">
					{{$t('quantityReceived')}}:<text>{{account_amount}}USDT</text>
				</view> -->
				<view class="button" @click="submit">
					{{$t('submit')}}
				</view>
			</view>
			<u-popup v-model="show" mode="bottom" border-radius="30" closeable>
				<view class="popup-content">
					<view class="title">
						{{$t('chooseRechargeNetwork')}}
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
		<floating-customer-service></floating-customer-service>
	</view>
</template>

<script>
	import {
		createRecharge
	} from '@/api/api.js';
	import FloatingCustomerService from '@/components/FloatingCustomerService/FloatingCustomerService.vue';
	export default {
		components: {
				FloatingCustomerService
		},
		data() {
			return {
				data: {
					recharge_amount: '',
					recharge_address: '',
					network_type: ''
				},
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
				let that = this
				uni.setClipboardData({
					data: that.address,
					showToast: false,
					success: function() {
						uni.showToast({
							title: that.$t('contentCopied'),
							icon: 'success'
						})
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
			async submit() {
				if (this.$u.test.isEmpty(this.data.recharge_amount)) {
					return uni.showToast({
						title: this.$t('enterAmount'), // 修改为多语言引用
						icon: "none"
					});
				}
				if (this.$u.test.isEmpty(this.data.recharge_address)) {
					return uni.showToast({
						title: this.$t('enterAddress'), // 修改为多语言引用
						icon: "none"
					});
				}
				const res = await createRecharge(this.data);
				if (res.code === 1) {
					uni.showToast({
						title: this.$t('rechargeSuccess'), // 修改为多语言引用
						icon: 'none'
					});
					uni.navigateTo({
						url: '/pages/recharge/records/records'
					});
				} else {
					uni.showToast({
						title: this.$t('rechargeFailed'), // 修改为多语言引用
						icon: 'none'
					});
				}
			},

			tabsClick(item, index) {
				this.address_type = item.name
				this.address_value = item.value
				this.activeIndex = index
				// this.getAdress()
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

			.buttons {
				margin-top: 100rpx;

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
