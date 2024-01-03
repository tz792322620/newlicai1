<template>
  <view>
	  <nav-bar :title="$t('contractDetails')"></nav-bar>
    <view class="content" style="margin: .8rem;" v-if="details && details.product">
    	<p style="text-align: center;
    	font-size: 20px;"><b><span >{{$t('contractTitle')}}</span></b></p>
    	<p><span >{{$t('contractNumberLabel')}}</span><span style="text-decoration: underline;">{{details.contract.contract_number}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('partyA')}}：</span></b><span style="text-decoration: underline;">{{details.user_verification.real_name}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('partyB')}}：</span></b><span style="text-decoration: underline;">{{details.product.manager_company_name}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('partyCLabel')}}</span></b><b><span >：</span></b><span style="text-decoration: underline;">{{details.product.guarantor_company_name}}</span><span >{{$t('insuranceCompany')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('contractAgreement')}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('investmentDetails')}}</span></b><b></b></p>
    	<p style="line-height: 16pt;"><span >{{$t('productNameLabel')}}</span><span style="text-decoration: underline;">：{{details.product.product_name_cn}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('investorNameLabel')}}</span><span style="text-decoration: underline;">：{{details.user_verification.real_name}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('investorIDLabel')}}</span><span style="text-decoration: underline;">：{{details.user_verification.identity_number}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('investmentAmountLabel')}}</span><span style="text-decoration: underline;">：{{Number(details.order.purchase_amount).toFixed(2)}}USDT</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('earningCycleLabel')}}</span><span style="text-decoration: underline;">：{{details.product.investment_period}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('interestRateLabel')}}</span><span style="text-decoration: underline;">：{{(details.product.interest_rate * 100).toFixed(2)}}%</span></p>
    	  <p style="line-height: 16pt;">
    		<span>{{$t('signingTime')}}</span>
    		<span style="text-decoration: underline;">：{{details.order.purchase_date}}</span>
    	  </p>
    	  <p style="line-height: 16pt;">
    		<span>{{$t('expiryTime')}}</span>
    		<span style="text-decoration: underline;">：{{details.contract.end_date}}</span>
    	  </p>
    	<p style="line-height: 16pt;"><span >{{$t('totalReceivableLabel')}}</span><span style="text-decoration: underline;">：{{Number(details.order.total_amount).toFixed(2)}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('sectionTwo')}}</span></b></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause2.1')}}</span></p> 
    	<p style="line-height: 16pt;"><span >{{$t('clause2.2')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause2.3')}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('sectionThree')}}</span></b></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause3.1')}}</span><span style="text-decoration: underline;">{{details.product.guarantor_company_name}}</span>{{$t('clause3.1.continuation')}}</p>
    	<p style="line-height: 16pt;"><span >{{$t('clause3.2')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause3.3')}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('sectionFour')}}</span></b></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause4.1')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause4.2')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause4.3')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause4.4')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause4.5')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause4.6')}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('sectionFive')}}</span></b></p>
    	<p style="line-height: 16pt;"><span >{{$t('confidentialityClause')}}</span></p>
    	<p style="line-height: 16pt;"><b><span >{{$t('sectionSix')}}</span></b></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause6.1')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause6.2')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause6.3')}}</span></p>
    	<p style="line-height: 16pt;"><span >{{$t('clause6.4')}}</span></p>
    	<p style="line-height: 16pt;">{{$t('endOfMainContent')}}</p>
    	<p style="line-height: 16pt;margin-bottom: 25pt;">{{$t('partyASignature')}}:
			  <div class="seal-container">
				<!-- 如果是base64字符串 -->
				<image class="seal-image" v-if="isBase64(details.contract.signature_image_path)" :src="details.contract.signature_image_path" />

				<!-- 如果是URL -->
				<image class="seal-image" v-else :src="fullImagePath(details.contract.signature_image_path)" />
			  </div>
    	</p>
    	<p style="line-height: 16pt;margin-bottom: 30pt;">{{$t('dateLabel')}}：<span >{{details.order.purchase_date}}</span></p>
    	<p style="line-height: 16pt;margin-bottom: 25pt;">{{$t('partyBSignature')}}:
    	  <div class="seal-container">
    	    <image class="seal-image" :src="fullImagePath(details.product.manager_seal_image)"></image>
    	  </div>
    	</p>
    	<p style="line-height: 16pt;margin-bottom: 30pt;">{{$t('dateLabel')}}：<span >{{details.order.purchase_date}}</span></p>
    	<p style="line-height: 16pt;margin-bottom: 25pt;">{{$t('partyCSignature')}}:
    	  <div class="seal-container">
    	    <image class="seal-image" :src="fullImagePath(details.product.guarantor_seal_image)"></image>
    	  </div>
    	</p>
    	<p style="line-height: 16pt;margin-bottom: 30pt;">{{$t('dateLabel')}}：<span >{{details.order.purchase_date}}</span></p>
    </view>
  </view>
</template> 

<script>
	import { getStockOrderAndContractById } from '@/api/api.js'
	export default {
		data() {
			return {
				details: ''
			}
		},
		onShow() {
			// uni.setNavigationBarTitle({
			// 	title: this.$t('contractDetails')
			// })
		},
		onLoad(params) {
			console.log(params)
			if (params.id) {
				this.getDetails(params.id)
			} 
		},
		methods: {
			isBase64(str) {
			  return str.startsWith('data:image');
			},
			fullImagePath(relativePath) {
				console.log(this.$imgPrefix + relativePath)
			  return this.$imgPrefix + relativePath;
			},
			async getDetails(name) {
				console.log(name)
				const res = await getStockOrderAndContractById(name)
				if(res.code === 1) {
					this.details = res.data
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.content {
	padding-top: 208rpx;
}

.seal-container {
  position: relative;
  display: inline-block;
}

.seal-image {
  position: absolute;
  bottom: -20px; /* 位置根据需要调整 */
  left: 50%;
  transform: translateX(100px);
  transition: transform 0.3s ease; /* 平滑过渡效果 */
  width: 80px;
  height: 80px;
}


</style>
