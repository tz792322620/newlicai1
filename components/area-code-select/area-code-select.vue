<template>
	<view class="u-flex-popup" v-if="isAbP">
		<scroll-view scroll-y="true" style="height: 100%;">
			<view class="u-flex-popup-content">
				<view class="u-flex-popup-content-item" v-for="(item,index) in currencyList" :key="index"
					:class="ab == item.value ? 'active' : ''" @click="abClick(item)">
					<text>{{item.code}}</text>
					<text>{{item.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"area-code-select",
		props: {
			isAbP: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				ab: '86',
			};
		},
		computed: {
			// 区号集合
			currencyList() {
				return [{
					name: this.$t('areaCode.China'),
					code: '+86',
					value: '86'
				},{
					name: this.$t('areaCode.Hongkong'),
					code: '+852',
					value: '852'
				},{
					name: this.$t('areaCode.Taiwan'),
					code: '+886',
					value: '886'
				},{
					name: this.$t('areaCode.Macao'),
					code: '+853',
					value: '853'
				},{
					name: this.$t('areaCode.Thailand'),
					code: '+66',
					value: '66'
				},{
					name: this.$t('areaCode.Singapore'),
					code: '+65',
					value: '65'
				},{
					name: this.$t('areaCode.Korea'),
					code: '+82',
					value: '82'
				},{
					name: this.$t('areaCode.Japan'),
					code: '+81',
					value: '81'
				},{
					name: this.$t('areaCode.India'),
					code: '+91',
					value: '91'
				},{
					name: this.$t('areaCode.Vietnam'),
					code: '+84',
					value: '84'
				}]
			}
		},
		methods: {
			abClick(item) {
				this.ab = item.value
				// this.isAbP = false
				this.$emit('send', item, false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-flex-popup {
		position: absolute;
		z-index: 10;
		width: 250rpx;
		top: 90rpx;
		left: 0;
		height: 336rpx;
		background-color: #fff;
		box-shadow: 0px 0px 20rpx 0px rgba(0, 0, 0, 0.09);
		border-radius: 20rpx;
	
		&::before {
			content: '';
			position: absolute;
			top: -20rpx;
			left: 72rpx;
			width: 0;
			height: 0;
			border-left: 20rpx solid transparent;
			border-right: 20rpx solid transparent;
			border-bottom: 20rpx solid #fff;
		}
	
		.u-flex-popup-content {
			padding-top: 10rpx;
	
			.u-flex-popup-content-item {
				padding: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				&.active {
					text {
						color: #35CBA5 !important;
					}
				}
				text:first-child {
					width: 50rpx;
				}
				text:nth-child(2) {
					margin-left: 40rpx;
					width: 100%;
					text-align: left;
				}
	
				text {
					font-size: 28rpx;
					font-weight: 500;
					color: #333333;
				}
			}
		}
	}
</style>