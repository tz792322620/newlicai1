(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-info-info"],{2933:function(t,e,n){"use strict";var i=n("e09b"),a=n.n(i);a.a},"299c":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("3c2a").default,uActionSheet:n("76bb").default,uPopup:n("6b67").default,uInput:n("71da").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"bgc-image"},[i("v-uni-view",{staticClass:"navbar"},[i("v-uni-image",{attrs:{src:n("3c74"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),i("v-uni-text",[t._v(t._s(t.$t("editInfo")))])],1)],1),i("v-uni-view",{staticClass:"avatar"},[i("v-uni-image",{staticClass:"avatar_img",attrs:{src:t.$url+t.userInfo.avatar,mode:""}}),i("v-uni-image",{staticClass:"avatar_camera",attrs:{src:n("3146"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}})],1),i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popupShow=!0}}},[i("v-uni-view",{staticClass:"cell_left"},[t._v(t._s(t.$t("username")))]),i("v-uni-view",{staticClass:"cell_right"},[i("v-uni-text",[t._v(t._s(t.userInfo.nickname))]),i("uni-icons",{attrs:{type:"right"}})],1)],1),i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"cell_left"},[t._v(t._s(t.$t("account")))]),i("v-uni-view",{staticClass:"cell_right"},[i("v-uni-text",[t._v(t._s(t.userInfo.mobile))]),i("v-uni-image",{attrs:{src:n("e0d4"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"cell",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPassword.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cell_left"},[t._v(t._s(t.$t("transactionPasswordManagement")))]),i("v-uni-view",{staticClass:"cell_right"},[i("uni-icons",{attrs:{type:"right"}})],1)],1)],1),i("u-action-sheet",{attrs:{list:t.list,"cancel-btn":!0,"border-radius":"30"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.actionClick.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),i("u-popup",{attrs:{mode:"bottom","border-radius":"30",closeable:!0},model:{value:t.popupShow,callback:function(e){t.popupShow=e},expression:"popupShow"}},[i("v-uni-view",{staticClass:"popup-content"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("editUsername")))]),i("v-uni-view",{staticClass:"input"},[i("u-input",{attrs:{placeholder:t.$t("enterUsername")},model:{value:t.userInfo.nickname,callback:function(e){t.$set(t.userInfo,"nickname",e)},expression:"userInfo.nickname"}})],1),i("v-uni-view",{staticClass:"tips"},[i("v-uni-view",{staticClass:"text"},[t._v("*"+t._s(t.$t("editUsernameTips1")))]),i("v-uni-view",{staticClass:"text"},[t._v("*"+t._s(t.$t("editUsernameTips2")))]),i("v-uni-view",{staticClass:"text"},[t._v("*"+t._s(t.$t("editUsernameTips3")))])],1),i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("ok")))])],1)],1)],1)},o=[]},"2e83":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-input[data-v-564b61b5]{position:relative;flex:1;display:flex;flex-direction:row}.u-input__input[data-v-564b61b5]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-564b61b5]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-564b61b5]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-564b61b5]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-564b61b5]{margin-left:%?10?%}.u-input__right-icon--select[data-v-564b61b5]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-564b61b5]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},3146:function(t,e){t.exports="data:image/png;base64,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"},"3c74":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABGpJREFUeF7tm8+LHEUUx7+vmo1ZRSWsvxd10YCRuO7O9PQuo4ugeBFv/sCDJ73EoJJ48AfiRRQUvQQEMdHoBn+gJhFED4J4ELxNV+24p/gfBE+K6Liz0/2kpCc0w8507XSmu0dfX+Ywr7vqfer7Xr2uriLINZIACZ/RBARQhkIEkADKl0REQaIgUVA+AqKgfPwkB/3XFBQEwT1bW1vnNjc3f82nDbe7p0pBjUZjhZk/AnAewENa69/d3BzfamoA1ev1/UR0BsC1AGy/f4yi6FC73f5tfPez75wKQEEQLMdxvA5gHsB24tblzLxujHk2283xLSoPqF6v30lEHwO4BgAnrtp+/6mUeqTVarXHdz/7zkoDqtVqN3ued4aZbwQQ9+Ew8x9KqafDMPw+28V8FpUFVK/XbyciG1a3AugmbnoAOsz8lDHmu3yuu91dSUCNRuM2Zv4syTkXlANgK4qiR9vtdsvNvfxWlQPUbDbnu93uFwD2p8PK5hxmfs4Y801+t92fUClAQRDcksxWB61aEjcUM/eSnPO1u2sXx7IygJaXlxeUUl8S0U0DyrEh9pjW+qeL4/LunlIJQEEQXBfH8acArHLSOadDRC+EYWgLxFKu0gEtLS3Ne563TkQ+gL/7YWV/iehoGIafl0ImVXCV1r7v+9fb1wdmtlN5XzkWjCKix1ut1g+lda5sQL7vXwXgFACrnAtwbM3DzK8YYz4pG86/Ki6jEwkcWwTebQu/1GDZQvB5rbUFV4mrcEArKytzvV7vrFLqADOnlTPDzE8WXedkjUKhgBYXF/fNzMycJKK7BsKqx8yvGWPez+pw0f8XBsj3/SsBfADg/oGw2kNEL4dheLxo513aKwTQ6urqFVEUfcXMd6SVw8x7ieiQ1vq0S2fLsJk4IAun1+u9R0T3pXMOEUXM/JbW+p0yHHdtc6KAfN+/lJlPENGDqbCyfZtl5leNMcdcO1qW3cQALSws7J2bmzu7Q50zC+BolabyUfAnAqjZbM52u913ATwwMFsxER0Lw/DtshSx23YnAsj3fbuQ/rpdw0l16DIAb2it39xtJ8u0nxSgXwDYab1fCO4B8JLW2k7zU3UJoIzhmhQgCbFR4CVJO2SRBJJdCRxczpBpvs/PFooATgCQQnGYqOyrxvb29nGl1L3yqjGE0rCXVQCX2JfVMhfls7LFRGaxnRqV5Y6soQCwtra2r9PpnAQgC2bDeGUsuT5hjPnWgXVhJoWFWNqjWq12tVLqQysqWbQfMtby2cchCGq12g2e552WD4cjYI369MzMR4wxditMaVcpOWjQ21GbFwC8WOaifiUAWWCy/cUhSGQDlQMk2YLnAEk2cTpAGrYNmJn/AnD4f70NuM9PNpK7KWnoUYQ4jh/e2Nj42eExY5tUZpof5cGIwyynjDHPjO29w41TAcj6kRyHsp+y7aEWOQ610+DKgToHycuRTAdIRZpMTQ4qEkq6LQGUQV4ACaB8wSkKEgWJgvIREAXl4yc5KIPfP8jECGf9Zm+0AAAAAElFTkSuQmCC"},4158:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"u-action-sheet",props:{maskCloseAble:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},tips:{type:Object,default:function(){return{text:"",color:"",fontSize:"26"}}},cancelBtn:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},value:{type:Boolean,default:!1},borderRadius:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:0},cancelText:{type:String,default:"取消"}},computed:{tipsStyle:function(){var t={};return this.tips.color&&(t.color=this.tips.color),this.tips.fontSize&&(t.fontSize=this.tips.fontSize+"rpx"),t},itemStyle:function(){var t=this;return function(e){var n={};return t.list[e].color&&(n.color=t.list[e].color),t.list[e].fontSize&&(n.fontSize=t.list[e].fontSize+"rpx"),t.list[e].disabled&&(n.color="#c0c4cc"),n}},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{close:function(){this.popupClose(),this.$emit("close")},popupClose:function(){this.$emit("input",!1)},itemClick:function(t){this.list[t].disabled||(this.$emit("click",t),this.$emit("input",!1))}}};e.default=i},"71da":function(t,e,n){"use strict";n.r(e);var i=n("fb05"),a=n("7a90");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f624");var s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"564b61b5",null,!1,i["a"],void 0);e["default"]=c.exports},"76bb":function(t,e,n){"use strict";n.r(e);var i=n("a29a"),a=n("a995");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("e4e7");var s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3a288f7a",null,!1,i["a"],void 0);e["default"]=c.exports},"7a90":function(t,e,n){"use strict";n.r(e);var i=n("94d7"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"94d7":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("498a");var a=i(n("9f2b")),o={name:"u-input",mixins:[a.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},"9cac":function(t,e,n){var i=n("e91c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2e648c06",i,!0,{sourceMap:!1,shadowMode:!1})},"9f2b":function(t,e,n){"use strict";function i(t,e,n){this.$children.map((function(a){t===a.$options.name?a.$emit.apply(a,[e].concat(n)):i.apply(a,[t,e].concat(n))}))}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d81d"),n("99af");var a={methods:{dispatch:function(t,e,n){var i=this.$parent||this.$root,a=i.$options.name;while(i&&(!a||a!==t))i=i.$parent,i&&(a=i.$options.name);i&&i.$emit.apply(i,[e].concat(n))},broadcast:function(t,e,n){i.call(this,t,e,n)}}};e.default=a},a29a:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uPopup:n("6b67").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("u-popup",{attrs:{mode:"bottom","border-radius":t.borderRadius,popup:!1,maskCloseAble:t.maskCloseAble,length:"auto",safeAreaInsetBottom:t.safeAreaInsetBottom,"z-index":t.uZIndex},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.popupClose.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t.tips.text?n("v-uni-view",{staticClass:"u-tips u-border-bottom",style:[t.tipsStyle]},[t._v(t._s(t.tips.text))]):t._e(),t._l(t.list,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"u-action-sheet-item u-line-1",class:[i<t.list.length-1?"u-border-bottom":""],style:[t.itemStyle(i)],attrs:{"hover-stay-time":150},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemClick(i)}}},[n("v-uni-text",[t._v(t._s(e.text))]),e.subText?n("v-uni-text",{staticClass:"u-action-sheet-item__subtext u-line-1"},[t._v(t._s(e.subText))]):t._e()],1)]})),t.cancelBtn?n("v-uni-view",{staticClass:"u-gab"}):t._e(),t.cancelBtn?n("v-uni-view",{staticClass:"u-actionsheet-cancel u-action-sheet-item",attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))]):t._e()],2)},o=[]},a995:function(t,e,n){"use strict";n.r(e);var i=n("4158"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b7c8:function(t,e,n){"use strict";n.r(e);var i=n("f0dd"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c6c4:function(t,e,n){var i=n("24fb"),a=n("1de5"),o=n("fc0d");e=i(!1);var s=a(o);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.info .bgc-image[data-v-15c4ddf0]{width:100%;height:%?314?%;background:url('+s+") 50% no-repeat;background-size:100% 100%;padding-top:%?108?%}.info .bgc-image .navbar[data-v-15c4ddf0]{display:flex;align-items:center}.info .bgc-image .navbar uni-image[data-v-15c4ddf0]{width:%?48?%;height:%?48?%;margin-left:%?40?%}.info .bgc-image .navbar uni-text[data-v-15c4ddf0]{margin-left:%?218?%;font-size:%?36?%;font-weight:600;color:#333}.info .avatar[data-v-15c4ddf0]{margin:0 auto;position:relative;width:%?200?%;height:%?200?%;border-radius:50%;background-color:#333}.info .avatar_img[data-v-15c4ddf0]{width:100%;height:100%;border-radius:50%}.info .avatar_camera[data-v-15c4ddf0]{position:absolute;right:0;bottom:0;width:%?56?%;height:%?56?%}.info .cell-group[data-v-15c4ddf0]{margin-top:%?40?%;padding:0 %?40?%}.info .cell-group .cell[data-v-15c4ddf0]{padding:%?44?% 0;border-bottom:%?2?% solid #f3f3f3;display:flex;justify-content:space-between;align-items:center;font-size:%?28?%;font-weight:500;color:#999}.info .cell-group .cell_right[data-v-15c4ddf0]{display:flex;align-items:center;color:#333}.info .cell-group .cell_right uni-text[data-v-15c4ddf0]{margin-right:%?12?%}.info .cell-group .cell_right uni-image[data-v-15c4ddf0]{width:%?27?%;height:%?28?%}.info[data-v-15c4ddf0] .u-icon__icon{color:#999!important}.info .popup-content[data-v-15c4ddf0]{padding:%?40?%}.info .popup-content .title[data-v-15c4ddf0]{font-size:%?28?%;font-weight:600;color:#333;line-height:%?40?%}.info .popup-content .input[data-v-15c4ddf0]{margin:%?30?% 0;height:%?90?%;background:#f4f5f7;border-radius:%?12?%;padding:0 %?20?%;padding-top:%?10?%}.info .popup-content .tips .text[data-v-15c4ddf0]{font-size:%?24?%;font-weight:400;color:#999;line-height:%?34?%}.info .popup-content .button[data-v-15c4ddf0]{margin-top:%?60?%;height:%?70?%;background:#35cba5;border-radius:%?12?%;line-height:%?70?%;text-align:center;font-size:%?32?%;font-weight:600;color:#fff}",""]),t.exports=e},cad0:function(t,e,n){"use strict";n.r(e);var i=n("299c"),a=n("b7c8");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2933");var s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"15c4ddf0",null,!1,i["a"],void 0);e["default"]=c.exports},e09b:function(t,e,n){var i=n("c6c4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("030ddd7f",i,!0,{sourceMap:!1,shadowMode:!1})},e0d4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOBJREFUSEvtlT0OgkAQhd/saaTWlptQkuEkHIINpb2HoNUaaw9huc+sEgXlJ6wkxoStZ9+XeW9nVlSVWOg453ZlWZ7acuIBJGsRqUI5JCMRiQcBAKy1NgsFqKoCKP4fQDIhef7IYCmL+iy+h7wgIAdw8SDfjQ9+UUA7ZFUtAOgKuOfaNwerRZ0nv1o0uWQnLSJZich+Umm4IAaQjE3yF9qvq72ANE23nfUqsmm6yZ1zhzlkY0xtrb02w/fYRe8CHmiMOQLI/Dc3B9CufU7yzwBN8HVoByRjEYnGLArV7ty7AfwbLCqvlv1lAAAAAElFTkSuQmCC"},e4e7:function(t,e,n){"use strict";var i=n("9cac"),a=n.n(i);a.a},e91c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-tips[data-v-3a288f7a]{font-size:%?26?%;text-align:center;padding:%?34?% 0;line-height:1;color:#909399}.u-action-sheet-item[data-v-3a288f7a]{display:flex;flex-direction:row;line-height:1;justify-content:center;align-items:center;font-size:%?32?%;padding:%?34?% 0;flex-direction:column}.u-action-sheet-item__subtext[data-v-3a288f7a]{font-size:%?24?%;color:#909399;margin-top:%?20?%}.u-gab[data-v-3a288f7a]{height:%?12?%;background-color:#eaeaec}.u-actionsheet-cancel[data-v-3a288f7a]{color:#303133}',""]),t.exports=e},f0dd:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c7eb")),o=i(n("1da1")),s=n("74f4"),c={data:function(){return{show:!1,popupShow:!1,userInfo:""}},computed:{list:function(){return[{text:this.$t("camera")},{text:this.$t("photoAlbum")}]}},onLoad:function(){this.getUser()},methods:{toPassword:function(){uni.navigateTo({url:"/pages/my/info/transactionPin/transactionPin"})},getUser:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var n;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.getUserInfo)();case 2:n=e.sent,1===n.code&&(t.userInfo=n.data);case 4:case"end":return e.stop()}}),e)})))()},back:function(){uni.navigateBack()},submit:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var n;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.setNickname)({nickname:t.userInfo.nickname});case 2:n=e.sent,1===n.code&&(t.getUser(),t.popupShow=!1);case 4:case"end":return e.stop()}}),e)})))()},actionClick:function(t){console.log(t,this.$url);var e=this;uni.chooseImage({sourceType:1===t?["album"]:["camera"],success:function(t){var n=t.tempFilePaths;console.log(n[0]),uni.uploadFile({url:e.$url+"/api/user/uploadAvatar",filePath:n[0],name:"avatar",header:{token:uni.getStorageSync("token")},formData:{avatar:n[0]},success:function(t){var n=JSON.parse(t.data);1===n.code?e.getUser():uni.showToast({title:n.msg,icon:"none"})}})}})},copy:function(){var t=this;uni.setClipboardData({data:t.userInfo.mobile,showToast:!1,success:function(){uni.showToast({title:t.$t("contentCopied"),icon:"success"})}})}}};e.default=c},f54c:function(t,e,n){var i=n("2e83");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("787500c2",i,!0,{sourceMap:!1,shadowMode:!1})},f624:function(t,e,n){"use strict";var i=n("f54c"),a=n.n(i);a.a},fb05:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("235a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},o=[]},fc0d:function(t,e,n){t.exports=n.p+"static/img/bgc-image.73b0a400.png"}}]);