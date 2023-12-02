<template>
	<view class="appeal">
		<view class="item">
			<view class="desc">
				联系姓名
			</view>
			<view class="input">
				<u-input placeholder="请输入您的姓名" v-model="name"></u-input>
			</view>
		</view>
		<view class="item">
			<view class="desc">
				联系电话
			</view>
			<view class="input">
				<u-input placeholder="请输入联系电话" v-model="name"></u-input>
			</view>
		</view>
		<view style="margin-bottom: 12rpx;">
			<view class="item" style="margin-bottom: 0;">
				<view class="desc">
					申诉理由
				</view>
				<view class="textarea">
					<textarea name="" id="" cols="30" rows="10" placeholder="请描述您的申诉理由"></textarea>
				</view>
			</view>
			<view class="text" style="font-size: 20rpx;font-weight: 400;color: #333333;line-height: 28rpx;text-align: right;">
				0/500
			</view>
		</view>
		<view class="item">
			<view class="desc">
				申诉凭证
			</view>
			<u-upload :custom-btn="true">
				<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
					<image src="@/static/images/otc/payment/add/upload.png" mode=""></image>
					<text>上传凭证</text>
				</view>
			</u-upload>
		</view>
		<view class="tips">
			<view class="tips_title">
				温馨提示
			</view>
			<view class="tips_text">
				1.提交的内容对双方和客服可见，避免包含任何隐私或敏感信息；
			</view>
			<view class="tips_text">
				2.恶意申诉属于扰乱平台正常运营秩序行为，情节严重将冻结账户；
			</view>
			<view class="tips_text">
				3.客服介入需要几个小时，如没有提交证明，客服将通知双方上传更多证明，请耐心等待。
			</view>
		</view>
		<view class="button">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.appeal {
		padding: 40rpx;
		.item {
			margin-bottom: 40rpx;
			.desc {
				font-size: 24rpx;
				font-weight: 500;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 20rpx;
			}
			.input {
				height: 90rpx;
				background: #F4F5F7;
				border-radius: 12rpx;
				padding: 0 20rpx;
				padding-top: 10rpx;
			}
			.textarea {
				height: 220rpx;
				line-height: 90rpx;
				background: #F4F5F7;
				border-radius: 12rpx;
				padding: 20rpx;
			}
			.slot-btn {
				border: 1rpx dashed #35CBA5;
				width: 280rpx;
				height: 200rpx;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #F4F5F7;
				image {
					width: 48rpx;
					height: 48rpx;
				}
				text {
					font-size: 28rpx;
					font-weight: 500;
					color: #35CBA5;
					line-height: 40rpx;
					letter-spacing: 1rpx;
				}
			}
		}
		.tips {
			margin-bottom: 60rpx;
			&_title {
				font-size: 24rpx;
				font-weight: 600;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 16rpx;
			}
			&_text {
				font-size: 24rpx;
				font-weight: 400;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 20rpx;
			}
		}
		.button {
			text-align: center;
			line-height: 90rpx;
			height: 90rpx;
			background: #35CBA5;
			border-radius: 12rpx;
			font-size: 32rpx;
			font-weight: 600;
			color: #FFFFFF;
		}
	}
</style>
