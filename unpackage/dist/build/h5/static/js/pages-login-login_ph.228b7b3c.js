(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login_ph"],{"0ab5":function(t,e,n){"use strict";n.r(e);var o=n("d153"),a=n("5957");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s=n("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"1098efb6",null,!1,o["a"],void 0);e["default"]=u.exports},"4b56":function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4");var a=o(n("c7eb")),i=o(n("1da1")),s=n("74f4"),u=o(n("592f")),r=o(n("d42f")),c={data:function(){return{customStyle1:{height:"90rpx",margin:"auto",color:"#FFFFFF",width:"670rpx",background:"linear-gradient(#69EEAB,#21CCBA)"},value:"",account:"",password:"",lock:!0,yptoken:"",ypauthenticate:"",v5lang:"zh-CN",v5host:"accelerate.verify5.com",v5token:"aaa949126c3e48d6a941a482921ed7cf"}},components:{V5Dialog:u.default,V5Button:r.default},onLoad:function(){},mounted:function(){},methods:{login:function(){var t=this;return(0,i.default)((0,a.default)().mark((function e(){var n,o;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.account){e.next=4;break}return e.abrupt("return",t.$tools.toast("请输入手机号码"));case 4:if(""!=t.password){e.next=6;break}return e.abrupt("return",t.$tools.toast("请输入登录密码"));case 6:if(!t.lock){e.next=19;break}return t.lock=!1,n={},n["account"]=t.account,n["password"]=t.password,n["authenticate"]=t.ypauthenticate,n["token"]=t.yptoken,console.log(n),e.next=16,(0,s.userLogin)(n);case 16:o=e.sent,console.log(o,"登录======>"),1==o.code?(uni.setStorageSync("token",o.data.userinfo.token),uni.setStorageSync("userInfo",JSON.stringify(o.data.userinfo)),uni.setStorageSync("support_link",JSON.stringify(o.data.support_link)),t.$tools.toastSwitchTab("登录成功","../home/home"),setTimeout((function(){t.lock=!0}),1e3)):(t.$tools.toast(o.msg),setTimeout((function(){t.lock=!0}),1e3));case 19:case"end":return e.stop()}}),e)})))()}}};e.default=c},5957:function(t,e,n){"use strict";n.r(e);var o=n("4b56"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},d153:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={language:n("c0a9").default,uIcon:n("235a").default,uInput:n("71da").default,uButton:n("7f9b").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",[o("v-uni-image",{staticClass:"logo_bg",attrs:{src:n("5a72")}})],1),o("v-uni-view",{staticClass:"b_colfff logo_bk"},[o("v-uni-view",{staticClass:"col33 f_s36 f_bod",staticStyle:{display:"flex","justify-content":"space-between"}},[t._v(t._s(t.$t("login"))),o("language")],1),o("v-uni-view",{staticClass:"u-flex",staticStyle:{"margin-top":"40rpx"}},[o("v-uni-view",{staticStyle:{width:"320rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$tools.jump("../login/login_em")}}},[t._v(t._s(t.$t("emailLogin")))]),o("v-uni-view",{staticClass:"u-text-right col35",staticStyle:{width:"320rpx"}},[t._v(t._s(t.$t("phoneLogin")))])],1),o("v-uni-view",{staticStyle:{"margin-top":"60rpx"}},[o("v-uni-view",{staticClass:"logo_input u-flex"},[o("v-uni-view",{staticClass:"u-flex",staticStyle:{color:"#666666","margin-right":"20rpx"}},[o("v-uni-view",[t._v("+86")]),o("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[o("u-icon",{attrs:{color:"#9E9E9E",size:"24",name:"arrow-down-fill"}})],1)],1),o("u-input",{attrs:{type:"number",placeholder:t.$t("enterPhoneNumber")},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),o("v-uni-view",{staticClass:"logo_input"},[o("u-input",{attrs:{type:"password",placeholder:t.$t("enterPassword")},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),o("v-uni-view",{staticClass:"u-flex",staticStyle:{"margin-top":"30rpx","font-size":"24rpx"}},[o("v-uni-view",{staticStyle:{width:"320rpx"}}),o("v-uni-view",{staticClass:"u-text-right col35",staticStyle:{width:"340rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$tools.jump("../login/password_ph")}}},[t._v(t._s(t.$t("forgotPassword")))])],1)],1),o("v-uni-view",{staticStyle:{"margin-top":"10px"}},[o("V5Dialog",{ref:"v1",attrs:{lang:t.v5lang,mournful:!1,trustLevel:5,host:t.v5host,token:t.v5token}}),o("V5Button",{ref:"v2",attrs:{trustLevel:5,mournful:!1,lang:t.v5lang,name:"v5field",host:t.v5host,token:t.v5token},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.onSuccess.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticStyle:{"margin-top":"40rpx"}},[o("u-button",{staticStyle:{"font-size":"34rpx"},attrs:{"ripple-bg-color":"#fff",ripple:!0,"custom-style":t.customStyle1,shape:"circle",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login()}}},[t._v(t._s(t.$t("submitLogin")))])],1),o("v-uni-view",{staticClass:"u-text-center",staticStyle:{"margin-top":"30rpx","font-size":"24rpx",color:"#666666"}},[t._v(t._s(t.$t("noAccount"))),o("v-uni-text",{staticClass:"col35",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$tools.jump("../login/register_ph")}}},[t._v(t._s(t.$t("registerNow")))])],1)],1)],1)},i=[]}}]);