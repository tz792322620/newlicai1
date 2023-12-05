import { request } from '../request/request.js'
// 登录
export function userLogin (data) {
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})
}
// 查询新股产品列表(按条件查询)
export function getStockProductList(area) {
	return request({
		url: `/index/stockProductList?area=${area}`
	})
}
// 查询新股产品列表(全部)
export function getStockProductAllList() {
	return request({
		url: `/index/stockProductList`
	})
}
// 查询单个新股产品
export function getStockProductById(id) {
	return request({
		url: `/index/getStockProduct?product_id=${id}`
	})
}
// 创建新股订单(投资)
export function createStockOrder(data) {
	return request({
		url: '/user/createStockOrder',
		method: 'POST',
		data
	})
}
// 上传图片
export function uploadImage(data) {
	return request({
		url: '/image/upload',
		method: 'POST',
		data
	})
}
// OTC获取所有买or卖挂单列表
export function otcGetListing(type) {
	return request({
		url: `/otc/getListing?type=${type}`
	})
}
// 用户OTC收款信息列表查询
export function getPaymentInfo(type) {
	return request({
		// url: `user/getPaymentInfo${type ? `?payment_type=${type}` : ''}`
		url: `/user/getPaymentInfo?payment_type=${type}`
	})
}
// OTC收款信息添加
export function addPaymentInfo(data) {
	return request({
		url: '/user/addPaymentInfo',
		method: 'POST',
		data
	})
}
// 根据ID查询收款信息
export function getPaymentInfoById(id) {
	return request({
		url: `/user/getPaymentInfoById?id=${id}`
	})
}
// 获取用户的实名认证状态
export function getVerificationStatus() {
	return request({
		url: '/user/getVerificationStatus',
		method: 'POST'
	})
}
// 用户认证信息提交
export function submitVerification(data) {
	return request({
		url: '/user/submitVerification',
		method: 'POST',
		data
	})
}