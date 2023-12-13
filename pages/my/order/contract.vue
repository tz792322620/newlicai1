<template>
<view style="margin: .8rem;">
	<p><b><span style="font-size: 22pt;">投资合同书</span></b></p>
	<p><span style="font-size: 16pt;">合同编号：</span><span style="font-size: 16pt;text-decoration: underline;" >{{details.contract.contract_number}}</span></p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">甲方（投资人）：</span></b><span
			style="font-size: 16pt;text-decoration: underline;">{{details.user_verification.real_name}}</span></p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">乙方（管理方）：</span></b><span
			style="font-size: 16pt;text-decoration: underline;">{{details.product.manager_company_name}}</span></p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">丙方</span></b><b><span
				style="font-size: 16pt;">（担保方）：</span></b><span style="font-size: 16pt;text-decoration: underline;">{{details.product.guarantor_company_name}}</span><span
			style="font-size: 16pt;">保险股份有限公司</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">经甲</span><span style="font-size: 16pt;">、</span><span
			style="font-size: 16pt;">乙</span><span style="font-size: 16pt;">、丙三</span><span
			style="font-size: 16pt;">方经友好协商在相互尊重和互利互惠的原则基础上，</span><span style="font-size: 16pt;">根据</span><span
			style="font-size: 16pt;">香港相关法律</span><span style="font-size: 16pt;">规定，</span><span
			style="font-size: 16pt;">就甲方</span><span style="font-size: 16pt;">享受</span><span
			style="font-size: 16pt;">乙方提供的</span><span style="font-size: 16pt;">理财投资管理等服务，丙方为乙方提供担保</span><span
			style="font-size: 16pt;">的有关事项达成如下协议：</span></p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">一、理财投资明细</span></b><b></b></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">产品名称</span><span style="font-size: 16pt;text-decoration: underline;">：{{details.product.product_name_cn}}</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">投资人名称</span><span style="font-size: 16pt;text-decoration: underline;">：{{details.user_verification.real_name}}</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">投资人身份证</span><span style="font-size: 16pt;text-decoration: underline;">：{{details.user_verification.identity_number}}</span>
	</p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">投入本金数额</span><span style="font-size: 16pt;text-decoration: underline;">：{{details.order.purchase_amount}}</span>
	</p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">收益周期（天）</span><span style="font-size: 16pt;text-decoration: underline;">：{{details.product.investment_period}}</span>
	</p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">收益率</span><span style="font-size: 16pt;text-decoration: underline;">：{{details.product.progress}}</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">到期日</span><span style="font-size: 16pt;text-decoration: underline;">：{{details.order.purchase_date}}</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">应收本息（元）</span><span style="font-size: 16pt;text-decoration: underline;">：{{details.order.purchase_amount}}</span>
	</p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">二、协议期注意事项</span></b><b></b></p>
	<p style="line-height: 27pt;"><span
			style="font-size: 16pt;">2.1甲方保证其提供的信息和资料的真实性，不得提供虚假资料。甲方提供虚假资料，构成违约，应承担违约责任，同时本协议视为提前终止。</span></p>
	<p style="line-height: 27pt;"><span
			style="font-size: 16pt;">2.2甲方不得擅自终止本协议，否则乙方将取消为甲方的理财服务，甲方不享受任何理财收益，甲方投资时必须看清楚投资项目的一切事宜，按照公司要求进行投资，如有违规定，甲方并承担由此所引起的一切损失</span><span
			style="font-size: 16pt;">。</span></p>
	<p style="line-height: 27pt;"><span
			style="font-size: 16pt;">2.3甲方保证其所用于投资资金来源合法，甲方是该资金的合法所有人，如果因合法性问题发生争议，由甲方自行负责解决。如甲方未能解决，因甲方资金安全问题导致账户被相关司法机关冻结或执行，由甲方自行负责解决相关司法问题。</span>
	</p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">三、理财协议生成流程</span></b><b></b></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">3.1本协议成立：乙方在</span><span
			style="font-size: 16pt;text-decoration: underline;">{{details.product.guarantor_company_name}}</span><span
			style="font-size: 16pt;">有限公司理财平台上发布相关的理财产品及相关收益，甲方按照</span><span
			style="font-size: 16pt;text-decoration: underline;">{{details.product.guarantor_company_name}}</span><span
			style="font-size: 16pt;">资产管理有限公司的规则，在点击确认投资时，本协议下所约定的内容即成立，本协议的签署关系同时成立。本协议生效的同时，</span><span
			style="font-size: 16pt;">乙</span><span style="font-size: 16pt;">方即不可撤销</span><span
			style="font-size: 16pt;">甲方</span><span style="font-size: 16pt;">方所投资的金额，</span><span
			style="font-size: 16pt;">本金额等同于第一条中的投入本金数额。</span></p>
	<p style="line-height: 27pt;"><span
			style="font-size: 16pt;">3.2投资资金冻结：甲方点击"确认投资"按钮即视为其已经向乙方发出不可撤销的授权指令，授权甲方全权处理和操作，本次的投资金额中的冻结金额等同于本协议投资的本金数额的资金。上述冻结在本协议生效时或本协议确定失效时（项目周期结束）解除。</span>
	</p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">3.</span><span style="font-size: 16pt;">3</span><span
			style="font-size: 16pt;">理财金由甲方帐户划转到乙方的综合理财帐户上进行具体的理财操作，由于甲方全权委托乙方理财，因此在股权</span><span
			style="font-size: 16pt;">、</span><span
			style="font-size: 16pt;">基金项目的投资风险由乙方承担，乙方首先要考虑资金的安全性，然后才考虑资金的收益。甲方不得以任何形式干预乙方的理财操作。收益是每天发放到甲方账户，待理财投资周期到日止，乙方应将甲方之理财本金划入其在乙方开立的存款帐户上。</span>
	</p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">四、</span></b><b><span
				style="font-size: 16pt;">双方的权利与义务</span></b><b></b></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">4.1如果投资有亏损情况</span><span
			style="font-size: 16pt;">，</span><span
			style="font-size: 16pt;">则无论亏损大小由乙方承担全部损失，按合同承诺付款给甲方。如果乙方出现违约将由担保方丙方履行承诺付款给甲方。</span></p>
	<p style="line-height: 27pt;"><span
			style="font-size: 16pt;">4.2乙方同意并承诺，乙方负责对甲方所投资金的收益金额和返款时间的保证，乙方必须按照本协议的约定，按时间全额将其返还到甲方的账户中。</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">4.3如果返款日遇到法定假日或公休日，返款日期时间不受影响。</span></p>
	<p style="line-height: 27pt;"><span
			style="font-size: 16pt;">4.4如果乙方严重违反本协议的协定，如：没能按时的返还甲方的红利及本金，乙方应向甲方支付投资总金额和投资总金额10％作为违约金。甲方须保证其资金来源的合法性不得隐瞒，否则乙方有权冻结其资金移送法办。</span>
	</p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">4</span><span style="font-size: 16pt;">.</span><span
			style="font-size: 16pt;">5甲</span><span style="font-size: 16pt;">方保证其提供的信息和资料的真实性，不得提供虚假资料或隐瞒。</span><span
			style="font-size: 16pt;">甲</span><span
			style="font-size: 16pt;">方提供虚假资料或者故意隐瞒，构成违约，应承担违约责任，同时本协议视为提前终止。</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">4</span><span style="font-size: 16pt;">.</span><span
			style="font-size: 16pt;">6任何一方</span><span style="font-size: 16pt;">发生下列任何一项或几项情形的，</span><span
			style="font-size: 16pt;">构成违约</span></p>
	<p style="line-height: 27pt;"><span
			style="font-size: 16pt;">(1）甲方、乙方任何财产遭受没收、征用、查封、扣押、冻结等可能影响其履约能力的不利事件，且不能及时提供有效补救措施的；</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">(2）提前终止本协议；</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">(3）采取法律、法规</span><span
			style="font-size: 16pt;">以外</span><span style="font-size: 16pt;">以及本协议</span><span
			style="font-size: 16pt;">未</span><span style="font-size: 16pt;">约定的其他救济措施。</span></p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">五、保密义务</span></b></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">三</span><span
			style="font-size: 16pt;">方对其通过接触和通过其他渠道得知的有关各方的商业机密等严格保密，对所有资料严格保密，不得向任何其他人员及机构透露个人的信息。</span></p>
	<p style="line-height: 27pt;"><b><span style="font-size: 16pt;">六、合同的法律效力</span></b></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">6.1本协议经</span><span
			style="font-size: 16pt;">甲方</span><span
			style="font-size: 16pt;">通过投资平台点击确认投资后自动生成并签订，本协议自生成时生效。三方均确认，本协议的签订、生效和履行以不违反法律为前提。如果本协议中的任何一条或多条违反适用的法律，则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力。</span>
	</p>
	<p style="line-height: 27pt;"><span
			style="font-size: 16pt;">6.2本协议履行期间，各方如发生争议或者纠纷，应友好协商解决，如协商不成，任何一方有权向乙方所在地人民法院起诉。</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">6.3本协议采用电子文本形式制成</span><span
			style="font-size: 16pt;">，本协议的任何修改、补充均须以乙方平台电子文本形式作出。</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">6.4</span><span
			style="font-size: 16pt;">本协议未经甲方事先书面同意，乙方不得将本协议项下的任何权利义务转让给任何第三方。</span></p>
	<p style="line-height: 27pt;"><span style="font-size: 16pt;">（下方为正文，为签章处）</span></p>
	<p style="line-height: 27pt;">甲方（签章）：
	  <div class="seal-container">
	    <image class="seal-image" :src="fullImagePath(details.product.manager_seal_image)"></image>
	  </div>
	 </p>
	<p style="line-height: 27pt;">日期：<span style="font-size: 16pt;">{{details.order.purchase_date}}</span></p>
	<p style="line-height: 27pt;">乙方（签章）：
	<div class="seal-container">
	  <image class="seal-image" :src="fullImagePath(details.product.manager_seal_image)"></image>
	</div>
	</p>
	<p style="line-height: 27pt;">日期：<span style="font-size: 16pt;">{{details.order.purchase_date}}</span></p>
	<p style="line-height: 27pt;">丙方（签章）：
	<div class="seal-container">
	  <image class="seal-image" :src="fullImagePath(details.product.manager_seal_image)"></image>
	</div>
	</p>
	<p style="line-height: 27pt;">日期：<span style="font-size: 16pt;">{{details.order.purchase_date}}</span></p>
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
			uni.setNavigationBarTitle({
				title: this.$t('noticeDetails')
			})
		},
		onLoad(params) {
			console.log(params)
			if (params.id) {
				this.getDetails(params.id)
			} 
		},
		methods: {
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
