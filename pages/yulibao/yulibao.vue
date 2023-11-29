<template>
  <view class="page">

    <view class="header">
      <view class="back-arrow" @click="goBack"></view>
      <text class="header-title">余利宝</text>
    </view>
    
	
	<view class="ylb1">
		<view class="balance-display">
		  <view class="balance-label">总资产(¥)</view>
		  <view class="balance-amount">¥2345.5678</view>
		  <view class="balance-details">
		    <view class="detail-item">
				<view>日收益</view>
				 <view>0.0000</view>
			</view>
		    <view class="detail-item">
				 <view>累计收益</view>
				 <view>0.0000</view>
			</view>
		    <view class="detail-item">
				<view>日利率</view>
				<view>0.00%</view>
				 
			</view>
		  </view>
		</view>
		
		<view class="action-buttons">
			
		  <button class="action-button1 deposit">转入</button>
		  <button class="action-button2 withdraw">转出</button>
		</view>
	</view>


    

    <view class="transaction-list ylb1" >
      <view class="transaction-title" style="font-size: 1rem;
    font-weight: bold;">交易明细</view>

      <view class="transaction-item">
		<view>
			<view class="transaction-name">转出到银行卡</view>
			<view class="transaction-date">2023-03-14 20:20:00</view>
		</view>
		<view>
			<view class="transaction-amount negative">-997.48</view>
			<view class="transaction-balance">100.00</view>
		</view>

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
	        uni.navigateBack({
	          delta: 1 
	        });
	      }
   
  }
};
</script>

<style scoped>
.ylb1{
	    background-color: #fff;
	    padding: 0.5rem;
	    margin: 1rem;
	    border-radius: 1rem;
}
.page {
  background-image: url('../../static/images/zbg.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.header {
  text-align: center;
  color: white;
  padding: 10px 0;
  position: relative;
  color: #333;
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
  font-size: 20px;
}

.balance-display {
  text-align: center;
  margin-top: 20px;
}

.balance-label {
  color: #666;
}

.balance-amount {
  font-size: 36px;
  font-weight: bold;
  margin: 10px 0;
}

.balance-details {
  display: flex;
  justify-content: space-around;
}

.detail-item {
  color: #666;
}

.action-buttons {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.action-button1 {
    background: #E2F8F2;
    color: #35CBA5;
    width: 9rem;
    height: 2.5rem;
    line-height: 2.5rem;
}

.action-button2{
    background: #35CBA5;
    color: #fff;
    width: 9rem;
    height: 2.5rem;
    line-height: 2.5rem;
}

.transaction-list {
  margin-top: 20px;
}

.transaction-title {
  padding: 10px;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.transaction-name,
.transaction-date {
  color: #333;
}

.transaction-amount {
  color: red;
}

.transaction-balance {
  color: #333;
}

.negative {
  color: red;
}

.positive {
  color: green;
}
</style>
