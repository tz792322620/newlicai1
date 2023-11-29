<template>
  <view class="page">
    <!-- 标题栏 -->
    <view class="header">
      <view class="back-arrow" @click="goBack"></view>
      <text class="header-title">邀请好友</text>
      <view class="header-camera-icon"></view>
    </view>
	

	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {

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
  background-image: url('../../static/images/zbg.png');
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

