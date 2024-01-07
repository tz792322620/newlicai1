// 版本号
//本地
// const IP = '81.71.28.250:1005'
// const IP1 = '81.71.28.250:1005'
// var ISHTTPS = false;
// var version = "1.0.0";
//iospay.wisdomallltd.com
//openapi.wisdomallltd.com
// 正式
const IP = ''
const IP1 = ''
var ISHTTPS = true;
var version = "1.0.9";

// 测试
// const IP = 'beauapi.newmskjs.com'
// const IP1 = 'beauapi.newmskjs.com'
// var ISHTTPS = false;
// var version = "1.0.0";
// 安卓版本:1.0.9
// 苹果版本:2.1.3

//菜
// 192.168.110.80:18105
//茂
// 192.168.110.200:1000
// 易
// 192.168.110.21


const webUrl = (ISHTTPS ? 'https://' : 'http://') + IP;
const basePthURL = (ISHTTPS ? 'https://' : 'http://') + IP1;

export default {
	webUrl: webUrl,
	basePthURL: basePthURL,
	version: version
}
