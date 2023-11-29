<template>
  <view class="page container">
    <!-- 标题栏 -->
    <view class="header">
      <view class="back-arrow" @click="goBack"></view>
      <text class="header-title">邀请好友</text>
      <view class="header-camera-icon"></view>
    </view>
	<view style="text-align: center;">
		<image src="../../static/images/invite/yqbanner.png"></image>
	</view>
	<view style="background-color: rgb(255, 255, 255);
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;">
		<view style="display: flex;justify-content: space-between;">
			<view>我的邀请</view>
			<view>我的邀请概括 ></view>
		</view>
		<view style="display: flex;
					text-align: center;
					justify-content: space-between;text-align: center;padding: 1rem 1rem;">
			<view>
				<view>当日邀请</view>
				<view>3人</view>
			</view>
			<view style="border: 1px solid;"></view>
			<view>
				<view>总邀请</view>
				<view>20人</view>
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
				<view class="u-node" >
					<image src="../../static/images/invite/1.png"></image>
				</view>
			</template>
			<template v-slot:content>
				<view>
					<view class="u-order-title">分享邀请链接、二维码或邀请码；</view>
				</view>
			</template>
		</u-time-line-item>
		<u-time-line-item nodeTop="2">
			<!-- 此处自定义了左边内容，用一个图标替代 -->
			<template v-slot:node>
				<view class="u-node" >
					<image src="../../static/images/invite/2.png"></image>
				</view>
			</template>
			<template v-slot:content>
				<view>
					<view class="u-order-title">邀请好友完成注册；</view>
				</view>
			</template>
		</u-time-line-item>
		<u-time-line-item nodeTop="2">
			<!-- 此处自定义了左边内容，用一个图标替代 -->
			<template v-slot:node>
				<view class="u-node" >
					<image src="../../static/images/invite/3.png"></image>
				</view>
			</template>
			<template v-slot:content>
				<view>
					<view class="u-order-title">与好友一起进行交易吧！</view>
				</view>
			</template>
		</u-time-line-item>
	</u-time-line>
	
	  <view style="background: #F4F5F7;    border-radius: 0.5rem;">
		<view class="custom-field">
		  <!-- 文本内容 -->
		  <text class="custom-label">邀请码</text>
		  <text class="custom-label" style="text-align: end;">18792456</text>
		  <!-- 图片图标 -->
		  <image class="custom-icon" src="../../static/images/invite/fz.png"></image>
		</view>
	  </view>
	  <view style="background: #F4F5F7;border-radius: 0.5rem;margin-top: 1rem;">
	  		<view class="custom-field">
	  		  <!-- 文本内容 -->
	  		  <text class="custom-label">邀请链接</text>
	  		  <text class="custom-label" style="text-align: end;">https//ssss</text>
	  		  <!-- 图片图标 -->
	  		  <image class="custom-icon" src="../../static/images/invite/fz.png"></image>
	  		</view>
	  </view>
	</view>
	
	
	<view class="bottom-float">
	  <view style="display: flex;
    align-items: center;">
		  <view>
			  <u-button style="background-color: #35CBA5;color: #fff;">立即邀请好友</u-button>
		  </view>
<!-- 		  <view>
			  <image style="width: 24px;height: 24px;" src="../../static/images/invite/ewm.png"></image>
		  </view> -->
	  </view>
	  
	</view>

	</view>
</template>

<script>
export default {
  data() {
    return {
// 定义customField对象，包含左边的文本和右边的图片图标

    };
  },
  methods: {
    goBack() {
      // 返回上一页
      uni.navigateBack({
        delta: 1,
      });
    },

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
	  background-color: #fff; /* 背景颜色可以根据需求设置 */
	  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影效果，可根据需求调整 */
	  padding: 10px; /* 也可以根据需求调整内边距 */
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
.u-field{
    font-size: 14px;
    padding: 10px 14px;
    text-align: left;
    position: relative;
    color: #303133;
    background: #F4F5F7;
    border-radius: 0.5rem;
}
.u-time-axis-item{
    display: flex;
    flex-direction: row;
    flex-direction: column;
    width: 100%;
    position: relative;
    margin-bottom: 40px;
}	
.xxx uni-image{
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
  height: 100vh;
  background-image: url('../../static/images/invite/yqbg.png');
  background-size: cover;
  background-position: center;
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

