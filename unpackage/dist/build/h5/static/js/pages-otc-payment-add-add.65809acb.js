(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-otc-payment-add-add"],{"2e83":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-input[data-v-564b61b5]{position:relative;flex:1;display:flex;flex-direction:row}.u-input__input[data-v-564b61b5]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-564b61b5]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-564b61b5]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-564b61b5]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-564b61b5]{margin-left:%?10?%}.u-input__right-icon--select[data-v-564b61b5]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-564b61b5]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},"47f9":function(t,e){t.exports="data:image/png;base64,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"},"6eeb":function(t,e,n){"use strict";var a=n("a5f7"),r=n.n(a);r.a},"71da":function(t,e,n){"use strict";n.r(e);var a=n("fb05"),r=n("7a90");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("f624");var u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"564b61b5",null,!1,a["a"],void 0);e["default"]=o.exports},"74f4":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.GonggaoTypeList=function(t){return(0,a.request)({url:"/index/GonggaoTypeList?type_name=".concat(t)})},e.addPaymentInfo=function(t){return(0,a.request)({url:"/user/addPaymentInfo",method:"POST",data:t})},e.calculateFee=function(t){return(0,a.request)({url:"/user/calculateFee",method:"POST",data:t})},e.createListing=function(t){return(0,a.request)({url:"/otc/createListing",method:"POST",data:t})},e.createRecharge=function(t){return(0,a.request)({url:"/user/createRecharge",method:"POST",data:t})},e.createStockOrder=function(t){return(0,a.request)({url:"/user/createStockOrder",method:"POST",data:t})},e.createTrade=function(t){return(0,a.request)({url:"/otc/createTrade",method:"POST",data:t})},e.createYuebaoOrder=function(t){return(0,a.request)({url:"/user/createYuebaoOrder",method:"POST",data:t})},e.currentUserSignin=function(){return(0,a.request)({url:"/user/currentUserSignin"})},e.currentUserStockOrder=function(){return(0,a.request)({url:"/user/currentUserStockOrder"})},e.depositOtc=function(t){return(0,a.request)({url:"/user/depositOtc",method:"POST",data:t})},e.emsSend=function(t){return(0,a.request)({url:"/ems/send",method:"POST",data:t})},e.exitOtc=function(t){return(0,a.request)({url:"/user/exitOtc",method:"POST",data:t})},e.getAllEarnings=function(){return(0,a.request)({url:"/user/getAllEarnings"})},e.getConsecutiveSigninDay=function(){return(0,a.request)({url:"/user/getConsecutiveSigninDay"})},e.getCurrencyRate=function(t){return(0,a.request)({url:"/user/getCurrencyRate?currency_code=".concat(t)})},e.getDirectReferrals=function(){return(0,a.request)({url:"/team/getDirectReferrals"})},e.getDirectReferralsStats=function(){return(0,a.request)({url:"/user/getDirectReferralsStats"})},e.getEarningsByOrderId=function(t){return(0,a.request)({url:"/user/getEarningsByOrderId?order_id=".concat(t)})},e.getGonggaoLogById=function(t){return(0,a.request)({url:"/index/getGonggaoLogById?id=".concat(t)})},e.getGonggaoTypes=function(){return(0,a.request)({url:"/index/getGonggaoTypes"})},e.getListingById=function(t){return(0,a.request)({url:"/otc/getListingById?id=".concat(t)})},e.getOrAllocateWalletAddress=function(t){return(0,a.request)({url:"/user/getOrAllocateWalletAddress",method:"POST",data:t})},e.getOtcDeposit=function(){return(0,a.request)({url:"/user/getOtcDeposit"})},e.getOtcDepositRecords=function(){return(0,a.request)({url:"/user/getOtcDepositRecords"})},e.getPaymentInfo=function(t){return(0,a.request)({url:"/user/getPaymentInfo?payment_type=".concat(t)})},e.getPaymentInfoById=function(t){return(0,a.request)({url:"/user/getPaymentInfoById?id=".concat(t)})},e.getRechargeById=function(t){return(0,a.request)({url:"/user/getRechargeById?id=".concat(t)})},e.getStockOrderAndContractById=function(t){return(0,a.request)({url:"/user/getStockOrderAndContractById?order_id=".concat(t)})},e.getStockProductAllList=function(){return(0,a.request)({url:"/index/stockProductList"})},e.getStockProductById=function(t){return(0,a.request)({url:"/index/getStockProduct?product_id=".concat(t)})},e.getStockProductList=function(t){return(0,a.request)({url:"/index/stockProductList?area=".concat(t)})},e.getTeamStats=function(t){return(0,a.request)({url:"/team/getTeamStats?start_date=".concat(t.start_date,"&end_date=").concat(t.end_date)})},e.getUserFlow=function(){return(0,a.request)({url:"/user/getUserFlow"})},e.getUserInfo=function(){return(0,a.request)({url:"/user/getUserInfo"})},e.getUserListings=function(){return(0,a.request)({url:"/otc/getUserListings"})},e.getUserRechargeRecords=function(){return(0,a.request)({url:"/user/getUserRechargeRecords?status=Pending"})},e.getUserTrades=function(t,e,n,r){return(0,a.request)({url:"/otc/getUserTrades?trade_type=".concat(t,"&start_date=").concat(e,"&end_date=").concat(n,"&status=").concat(r)})},e.getUserWithdrawals=function(){return(0,a.request)({url:"/user/getUserWithdrawals"})},e.getVerificationStatus=function(){return(0,a.request)({url:"/user/getVerificationStatus",method:"POST"})},e.getWithdrawalById=function(t){return(0,a.request)({url:"/user/getWithdrawalById?id=".concat(t)})},e.getYuebaoStats=function(){return(0,a.request)({url:"/user/getYuebaoStats"})},e.getYuebaoTransactions=function(){return(0,a.request)({url:"/user/getYuebaoTransactions"})},e.otcGetListing=function(t){return(0,a.request)({url:"/otc/getListing?type=".concat(t)})},e.register=function(t){return(0,a.request)({url:"/user/register",method:"POST",data:t})},e.resetPassword=function(t){return(0,a.request)({url:"/user/resetPassword",method:"POST",data:t})},e.setNickname=function(t){return(0,a.request)({url:"/user/setNickname",method:"POST",data:t})},e.setUserPayPassword=function(t){return(0,a.request)({url:"/user/setUserPayPassword",method:"POST",data:t})},e.signIn=function(){return(0,a.request)({url:"/user/signIn",method:"POST"})},e.smsSend=function(t){return(0,a.request)({url:"/sms/send",method:"POST",data:t})},e.submitVerification=function(t){return(0,a.request)({url:"/user/submitVerification",method:"POST",data:t})},e.uploadImage=function(t){return(0,a.request)({url:"/image/upload",method:"POST",data:t})},e.userLogin=function(t){return(0,a.request)({url:"/user/login",method:"POST",data:t})},e.withdraw=function(t){return(0,a.request)({url:"/user/withdraw",method:"POST",data:t})},e.withdrawFromYuebao=function(t){return(0,a.request)({url:"/user/withdrawFromYuebao",method:"POST",data:t})},n("99af");var a=n("dc77")},"76a3":function(t,e,n){"use strict";n.r(e);var a=n("90e5"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"7a90":function(t,e,n){"use strict";n.r(e);var a=n("94d7"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},8062:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uniIcons:n("3c2a").default,uInput:n("71da").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"add-payment"},[a("v-uni-view",{staticClass:"payment"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("choosePaymentMethod")))]),a("v-uni-view",{staticClass:"select"},[a("v-uni-view",{staticClass:"select-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShow=!t.isShow}}},[a("v-uni-view",{staticClass:"select-c_left"},[t._v(t._s(t.data.payment_type))]),a("v-uni-view",{staticClass:"select-c_right"},[a("uni-icons",{attrs:{type:t.isShow?"top":"bottom"}})],1)],1),t.isShow?a("v-uni-view",{staticClass:"u-flex-popup"},[a("v-uni-view",{staticClass:"u-flex-popup-content"},t._l(t.paymentList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"u-flex-popup-content-item",class:t.activeIndex==e.id?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.payClick(e)}}},[a("v-uni-text",[t._v(t._s(t.$t(e.name)))])],1)})),1)],1):t._e()],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("name")))]),a("v-uni-view",{staticClass:"input"},[a("u-input",{attrs:{placeholder:t.$t("enterName")},model:{value:t.data.user_name,callback:function(e){t.$set(t.data,"user_name",e)},expression:"data.user_name"}})],1)],1),0===t.activeIndex?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("WeChatAccount")))]),a("v-uni-view",{staticClass:"input"},[a("u-input",{attrs:{placeholder:t.$t("enterWeChatAccount")},model:{value:t.data.account_number,callback:function(e){t.$set(t.data,"account_number",e)},expression:"data.account_number"}})],1)],1):t._e(),1===t.activeIndex?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("AlipayAccount")))]),a("v-uni-view",{staticClass:"input"},[a("u-input",{attrs:{placeholder:t.$t("enterAlipayAccount")},model:{value:t.data.account_number,callback:function(e){t.$set(t.data,"account_number",e)},expression:"data.account_number"}})],1)],1):t._e(),2!==t.activeIndex?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("QCode")))]),t.data.qr_code_image?a("v-uni-view",{staticStyle:{width:"280rpx",height:"280rpx","border-radius":"12rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImage.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.$url+t.data.qr_code_image,mode:""}})],1):a("v-uni-view",{staticClass:"slot-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImage.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:n("47f9"),mode:""}}),a("v-uni-text",[t._v(t._s(t.$t("enterQCode")))])],1)],1):t._e(),2===t.activeIndex?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("BankCardAccount")))]),a("v-uni-view",{staticClass:"input"},[a("u-input",{attrs:{placeholder:t.$t("enterBankCardAccount")},model:{value:t.data.account_number,callback:function(e){t.$set(t.data,"account_number",e)},expression:"data.account_number"}})],1)],1):t._e(),2===t.activeIndex?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("BankName")))]),a("v-uni-view",{staticClass:"input"},[a("u-input",{attrs:{placeholder:t.$t("enterBankName")},model:{value:t.data.bank_name,callback:function(e){t.$set(t.data,"bank_name",e)},expression:"data.bank_name"}})],1)],1):t._e(),2===t.activeIndex?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("BranchBank")))]),a("v-uni-view",{staticClass:"input"},[a("u-input",{attrs:{placeholder:t.$t("enterBranchBank")},model:{value:t.data.branch_name,callback:function(e){t.$set(t.data,"branch_name",e)},expression:"data.branch_name"}})],1)],1):t._e(),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("remark")))]),a("v-uni-view",{staticClass:"textarea"},[a("v-uni-textarea",{attrs:{placeholder:t.$t("enterRemark"),cols:"30",rows:"10"},model:{value:t.data.remark,callback:function(e){t.$set(t.data,"remark",e)},expression:"data.remark"}})],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("tips")))]),a("v-uni-view",{staticClass:"tips"},[a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.$t("tip1")))]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.$t("tip2")))])],1)],1),a("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v(t._s(t.$t("save")))])],1)},i=[]},"90e5":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("498a");var r=a(n("c7eb")),i=a(n("1da1")),u=n("74f4"),o={data:function(){return{data:{user_name:"",payment_type:"微信",account_number:"",qr_code_image:"",bank_name:"",branch_name:"",remark:""},activeIndex:0,isShow:!1}},computed:{paymentList:function(){return[{name:this.$t("WeChat"),id:0},{name:this.$t("Alipay"),id:1},{name:this.$t("BankCard"),id:2}]}},onLoad:function(t){console.log(t),t.id?this.getPaymentInfo(t.id):uni.setNavigationBarTitle({title:this.$t("addPaymentMethod")})},methods:{getPaymentInfo:function(t){var e=this;return(0,i.default)((0,r.default)().mark((function n(){var a;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,u.getPaymentInfoById)(t);case 2:a=n.sent,1===a.code&&(e.data=a.data,e.activeIndex="微信"===a.data.payment_type?0:"支付宝"===a.data.payment_type?1:2,uni.setNavigationBarTitle({title:e.$t("edit")+e.data.payment_type})),console.log(a);case 5:case"end":return n.stop()}}),n)})))()},uploadImage:function(){var t=this;uni.chooseImage({success:function(e){var n=e.tempFilePaths;console.log(n[0]),uni.uploadFile({url:t.$url+"/api/image/upload",filePath:n[0],name:"image",formData:{image:n[0]},success:function(e){var n=JSON.parse(e.data);1===n.code?t.data.qr_code_image=n.data.url:uni.showToast({title:n.msg,icon:"none"})}})}})},payClick:function(t){this.activeIndex=t.id,this.data.payment_type=t.name,this.isShow=!1},save:function(){var t=this;return(0,i.default)((0,r.default)().mark((function e(){var n;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.data.user_name.trim()&&0!==t.data.user_name.length){e.next=2;break}return e.abrupt("return",uni.showToast({title:t.$t("enterName"),icon:"none"}));case 2:if(""!=t.data.account_number.trim()&&0!==t.data.account_number.length){e.next=4;break}return e.abrupt("return",uni.showToast({title:0==t.activeIndex?t.$t("enterWeChatAccount"):1==t.activeIndex?t.$t("enterAlipayAccount"):2==t.activeIndex?t.$t("enterBankCardAccount"):"",icon:"none"}));case 4:if(2!=t.activeIndex){e.next=9;break}if(""!=t.data.bank_name.trim()&&0!==t.data.bank_name.length){e.next=7;break}return e.abrupt("return",uni.showToast({title:t.$t("enterBankName"),icon:"none"}));case 7:if(""!=t.data.branch_name.trim()&&0!==t.data.branch_name.length){e.next=9;break}return e.abrupt("return",uni.showToast({title:t.$t("enterBranchBank"),icon:"none"}));case 9:if(""!=t.data.remark.trim()&&0!==t.data.remark.length){e.next=11;break}return e.abrupt("return",uni.showToast({title:t.$t("enterRemark"),icon:"none"}));case 11:return e.next=13,(0,u.addPaymentInfo)(t.data);case 13:n=e.sent,1===n.code&&uni.navigateTo({url:"/pages/otc/payment/payment"});case 15:case"end":return e.stop()}}),e)})))()}}};e.default=o},"94d7":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("498a");var r=a(n("9f2b")),i={name:"u-input",mixins:[r.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=i},"9f2b":function(t,e,n){"use strict";function a(t,e,n){this.$children.map((function(r){t===r.$options.name?r.$emit.apply(r,[e].concat(n)):a.apply(r,[t,e].concat(n))}))}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d81d"),n("99af");var r={methods:{dispatch:function(t,e,n){var a=this.$parent||this.$root,r=a.$options.name;while(a&&(!r||r!==t))a=a.$parent,a&&(r=a.$options.name);a&&a.$emit.apply(a,[e].concat(n))},broadcast:function(t,e,n){a.call(this,t,e,n)}}};e.default=r},a5f7:function(t,e,n){var a=n("aaaf");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("681b66bb",a,!0,{sourceMap:!1,shadowMode:!1})},aaaf:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.add-payment[data-v-50fe872a]{padding:%?40?%}.add-payment .desc[data-v-50fe872a]{font-size:%?24?%;font-weight:500;color:#333;line-height:%?34?%;margin-bottom:%?20?%}.add-payment .button[data-v-50fe872a]{margin-top:%?38?%;height:%?90?%;background:#35cba5;border-radius:%?12?%;text-align:center;line-height:%?90?%;font-size:%?32?%;font-weight:600;color:#fff}.add-payment .textarea[data-v-50fe872a]{height:%?220?%;line-height:%?90?%;background:#f4f5f7;border-radius:%?12?%;padding:%?20?%}.add-payment .input[data-v-50fe872a]{height:%?90?%;background:#f4f5f7;border-radius:%?12?%;padding:0 %?20?%;padding-top:%?10?%}.add-payment .item[data-v-50fe872a]{margin-top:%?40?%}.add-payment .item .tips[data-v-50fe872a]{font-size:%?24?%;font-weight:400;color:#333;line-height:%?34?% .add-payment .item .tips}.add-payment .item .tips[data-v-50fe872a] :first-child{margin-bottom:%?20?%}.add-payment .item .slot-btn[data-v-50fe872a]{border:%?1?% dashed #35cba5;width:%?280?%;height:%?280?%;border-radius:%?12?%;display:flex;align-items:center;justify-content:center}.add-payment .item .slot-btn uni-image[data-v-50fe872a]{width:%?48?%;height:%?48?%}.add-payment .item .slot-btn uni-text[data-v-50fe872a]{font-size:%?28?%;font-weight:500;color:#35cba5;line-height:%?40?%;letter-spacing:%?1?%}.add-payment .payment .select[data-v-50fe872a]{height:%?90?%;line-height:%?90?%;background:#f4f5f7;border-radius:%?12?%;padding:0 %?20?%;position:relative}.add-payment .payment .select .select-c[data-v-50fe872a]{display:flex;justify-content:space-between}.add-payment .payment .select .select-c_left[data-v-50fe872a]{font-size:%?28?%;font-weight:400;color:#333;letter-spacing:%?1?%}.add-payment .payment .select .u-flex-popup[data-v-50fe872a]{position:absolute;z-index:10;width:%?250?%;top:%?96?%;right:%?-12?%;height:%?316?%;background-color:#fff;box-shadow:0 0 %?20?% 0 rgba(0,0,0,.09);border-radius:%?20?%}.add-payment .payment .select .u-flex-popup[data-v-50fe872a]::before{content:"";position:absolute;top:%?-20?%;right:%?30?%;width:0;height:0;border-left:%?20?% solid transparent;border-right:%?20?% solid transparent;border-bottom:%?20?% solid #fff}.add-payment .payment .select .u-flex-popup .u-flex-popup-content[data-v-50fe872a]{padding-top:%?16?%}.add-payment .payment .select .u-flex-popup .u-flex-popup-content .u-flex-popup-content-item[data-v-50fe872a]{padding-left:%?80?%;display:flex;align-items:center}.add-payment .payment .select .u-flex-popup .u-flex-popup-content .u-flex-popup-content-item.active uni-text[data-v-50fe872a]{color:#35cba5!important}.add-payment .payment .select .u-flex-popup .u-flex-popup-content .u-flex-popup-content-item uni-text[data-v-50fe872a]{font-size:%?28?%;font-weight:500;color:#333}',""]),t.exports=e},dc77:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.request=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.url="".concat(r).concat(t.url),t.header={token:uni.getStorageSync("token"),"Accept-Language":uni.getStorageSync("language")?uni.getStorageSync("language"):"zh-CN"},new Promise((function(e,n){t.success=function(t){uni.hideLoading(),401===t.data.code&&(uni.showToast({title:t.data.msg,icon:"error",mask:!0}),uni.removeStorageSync("token"),setTimeout((function(){uni.reLaunch({url:"/pages/login/login_em"})}),1e3)),1!==t.data.code&&uni.showToast({title:t.data.msg,icon:"error",mask:!0}),e(t.data)},t.fail=function(t){console.log(t),uni.showToast({title:"系统错误",icon:"none"}),uni.hideLoading(),uni.switchTab({url:"/pages/index/index"}),n(t)},uni.request(t)}))},n("d3b7");a(n("1edb")),a(n("e143"));var r="https://api.broadreachvip.top/api"},e735:function(t,e,n){"use strict";n.r(e);var a=n("8062"),r=n("76a3");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("6eeb");var u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"50fe872a",null,!1,a["a"],void 0);e["default"]=o.exports},f54c:function(t,e,n){var a=n("2e83");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("787500c2",a,!0,{sourceMap:!1,shadowMode:!1})},f624:function(t,e,n){"use strict";var a=n("f54c"),r=n.n(a);r.a},fb05:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uIcon:n("235a").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},i=[]}}]);