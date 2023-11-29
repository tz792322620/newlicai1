<template>
	<view style="background-color:#F5F5F5 !important;height: 100vh;">
		<view style="background-color: #B9F0E2;height: 300rpx;border-bottom-left-radius:100rpx;border-bottom-right-radius: 100rpx;"></view>
	<view style="padding: 40rpx;">
		
		<view class="u-text-center" style="background-color: #ffffff;padding: 30rpx; border-radius:12rpx;position: relative;margin-top: -300rpx;">
		<view>日化回报率</view>	
		<view style="color: #F75F52;font-size: 44rpx;font-weight: bold;margin-top: 20rpx;">3%</view>
		<view style="margin-top: 20rpx;">持仓期限<text style="color: #F75F52;margin-right: 40rpx;">满仓即止</text>
		起投金额<text style="color: #F75F52;"> 200</text>元
		<view style="margin-top: 20rpx;"><u-line-progress active-color="#6BEEAB" height="22"
						:percent="70"></u-line-progress></view>
						<view class="u-flex" style="margin-top: 20rpx;">
							<view style="width: 300rpx;">
								<text style="margin-right: 10rpx;color: #AFAFAF;">总额</text>
								2400万元
							</view>
							<view style="width: 300rpx;margin-left:200rpx;" class="u-text-right">
								<text style="margin-right: 10rpx;color: #AFAFAF;">剩余</text>
								2400万元
							</view>
						</view>
		</view>
		</view>
		
		
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
				<u-row gutter="16">
						<u-col span="4">
							<view class="">
								<image style="width: 80rpx;height: 80rpx;margin-left: 20rpx;" src="../../../static/images/p5.png"></image>
							<view>合规保障</view>
							</view>
						</u-col>
						<u-col span="4">
							<view class="u-text-center">
								<image style="width: 80rpx;height: 80rpx;" src="../../../static/images/p4.png"></image>
							<view>专业风控</view>
							</view>
						</u-col>
						<u-col span="4">
							<view class="u-text-right">
								<image style="width: 80rpx;height: 80rpx;margin-right:20rpx;" src="../../../static/images/p6.png"></image>
							<view>资金保障</view>
							</view>
						</u-col>
					</u-row>
		</view>
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
			<view style="color:#ffffff;">
				<text style="background-color: #52CABC;font-size: 24rpx;padding: 12rpx 20rpx 10rpx 20rpx;">项目名称</text>
			</view>
			<view style="margin-top:20rpx;color: #666666;">PIPE:阿丽塔：战斗天使（限投一次）</view>
		</view>
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
			<view style="color:#ffffff;">
				<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">招募周期</text>
			</view>
			<view style="margin-top:20rpx;color: #666666;">剩余时间：满仓即止</view>
		</view>
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
			<view style="color:#ffffff;">
				<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">日化回报率规则</text>
			</view>
			<view style="margin-top:20rpx;color: #666666;">按每日3%的收益（保本保息）</view>
		</view>
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
			<view style="color:#ffffff;">
				<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">限投次数</text>
			</view>
			<view style="margin-top:20rpx;color: #666666;">最大投资次数1次</view>
		</view>
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
			<view style="color:#ffffff;">
				<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">合作承保单位</text>
			</view>
			<view style="margin-top:20rpx;color: #666666;">中国人民财产保险股份有限公司</view>
		</view>
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
			<view style="color:#ffffff;">
				<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">金额及计算收益规则</text>
			</view>
			<view style="margin-top:20rpx;color: #666666;">每日分红6元*1天=总收益6元</view>
		</view>
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
			<view style="color:#ffffff;">
				<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">资金去向</text>
			</view>
			<view style="margin-top:20rpx;color: #666666;">本次发行所募集资金，用于结构型PIPE股权长期直投运作
主投国内A股市场，公司为投资人提供基金托管服务。</view>
		</view>
		<view class="b_colfff" style="border-radius: 12rpx;margin-top:20rpx;padding: 30rpx;">
			<view style="color:#ffffff;">
				<text style="background-color: #52CABC;
				padding: 12rpx 20rpx 10rpx 20rpx;font-size: 24rpx;">安全保障计划</text>
			</view>
			<view style="margin-top:20rpx;color: #666666;">中国人民财产保险股份有限公司对平台上的每一笔投资提
供100%本金保障，平台设立风险备用金，对本金承诺全
额垫付。</view>
		</view>
		
		<view style="margin-top:30rpx;">
			<u-button  @click="reg()" ripple-bg-color="#fff" :ripple="true" style="font-size: 34rpx;"
				:custom-style="customStyle1" shape="circle" type="primary">
				立即投资</u-button>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle1: {
					height: '90rpx',
					margin: 'auto', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#FFFFFF',
					width: '670rpx',
					background: 'linear-gradient(#69EEAB,#21CCBA)',
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
