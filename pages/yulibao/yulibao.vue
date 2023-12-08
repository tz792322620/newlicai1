<template>
	<view class="page">

		<view class="header">
			<view class="back-arrow" @click="goBack"></view>
			<text class="header-title">余利宝</text>
		</view>


		<view class="ylb1">
			<view class="balance-display">
				<view class="balance-label">总资产(¥)</view>
				<view class="balance-amount">¥{{dataInfo.investmentTotal}}</view>
				<view class="balance-details">
					<view class="detail-item">
						<view>日收益</view>
						<view>{{(dataInfo.investmentTotal * dataInfo.interestRate).toFixed(2)}}</view>
					</view>
					<view class="detail-item">
						<view>累计收益</view>
					 <view>{{dataInfo.earningsTotal}}</view>
					</view>
					<view class="detail-item">
						<view>日利率</view>
						<view>{{dataInfo.interestRate * 100}}%</view>

					</view>
				</view>
			</view>

			<view class="action-buttons">

				<button class="action-button1 deposit" @click="btnClick(0)">转出</button>
				<button class="action-button2 withdraw" @click="btnClick(1)">转入</button>
			</view>
		</view>
		<u-popup v-model="popupShow" mode="bottom" border-radius="30" closeable>
			<view class="popup-content">
				<view class="title">
					{{isTransfer ? '转出' : '转入'}}金额到{{isTransfer ? '我的账户' : '余利宝'}}
				</view>
				<view class="input">
					<text>¥</text>
					<input type="text" v-model="data.amount" placeholder="0.00">
				</view>
				<view class="description">
					余利宝余额<text>¥{{dataInfo.investmentTotal}}</text>
				</view>
				<view class="button" @click="submitBtn">
					确认{{isTransfer ? '转出' : '转入'}}
				</view>
			</view>
		</u-popup>



		<view class="transaction-list ylb1">
			<view class="transaction-title" style="font-size: 1rem;
    font-weight: bold;">交易明细</view>

			<view class="transaction-item" v-for="(item,index) in list" :key="index">
				<view>
					<view class="transaction-name">{{item.description}}</view>
					<view class="transaction-date">{{item.create_time | timestampFilter}}</view>
				</view>
				<view>
					<!-- <view class="transaction-amount negative">-997.48</view> -->
					<view class="transaction-balance">{{item.amount}}</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		getYuebaoStats,
		getYuebaoTransactions,
		withdrawFromYuebao,
		createYuebaoOrder
	} from '@/api/api.js'
	export default {
		data() {
			return {
				data: {
					amount: ''
				},
				popupShow: false,
				isTransfer: true, // true:转出 false:转入
				dataInfo: '',
				list: []
			};
		},
		onLoad() {
			this.getData()
			this.getList()
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
				if (this.$u.test.isEmpty(this.data.amount)) {
					return uni.showToast({
						title: '请输入金额',
						icon: 'none'
					})
				}
				let res = ''
				if (this.isTransfer) {
					res = await withdrawFromYuebao(this.data)
				} else {
					res = await createYuebaoOrder(this.data)
				}
				if (res.code === 1) {
					uni.showToast({
						title: res.msg,
						success: () => {
							this.popupShow = false
							this.data.amount = ''
							this.getData()
							// this.getRecords()
						}
					})
				}
			},
			async getData() {
				const res =await getYuebaoStats()
				if (res.code === 1) {
					this.dataInfo = res.data
				}
			},
			async getList() {
				const res = await  getYuebaoTransactions()
				console.log(res)
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
		.description {
			font-size: 24rpx;
			font-weight: 400;
			color: #333333;
			line-height: 34rpx;
			margin-top: 20rpx;
			text {
				color: #35CBA5;
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
		background-image: url('../../static/images/zbg.png');
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
		background-image: url('../../static/images/hfh.png');
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
