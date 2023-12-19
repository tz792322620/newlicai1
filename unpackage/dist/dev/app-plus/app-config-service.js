
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login_em","pages/login/login_ph","pages/login/register_em","pages/login/register_ph","pages/login/password_ph","pages/login/password_em","pages/home/home","pages/product/product","pages/otc/otc","pages/yulibao/yulibao","pages/invite/invite","pages/verify/verify","pages/recharge/recharge","pages/withdraw/withdraw","pages/my/my","pages/product/bidding/bidding","pages/product/details/details","pages/otc/sell/sell","pages/otc/payment/payment","pages/otc/payment/add/add","pages/otc/publish_ad/publish_ad","pages/otc/my_ad/my_ad","pages/otc/my_ad/details/details","pages/otc/my_order/my_order","pages/otc/order/order","pages/otc/order/pay/pay","pages/otc/order/cancel/cancel","pages/otc/order/collect/collect","pages/otc/order/collect/collect_sell","pages/otc/order/appeal/appeal","pages/product/security/security","pages/my/info/info","pages/my/team/team","pages/my/sign/sign","pages/verify/submitSuccessfully/submitSuccessfully","pages/verify/pending/pending","pages/verify/successfully/successfully","pages/otc/deposit/deposit","pages/otc/buy/buy","pages/my/info/transactionPin/transactionPin","pages/recharge/records/records","pages/recharge/records/details","pages/withdraw/records/records","pages/withdraw/records/details","pages/invite/details","pages/my/order/order","pages/my/order/contract","pages/my/order/details","pages/my/funds/funds","pages/my/earnings/earnings","pages/home/notice/notice","pages/home/notice/details","pages/home/webview/webview","pages/product/security/contract/contract","pages/otc/order/status/status","pages/otc/order/appeal/appealResult","pages/verify/fail/fail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#FBFBFB"},"tabBar":{"color":"#D8D8D8","selectedColor":"#51DDA8","backgroundColor":"#fff","list":[{"text":"首页","pagePath":"pages/home/home","iconPath":"static/images/home1.png","selectedIconPath":"static/images/home.png"},{"text":"产品","pagePath":"pages/product/product","iconPath":"static/images/product1.png","selectedIconPath":"static/images/product.png"},{"text":"资讯","pagePath":"pages/home/notice/notice","iconPath":"static/images/notice1.png","selectedIconPath":"static/images/notice.png"},{"text":"OTC","pagePath":"pages/otc/otc","iconPath":"static/images/otc1.png","selectedIconPath":"static/images/otc.png"},{"text":"我的","pagePath":"pages/my/my","iconPath":"static/images/my1.png","selectedIconPath":"static/images/my.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"broad","compilerVersion":"3.6.18","entryPagePath":"pages/login/login_em","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login_em","meta":{"isQuit":true},"window":{"navigationBarTitleText":"邮箱登录","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/login/login_ph","meta":{},"window":{"navigationBarTitleText":"手机登录","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/login/register_em","meta":{},"window":{"navigationBarTitleText":"邮箱注册","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/login/register_ph","meta":{},"window":{"navigationBarTitleText":"手机号注册","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/login/password_ph","meta":{},"window":{"navigationBarTitleText":"手机密码忘记","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/login/password_em","meta":{},"window":{"navigationBarTitleText":"邮箱密码忘记","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"首页","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/product/product","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"产品","navigationBarTextStyle":"black","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/otc/otc","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"otc","navigationBarTextStyle":"black","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/yulibao/yulibao","meta":{},"window":{"navigationBarTitleText":"yulibao","navigationBarTextStyle":"black","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/invite/invite","meta":{},"window":{"navigationBarTitleText":"invite","navigationBarTextStyle":"black","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/verify/verify","meta":{},"window":{"navigationBarTitleText":"verify","navigationBarTextStyle":"black","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/recharge/recharge","meta":{},"window":{"navigationBarTitleText":"recharge","navigationBarTextStyle":"black","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/withdraw/withdraw","meta":{},"window":{"navigationBarTitleText":"withdraw","navigationBarTextStyle":"black","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationBarTextStyle":"black","bounce":"none","backgroundColor":"#f5f5f5","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/product/bidding/bidding","meta":{},"window":{"navigationBarTitleText":"立即投标","enablePullDownRefresh":false}},{"path":"/pages/product/details/details","meta":{},"window":{"navigationBarTitleText":"投资详情","enablePullDownRefresh":false}},{"path":"/pages/otc/sell/sell","meta":{},"window":{"navigationBarTitleText":"出售","enablePullDownRefresh":false}},{"path":"/pages/otc/payment/payment","meta":{},"window":{"navigationBarTitleText":"选择收款方式","enablePullDownRefresh":false,"bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/otc/payment/add/add","meta":{},"window":{"navigationBarTitleText":"添加收款方式","enablePullDownRefresh":false}},{"path":"/pages/otc/publish_ad/publish_ad","meta":{},"window":{"navigationBarTitleText":"发布广告","enablePullDownRefresh":false}},{"path":"/pages/otc/my_ad/my_ad","meta":{},"window":{"navigationBarTitleText":"我的广告","enablePullDownRefresh":false,"bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/otc/my_ad/details/details","meta":{},"window":{"navigationBarTitleText":"广告详情","enablePullDownRefresh":false}},{"path":"/pages/otc/my_order/my_order","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/otc/order/order","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/otc/order/pay/pay","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/otc/order/cancel/cancel","meta":{},"window":{"navigationBarTitleText":"取消订单","enablePullDownRefresh":false}},{"path":"/pages/otc/order/collect/collect","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/otc/order/collect/collect_sell","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/otc/order/appeal/appeal","meta":{},"window":{"navigationBarTitleText":"提交申诉","enablePullDownRefresh":false}},{"path":"/pages/product/security/security","meta":{},"window":{"navigationBarTitleText":"安全验证","enablePullDownRefresh":false,"disableScroll":true}},{"path":"/pages/my/info/info","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/my/team/team","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/my/sign/sign","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/verify/submitSuccessfully/submitSuccessfully","meta":{},"window":{"navigationBarTitleText":"实名认证","enablePullDownRefresh":false}},{"path":"/pages/verify/pending/pending","meta":{},"window":{"navigationBarTitleText":"实名认证","enablePullDownRefresh":false}},{"path":"/pages/verify/successfully/successfully","meta":{},"window":{"navigationBarTitleText":"实名认证","enablePullDownRefresh":false}},{"path":"/pages/otc/deposit/deposit","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/otc/buy/buy","meta":{},"window":{"navigationBarTitleText":"购买","enablePullDownRefresh":false}},{"path":"/pages/my/info/transactionPin/transactionPin","meta":{},"window":{"navigationBarTitleText":"交易密码管理","enablePullDownRefresh":false}},{"path":"/pages/recharge/records/records","meta":{},"window":{"navigationBarTitleText":"充值记录","enablePullDownRefresh":false}},{"path":"/pages/recharge/records/details","meta":{},"window":{"navigationBarTitleText":"充值详情","enablePullDownRefresh":false}},{"path":"/pages/withdraw/records/records","meta":{},"window":{"navigationBarTitleText":"提现记录","enablePullDownRefresh":false}},{"path":"/pages/withdraw/records/details","meta":{},"window":{"navigationBarTitleText":"提现详情","enablePullDownRefresh":false}},{"path":"/pages/invite/details","meta":{},"window":{"navigationBarTitleText":"邀请记录","enablePullDownRefresh":false,"bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/my/order/order","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/my/order/contract","meta":{},"window":{"navigationBarTitleText":"合同","enablePullDownRefresh":false}},{"path":"/pages/my/order/details","meta":{},"window":{"navigationBarTitleText":"详情","enablePullDownRefresh":false}},{"path":"/pages/my/funds/funds","meta":{},"window":{"navigationBarTitleText":"资金明细","enablePullDownRefresh":false}},{"path":"/pages/my/earnings/earnings","meta":{},"window":{"navigationBarTitleText":"收益记录","enablePullDownRefresh":false}},{"path":"/pages/home/notice/notice","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"资讯","navigationBarTextStyle":"black","bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/home/notice/details","meta":{},"window":{"navigationBarTitleText":"公告详情","enablePullDownRefresh":false}},{"path":"/pages/home/webview/webview","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false,"scrollIndicator":"none"}},{"path":"/pages/product/security/contract/contract","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/otc/order/status/status","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/otc/order/appeal/appealResult","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/verify/fail/fail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
