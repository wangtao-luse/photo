"use strict";function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,i){for(var n=0;n<i.length;n++){var s=i[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(i,n,s){return n&&e(i.prototype,n),s&&e(i,s),i}}();!function(e,i){function n(e){for(var i=document.cookie.split("; "),n=0;n<i.length;n++){var s=i[n].split("=");if(s[0]==e)return decodeURIComponent(s[1])}}function s(){return/(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone|csdn|MicroMessenger)/i.test(navigator.userAgent)}function o(){return/iP(ad|hone|od)/.test(navigator.userAgent)}var t="https://img-home.csdnimg.cn/images/20210426071127.png";e.csdn=e.csdn||{},function(e){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.href="https://g.csdnimg.cn/user-login/3.0.0/user-login.css",document.getElementsByTagName("head")[0].appendChild(i)}();var r=function(){function r(){_classCallCheck(this,r),this.isMobile=s(),this.mobileAreaCodeList=[],this.isRisk=!1,this.countDownTime=60,this.isCountDownStart=!1,this.callBackFn=null,this.verifyCode="",this.mobile="",this.code="86",this.codeReg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/,this.verifyCodeType=1,this.timer=null}return _createClass(r,[{key:"getUserStatus",value:function(s){var o=this;this.callBackFn=s,i.ajax({url:"https://passport.csdn.net/v1/api/check/userstatus",type:"POST",contentType:"application/json",xhrFields:{withCredentials:!0},data:JSON.stringify({username:n("UserName")||""}),dataType:"json",success:function(i){if(i.status)if(a.result=i,i.detail)switch(i.detail){case"deleted":o.renderDeletedPopup();break;case"riskControl":o.getUserMobile(o.renderRiskControlPopup);break;case"activateAndRisk":o.isRisk=!0,o.getMobileAreaCode(o.renderActivatePopup);break;case"activate":o.getMobileAreaCode(o.renderActivatePopup);break;default:return!0}else o.executeCallBack();else e.location.href="https://passport.csdn.net/account/login"},error:function(e){console.log(e)}})}},{key:"getUserMobile",value:function(e){var n=this;i.ajax({url:"https://passport.csdn.net/v1/api/riskControl/getUserMobile",type:"POST",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(i){i.status&&e&&e.call(n,i.data)},error:function(e){console.log(e)}})}},{key:"getMobileAreaCode",value:function(e){var n=this;i.ajax({url:"https://passport.csdn.net/v1/api/get/mobileAreaCode",type:"POST",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(i){i.status&&(n.mobileAreaCodeList=i.data,e&&e.call(n))},error:function(e){console.log(e)}})}},{key:"sendVerifyCode",value:function(e,n){var s=this,o=1===n?"sendVoiceVerifyCode":"sendVerifyCode";i.ajax({url:"https://passport.csdn.net/v1/api/riskControl/"+o,type:"POST",contentType:"application/json",xhrFields:{withCredentials:!0},dataType:"json",success:function(i){i.status?e&&e.call(s):s.showError(i.message)},error:function(e){s.showError(e.responseJSON.message)}})}},{key:"checkVerifyCode",value:function(e){var n=this,s=1===e?"checkVoiceVerifyCode":"checkVerifyCode",o={verifyCode:this.verifyCode};i.ajax({url:"https://passport.csdn.net/v1/api/riskControl/"+s,type:"POST",contentType:"application/json",data:JSON.stringify(o),xhrFields:{withCredentials:!0},dataType:"json",success:function(e){e.status?n.executeCallBack():n.showError(e.message)},error:function(e){n.showError(e.responseJSON.message)}})}},{key:"sendBindVerifyCode",value:function(e,n){var s=this,o={mobile:this.mobile,code:"00"+this.code},t=1===n?"sendBindVoiceCode":"sendBindVerifyCode";i.ajax({url:"https://passport.csdn.net/v1/api/riskControl/"+t,type:"POST",contentType:"application/json",data:JSON.stringify(o),xhrFields:{withCredentials:!0},dataType:"json",success:function(i){i.status?e&&e.call(s):s.showError(i.message)},error:function(e){s.showError(e.responseJSON.message)}})}},{key:"checkBindVerifyCode",value:function(e){var n=this,s={mobile:this.mobile,code:"00"+this.code,verifyCode:this.verifyCode},o=1===e?"checkVoiceCodeAndBind":"checkBindVerifyCode";i.ajax({url:"https://passport.csdn.net/v1/api/riskControl/"+o,type:"POST",contentType:"application/json",data:JSON.stringify(s),xhrFields:{withCredentials:!0},dataType:"json",success:function(e){e.status?n.executeCallBack():n.showError(e.message)},error:function(e){"1028"===e.responseJSON.code?n.renderMergePopup():n.showError(e.responseJSON.message)}})}},{key:"executeCallBack",value:function(){this.callBackFn&&this.callBackFn(),this.closeUserLoginPopup()}},{key:"renderMergePopup",value:function(){var n=this,s=i('<div id="user-login-box" '+(this.isMobile?'class="user-login-mobile-box"':"")+'>\n          <div class="user-login-head">\n            <div class="user-login-head-title">合并账号</div>\n            <div class="user-login-close"><img src="'+t+'" alt=""></div>\n          </div>\n          <div class="user-login-middle">\n            <div class="user-login-middle-hint">检测到该手机号已绑定CSDN账号，若合并账号，将会把您当前登录的账号进行注销，请您注意。</div>\n            <div class="user-login-img-area"><img src="https://img-home.csdnimg.cn/images/20210421042950.png" alt=""></div>\n          </div>\n          <div class="user-login-bottom">\n            <button class="user-login-btn-other">更换手机号</button>\n            <button class="user-login-btn-confirm">合并账号</button>\n          </div>\n        </div>');s.on("click",".user-login-close",function(){n.closeUserLoginPopup()}).on("click",".user-login-btn-confirm",function(){e.open("https://i.csdn.net/#/account/merge?isKey=1"),n.closeUserLoginPopup()}).on("click",".user-login-btn-other",function(){n.clearTimerStuff(),n.renderActivatePopup()}),this.iosActivateActive(s),i("#user-login-mask").empty().append(s)}},{key:"renderDeletedPopup",value:function(){var n=this,s=i('<div id="user-login-box" '+(this.isMobile?'class="user-login-mobile-box"':"")+'>\n          <div class="user-login-head">\n            <div class="user-login-head-title">账号异常</div>\n            <div class="user-login-close"><img src="'+t+'" alt=""></div>\n          </div>\n          <div class="user-login-middle">\n            <div class="user-login-middle-hint">此账号处于冻结状态！</div>\n          </div>\n          <div class="user-login-bottom '+(this.isMobile?"user-login-btn-center":"")+'" >\n            <button class="user-login-btn-confirm">联系客服</button>\n          </div>\n        </div>');s.on("click",".user-login-close",function(){n.closeUserLoginPopup()}).on("click",".user-login-btn-confirm",function(){e.open("https://csdn.s2.udesk.cn/im_client/?web_plugin_id=29181"),n.closeUserLoginPopup()}),this.iosActivateActive(s),i("body").append(i('<div id="user-login-mask"></div>').append(s))}},{key:"renderRiskControlPopup",value:function(e){var n=e.code,s=e.mobile;this.verifyCodeType="0086"!==n&&n?2:1;var o=this,r=i('<div id="user-login-box" class="user-login-risk-box '+(this.isMobile?"user-login-mobile-box":"")+'">\n          <div class="user-login-head">\n            <div class="user-login-head-title">账号异常</div>\n            <div class="user-login-close"><img src="'+t+'" alt=""></div>\n          </div>\n          <div class="user-login-middle">\n            <div class="user-login-middle-hint">请通过'+(n?n+" ":"")+s+'获取验证码效验。</div>\n            <div class="user-login-input-area">\n              \x3c!--验证码--\x3e\n              <div class="user-login-input-area-verifyCode"></div>\n              <div class="user-login-error"></div>\n            </div>\n          </div>\n          <div class="user-login-bottom '+(this.isMobile?"user-login-btn-center":"")+'">\n            <button class="user-login-btn-confirm">确定</button>\n          </div>\n        </div>');r.on("click",".user-login-close",function(){o.closeUserLoginPopup()}).on("click",".user-login-btn-confirm",function(){o.validateVerifyCode()&&o.checkVerifyCode(o.verifyCodeType)}).find(".user-login-input-area-verifyCode").append(this.renderVerifyCodeArea(!1)),this.iosActivateActive(r),i("body").append(i('<div id="user-login-mask"></div>').append(r))}},{key:"renderActivatePopup",value:function(){this.isRisk||(this.verifyCodeType=2);var e=this,n=i('<div id="user-login-box" '+(this.isMobile?'class="user-login-mobile-box"':"")+'>\n          <div class="user-login-head">\n            <div class="user-login-head-title">账号绑定</div>\n            <div class="user-login-close"><img src="'+t+'" alt=""></div>\n          </div>\n          <div class="user-login-middle">\n            <div class="user-login-middle-hint">为了保障您CSDN账号的正常使用，按照国家法律要求，需要进行账号实名，感谢您的配合与支持！</div>\n            <div class="user-login-input-area">\n              \x3c!--手机号--\x3e\n              <div class="user-login-input-area-mobile"></div>\n              \x3c!--验证码--\x3e\n              <div class="user-login-input-area-verifyCode"></div>\n              <div class="user-login-error"></div>\n            </div>\n          </div>\n          <div class="user-login-bottom">\n            <button class="user-login-btn-other">暂不绑定</button>\n            <button class="user-login-btn-confirm">立即绑定</button>\n          </div>\n        </div>');n.on("click",".user-login-btn-other,.user-login-close",function(){e.closeUserLoginPopup()}).on("click",".user-login-btn-confirm",function(){e.validateMobile()&&e.validateVerifyCode()&&(e.removeError(),e.checkBindVerifyCode(e.verifyCodeType))}),n.find(".user-login-input-area-mobile").append(this.renderMobileInputArea()),n.find(".user-login-input-area-verifyCode").append(this.renderVerifyCodeArea(!0)),this.iosActivateActive(n),i("#user-login-mask").length?i("#user-login-mask").empty().append(n):i("body").append(i('<div id="user-login-mask"></div>').append(n))}},{key:"renderMobileInputArea",value:function(){var e=this,n=this.mobileAreaCodeList.map(function(e){var i=parseInt(e.code);return'<li data-code="'+i+'"><span>'+e.country+"</span><span>+"+i+"</span></li>"}).join(""),s=i('<div class="user-login-input-area-mobile-content">\n          <div class="user-login-mobile-areaCode">+'+this.code+'</div>\n          <input type="text" id="user-login-mobile" value="'+this.mobile+'" autocomplete="off" placeholder="请输入手机号">\n          <ul class="user-login-areaCode-drop-list">'+n+"</ul>\n        </div>"),o=s.find(".user-login-areaCode-drop-list");return s.on("input","#user-login-mobile",function(){e.mobile=i(this).val()}).on("click",".user-login-mobile-areaCode",function(){var e=this;return i(this).addClass("areaCode-drop-active"),o.stop().fadeIn("fast"),i(document).one("click",function(){o.stop().fadeOut("fast"),i(e).removeClass("areaCode-drop-active")}),!1}).on("click",".user-login-areaCode-drop-list li",function(){return e.code!==i(this).attr("data-code")&&(e.code=i(this).attr("data-code"),e.codeReg=new RegExp(e.mobileAreaCodeList[i(this).index()].regular),e.isRisk&&(e.verifyCodeType="86"===e.code?1:2,e.changeSendVerifyCodeText()),s.find(".user-login-mobile-areaCode").text("+"+e.code)),o.stop().fadeOut("fast"),!1}),s}},{key:"renderVerifyCodeArea",value:function(e){var n=this,s=i('<div class="user-login-input-area-verifyCode-content">\n          <input type="text" id="user-login-verifyCode" placeholder="请输入验证码" autocomplete="off" value="'+this.verifyCode+'">\n          <div class="user-login-send">\n            <div class="user-login-send-verifyCode">获取<span>'+(1===this.verifyCodeType?"语音":"短信")+'</span>验证码</div>\n            <div class="user-login-send-count"><span>'+this.countDownTime+"</span> 秒后可重发</div>\n          </div>\n        </div>");return s.on("click",".user-login-send-verifyCode",function(){var o=this,t=function(){n.removeError(),i(o).hide().siblings().show(),n.startCountDown(s)};e&&n.validateMobile()?n.sendBindVerifyCode(t,n.verifyCodeType):e||n.sendVerifyCode(t,n.verifyCodeType)}).on("input","#user-login-verifyCode",function(){n.verifyCode=i(this).val()}),s}},{key:"changeSendVerifyCodeText",value:function(){i("#user-login-mask").find(".user-login-send-verifyCode span").text(1===this.verifyCodeType?"语音":"短信")}},{key:"startCountDown",value:function(e){var i=this;this.isCountDownStart||(this.isCountDownStart=!0,clearInterval(this.timer),this.timer=setInterval(function(){i.countDownTime--,e.find(".user-login-send-count span").text(i.countDownTime),i.countDownTime<=0&&(i.clearTimerStuff(),e.find(".user-login-send-count span").text(i.countDownTime),e.find(".user-login-send-verifyCode").show().siblings().hide())},1e3))}},{key:"closeUserLoginPopup",value:function(){i("#user-login-mask").remove(),this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"showError",value:function(e){i("#user-login-box .user-login-error").text(e).addClass("show-error")}},{key:"removeError",value:function(){i("#user-login-box .user-login-error").removeClass("show-error")}},{key:"validateMobile",value:function(){var e="86"===this.code?this.mobile:"00"+this.code+this.mobile,i=this.mobile&&this.codeReg.test(e);return!i&&this.showError("手机号格式不正确"),i}},{key:"validateVerifyCode",value:function(){var e=this.verifyCode&&/^\d+$/.test(this.verifyCode);return!e&&this.showError("请输入正确格式的验证码"),e}},{key:"clearTimerStuff",value:function(){clearInterval(this.timer),this.timer=null,this.isCountDownStart=!1,this.countDownTime=60}},{key:"iosActivateActive",value:function(e){o()&&e.find("button").on("touchstart",function(){})}}]),r}(),a={loadAjax:function(e){(new r).getUserStatus(e)},result:{}};e.csdn.userLogin=a}(window,jQuery);