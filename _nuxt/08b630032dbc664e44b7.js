/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(t,e,n){var content=n(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("e46b6ba2",content,!0,{sourceMap:!1})},176:function(t,e,n){var content=n(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("2e107364",content,!0,{sourceMap:!1})},177:function(t,e,n){"use strict";var r=n(175);n.n(r).a},178:function(t,e,n){(e=n(55)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},179:function(t,e,n){"use strict";var r=n(176);n.n(r).a},180:function(t,e,n){(e=n(55)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=e},181:function(t,e,n){"use strict";n.r(e);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(25);function c(t,e){return!e||"object"!==Object(o.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,p){return(l=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}var y=n(1);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function O(t,e){w(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){w(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){w(t,e,n)}))}function w(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var _={__proto__:[]}instanceof Array;function j(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}var x=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(x.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return h({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return j(this,t)}});var r=t.__decorators__;r&&(r.forEach((function(t){return t(e)})),delete t.__decorators__);var o=Object.getPrototypeOf(t.prototype),c=o instanceof y.a?o.constructor:y.a,f=c.extend(e);return M(f,t,c),m()&&O(f,t),f}var k={prototype:!0,arguments:!0,callee:!0,caller:!0};function M(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!k[r]){var o=Object.getOwnPropertyDescriptor(t,r);if(!o||o.configurable){var c,f,l=Object.getOwnPropertyDescriptor(e,r);if(!_){if("cid"===r)return;var y=Object.getOwnPropertyDescriptor(n,r);if(c=l.value,f=d(c),null!=c&&("object"===f||"function"===f)&&y&&y.value===l.value)return}0,Object.defineProperty(t,r,l)}}}))}function R(t){return"function"==typeof t?P(t):function(e){return P(e,t)}}R.registerHooks=function(t){x.push.apply(x,v(t))};var E=R;"undefined"!=typeof Reflect&&Reflect.getMetadata;n(177);var S=n(24),C=Object(S.a)({},(function(t,e){var n=e._c;return n("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),e._v(" "),n("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),e._v(" "),n("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E","fill-rule":"nonzero"}})])])}),[],!0,null,null,null).exports,A=function(t,e,n,desc){var r,c=arguments.length,f=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)f=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(f=(c<3?r(f):c>3?r(e,n,f):r(e,n))||f);return c>3&&f&&Object.defineProperty(e,n,f),f},N=function(t){function e(){return r(this,e),c(this,f(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),e}(y.a),z=N=A([E({components:{Logo:C}})],N),D=(n(179),Object(S.a)(z,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[e("Logo"),this._v(" "),e("h1",{staticClass:"title"},[this._v("\n      yto60\n    ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n      portfolio\n    ")]),this._v(" "),this._m(0)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[this._v("\n        Documentation\n      ")]),this._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[this._v("\n        GitHub\n      ")])])}],!1,null,null,null));e.default=D.exports}}]);