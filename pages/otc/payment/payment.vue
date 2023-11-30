<template>
	<view>
		<uni-nav-bar left-icon="left" right-icon="plus" title="选择收款方式" :border="false" @clickLeft="back()" @clickRight="addPayment"></uni-nav-bar>
		<view class="tabs">
			<view class="tabs-item" v-for="(item,index) in tabsList" :key="index" @click="changeTabs(index)" :class="index === activeIndex ? 'active' : ''">
				{{item}}
			</view>
		</view>
		<view class="content">
			<view class="content-item">
				<view class="content-item_one">
					<view class="content-item_one_left">
						银行卡
					</view>
					<view class="content-item_one_right">
						编辑
					</view>
				</view>
				<view class="content-item_two">
					****
				</view>
				<view class="content-item_three">
					**** *** **** **** ****
				</view>
				<view class="content-item_four">
					<view class="content-item_four_left">
						中信银行
					</view>
					<view class="content-item_four_right">
						<image src="../../../static/images/otc/payment/true.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item_one">
					<view class="content-item_one_left zhifu">
						支付宝
					</view>
					<view class="content-item_one_right">
						编辑
					</view>
				</view>
				<view class="content-item_two">
					****
				</view>
				<view class="content-item_three">
					**** *** **** **** ****
				</view>
				<view class="content-item_four">
					<view class="content-item_four_left noBank">
						
					</view>
					<view class="content-item_four_right">
						<image src="../../../static/images/otc/payment/true.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item_one">
					<view class="content-item_one_left weixin">
						微信
					</view>
					<view class="content-item_one_right">
						编辑
					</view>
				</view>
				<view class="content-item_two">
					****
				</view>
				<view class="content-item_three">
					**** *** **** **** ****
				</view>
				<view class="content-item_four">
					<view class="content-item_four_left noBank">
						
					</view>
					<view class="content-item_four_right">
						<image src="../../../static/images/otc/payment/true.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0, // 当前选中下标
				 // 选项卡集合
				tabsList: ['总览','银行卡','支付宝','微信']
			}
		},
		methods: {
			changeTabs(index) {
				this.activeIndex = index
			},
			back() {
				uni.navigateBack()
			},
			addPayment() {
				uni.navigateTo({
					url: '/pages/otc/payment/add/add'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.uni-nav-bar-text {
		font-size: 36rpx;
		font-weight: 600;
	}
	/deep/.uni-icons {
		font-size: 48rpx !important;
	}
	.tabs {
		padding: 40rpx 0 24rpx 40rpx;
		border-bottom: 2rpx solid #F3F3F3;
		display: flex;
		.tabs-item {
			margin-right: 60rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #999999;
			&.active {
				font-weight: 600;
				color: #35CBA5;
				position: relative;
				&::after {
					content: '';
					position: absolute;
					width: 40rpx;
					height: 4rpx;
					background: #35CBA5;
					border-radius: 20rpx;
					bottom: -24rpx;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
	}
	.content {
		padding: 40rpx 40rpx 30rpx 40rpx;
		.content-item {
			margin-bottom: 30rpx;
			border-bottom: 2rpx solid #F3F3F3;
			&_one {
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				&_left {
					position: relative;
					padding-left: 14rpx;
					&::before {
						content: '';
						position: absolute;
						width: 4rpx;
						height: 20rpx;
						background: #FFAC00;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
					}
					&.zhifu {
						&::before {
							background: #5171FF !important;
						}
					}
					&.weixin {
						&::before {
							background: #2EBD85 !important;
						}
					}
				}
				&_right {
					font-weight: 500;
					color: #35CBA5;
				}
			}
			&_two,&_three {
				margin: 30rpx 0 20rpx 0;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
			}
			&_three {
				margin-top: 20rpx;
			}
			&_four {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				margin-bottom: 30rpx;
				&_left {
					font-size: 28rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 40rpx;
					&.noBank {
						width: 60rpx;
						height: 60rpx;
						background-color: #35CBA5;
					}
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
</style>
