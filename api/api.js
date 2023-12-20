import { request } from '../request/request.js'
// 登录
export function userLogin (data) {
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})
}
// 用户找回密码
export function resetPassword(data) {
	return request({
		url: '/user/resetPassword',
		method: 'POST',
		data
	})
}
// 找回密码邮箱验证码
export function emsSend(data) {
	return request({
		url: '/ems/send',
		method: 'POST',
		data
	})
}
// 找回密码手机验证码
export function smsSend(data) {
	return request({
		url: '/sms/send',
		method: 'POST',
		data
	})
}
// 注册
export function register(data) {
	return request({
		url: '/user/register',
		method: 'POST',
		data
	})
}
// 查询公告类型
export function getGonggaoTypes() {
	return request({
		url: '/index/getGonggaoTypes'
	})
}
// 根据id查询公告
export function getGonggaoLogById(id) {
	return request({
		url: `/index/getGonggaoLogById?id=${id}`
	}) 
}

// id 查询单个新股订单和对应的合同
export function getStockOrderAndContractById(id) {
	return request({
		url: `/user/getStockOrderAndContractById?order_id=${id}`
	}) 
}
// 查询公告列表
export function GonggaoTypeList(type_name) {
	return request({
		url: `/index/GonggaoTypeList?type_name=${type_name}`
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
// 根据trade_id查询交易记录
export function getTradeById(id) {
	return request({
		url: `/otc/getTradeById?trade_id=${id}`
	})
}
// 取消交易由买方执行，取消交易并退款
export function cancelTrade(data) {
	return request({
		url: '/otc/cancelTrade',
		method: 'POST',
		data
	})
}
// OTC买方上传付款后的凭证截图
export function uploadPaymentImage(data) {
	return request({
		url: '/otc/uploadPaymentImage',
		method: 'POST',
		data
	})
}
// OTC卖方确认收款并完成交易
export function confirmPayment(data) {
	return request({
		url: '/otc/confirmPayment',
		method: 'POST',
		data
	})
}
// otc投诉(买家上传图片后卖家未收到)
export function createComplaint(data) {
	return request({
		url: '/otc/createComplaint',
		method: 'POST',
		data
	})
}
// 申诉方取消申诉
export function cancelComplaint(data) {
	return request({
		url: '/otc/cancelComplaint',
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

// 新建充值申请
export function createRecharge(data){
	return request({
		url: '/user/createRecharge',
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
// 从余利宝转出金额(转出到我的账户)
export function withdrawFromYuebao(data) {
	return request({
		url: '/user/withdrawFromYuebao',
		method: 'POST',
		data
	})
}
// 转入余利宝
export function createYuebaoOrder(data) {
	return request({
		url: '/user/createYuebaoOrder',
		method: 'POST',
		data
	})
}
// 获取用户的余利宝转入和转出资金记录
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
// 获取用户所有的收益记录
export function getAllEarnings() {
	return request({
		url: '/user/getAllEarnings'
	})
}
// 获取用户积分资金记录
export function getGiftPointsRecords() {
	return request({
		url: '/user/getGiftPointsRecords'
	})
}