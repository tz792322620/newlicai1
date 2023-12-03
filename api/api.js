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