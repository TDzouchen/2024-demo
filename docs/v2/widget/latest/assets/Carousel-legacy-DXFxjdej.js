!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function e(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(r){c(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var r,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(r){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),c=new C(n||[]);return a(i,"_invoke",{value:S(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",g="completed",m={};function x(){}function _(){}function b(){}var w={};f(w,u,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(F([])));L&&L!==o&&i.call(L,u)&&(w=L);var E=b.prototype=x.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function k(r,e){function n(o,a,c,u){var l=p(r[o],r,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,n){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=p(t,e,n);if("normal"===l.type){if(o=n.done?g:y,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function P(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return _.prototype=b,a(E,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:_,configurable:!0}),_.displayName=f(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},O(k.prototype),f(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(E),f(E,s,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}function o(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=i.call(e)).done)&&(c.push(n.value),c.length!==r);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,r)||function(t,r){if(t){if("string"==typeof t)return a(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function c(r,e,n){return(e=function(r){var e=function(r,e){if("object"!=t(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,e||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}
/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/(r,"string");return"symbol"==t(e)?e:e+""}(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}System.register(["./main-vendor-legacy-jrOTSjzZ.js","./overlayscrollbars-legacy-H4CKU3NA.js","./reporter-vendor-legacy-BVegT3cb.js"],(function(t,r){"use strict";var a,u,l,s,f;return{setters:[function(t){a=t.j,u=t.r},function(t){l=t.Q,s=t.S,f=t.T},null],execute:function(){var r=document.createElement("style");r.textContent="._description_19ouy_11,._title_19ouy_11{overflow-wrap:anywhere;white-space:pre-line;color:var(--carousel-text-color, #1f1f1f);font-size:14px;line-height:1.43em}._container_19ouy_19{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-start;width:100%;overflow-x:hidden;box-sizing:border-box;gap:24px}._arrow_19ouy_31{position:absolute;top:calc(50% - 12px);display:inline-flex;justify-content:center;align-items:center;width:24px;height:24px;background-color:#fff;border-radius:50%;border:none;cursor:pointer;visibility:visible;transition:visibility .3s;box-shadow:0 8px 8px rgba(0,0,0,.04),0 2px 4px rgba(0,0,0,.08),0 -2px 4px rgba(0,0,0,.04)}._arrow_19ouy_31:hover{background-color:#f8f8f8}._arrow_19ouy_31._left_19ouy_50{left:-8px}._arrow_19ouy_31._right_19ouy_53{right:-8px}._arrow_19ouy_31._hidden_19ouy_56{visibility:hidden}._carousel_19ouy_60{display:flex;flex:0 0 auto;flex-direction:column;width:calc(100% - 8px);height:auto;margin:4px;padding:16px;border-radius:8px;border:0;background-color:var(--bot-background-color, #ffffff);box-shadow:0 -2px 2px rgba(0,0,0,.02),0 2px 2px rgba(0,0,0,.04),0 4px 8px rgba(0,0,0,.02)}._image_19ouy_74{height:140px;border-radius:8px;overflow:hidden;object-fit:cover}._content_19ouy_81{display:flex;flex-direction:column}._text_19ouy_86{display:flex;flex-direction:column;padding:12px 0;gap:4px}._title_19ouy_11{font-weight:600}\n",document.head.appendChild(r);var h=function(t){return t.Left="left",t.Right="right",t}(h||{}),p={description:"_description_19ouy_11",title:"_title_19ouy_11",container:"_container_19ouy_19",arrow:"_arrow_19ouy_31",left:"_left_19ouy_50",right:"_right_19ouy_53",hidden:"_hidden_19ouy_56",carousel:"_carousel_19ouy_60",image:"_image_19ouy_74",content:"_content_19ouy_81",text:"_text_19ouy_86"},d=function(){return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[a.jsx("path",{d:"M7.15837 13.825L8.33337 15L13.3334 10L8.33337 5L7.15837 6.175L10.975 10L7.15837 13.825Z",fill:"#1F1F1F"}),a.jsx("mask",{id:"mask0_3639_28005",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"7",y:"5",width:"7",height:"10",children:a.jsx("path",{d:"M7.15837 13.825L8.33337 15L13.3334 10L8.33337 5L7.15837 6.175L10.975 10L7.15837 13.825Z",fill:"white"})}),a.jsx("g",{mask:"url(#mask0_3639_28005)"})]})},y=function(){return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[a.jsx("path",{d:"M12.8417 6.175L11.6667 5L6.66669 10L11.6667 15L12.8417 13.825L9.02502 10L12.8417 6.175Z",fill:"#1F1F1F"}),a.jsx("mask",{id:"mask0_3639_27965",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"6",y:"5",width:"7",height:"10",children:a.jsx("path",{d:"M12.8417 6.175L11.6667 5L6.66669 10L11.6667 15L12.8417 13.825L9.02502 10L12.8417 6.175Z",fill:"white"})}),a.jsx("g",{mask:"url(#mask0_3639_27965)"})]})},v=function(t){var r=t.onClick,e=t.direction,n=t.hidden;return a.jsx("button",{className:l([p.arrow,p[e],c({},p.hidden,n)]),onClick:r,"aria-hidden":n,"aria-label":"scroll ".concat(e),children:e===h.Left?a.jsx(y,{}):a.jsx(d,{})})},g=function(t){var r=t.imageUrl,e=t.title,c=t.description,l=t.buttons,f=t.onButtonClick,h=t.onError,d=i(u.useState(!1),2),y=d[0],v=d[1],g=function(){var t,r=(t=n().mark((function t(r){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h&&h(new Error("failed to load image. Url: ".concat(r.currentTarget.currentSrc))),v(!0);case 2:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,i){var a=t.apply(r,e);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}();return a.jsxs("div",{className:p.carousel,children:[r&&(y?a.jsx("div",{className:p.image}):a.jsx("img",{className:p.image,src:r,alt:"carousel img","aria-hidden":!0,onError:g})),a.jsxs("div",{className:p.content,children:[a.jsxs("div",{className:p.text,children:[a.jsx("p",{className:p.title,title:e,children:e}),c&&a.jsx("p",{className:p.description,title:c,children:c})]}),l.length>0&&a.jsx(s,{buttons:l,onClick:f})]})]})};t("default",(function(t){var r=t.enableRTL,n=t.items,o=t.onButtonClick,s=t.onError,d=n.length>1,y=u.useRef(null),m=i(u.useState(!1),2),x=m[0],_=m[1],b=i(u.useState(d),2),w=b[0],j=b[1];u.useEffect((function(){var t=y.current;_(!!r&&d),j(!r&&d);var e=function(t){var e=t.currentTarget;if(e){var n=e.offsetWidth,o=e.scrollWidth,i=e.scrollLeft;r?(_(i>n-o),j(0!==i)):(_(0!==i),j(i<o-n))}};return t&&t.addEventListener&&t.addEventListener("scroll",e,!1),function(){t&&t.removeEventListener&&t.removeEventListener("scroll",e,!1)}}),[r,d]);var L=f((function(t){if(y.current){var r=y.current.offsetWidth+24,e=t===h.Left?-r:r;y.current.scrollBy({left:e,behavior:"smooth"})}}),200);return a.jsxs("div",{ref:y,className:l(c(c({},p.container,!0),p.rtl,r)),children:[n.map((function(t,r){return a.jsx(g,e(e({},t),{},{onButtonClick:o,onError:s}),r)})),a.jsx(v,{hidden:!x,direction:h.Left,onClick:function(){return L(h.Left)}}),a.jsx(v,{hidden:!w,direction:h.Right,onClick:function(){return L(h.Right)}})]})}))}}}))}();
