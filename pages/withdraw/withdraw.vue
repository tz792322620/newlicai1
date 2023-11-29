<template>
  <view class="page">
    <!-- 标题栏 -->
    <view class="header">
      <view class="back-arrow" @click="goBack"></view>
      <text class="header-title">提现</text>
      <view class="header-camera-icon"></view>
    </view>
	
    <view style="padding: .5rem;">
		<!-- 提现金额输入区域 -->
		<view class="">
		  <view class="withdraw-amount-label">提现金额</view>
		  <input class="withdraw-amount-input" type="number" placeholder="请输入提现金额" v-model="withdrawAmount" />
		</view>
		
		<!-- 提现金额输入区域 -->
		<view class="">
		  <view class="withdraw-amount-label">提现地址</view>
		  <input class="withdraw-amount-input" type="address" placeholder="提现地址" v-model="withdrawAmount" />
		</view>
		
		<!-- 提现网络选择区域 -->
		<view class="withdraw-network-section">
		  <text class="withdraw-network-label">提现网络</text>
		  <picker mode="selector" :range="networkOptions" @change="onNetworkChange">
		    <view class="network-selector">
		      <text>{{ selectedNetwork }}</text>
		      <view class="selector-dropdown-icon"></view>
		    </view>
		  </picker>
		</view>
		
		<!-- 实际到账金额显示区域 -->
		<view class="actual-amount-section">
		  <text class="actual-amount-label">实际到账金额</text>
		  <text class="actual-amount">{{ actualAmount }}</text>
		</view>
		
		<!-- 确认提现按钮 -->
		<button class="confirm-withdraw-button" @click="confirmWithdraw">确认提现</button>
	</view>

  </view>
</template>

<script>
export default {
  data() {
    return {
      withdrawAmount: '', // 用户输入的提现金额
      networkOptions: ['USDT-ERC20', 'USDT-TRC20'], // 提现网络选项
      selectedNetwork: 'USDT-ERC20', // 默认选中的提现网络
      actualAmount: '0USDT', // 实际到账金额
    };
  }, 
  methods: {
    goBack() {
      // 返回上一页
      uni.navigateBack({
        delta: 1,
      });
    },
    onNetworkChange(event) {
      // 当提现网络发生变化时的处理函数
      const { value } = event.detail;
      this.selectedNetwork = this.networkOptions[value];
    },
    confirmWithdraw() {
      // 确认提现时的处理函数
      // 这里需要实现提现逻辑
      console.log('提现金额：', this.withdrawAmount);
      console.log('提现网络：', this.selectedNetwork);
    },
  }
};
</script>

<style scoped>

	
	.withdraw-amount-label,
	.withdraw-network-label,
	.actual-amount-label {
	  font-size: 16px;
	  color: #333;
	  margin-bottom: 5px;
	}
	
	.withdraw-amount-input,
	.network-selector,
	.actual-amount {
	  font-size: 14px;
	  color: #666;
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
 
.header-camera-icon {
  width: 30px;
  height: 30px;
  background-image: url('../../static/images/camera-icon.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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

