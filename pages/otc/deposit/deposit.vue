<template>
	<view class="page">

		<!-- <view class="header">
			<view class="back-arrow" @click="goBack"></view>
			<text class="header-title">{{$t('deposit')}}</text>
		</view> -->
		<uni-nav-bar statusBar fixed left-icon="left" backgroundColor="transparent" :title="$t('deposit')"
			:border="false" @clickLeft="goBack"></uni-nav-bar>

		<view class="ylb1">
			<view class="balance-display">
				<view class="balance-label">{{$t('totalAssets')}}</view>
				<view class="balance-amount" v-if="!dataInfo">¥0</view>
				<view class="balance-amount" v-else>¥{{(Number(dataInfo.deposit_amount) + Number(dataInfo.frozen_amount)).toFixed(2)}}</view>
				<view class="balance-details">
					<view class="detail-item">
						<view>{{$t('usable')}}</view>
						<view>{{Number(dataInfo.deposit_amount).toFixed(2)}}</view>
					</view>
					<view class="detail-item">
						<view>{{$t('frozen')}}</view>
						<view>{{Number(dataInfo.frozen_amount).toFixed(2)}}</view>

					</view>
				</view>
			</view>

			<view class="action-buttons">

				<button class="action-button1 deposit" @click="btnClick(0)">{{$t('transfer')}}</button>
				<button class="action-button2 withdraw" @click="btnClick(1)">{{$t('quit')}}</button>
			</view>
		</view>




		<view class="transaction-list ylb1">
			<view class="transaction-title" style="font-size: 1rem;font-weight: bold;">{{$t('depositAccount')}}</view>

			<u-empty v-if="list.length === 0" :text="$t('depositEmpty')" margin-top="100"></u-empty>
			<view v-if="list.length !== 0">
				<view class="transaction-item" v-for="(item,index) in list" :key="index">
					<view>
						<view class="transaction-name" v-if="item.change_type == 'deposit_amount'">
							{{item.amount < 0 ? $t('frozen') : item.amount > 0 ? $t('thaw') : ''}}
						</view>
						<view class="transaction-name" v-else>
							{{item.amount < 0 ? $t('roll-out') : item.amount > 0 ? $t('transfer') : ''}}
						</view>
						<view class="transaction-date">{{item.create_time | timestampFilter}}</view>
					</view>
					<view>
						<view class="transaction-amount" :class="item.amount > 0 ? 'positive' : 'negative'">
							{{item.amount}}
						</view>
						<!-- <view class="transaction-balance">100.00</view> -->
					</view>

				</view>
			</view>
		</view>
		<u-popup v-model="popupShow" mode="bottom" border-radius="30" closeable>
			<view class="popup-content">
				<view class="title">
					{{isTransfer ? $t('transfer') : $t('quit')}}{{$t('deposits')}}
				</view>
				<view class="input">
					<text>¥</text>
					<input type="text" v-model="data.deposit_amount" placeholder="0.00">
				</view>
				<view class="button" @click="$noMultipleClicks(submitBtn)">
					{{$t('verify')}}{{isTransfer ? $t('transfer') : $t('quit')}}
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		getOtcDeposit,
		getOtcDepositRecords,
		depositOtc,
		exitOtc
	} from '@/api/api.js'
	export default {
		data() {
			return {
				noClick: true,
				popupShow: false,
				dataInfo: '',
				list: [],
				isTransfer: true,
				data: {
					deposit_amount: ''
				}
			};
		},
		onLoad() {
			this.getData()
			this.getRecords()
		},
		methods: {
			btnClick(item) {
				if (item === 0) {
					this.isTransfer = true
				} else {
					this.isTransfer = false
				}
				this.popupShow = true
			},
			async submitBtn() {
				try{
					if (this.$u.test.isEmpty(this.data.deposit_amount)) {
						return uni.showToast({
							title: this.$t('enterDeposit'),
							icon: 'none'
						})
					}
					let res = ''
					if (this.isTransfer) {
						res = await depositOtc(this.data)
					} else {
						res = await exitOtc(this.data)
					}
					if (res.code === 1) {
						uni.showToast({
							title: res.msg,
							icon: 'none',
							success: () => {
								this.popupShow = false
								this.data.deposit_amount = ''
								this.getData()
								this.getRecords()
							}
						})
					}
				}catch(e){
					//TODO handle the exception
				}finally {
					setTimeout(() => {
						this.noClick = true
					},2000)
				}
			},
			async getData() {
				const res = await getOtcDeposit()
				console.log(res, '押金')
				if (res.code === 1) {
					this.dataInfo = res.data
				}
			},
			async getRecords() {
				const res = await getOtcDepositRecords()
				console.log(res, '流水')
				if (res.code === 1) {
					this.list = res.data
				}
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			}

		}
	};
</script>

<style scoped lang="scss">
	/deep/.u-icon__icon {
		color: #333 !important;
	}

	.popup-content {
		padding: 70rpx;

		.title {
			font-size: 28rpx;
			font-weight: 600;
			color: #333333;
			line-height: 40rpx
		}

		.input {
			display: flex;
			align-items: center;
			margin-top: 40rpx;
			border-bottom: 2rpx solid #35CBA5;
			padding-bottom: 20rpx;

			text {
				font-size: 56rpx;
				font-weight: 500;
				color: #333333;
				margin-right: 10rpx;
			}

			input {
				height: 80rpx;
				font-size: 56rpx;
			}
		}

		.button {
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			line-height: 90rpx;
			text-align: center;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
			margin-top: 60rpx;
		}
	}

	.ylb1 {
		background-color: #fff;
		padding: 0.5rem;
		margin: 1rem;
		border-radius: 1rem;
	}

	.page {
		background-image: url('@/static/images/zbg.png');
		background-size: cover;
		background-position: center;
		height: 100vh;
	}

	.header {
		text-align: center;
		color: white;
		padding: 10px 0;
		position: relative;
		color: #333;
	}

	.back-arrow {
		position: absolute;
		left: 10px;
		top: 10px;
		width: 30px;
		height: 30px;
		background-image: url('@/static/images/hfh.png');
		/* Replace with your actual icon */
		background-size: contain;
	}

	.header-title {
		font-size: 20px;
	}

	.balance-display {
		text-align: center;
		margin-top: 20px;
	}

	.balance-label {
		color: #666;
	}

	.balance-amount {
		font-size: 36px;
		font-weight: bold;
		margin: 10px 0;
	}

	.balance-details {
		display: flex;
		justify-content: space-around;
	}

	.detail-item {
		color: #666;
	}

	.action-buttons {
		display: flex;
		justify-content: space-around;
		margin: 20px 0;
	}

	.action-button1 {
		background: #E2F8F2;
		color: #35CBA5;
		width: 9rem;
		height: 2.5rem;
		line-height: 2.5rem;
	}

	.action-button2 {
		background: #35CBA5;
		color: #fff;
		width: 9rem;
		height: 2.5rem;
		line-height: 2.5rem;
	}

	.transaction-list {
		margin-top: 20px;
		padding-bottom: 60rpx;
	}

	.transaction-title {
		padding: 10px;
	}

	.transaction-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		border-bottom: 1px solid #eee;
	}

	.transaction-name,
	.transaction-date {
		color: #333;
	}

	.transaction-amount {
		color: red;
	}

	.transaction-balance {
		color: #333;
	}

	.negative {
		color: red;
	}

	.positive {
		color: green;
	}
</style>
