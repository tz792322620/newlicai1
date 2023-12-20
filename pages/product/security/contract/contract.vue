<template>
  <view style="margin: .8rem;">
    <p style="text-align: center;
    font-size: 20px;"><b><span >{{$t('contractTitle')}}</span></b></p>
    <p><span >{{$t('contractNumberLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><b><span >{{$t('partyA')}}：</span></b><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><b><span >{{$t('partyB')}}：</span></b><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><b><span >{{$t('partyCLabel')}}</span></b><b><span >：</span></b><span >{{$t('insuranceCompany')}}</span></p>
    <p style="line-height: 16pt;"><span >{{$t('contractAgreement')}}</span></p>
    <p style="line-height: 16pt;"><b><span >{{$t('investmentDetails')}}</span></b><b></b></p>
    <p style="line-height: 16pt;"><span >{{$t('productNameLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><span >{{$t('investorNameLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><span >{{$t('investorIDLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><span >{{$t('investmentAmountLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><span >{{$t('earningCycleLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><span >{{$t('interestRateLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><span >{{$t('maturityDateLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><span >{{$t('totalReceivableLabel')}}</span><span style="text-decoration: underline;"></span></p>
    <p style="line-height: 16pt;"><b><span >{{$t('sectionTwo')}}</span></b></p>
    <p style="line-height: 16pt;"><span >{{$t('clause2.1')}}</span></p>
    <p style="line-height: 16pt;"><span >{{$t('clause2.2')}}</span></p>
    <p style="line-height: 16pt;"><span >{{$t('clause2.3')}}</span></p>
    <p style="line-height: 16pt;"><b><span >{{$t('sectionThree')}}</span></b></p>
    <p style="line-height: 16pt;"><span >{{$t('clause3.1')}}</span><span style="text-decoration: underline;"></span>{{$t('clause3.1.continuation')}}</p>
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
    <p style="line-height: 16pt;">{{$t('partyASignature')}}:
      <div class="seal-container">
        <!-- <image class="seal-image" :src="fullImagePath(details.product.manager_seal_image)"></image> -->
      </div>
    </p>
    <p style="line-height: 16pt;">{{$t('dateLabel')}}：<span ></span></p>
    <p style="line-height: 16pt;">{{$t('partyBSignature')}}:
      <div class="seal-container">
        <!-- <image class="seal-image" :src="fullImagePath(details.product.manager_seal_image)"></image> -->
      </div>
    </p>
    <p style="line-height: 16pt;">{{$t('dateLabel')}}：<span ></span></p>
    <p style="line-height: 16pt;">{{$t('partyCSignature')}}:
      <div class="seal-container">
        <!-- <image class="seal-image" :src="fullImagePath(details.product.manager_seal_image)"></image> -->
      </div>
    </p>
    <p style="line-height: 16pt;">{{$t('dateLabel')}}：<span ></span></p>
  </view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('contractDetails')
			})
		},
		onLoad(params) {
		},
		methods: {
		}
	}
</script>

<style>


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