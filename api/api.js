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
// OTC创建挂单(发布广告)
export function createListing(data) {
	return request({
		url: '/otc/createListing',
		method: 'POST',
		data
	})
}
// 获取用户创建的OTC订单记录(我的广告)
export function getUserListings() {
	return request({
		url: '/otc/getUserListings'
	})
}
// 查询OTC押金(押金管理)
export function getOtcDeposit() {
	return request({
		url: '/user/getOtcDeposit'
	})
}
// 获取用户的OTC押金流水记录(押金管理-押金流水)
export function getOtcDepositRecords() {
	return request({
		url: '/user/getOtcDepositRecords'
	})
}
// 充值押金(转入)
export function depositOtc(data) {
	return request({
		url: '/user/depositOtc',
		method: 'POST',
		data
	})
}
// 退出押金
export function exitOtc(data) {
	return request({
		url: '/user/exitOtc',
		method: 'POST',
		data
	})
}
// 根据OTC挂单ID查询(广告详情)
export function getListingById(id) {
	return request({
		url: `/otc/getListingById?id=${id}`
	})
}
// 获取当前用户创建的交易记录(订单)
export function getUserTrades(trade_type,start_date,end_date,status) {
	return request({
		url: `/otc/getUserTrades?trade_type=${trade_type}&start_date=${start_date}&end_date=${end_date}&status=${status}`
	})
}
// 查询汇率
export function getCurrencyRate(currency) {
	return request({
		url: `/user/getCurrencyRate?currency_code=${currency}`
	})
}
// OTC根据挂单创建新的交易
export function createTrade(data) {
	return request({
		url: '/otc/createTrade',
		method: 'POST',
		data
	})
}
// 用户个人信息
export function getUserInfo() {
	return request({
		url: '/user/getUserInfo'
	})
}
// 用户昵称设置
export function setNickname(data) {
	return request({
		url: '/user/setNickname',
		method: 'POST',
		data
	})
}
// 用户支付密码设置
export function setUserPayPassword(data) {
	return request({
		url: '/user/setUserPayPassword',
		method: 'POST',
		data
	})
}
// 获取用户连续签到天数
export function getConsecutiveSigninDay() {
	return request({
		url: '/user/getConsecutiveSigninDay'
	})
}
// 用户签到
export function signIn() {
	return request({
		url: '/user/signIn',
		method: 'POST'
	})
}
// 用户签到记录
export function currentUserSignin() {
	return request({
		url: '/user/currentUserSignin'
	})
}
// 获取用户充值地址
export function getOrAllocateWalletAddress(data){
	return request({
		url: '/user/getOrAllocateWalletAddress',
		method: 'POST',
		data
	})
}
// 充值记录
export function getUserRechargeRecords() {
	return request({
		url: '/user/getUserRechargeRecords?status=Pending'
	})
}
// 根据充值ID查询充值记录
export function getRechargeById(id) {
	return request({
		url: `/user/getRechargeById?id=${id}`
	})
}
// 计算手续费
export function calculateFee(data) {
	return request({
		url: '/user/calculateFee',
		method: 'POST',
		data
	})
}
// 用户提现
export function withdraw(data) {
	return request({
		url: '/user/withdraw',
		method: 'POST',
		data
	})
}
// 查询用户提现记录
export function getUserWithdrawals() {
	return request({
		url: '/user/getUserWithdrawals'
	})
}
// 根据充值ID查询提现记录
export function getWithdrawalById(id) {
	return request({
		url: `/user/getWithdrawalById?id=${id}`
	})
}
// 获取用户的在投总数、累计收益和产品利率
export function getYuebaoStats() {
	return request({
		url: '/user/getYuebaoStats'
	})
}
// 从余额宝转出金额(转出到我的账户)
export function withdrawFromYuebao(data) {
	return request({
		url: '/user/withdrawFromYuebao',
		method: 'POST',
		data
	})
}
// 转入余额宝
export function createYuebaoOrder(data) {
	return request({
		url: '/user/createYuebaoOrder',
		method: 'POST',
		data
	})
}
// 获取用户的余额宝转入和转出资金记录
export function getYuebaoTransactions() {
	return request({
		url: '/user/getYuebaoTransactions'
	})
}
// 获取团队数据
export function getTeamStats(data) {
	return request({
		url: `/team/getTeamStats?start_date=${data.start_date}&end_date=${data.end_date}`
	})
}
// 获取团队三级列表
export function getDirectReferrals() {
	return request({
		url: '/team/getDirectReferrals'
	})
}
// 邀请人数记录
export function getDirectReferralsStats() {
	return request({
		url: '/user/getDirectReferralsStats'
	})
}
// 查询当前用户的新股订单记录
export function currentUserStockOrder() {
	return request({
		url: '/user/currentUserStockOrder'
	})
}
// 根据新股订单ID获取该订单下的收益记录
export function getEarningsByOrderId(id) {
	return request({
		url: `/user/getEarningsByOrderId?order_id=${id}`
	})
}
// 查询用户的资金流水记录(资金明细)
export function getUserFlow() {
	return request({
		url: '/user/getUserFlow'
	})
}