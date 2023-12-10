<template>
	<view class="language" :style="{'margin': margin}">
		<image src="@/static/images/hm2.png" mode="" @click="isLanguage =! isLanguage"></image>
		<view class="tooltips" v-if="isLanguage">
			<scroll-view scroll-y="true" style="height: 100%;">
				<view class="tooltips_item" v-for="(item,index) in languageList" :key="item" @click="changeLanguage(index)">
					{{item}}
				</view>
			</scroll-view>
		</view>			
		<view class="content" v-if="isLanguage" @click="isLanguage =! isLanguage">
		</view>
	</view>
</template>

<script>
	export default {
		name:"language",
		props:{
			margin: {
				type: String,
				default: '0 0 0 0'
			}
		},
		data() {
			return {
				isLanguage: false,
				languageList: ['中文简体','中文繁體','English']
			};
		},
		// computed: {
		// 	language() {
		// 		return this.$t('language')
		// 	}
		// },
		// watch: {
		// 	language: {
		// 		handler: function(value) {
		// 			this.languageList[0] = value
		// 			this.languageList[1] = value
		// 			this.languageList[2] = value
		// 		},
		// 		immediate: true
		// 	},
		// },
		methods: {
			changeLanguage(index) {
				switch(index) {
					case 0:
						this._i18n.locale = 'zh-CN' // 中文简体
					break;
					case 1:
						this._i18n.locale = 'zh-TW' // 中文繁体
					break;
					case 2:
						this._i18n.locale = 'en' // 英文
					break;
				}
				uni.setStorageSync('language', this._i18n.locale)
				this.isLanguage = false
			}
		}
	}
</script>

<style lang="less" scoped>
	.language {
		position: relative;
		image {
			width: 48rpx;
			height: 48rpx;
		}
		.content {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(14,14,14,0.6);
			z-index: 98;
		}
		.tooltips {
			view {
				box-sizing: border-box;
			}
			height: 261rpx;
			z-index: 99;
			position: absolute;
			right: 0rpx;
			top: 80rpx;
			width: 255rpx;
			border-radius: 20rpx;
			background-color: #fff;
			padding: 0 30rpx;
			.tooltips_item {
				text-align: center;
				padding: 22rpx 0;
				font-size: 30rpx;
				font-weight: 400;
				color: #323233;
				border-bottom: 2rpx solid #EEEFF2;
				&:last-child {
					border: none;
				}
			}
		}
	}
</style>