<template>
	<view class="buy">
		<view class="box1">
			<view class="box1_title">
				<text class="box1_title_left">
					购买
				</text>
				<text class="box1_title_right">
					USDT
				</text>
			</view>
			<view class="box1_cell">
				<text class="box1_cell_left">单价</text>
				<text class="box1_cell_right">¥{{dataInfo.price}}</text>
			</view>
			<view class="box1_cell">
				<text class="box1_cell_left">数量</text>
				<text class="box1_cell_right">{{dataInfo.amount}} USDT</text>
			</view>
			<view class="box1_cell">
				<text class="box1_cell_left">限额</text>
				<text class="box1_cell_right">¥{{dataInfo.min_amount}}-¥{{dataInfo.max_amount}}</text>
			</view>
		</view>
		<view class="box2">
			<view class="box2_title">
				按金额
			</view>
			<view class="box2_input">
				<input type="text" placeholder="0.00" @confirm="confirm" v-model="data.amount">
				<view class="box2_input_right">
					<view class="box2_input_right_curreny">
						{{dataInfo.currency}}
					</view>
					<view class="box2_input_right_all">
						全部
					</view>
				</view>
			</view>
			<view class="box2_cell">
				<view class="box2_cell_left">
					接受数量
				</view>
				<view class="box2_cell_right">
					{{usdtAmount ? usdtAmount : '--' }} USDT
				</view>
			</view>
			<view class="box2_cell">
				<view class="box2_cell_left">
					法币金额
				</view>
				<view class="box2_cell_right">
					{{price}} {{dataInfo.currency}}
				</view>
			</view>
			<view class="box2_payment">
				<view class="box2_payment_title">
					支付方式
				</view>
				<view class="box2_payment_method">
					{{dataInfo.payment_method}}
				</view>
			</view>
		</view>
		<view class="box3">
			<view class="box3_title">
				商家信息
			</view>
			<view class="box3_cell">
				<text class="box3_cell_left">付款时限</text>
				<text class="box3_cell_left">20分钟</text>
			</view>
			<view class="box3_cell">
				<text class="box3_cell_left">商家昵称</text>
				<text class="box3_cell_left">{{dataInfo.user_nickname}}</text>
			</view>
		</view>
		<view class="button" @click="buy">
			买入USDT
		</view>
	</view>
</template>

<script>
	import { getListingById,getCurrencyRate,createTrade } from "@/api/api.js"
	export default {
		data() {
			return {
				data: {
					listing_id: '',
					amount: ''
				},
				dataInfo: '',
				usdtAmount: '',
				price: '--'
			}
		},
		onLoad(params) {
			if (params.id) {
				this.listing_id = params.id
				this.getData(params.id)
			}
		},
		methods: {
			async buy() {
				if (this.$u.test.isEmpty(this.data.amount)) {
					return uni.showToast({
						title: '请输入金额',
						icon: "none"
					})
				}
				const res = await createTrade(this.data)
				console.log(res)
			},
			async confirm(e) {
				const res = await getCurrencyRate(this.dataInfo.currency)
				console.log(res)
				if (res.code === 1) {
					this.usdtAmount = (e.detail.value / res.data.rates[0].rate_to_usdt).toFixed(2)
					this.price = e.detail.value ? e.detail.value : '0.00'
				}
				console.log(this.usdtAmount)
			},
			async getData(id) {
				const res = await getListingById(id)
				if (res.code === 1) {
					this.dataInfo = res.data
					console.log(this.dataInfo)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f5f5f5;
	}
	.buy {
		padding: 40rpx;
		.box1 {
			height: 284rpx;
			background: #FFFFFF;
			border-radius: 12rpx;
			padding: 30rpx;
			&_title {
				font-size: 32rpx;
				font-weight: 600;
				line-height: 44rpx;
				&_left {
					color: #35CBA5;
					margin-right: 10rpx;
				}
				&_right {
					color: #333333;
				}
			}
			&_cell {
				margin-top: 20rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
				&_left {
					margin-right: 40rpx;
				}
			}
		}
		.box2 {
			background: #FFFFFF;
			border-radius: 12rpx;
			padding: 40rpx 30rpx;
			margin: 20rpx 0;
			&_title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333;
				line-height: 40rpx;
			}
			&_input {
				margin-top: 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 2rpx solid #35CBA5;
				padding-bottom: 20rpx;
				input {
					font-size: 48rpx;
					font-weight: 500;
					color: #333;
					line-height: 66px;
				}
				&_right {
					width: 250rpx;
					display: flex;
					align-items: center;
					font-size: 32rpx;
					font-weight: 600;
					line-height: 44rpx;
					&_curreny {
						color: #333333;
						padding-right: 20rpx;
						border-right: 2rpx solid #EDEDED;
						margin-right: 20rpx;
					}
					&_all {
						color: #35CBA5;
					}
				}
			}
			&_cell {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 500;
				line-height: 40rpx;
				margin-top: 30rpx;
				&_left {
					color: #999999;
				}
				&_right {
					color: #333333;
				}
			}
			&_payment {
				margin-top: 40rpx;
				&_title {
					font-size: 28rpx;
					font-weight: 600;
					color: #333333;
					line-height: 40rpx;
					margin-bottom: 20rpx;
				}
				&_method {
					padding-left: 14rpx;
					font-size: 32rpx;
					font-weight: 600;
					color: #333333;
					line-height: 44rpx;
					position: relative;
					&::before {
						content: '';
						position: absolute;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						width: 4rpx;
						height: 20rpx;
						background: #FFAC00;
					}
				}
			}
		}
		.box3 {
			padding: 30rpx;
			border-radius: 12rpx;
			background: #FFFFFF;
			margin-bottom: 80rpx;
			&_title {
				font-size: 32rpx;
				font-weight: 600;
				color: #333333;
				line-height: 44rpx;
			}
			&_cell {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 30rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
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
		}
	}
</style>
