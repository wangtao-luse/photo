"use strict";!function(t,e){function n(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):null}function i(t){for(var e=document.cookie.split(";"),n={},i=0;i<e.length;i++){var o=e[i].split("="),s=o[0];o.shift();var a=o.join("=");t&&s.toString().trim().lastIndexOf("_app")===s.toString().trim().length-"_app".length?n[s.toString().trim().replace("_app","")]=a:t||0!==s.toString().trim().indexOf("c_")||(n[s.toString().trim()]=a)}return n}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.product_id=t.product_id||0,t.goods_id=t.goods_id||0,t.num=t.num||1,t.is_ajax=t.is_ajax||1,t.t=t.t||(new Date).getTime(),t.device_id=a(),t.device_type=c(),t.utm_source_ext=r(t.report_ext||{}),t}function s(){return!!t.navigator.userAgent.toLowerCase().match(/(csdn)/i)}function a(){var t=n("X-App-ID")||"";return"CSDN-APP"==t||"CSDN-EDU"==t?n("X-Device-ID")||"":n("uuid_tt_dd")||""}function r(t){var e={};return e=i(s()),s()?e.dc_sid=n("dc_sid_app")||"":e.dc_sid=n("dc_sid")||"",JSON.stringify(Object.assign(e,t))}function c(){var t,e=p.isEDUIos(),i=p.isEDUAndroid(),o=p.isAndroid(),s=n("X-App-ID")||"",a=n("X-OS")||"";return p.isWap()||(t=10),p.isMac()&&(t=11),p.isWap()&&(t=9),i&&o&&(t=3),e&&(t=4),"CSDN-APP"==s&&"Android"==a&&(t=1),"CSDN-APP"==s&&"iOS"==a&&(t=2),"CSDN-EDU"==s&&"Android"==a&&(t=3),"CSDN-EDU"==s&&"iOS"==a&&(t=4),t}function u(e){var n=t.location.host,i="",o=document.location.protocol,s=document.getElementsByTagName("meta").ordercart;s&&s.content&&s.content.length&&(n=JSON.parse(s.content).api_env);var a=/^beta|test|loc[a-z]*/;return n.indexOf(".blog.csdn.net")>=0?i="":n.match(a)?(i="test-mall-order.csdn.net/",e=""):n.match(/^pre-|pre[a-z]*/)&&(i="pre-"),o+"//"+i+e}function d(t){var e="";for(var n in t)"function"!=typeof t[n]&&(e+=n+"="+t[n]+"&");return"?"+(e=e.substr(0,e.length-1))}function l(){this.timer=0,this.timershow=0,this.ident=!0,this.pay_code_timeout=3e5,this.get_status_sec=3e3,this.timeout_time=1e4,this.payment_flag=0,this.payment_function=null,this.no_login=0,this.cacheKey="",this.sign="",this.cart_url=u("mall.csdn.net/"),this.get_status_url=this.cart_url+"mp/mallorder/pay/getStatus",this.order_number="",this.deviceDistinguish=p}var m=null,p={ua:t.navigator.userAgent.toLowerCase(),isEDUIos:function(){return/(?:csdnedu-ipad)/.test(this.ua)},isEDUAndroid:function(){return/(?:csdnedu)/.test(this.ua)},isAndroid:function(){return/(?:android)/.test(this.ua)},isWindowsPhone:function(){return/(?:windows phone)/.test(this.ua)},isSymbian:function(){return/(?:symbianos)/.test(this.ua)||this.isWindowsPhone},isFireFox:function(){return/(?:firefox)/.test(this.ua)},isChrome:function(){return/(?:chrome|crios)/.test(this.ua)},isTablet:function(){return/(?:ipad|playbook)/.test(this.ua)||this.isAndroid&&!/(?:mobile)/.test(this.ua)||this.isFireFox&&/(?:tablet)/.test(this.ua)},isPhone:function(){return/(?:iphone)/.test(this.ua)&&!this.isTablet},isPc:function(){return!this.isPhone&&!this.isAndroid&&!this.isSymbian},isWechatdevtools:function(){return/wechatdevtools/.test(this.ua)},isMac:function(){return t.navigator.platform.toLocaleLowerCase().indexOf("mac")>-1},isMicromessenger:function(){return/micromessenger/.test(this.ua)},isWap:function(){return!!this.ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}};l.prototype={constructor:l,setDefaultDate:o,clearTimer:function(t){void 0!==this.timer&&clearInterval(this.timer),void 0!==this.timershow&&clearInterval(this.timershow)},buyNow:function(e){var n=t.location.host,i="",o=document.location.protocol,s="",a=document.getElementsByTagName("meta").ordercart;a&&a.content&&a.content.length&&(s=JSON.parse(a.content||"{}").env);var r=/^beta|test|loc[a-z]*/;(n.match(r)||s.match(r))&&(i="test-");var c="";c=this.deviceDistinguish.isWap()?"order.csdn.net/v2/m/submit":"order.csdn.net/v2/order-m/submit",t.location.href=o+"//"+i+c+d(e)},buyNowMall:function(n){var i=t.location.host,o="",s=document.location.protocol,a="",r=document.getElementsByTagName("meta").ordercart,c=this;r&&r.content&&r.content.length&&(a=JSON.parse(r.content).env);var u=/^beta|test|loc[a-z]*/,l=/^pre|pre-[a-z]*/;(i.match(u)||a.match(u))&&(o="test-"),(i.match(l)||a.match(l))&&(o="pre-");var m="";m=this.deviceDistinguish.isWap()?"order.csdn.net/v2/3/submit-m":"order.csdn.net/v2/3/submit";var p=e.ajax({type:"post",url:c.cart_url+"mp/mallorder/order/buyNow",data:JSON.stringify(n.params),dataType:"json",contentType:"application/json",xhrFields:{withCredentials:!0},timeout:c.timeout_time,success:function(e){if(200==e.code){var i=n.extra;return i.cartId=e.data.cartId,m=s+"//"+o+m+d(i),n.success?n.success({code:200,data:{cartId:e.data.cartId,url:m}}):t.location.href=m,!1}n.fail&&n.fail({code:15,errorMessage:"提交订单失败"})},error:function(){n.fail&&n.fail({status:15,errorMessage:"提交订单失败"})},complete:function(t,e){"timeout"===e&&p.abort()}})},qrPay:function(t){var n,i,s,a=this;t=o(t),"function"==typeof t.success_function&&(n=t.success_function,delete t.success_function),"function"==typeof t.error_function&&(i=t.error_function,delete t.error_function),"function"==typeof t.timeout_function&&(s=t.timeout_function,delete t.timeout_function),"function"==typeof t.payment_function?(a.payment_function=t.payment_function,delete t.payment_function):a.payment_function=null,"function"==typeof t.get_pay_success_callback&&(m=t.get_pay_success_callback,delete t.get_pay_success_callback),a.payment_flag=0;var r=e.ajax({type:"get",url:a.cart_url+"mp/order/pay/qrPay",data:t,dataType:"jsonp",jsonp:"callback",jsonpCallback:"qrPayCallback",timeout:a.timeout_time,success:function(e){if(1===e.status)return n(t.request_type,e),a.cacheKey=e.cacheKey,a.sign=e.sign,a.clearTimer(),a.get_status_url=e.get_status_url,a.timer=setInterval(function(){a.get_pay_status()},a.get_status_sec),a.timershow=setInterval(function(){s(),a.clearTimer()},a.pay_code_timeout),!1;i(e)},error:function(){i({status:15,errorMessage:"获取二维码失败"})},complete:function(t,e){"timeout"===e&&r.abort()}})},get_pay_status:function(){var t=this;if(!1===t.ident)return!1;t.ident=!1,e.ajax({type:"get",url:t.get_status_url,async:!1,data:{order_number:t.order_number,type:t.request_type,no_login:t.no_login,flag:1,t:(new Date).getTime(),is_ajax:1},dataType:"jsonp",jsonp:"callback",jsonpCallback:"get_pay_status",timeout:t.timeout_time,success:function(e){t.getStatusSuccess(e)},error:function(){t.ident=!0}})},getStatusSuccess:function(e){var n=this;1===e.status?(n.ident=!1,n.delScanPayCache(),null!==m?m(e):setTimeout(function(){t.location.replace(e.url)},300)):3===e.status?(0===n.payment_flag&&"function"==typeof n.payment_function&&(n.payment_flag=1,n.payment_function()),n.ident=!0):0===e.status?(void 0,n.ident=!1):n.ident=!0},delScanPayCache:function(){(new Image).src=this.cart_url+"mp/order/pay/delScanPayCache?key="+this.cacheKey}},t.csdn=t.csdn||{},t.csdn.cart=new l,t.cart=new l}(window,jQuery);