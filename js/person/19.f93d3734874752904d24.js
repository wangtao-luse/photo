webpackJsonp([19],{ldEp:function(t,e){},qR4O:function(t,e){},sqb0:function(t,e,i){var s,n;!function(r){if(void 0===(n="function"==typeof(s=r)?s.call(e,i,e,t):s)||(t.exports=n),!0,t.exports=r(),!!0){var o=window.Cookies,a=window.Cookies=r();a.noConflict=function(){return window.Cookies=o,a}}}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var i=arguments[t];for(var s in i)e[s]=i[s]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function i(s){function n(){}function r(e,i,r){if("undefined"!=typeof document){"number"==typeof(r=t({path:"/"},n.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var o=JSON.stringify(i);/^[\{\[]/.test(o)&&(i=o)}catch(t){}i=s.write?s.write(i,e):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var c in r)r[c]&&(a+="; "+c,!0!==r[c]&&(a+="="+r[c].split(";")[0]));return document.cookie=e+"="+i+a}}function o(t,i){if("undefined"!=typeof document){for(var n={},r=document.cookie?document.cookie.split("; "):[],o=0;o<r.length;o++){var a=r[o].split("="),c=a.slice(1).join("=");i||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var u=e(a[0]);if(c=(s.read||s)(c,u)||e(c),i)try{c=JSON.parse(c)}catch(t){}if(n[u]=c,t===u)break}catch(t){}}return t?n[t]:n}}return n.set=r,n.get=function(t){return o(t,!1)},n.getJSON=function(t){return o(t,!0)},n.remove=function(e,i){r(e,"",t(i,{expires:-1}))},n.defaults={},n.withConverter=i,n}(function(){})})},zc5G:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("sqb0"),n=i.n(s),r=i("ZLEe"),o=i.n(r),a=i("3cXf"),c=i.n(a),u=i("aA9S"),d=i.n(u),l={name:"questionnaire",props:{title:{required:!0,type:String},cookieKey:{required:!0,type:String},report:{required:!0,type:Object,default:function(){return{}}},time:{type:Number,default:3e3},needHorizontal:{type:Boolean,default:!1},nextFun:Function},data:function(){return{options:[{text:"非常满意",value:4},{text:"满意",value:3},{text:"一般",value:2},{text:"不满意",value:1},{text:"非常不满意",value:0}],curId:-1,isSubmit:!1,isShowToast:!1,isShowMask:!1,isFocus:!1,select:"",words:""}},mounted:function(){this.curId=this._get("sqa_id")||-1,this.select=this._get("sqa_text")||"",this.words=this._get("sqa_words")||"",this.curId>0||this.select||this.words?(this.isSubmit=!0,this.isShowMask=!0):this.isSubmit=!n.a.get(this.cookieKey)},methods:{_set:function(t,e){sessionStorage.setItem(t,e)},_get:function(t){return sessionStorage.getItem(t)},onItemClickHandler:function(t){this.curId=t.value,this.select=t.text,this.isShowMask=!0,this._set("sqa_id",this.curId),this._set("sqa_text",this.select)},onSubmitHandler:function(){var t=this;if(!n.a.get("UserName"))return this.words&&this._set("sqa_words",this.words),void window.csdn.loginBox.show();var e=d()({},{radio:this.select,input:this.words}),i={spm:this.report.spm,extend1:this.report.extend1,extra:c()(e)};this.cookieKey&&o()(this.report).length&&(this._set("sqa_id",-1),this._set("sqa_text",""),this._set("sqa_words",""),window.csdn.report.reportClick(i),n.a.set(this.cookieKey,!0,{expires:30}),this.isSubmit=!1,this.isShowToast=!0,this.nextFun&&this.nextFun(),setTimeout(function(){t.isShowToast=!1},this.time))}}},p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isSubmit||t.isShowToast?i("div",{staticClass:"so-questionnaire",class:{done:!t.isSubmit&&t.isShowToast}},[t.isSubmit?i("div",{staticClass:"sq-main"},[i("div",{staticClass:"sq-hd"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"sq-bd",style:{"margin-top:12px;":!t.needHorizontal}},[i("ul",{class:{mask:t.isShowMask,vertical:!t.needHorizontal}},t._l(t.options,function(e,s){return i("li",{key:"questionnaire_index_"+s,class:[e.value==t.curId?"active":"others"],on:{click:function(i){return t.onItemClickHandler(e)}}},[i("i",{staticClass:"icon"}),t._v(" "),i("span",{staticClass:"text"},[t._v(t._s(e.text))])])}),0)]),t._v(" "),t.isShowMask?i("div",{class:["sq-ft",t.needHorizontal?"":"vertical-input"]},[i("div",{staticClass:"form",class:{active:t.isShowMask&&t.isFocus}},[i("div",{staticClass:"fm-main"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.words,expression:"words"}],staticClass:"fm-input",attrs:{type:"text",placeholder:"您的建议"},domProps:{value:t.words},on:{focus:function(e){t.isFocus=!0},blur:function(e){t.isFocus=!1},input:function(e){e.target.composing||(t.words=e.target.value)}}}),t._v(" "),i("span",{staticClass:"fm-btn",on:{click:function(e){return t.onSubmitHandler()}}},[t._v("提交")])])])]):t._e()]):t._e(),t._v(" "),t.isShowToast?i("div",{staticClass:"sq-toast"},[t._v("\n        感谢您的意见，我们尽快改进\n    ")]):t._e()]):t._e()};p._withStripped=!0;var f={render:p,staticRenderFns:[]},h=f;var v=!1;var m=i("C7Lr")(l,h,!1,function(t){v||i("ldEp")},"data-v-91c4a4b4",null);m.options.__file="src/components/satisfied/questionnaire.vue";var _=m.exports;window.csdn.configuration_tool_parameterv({need_change_function:function(t){var e=$("#user-center-container");"fixed"===t?n.a.get("i_login_satisfied")||document.body.clientHeight-863>0?e.addClass("container-fixed"):e.addClass("container-fixed-withsatisfied"):n.a.get("i_login_satisfied")||document.body.clientHeight-863>0?e.removeClass("container-fixed"):e.removeClass("container-fixed-withsatisfied")}});var w={name:"user-center",components:{QuestionNaire:_},data:function(){return{options:{},feedbackReport:{spm:"3001.6023",extend1:"“登录/注册”流程满意度调查问卷"}}},mounted:function(){var t=this.throttle(this.resetSidePosi,100);$(window).resize(function(){t()})},methods:{resetClass:function(){$("#user-center-container").removeClass("container-fixed-withsatisfied"),$(window).scrollTop()>48&&$("#user-center-container").addClass("container-fixed")},resetSidePosi:function(){!n.a.get("i_login_satisfied")&&document.body.clientHeight-863>0&&($("#user-center-container").removeClass("container-fixed-withsatisfied"),$(window).scrollTop()>48&&$("#user-center-container").addClass("container-fixed"))},throttle:function(t,e){var i=null;return function(){var s=this,n=arguments;clearTimeout(i),i=setTimeout(function(){t.apply(s,n)},e)}}},watch:{$route:{handler:function(t,e){"/user-center/collection-list"===this.$route.path&&!this.$route.query.type&&this.$router.push({path:this.$route.path,query:{type:1}})},immediate:!0}}},g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"test",staticClass:"container",attrs:{id:"user-center-container"}},[i("div",{staticClass:"container-left"},[i("ul",[i("router-link",{attrs:{tag:"li",to:"/user-center/profile"}},[i("a",{attrs:{href:"javascript:;","data-report-click":'{"spm":"3001.5413"}',"data-report-query":"spm=3001.5413"}},[t._v("\n          个人资料\n        ")])]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/user-center/account"}},[i("a",{attrs:{href:"javascript:void(0)","data-report-click":'{"spm":"3001.5414"}',"data-report-query":"spm=3001.5414"}},[t._v("\n          账号设置\n        ")])]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/user-center/setting"}},[i("a",{attrs:{href:"javascript:void(0)","data-report-click":'{"spm":"3001.5699"}',"data-report-query":"spm=3001.5699"}},[t._v("\n          隐私设置\n        ")])]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/user-center/auth"}},[i("a",{attrs:{href:"javascript:void(0)","data-report-click":'{"spm":"3001.5415"}',"data-report-query":"spm=3001.5415"}},[t._v("\n          信息认证\n        ")])]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/user-center/collection-list?type=1"}},[i("a",{attrs:{href:"javascript:void(0)","data-report-click":'{"spm":"3001.5453"}',"data-report-query":"spm=3001.5453"}},[t._v("\n          我的收藏\n        ")])]),t._v(" "),t._m(0)],1),t._v(" "),i("div",{staticClass:"satisfied-component"},[i("QuestionNaire",{attrs:{title:"“登录/注册”流程满意度","cookie-key":"i_login_satisfied",report:t.feedbackReport,nextFun:t.resetClass}})],1)]),t._v(" "),i("div",{staticClass:"container-right"},[i("router-view")],1)])};g._withStripped=!0;var x={render:g,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{target:"_blank",href:"https://mp.csdn.net/console/article","data-report-click":'{"spm":"3001.5416"}',"data-report-query":"spm=3001.5416"}},[this._v("\n          内容管理\n          "),e("i",{staticClass:"el-icon-arrow-right"})])])}]},C=x;var k=!1;var y=i("C7Lr")(w,C,!1,function(t){k||i("qR4O")},"data-v-2695ae86",null);y.options.__file="src/pages/user-center/index.vue";e.default=y.exports}});
//# sourceMappingURL=19.f93d3734874752904d24.js.map