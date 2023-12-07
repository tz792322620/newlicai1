<template>
	<view class="info">
		<view class="bgc-image">
			<view class="navbar">
				<image src="../../../static/images/hfh.png" mode="" @click="back"></image>
				<text>信息编辑</text>
			</view>
		</view>
		<view class="avatar">
			<image class="avatar_img" :src="$url + userInfo.avatar" mode=""></image>
			<image class="avatar_camera" src="@/static/images/my/info/camera.png" mode="" @click="show = true"></image>
		</view>
		<view class="cell-group">
			<view class="cell" @click="popupShow = true">
				<view class="cell_left">
					用户名
				</view>
				<view class="cell_right">
					<text>{{userInfo.nickname}}</text>
					<uni-icons type="right"></uni-icons>
				</view>
			</view>
			<view class="cell">
				<view class="cell_left">
					账号
				</view>
				<view class="cell_right">
					<text>{{userInfo.mobile}}</text>
					<image src="@/static/images/otc/order/copy.png" mode="" @click="copy"></image>
				</view>
			</view>
			<!-- <view class="cell">
				<view class="cell_left">
					密码管理
				</view>
				<view class="cell_right">
					<uni-icons type="right"></uni-icons>
				</view>
			</view> -->
			<view class="cell" @click="toPassword">
				<view class="cell_left">
					交易密码管理
				</view>
				<view class="cell_right">
					<uni-icons type="right"></uni-icons>
				</view>
			</view>
		</view>
		<u-action-sheet :list="list" v-model="show":cancel-btn="true" border-radius="30" @click="actionClick"></u-action-sheet>
		<u-popup v-model="popupShow" mode="bottom" border-radius="30" closeable>
				<view class="popup-content">
					<view class="title">
						编辑用户名
					</view>
					<view class="input">
						<u-input placeholder="请输入用户名" v-model="userInfo.nickname"></u-input>
					</view>
					<view class="tips">
						<view class="text">
							*最大长度为20个字符
						</view>
						<view class="text">
							*每180天仅可变更一次，请谨慎操作
						</view>
						<view class="text">
							*用户名的规则是纯字母或字母+数字
						</view>
					</view>
					<view class="button" @click="submit">
						确定
					</view>
				</view>
			</u-popup>
	</view>
</template>

<script>
	import { getUserInfo,setNickname } from '@/api/api.js'
	export default {
		data() {
			return {
				show: false,
				list: [{
					text: '相机'
				},{
					text: '相册'
				}],
				popupShow: false,
				userInfo: ''
			}
		},
		onLoad() {
			this.getUser()
		},
		methods: {
			toPassword() {
				uni.navigateTo({
					url: '/pages/my/info/transactionPin/transactionPin'
				})
			},
			async getUser() {
				const res = await getUserInfo()
				if (res.code === 1) {
					this.userInfo = res.data
				}
			},
			back() {
				uni.navigateBack()
			},
			// 设置昵称
			async submit() {
				const res = await setNickname({
					nickname: this.userInfo.nickname
				})
				if (res.code === 1) {
					this.getUser()
					this.popupShow = false
				}
			},
			actionClick(index) {
				console.log(index,this.$url)
				let that = this
				uni.chooseImage({
					sourceType: index === 1 ? ['album'] : ['camera'], //从相册选择
					success: function (chooseImageRes) {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(tempFilePaths[0])
						uni.uploadFile({
							url: that.$url + '/api/user/uploadAvatar',
							filePath: tempFilePaths[0],
							name: 'avatar',
							header: {
								token: uni.getStorageSync('token')
							},
							formData: {
								'avatar': tempFilePaths[0]
							},
							success: (uploadFileRes) => {
								const res = JSON.parse(uploadFileRes.data)
								if (res.code === 1) {
									that.getUser()
								}else {
									uni.showToast({
										title: res.msg,
										icon: 'none'
									})
								}
							}
						});
					}
				})
			},
			copy () {
				uni.setClipboardData({
					data: this.userInfo.mobile,
					success: function () {
						// console.log('success');
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info {
		.bgc-image {
			width: 100%;
			height: 314rpx;
			background: url('@/static/images/my/info/bgc-image.png') center center no-repeat;
			background-size: 100% 100%;
			padding-top: 108rpx;
			.navbar {
				display: flex;
				align-items: center;
				image {
					width: 48rpx;
					height: 48rpx;
					margin-left: 40rpx;
				}
				text {
					margin-left: 218rpx;
					font-size: 36rpx;
					font-weight: 600;
					color: #333333;
				}
			}
		}
		.avatar {
			margin: 0 auto;
			position: relative;
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
			background-color: #333333;
			&_img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
			&_camera {
				position: absolute;
				right: 0;
				bottom: 0;
				width: 56rpx;
				height: 56rpx;
			}
		}
		.cell-group {
			margin-top: 40rpx;
			padding: 0 40rpx;
			.cell {
				padding: 44rpx 0;
				border-bottom: 2rpx solid #F3F3F3;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28rpx;
				font-weight: 500;
				color: #999999;
				&_right {
					display: flex;
					align-items: center;
					color: #333333;
					text {
						margin-right: 12rpx;
					}
					image {
						width: 27rpx;
						height: 28rpx;
					}
				}
			}
		}
		/deep/.u-icon__icon {
			color: #999999 !important;
		}
		.popup-content {
			padding: 40rpx;
			.title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				line-height: 40rpx;
			}
			.input {
				margin: 30rpx 0;
				height: 90rpx;
				background: #F4F5F7;
				border-radius: 12rpx;
				padding: 0 20rpx;
				padding-top: 10rpx;
			}
			.tips {
				.text {
					font-size: 24rpx;
					font-weight: 400;
					color: #999999;
					line-height: 34rpx;
				}
			}
			.button {
				margin-top: 60rpx;
				height: 70rpx;
				background: #35CBA5;
				border-radius: 12rpx;
				line-height: 70rpx;
				text-align: center;
				font-size: 32rpx;
				font-weight: 600;
				color: #FFFFFF;
			}
		}
	}
</style>
