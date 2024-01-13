<template>
	<view class="goods-details" v-if="goodsDetails">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="swiper">
			<u-swiper :list="list" border-radius="0" height="750" :autoplay="false" :effect3d="false"></u-swiper>
			<image @click="back" src="@/static/images/home/pointsMall/back.png" mode=""></image>
		</view>
		<view class="content" v-if="goodsDetails">
			<view class="box1">
				<view class="box1_left">
					{{$t('Points required')}} <text>{{goodsDetails.points_required}}</text>
				</view>
				<view class="box1_right">
					{{$t('residue')}}{{goodsDetails.stock_quantity}}{{$t('pieces')}}
				</view>
			</view>
			<view class="box2">
				{{goodsDetails.goods_name}}
			</view>
			<!-- <view class="box3">
				水魔方水流护色护形；雾态洗；ATC全时净态；BLDC变频电机；恒温洗；内筒照明
			</view> -->
		</view>
		<view class="line"></view>
		<view class="goods-info">
			<view class="goods-info_title">
				{{$t('Product desciption')}}
			</view>
			<view style="padding: 30rpx;" v-html="formatRichText(goodsDetails.description)">

			</view>
		</view>
		<view class="exchange">
			<view class="buttons" @click="addressShow = true">
				{{$t('Redeem now')}}
			</view>
		</view>
		<u-popup v-model="addressShow" mode="bottom" border-radius="12" :closeable="true">
			<view class="popup-content">
				<view class="title">
					{{$t('address')}}
				</view>
				<view class="form">
					<view class="form_item">
						<view class="form_item_label">
							{{$t('recipient')}}
						</view>
						<view class="form_item_input">
							<u-input v-model="data.recipient_name" :placeholder="$t('Please enter recipient')" type="text" />
						</view>
					</view>
					<view class="form_item">
						<view class="form_item_label">
							{{$t('phone')}}
						</view>
						<view class="form_item_input">
							<u-input v-model="data.contact_number" :placeholder="$t('enterPhoneNumber')" type="text" />
						</view>
					</view>
					<view class="form_item">
						<view class="form_item_label">
							{{$t('Select province/city/district')}}
						</view>
						<view class="form_item_input" @click="openPicker" style="width: 100%;height: 70rpx;font-size: 28rpx;line-height: 70rpx;">
							<text v-if="!region" style="color: rgb(192, 196, 204);">{{$t('Please select province/city/district')}}</text>
							<text v-else style="color: #000000;">{{region}}</text>
						</view>
					</view>
					<view class="form_item">
						<view class="form_item_label">
							{{$t('Address')}}
						</view>
						<view class="form_item_input">
							<u-input v-model="data.address" :placeholder="$t('Please enter detailed address')" type="text" />
						</view>
					</view>
					<!-- <view class="form_item">
						<view class="form_item_label">
							邮编
						</view>
						<view class="form_item_input">
							<u-input v-model="value" :placeholder="'请输入邮编'" type="text" />
						</view>
					</view> -->
					<view class="buttons" @click="saveAddress">
						{{$t('save')}}
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="orderShow" mode="bottom" border-radius="12" :closeable="true">
			<view class="popup-content1" v-if="addressList.length !== 0">
				<view class="title">
					{{$t('Order Confirmation')}}
				</view>
				<view class="info">
					<view class="info_title">
						<image src="@/static/images/home/pointsMall/details/address.png" mode=""></image>
						<text>{{$t('Delivery Information')}}</text>
					</view>
					<view class="address">
						<view class="address_desc">
							{{$t('Shipping address')}}
						</view>
						<view class="address_info" @click="addressShow = true">
							<view class="user-info">
								{{addressList[0].recipient_name}} {{addressList[0].contact_number}}
							</view>
							<view class="address-info">
								<text>{{addressList[0].province}} {{addressList[0].city}} {{addressList[0].district}} {{addressList[0].address}}</text>
								<image src="@/static/images/home/pointsMall/details/more-right.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="date">
						<view class="date_desc">
							{{$t('Time of receipt')}}
						</view>
						<view class="date_time">
							{{$t('Any time')}}
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="info">
					<view class="info_title">
						<image src="@/static/images/home/pointsMall/details/goods.png" mode=""></image>
						<text>{{$t('Product information')}}</text>
					</view>
					<view class="goods-info">
						<view class="image">
							<image :src="list[0].image" mode=""></image>
						</view>
						<view class="text">
							{{goodsDetails.goods_name}}
						</view>
					</view>
					<view class="goods-price">
						<view class="goods-price_desc">
							{{$t('Total product price')}}
						</view>
						<view class="goods-price_count">
							{{goodsDetails.points_required}}{{$t('points')}}
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="info">
					<view class="info_title">
						<image src="@/static/images/home/pointsMall/details/payment.png" mode=""></image>
						<text>{{$t('payMethod')}}</text>
					</view>
					<view class="payment">
						{{$t('full points')}}
					</view>
				</view>
				<view class="line" style="height: 30rpx;"></view>
				<view class="popup-content1_bottom">
					<view class="popup-content1_bottom_left">
						{{$t('actual payment')}}
						<text>{{goodsDetails.points_required}}{{$t('points')}}</text>
					</view>
					<view class="popup-content1_bottom_right">
						<view class="buttons" @click="submitOrder">
							{{$t('Submit Order')}}
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData">
		</lotus-address>
	</view>
</template>

<script>
	import {
		getGoodsById,
		createRecipient,
		getRecipientList,
		createOrder
	} from '@/api/api.js'
	import lotusAddress from "@/uni_modules/Winglau14-lotusAddress/components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
	export default {
		data() {
			return {
				lotusAddressData: {
					visible: false,
					provinceName: '',
					cityName: '',
					townName: '',
				},
				data: {
					recipient_name: '',
					contact_number: '',
					province: '',
					city: '',
					district: '',
					address: ''
				},
				region: '',
				value: '',
				addressShow: false,
				orderShow: false,
				list: [],
				goodsId: '',
				goodsDetails: '',
				addressList: []
			}
		},
		onLoad(params) {
			if (params.id) {
				this.goodsId = params.id
				this.getGoodsDetais()
			}
		},
		components: {
			"lotus-address": lotusAddress
		},
		methods: {
			async submitOrder() {
				const res = await createOrder({
					goods_id: this.goodsDetails.id,
					recipient_id: this.addressList[0].id
				})
				if (res.code == 1) {
					this.orderShow = false
					uni.navigateTo({
						url: '/pages/home/pointsMall/order/order'
					})
				}
			},
			async getAddressList() {
				uni.showLoading({
					mask: true
				})
				const res = await getRecipientList()
				if (res.code == 1) {
					console.log(res, '收件人列表')
					uni.hideLoading()
					this.addressList = res.data
					this.orderShow = true
				}
			},
			async saveAddress() {
				if(this.$u.test.isEmpty(this.data.recipient_name)) {
					return uni.showToast({
						title: this.$t('Please enter recipient'),
						icon: 'none'
					})
				}
				if(this.$u.test.isEmpty(this.data.contact_number)) {
					return uni.showToast({
						title: this.$t('enterPhoneNumber'),
						icon: 'none'
					})
				}
				// if (!/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(this.data.contact_number)) {
				// 	return this.$tools.toast(this.$t('enterTruePhoneNumber'));
				// }
				if(this.$u.test.isEmpty(this.data.province) || this.$u.test.isEmpty(this.data.city) || this.$u.test.isEmpty(this.data.district)) {
					return uni.showToast({
						title: this.$t('Please select province/city/district'),
						icon: 'none'
					})
				}
				if(this.$u.test.isEmpty(this.data.address)) {
					return uni.showToast({
						title: this.$t('Please enter detailed address'),
						icon: 'none'
					})
				}
				const res = await createRecipient(this.data)
				if (res.code == 1) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					this.addressShow = false
					this.lotusAddressData.provinceName = '' //省
					this.lotusAddressData.cityName = '' //市
					this.lotusAddressData.townName = '' //区
					this.region = ''
					this.data.recipient_name = ''
					this.data.contact_number = ''
					this.data.address = ''
					this.data.province = ''
					this.data.city = ''
					this.data.district = ''
					this.getAddressList()
				}
			},
			//打开picker
			openPicker() {
				this.lotusAddressData.visible = true;
				// this.lotusAddressData.provinceName = '广东省';
				// this.lotusAddressData.cityName = '深圳市';
				// this.lotusAddressData.townName = '龙华新区';
			},
			//回传已选的省市区的值
			choseValue(res) {
				//res数据源包括已选省市区与省市区code
				console.log(res);
				this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if (res.isChose) {
					this.lotusAddressData.provinceName = res.province; //省
					this.lotusAddressData.cityName = res.city; //市
					this.lotusAddressData.townName = res.town; //区
					this.data.province = res.province
					this.data.city = res.city
					this.data.district = res.town
					this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
			},
			// 富文本处理
			formatRichText(html) {
				let newContent = html.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:block;"');
				return newContent;
			},
			async getGoodsDetais() {
				uni.showLoading({
					mask: true
				})
				const res = await getGoodsById(this.goodsId)
				uni.hideLoading()
				if (res.code == 1) {
					this.goodsDetails = res.data
					let imageList = res.data.image_url.split(',')
					imageList.forEach((item, index) => {
						this.list.push({
							image: item
						})
					})
				}
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-details {
		/deep/.u-indicator-item-round-active {
			background-color: #35cba5 !important;
		}

		.popup-content {
			padding: 30rpx;

			.title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				line-height: 40rpx;
				margin-bottom: 30rpx;
			}

			.form {
				&_item {
					margin-bottom: 20rpx;

					&_label {
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
						line-height: 34rpx;
						margin-bottom: 10rpx;
					}

					&_input {
						background: #F4F5F7;
						border-radius: 12rpx;
						padding: 0 20rpx;
					}
				}

				.buttons {
					height: 70rpx;
					background: #35CBA5;
					border-radius: 36rpx;
					line-height: 70rpx;
					font-size: 32rpx;
					font-weight: 600;
					color: #FFFFFF;
					text-align: center;
					margin-top: 10rpx;
				}
			}
		}

		.popup-content1 {
			.title {
				padding: 34rpx 0 0 30rpx;
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
				line-height: 40rpx;
			}

			.info {
				padding: 10rpx 30rpx 30rpx 30rpx;

				&_title {
					display: flex;
					align-items: center;

					image {
						width: 48rpx;
						height: 48rpx;
						margin-right: 4rpx;
					}

					text {
						font-size: 24rpx;
						font-weight: 500;
						color: #333333;
					}
				}

				.address {
					margin: 30rpx 0;
					display: flex;
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
					line-height: 34rpx;

					&_desc {
						margin-right: 40rpx;
					}

					&_info {
						.user-info {
							font-weight: 500;
							margin-bottom: 10rpx;
						}

						.address-info {
							display: flex;
							justify-content: space-between;
							align-items: center;

							image {
								width: 40rpx;
								height: 40rpx;
							}
						}
					}
				}

				.date {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
					line-height: 34rpx;
				}

				.goods-info {
					display: flex;
					justify-content: space-between;
					margin: 20rpx 0 30rpx;

					.image {
						width: 160rpx;
						height: 160rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: #f9f9f9;
						margin-right: 40rpx;
						image {
							width: 94rpx;
							height: 130rpx;
						}
					}

					.text {
						flex: 1;
						font-size: 24rpx;
						font-weight: 400;
						color: #000000;
						line-height: 34rpx;
					}
				}

				.goods-price {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
					line-height: 34rpx;

					&_count {
						font-weight: 500;
						color: #35CBA5;
					}
				}

				.payment {
					margin-top: 20rpx;
					width: 200rpx;
					height: 60rpx;
					border-radius: 30rpx;
					border: 2rpx solid #35CBA5;
					filter: blur(0px);
					text-align: center;
					line-height: 56rpx;
					font-size: 28rpx;
					font-weight: 500;
					color: #35CBA5;
				}
			}

			.line {
				width: 100%;
				height: 10rpx;
				background-color: #fbfbfb;
			}

			&_bottom {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx;

				&_left {
					display: flex;
					align-items: center;
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;

					text {
						margin-left: 20rpx;
						font-size: 36rpx;
						font-weight: 500;
						color: #35CBA5;
					}
				}

				&_right {
					.buttons {
						height: 70rpx;
						background: #35CBA5;
						border-radius: 36rpx;
						padding: 0 46rpx;
						font-size: 32rpx;
						font-weight: 600;
						color: #FFFFFF;
						line-height: 70rpx;
						text-align: center;
					}
				}
			}
		}

		.swiper {
			position: relative;

			image {
				width: 48rpx;
				height: 48rpx;
				position: absolute;
				top: 20rpx;
				left: 30rpx;
			}
		}

		.line {
			width: 100%;
			height: 10rpx;
			background-color: #fbfbfb;
		}

		.content {
			padding: 30rpx;

			.box1 {
				display: flex;
				justify-content: space-between;
				align-items: center;

				&_left {
					font-size: 28rpx;
					font-weight: 500;
					color: #35CBA5;

					text {
						font-size: 56rpx;
					}
				}

				&_right {
					font-size: 24rpx;
					font-weight: 500;
					color: #999999;
				}
			}

			.box2 {
				margin: 20rpx 0;
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
				line-height: 40rpx;
			}

			.box3 {
				font-size: 24rpx;
				font-weight: 400;
				color: #35CBA5;
				line-height: 34rpx;
			}
		}

		.goods-info {
			&_title {
				padding: 30rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #000000;
				line-height: 44rpx;
			}
		}

		.exchange {
			width: 100%;
			background-color: #FFFFFF;
			position: fixed;
			left: 0;
			bottom: 0;
			padding: 30rpx;

			.buttons {
				width: 100%;
				height: 70rpx;
				background: linear-gradient(90deg, #69EEAB 0%, #21CCBA 100%);
				border-radius: 46rpx;
				filter: blur(0px);
				font-size: 32rpx;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 70rpx;
				text-align: center;
			}
		}
	}
</style>
