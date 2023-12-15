<template>
	<view class="page container">
		<!-- 标题栏 -->
		<!-- <view class="header">
			<view class="back-arrow" @click="goBack"></view>
			<text class="header-title">{{$t('inviteFriends')}}</text>
			<view class="header-camera-icon"></view>
		</view> -->
		<uni-nav-bar statusBar fixed left-icon="left" backgroundColor="#f8fdfc" :title="$t('inviteFriends')" :border="false" @clickLeft="goBack"></uni-nav-bar>
		<view style="text-align: center;">
			<image src="../../static/images/invite/yqbanner.png"></image>
		</view>
		<view style="background-color: rgb(255, 255, 255);
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;">
			<view style="display: flex;justify-content: space-between;">
				<view style="font-weight: 600;color: #333333;">{{$t('myInvite')}}</view>
				<view style="color: #999999;" @click="toDetails">{{$t('myInviteDetails')}} ></view>
			</view>
			<view style="display: flex;
					text-align: center;
					justify-content: space-between;text-align: center;padding: 1rem 1rem;">
				<view>
					<view>{{$t('todayInvite')}}</view>
					<view>{{dataInfo.direct_referrals_today_count}}{{$t('people')}}</view>
				</view>
				<view style="border: 1px solid #F5F5F5;"></view>
				<view>
					<view>{{$t('totalInvite')}}</view>
					<view>{{dataInfo.direct_referrals_count}}{{$t('people')}}</view>
				</view>
			</view>
		</view>


		<view class="xxx" style="background-color: rgb(255, 255, 255);
	border-radius: 5px;
	margin: 1rem;
	padding: 1rem 2rem;">
			<u-time-line>
				<u-time-line-item nodeTop="2">
					<!-- 此处自定义了左边内容，用一个图标替代 -->
					<template v-slot:node>
						<view class="u-node">
							<image src="../../static/images/invite/1.png"></image>
						</view>
					</template>
					<template v-slot:content>
						<view>
							<view class="u-order-title">{{$t('inviteTips1')}}</view>
						</view>
					</template>
				</u-time-line-item>
				<u-time-line-item nodeTop="2">
					<!-- 此处自定义了左边内容，用一个图标替代 -->
					<template v-slot:node>
						<view class="u-node">
							<image src="../../static/images/invite/2.png"></image>
						</view>
					</template>
					<template v-slot:content>
						<view>
							<view class="u-order-title">{{$t('inviteTips2')}}</view>
						</view>
					</template>
				</u-time-line-item>
				<u-time-line-item nodeTop="2">
					<!-- 此处自定义了左边内容，用一个图标替代 -->
					<template v-slot:node>
						<view class="u-node">
							<image src="../../static/images/invite/3.png"></image>
						</view>
					</template>
					<template v-slot:content>
						<view>
							<view class="u-order-title">{{$t('inviteTips3')}}</view>
						</view>
					</template>
				</u-time-line-item>
			</u-time-line>

			<view style="background: #F4F5F7;    border-radius: 0.5rem;">
				<view class="custom-field">
					<!-- 文本内容 -->
					<text class="custom-label">{{$t('inviteCode')}}</text>
					<text class="custom-label" style="text-align: end;">{{inviteCode}}</text>
					<!-- 图片图标 -->
					<image class="custom-icon" @click="copy(inviteCode)" src="../../static/images/invite/fz.png"></image>
				</view>
			</view>
			<view style="background: #F4F5F7;border-radius: 0.5rem;margin-top: 1rem;">
				<view class="custom-field">
					<!-- 文本内容 -->
					<text class="custom-label">{{$t('inviteLink')}}</text>
					<text class="custom-label" style="text-align: end;">{{($url + `/#/pages/login/register_em?referral_code=${inviteCode}`) | ellipsis}}</text>
					<!-- 图片图标 -->
					<image class="custom-icon" @click="copy($url + `/#/pages/login/register_em?referral_code=${inviteCode}`)" src="../../static/images/invite/fz.png"></image>
				</view>
			</view>
		</view>


		<view class="bottom-float">
			<view style="display: flex;
    align-items: center;">
				<view>
					<u-button style="background-color: #35CBA5;color: #fff;">{{$t('inviteNow')}}</u-button>
				</view>
				<!-- <view>
					<image style="width: 24px;height: 24px;" src="../../static/images/invite/ewm.png"></image>
				</view> -->
			</view>

		</view>

	</view>
</template>

<script>
	import {
		getUserInfo,
		getDirectReferralsStats
	} from '@/api/api.js'
	export default {
		data() {
			return {
				inviteCode: '',
				dataInfo: ''
			};
		},
		onLoad() {
			this.getUser()
			this.getInviteRecords()

		},
		methods: {
			copy(item) {
				let that = this
				uni.setClipboardData({
					data: item,
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
			toDetails() {
				uni.navigateTo({
					url: '/pages/invite/details'
				})
			},
			async getUser() {
				const res = await getUserInfo()
				console.log(res)
				if (res.code === 1) {
					this.inviteCode = res.data.referral_code
				}
			},
			goBack() {
				// 返回上一页
				uni.navigateBack({
					delta: 1,
				});
			},
			async getInviteRecords() {
				const res = await getDirectReferralsStats()
				console.log(res, '邀请记录')
				if (res.code === 1) {
					this.dataInfo = res.data
				}
			}
		}
	};
</script>

<style scoped>
	/* 样式可以根据你的需求自定义 */
	.container {
		position: relative;
		height: 100%;
	}


	.bottom-float {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 100000;
		background-color: #fff;
		/* 背景颜色可以根据需求设置 */
		box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
		/* 添加阴影效果，可根据需求调整 */
		padding: 10px;
		/* 也可以根据需求调整内边距 */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 样式可以根据你的需求自定义 */
	.custom-field {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
	}

	.custom-label {
		flex: 1;
		margin-right: 10px;
	}

	.custom-icon {
		width: 20px;
		height: 20px;
		/* 其他样式属性可以根据需要自定义 */
	}

	.u-field {
		font-size: 14px;
		padding: 10px 14px;
		text-align: left;
		position: relative;
		color: #303133;
		background: #F4F5F7;
		border-radius: 0.5rem;
	}

	.u-time-axis-item {
		display: flex;
		flex-direction: row;
		flex-direction: column;
		width: 100%;
		position: relative;
		margin-bottom: 40px;
	}

	.xxx uni-image {
		width: 24px;
		height: 24px;
		display: inline-block;
		overflow: hidden;
		position: relative;
	}

	.confirm-withdraw-button {
		margin-top: 20px;
		background-color: #35CBA5;
		color: #FFFFFF;
		border: none;
		border-radius: 5px;
		text-align: center;
	}

	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-image: url('../../static/images/invite/yqbg.png');
		background-size: cover;
		background-position: center;
		padding-bottom: 200rpx;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}

	.back-arrow {
		width: 30px;
		height: 30px;
		background-image: url('../../static/images/hfh.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.header-title {
		flex: 1;
		text-align: center;
		font-size: 18px;
		color: #333;
	}



	.withdraw-section {
		padding: 10px;
		background-color: #FFFFFF;
		margin-top: 10px;
	}

	.withdraw-amount-label,
	.withdraw-network-label,
	.actual-amount-label {
		font-size: 16px;
		color: #333;
		margin-bottom: 5px;
	}

	.withdraw-amount-input {
		font-size: 14px;
		color: #666;
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 10px;
		margin-bottom: 10px;
	}

	.network-selector,
	.actual-amount-section {
		font-size: 14px;
		color: #666;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		margin-bottom: 10px;
	}

	.selector-dropdown-icon {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		width: 24px;
		height: 24px;
		background-image: url('../../static/images/camera-icon.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.actual-amount {
		font-size: 14px;
		color: #35CBA5;
	}

	.action-button2 {
		background-color: #35CBA5;
		color: #FFFFFF;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		text-align: center;
		margin-top: 20px;
	}

	.copy-icon {
		width: 24px;
		height: 24px;
		background-image: url('../../static/images/copy-icon.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		margin-left: 10px;
	}

	.address-section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		background-color: #FFFFFF;
		margin-top: 10px;
	}

	.wallet-address {
		font-size: 14px;
		color: #666;
		word-break: break-all;
	}
</style>
