<template>
	<view>
		<view class="box-top"  v-for="(item,index) in dataArray" :key="index">
			<view class="left-box-top">{{item.time}}</view> <!-- 左边 -->
			
			<view class="line active"><!-- 中线 -->
				<view class="dot active"></view> <!-- 圆点 -->
			</view>
			
			<view class="right-box-top"> <!-- 右边 -->
				<!-- <view>{{item.title}}</view> -->
				<view>{{item.step}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataArray:{
				type:Array
			}
		},
		data() {
			return {
			}
		},
		mounted(){
		},
		methods: {
		}
	}
</script>

<style scoped="scoped" lang="less">
.box-top{
	width: 100%;
	min-height: 120rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	.left-box-top{
		width: 180rpx;
		text-align: center;
		font-size: 20rpx;
		font-weight: 400;
		color: #333333;
		line-height: 28rpx;
	}
	.line{
		width: 4rpx;	
		background-color: rgba(228,231,237,1);
		margin: 0 20rpx 0 20rpx;
		.dot{
			width: 20rpx;
			height: 20rpx;
			background-color: rgba(228,231,237,1);
			border-radius: 50%;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.right-box-top{
		flex: 1;
		padding: 0 0 20rpx 0;
		font-size: 20rpx;
		font-weight: 500;
		color: #333333;
		line-height: 28rpx;
	}
}
//激活元素
.active{
	background-color: #35cba5 !important;
}
// 隐藏元素
.none{
	background-color: rgba(0,0,0,0) !important;
}
</style>
 
