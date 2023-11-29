<template>
  <view class="page">
   
    <view class="header">
      <view class="back-arrow" @click="goBack"></view>
      <text class="header-title">充值</text>
      <view class="header-camera-icon"></view>
    </view>

    
    <view class="qr-section">
      <image class="qr-code" src="../../static/images/ewm.png" />
      <view class="qr-code-overlay">
        
      </view>
    </view>

	<view class="address-section">充值地址</view>

    <view class="address-section" style="display: flex;">T
      <view class="wallet-address">TDbgkj2peu3CHHQywigBseGCUs6</view>
      <view class="copy-icon" @click="copyAddress"></view>
    </view>
	<view class="address-section">充值网络</view>
  
	<view class="address-section">
		<picker mode="selector" :range="currencyOptions" @change="onCurrencyChange">
		  <view class="currency-selector">
		    <text>{{ selectedCurrency }}</text>
		    <view class="selector-dropdown-icon"></view>
		  </view>
		</picker>
	</view>


    <!-- Copy Address Button -->
    <button class="action-button2" @click="copyAddress">复制地址</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currencyOptions: ['USDT-ERC20','USDT-TRC20'], // Add your currency options here
      selectedCurrency: 'USDT-ERC20', // Default selected currency
    };
  },
  methods: {
    goBack() {
      uni.navigateBack({
        delta: 1, // Go back by one level in the navigation stack
      });
    },
    copyAddress() {
      // Logic to copy the wallet address to the clipboard
      uni.setClipboardData({
        data: this.walletAddress,
        success: () => {
          uni.showToast({
            title: '地址已复制',
            icon: 'success',
            duration: 2000,
          });
        },
      });
    },
    onCurrencyChange(event) {
      const { value } = event.detail;
      this.selectedCurrency = this.currencyOptions[value];
    },
  }
};
</script>

<style scoped>
	.action-button2{
	    background: #35CBA5;
	    color: #fff;
	    width: 9rem;
	    height: 2.5rem;
	    line-height: 2.5rem;
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
  position: absolute;
  left: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  background-image: url('../../static/images/hfh.png'); /* Replace with your actual icon */
  background-size: contain;
}

.header-title {
  flex: 1;
  text-align: center;
  font-size: 18px;
}



.qr-section {
  position: relative;
  padding: 20px;
  text-align: center;
}

.qr-code {
  width: 200px; /* Set based on your design */
  height: 200px; /* Set based on your design */
  margin: 0 auto;
}

.qr-code-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px; /* Set based on your overlay icon size */
  height: 50px; /* Set based on your overlay icon size */

}

.address-section {
  padding: 10px;
}

.wallet-address-title {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.wallet-address {
  font-size: 14px;
  color: #666;
  word-break: break-all; /* To ensure the address wraps */
}

.copy-icon {
  background-image: url('../../static/images/copy-icon.png'); 
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center; 
  width: 24px;
  height: 24px; 
  display: block;
  cursor: pointer; 
}


.currency-selector {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #FFFFFF;
}



.copy-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #00B26A;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  text-align: center;
}
</style>
