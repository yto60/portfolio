(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,e,r){var content=r(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("3120e9fa",content,!0,{sourceMap:!1})},190:function(t,e,r){var content=r(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("16e59d48",content,!0,{sourceMap:!1})},191:function(t,e,r){"use strict";var o=r(3),n=r(19),c=r(24),d=r(118),l=r(66),f=r(11),m=r(47).f,w=r(67).f,k=r(10).f,v=r(194).trim,h=o.Number,y=h,_=h.prototype,x="Number"==c(r(84)(_)),O="trim"in String.prototype,j=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var r,o,n,c=(e=O?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>n)return NaN;return parseInt(d,o)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof h&&(x?f((function(){_.valueOf.call(r)})):"Number"!=c(r))?d(new y(j(e)),r,h):j(e)};for(var C,I=r(8)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)n(y,C=I[N])&&!n(h,C)&&k(h,C,w(y,C));h.prototype=_,_.constructor=h,r(12)(o,"Number",h)}},192:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return d}));var o=[{name:"anke-to",category:"web",logo:"anke-to_logo.svg",summary:"部内向けアンケートツール",description:"所属しているサークル (traP) で使っている、部内向けアンケートツールです。<br />UIとロゴのデザイン、クライアントサイドの実装を担当しました。",links:[{summary:"Github Repository",url:"https://github.com/traPtitech/anke-to"}],cardImage:"anke-to_0.png",images:[{url:"anke-to_0.png"}]},{name:"hitonome",category:"web",logo:"hitonome_logo.svg",summary:"SNS共有・チャット機能つきTODOリスト",description:"SNS (Twitter) 共有と、グループ・チャット機能のついたTODOリストです。「人の目」を意識することで、タスクの消化を促します。<br />UIとロゴのデザイン、クライアントサイドの実装を担当しました。",cardImage:"hitonome_0.png",images:[{url:"hitonome_1.mov",type:"video",description:"デモ動画 (音量注意)"}]},{name:"ツンドク",category:"web",logo:"tsundoku_logo.svg",summary:"書籍管理ツール",description:"未読のままの「積ん読」本や読み終わった本を管理するツールです。<br />クライアントサイドの実装を担当しました。",links:[{summary:"ツンドク",url:"https://github.com/traPtitech/anke-to"}],cardImage:"tsundoku_0.png",images:[{url:"tsundoku_0.png"}]},{name:"logo",category:"design",summary:"作ったロゴなど",description:"個人で作ったロゴなどのまとめです。<br />使用ツール: Figma, Adobe Illustrator",cardImage:"logo_0.svg",images:[{url:"logo_0.svg",description:"traP1logo 2019/12/18<br />お題: 白昼夢にさよならを"},{url:"logo_191204.svg",description:"traP1logo 2019/12/04<br />お題: 神様のメモ帳"},{url:"logo_191203.svg",description:"人生の目標"},{url:"logo_191127.svg",description:"traP1logo 2019/11/27<br />お題: 春岡県"},{url:"logo_191030.svg",description:"traP1design 2019/12/18<br />お題: 午後の緑茶"},{url:"logo_190401.svg",description:'デザイン研究会 紙袋ステンシル用ロゴ<br />完成図<a href="https://twitter.com/titechdesignlab/status/1111497677018021888" target="_blank"><ion-icon name="open" /></a>'},{url:"logo_190320.svg",description:"traP1logo 2019/03/20<br />お題: in the rain"}]}],n=["web","design"],c=function(t){return o.map((function(t,e){var r=t;return r.id=e,r})).filter((function(e){return e.category===t}))},d={web:c("web"),design:c("design")}},194:function(t,e,r){var o=r(7),n=r(23),c=r(11),d=r(195),l="["+d+"]",f=RegExp("^"+l+l+"*"),m=RegExp(l+l+"*$"),w=function(t,e,r){var n={},l=c((function(){return!!d[t]()||"​"!="​"[t]()})),f=n[t]=l?e(k):d[t];r&&(n[r]=f),o(o.P+o.F*l,"String",n)},k=w.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=w},195:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},196:function(t,e,r){"use strict";var o=r(189);r.n(o).a},197:function(t,e,r){(e=r(30)(!1)).push([t.i,".work-card[data-v-643644ce]{margin-bottom:1rem;border-radius:10px;overflow:hidden;display:-webkit-box;display:flex;position:relative;color:#515e5e;font-weight:400}.work-card[data-v-643644ce]:hover{box-shadow:5px 5px 10px #d4dbdb}.work-card.is-selected[data-v-643644ce]{border:3px solid #3b62b9;box-sizing:border-box}.card-footer[data-v-643644ce],.image[data-v-643644ce]{width:100%}.image[data-v-643644ce]{z-index:0}.card-footer[data-v-643644ce]{z-index:1;left:0;bottom:0;position:absolute;padding:.5rem 1rem;box-sizing:border-box;background-color:rgba(200,239,251,.9)}.card-footer .name[data-v-643644ce]{font-weight:700;font-size:1.1rem;color:#3b62b9}.card-footer .summary[data-v-643644ce]{margin-top:.1rem;margin-left:1.5rem;font-size:.8rem}",""]),t.exports=e},198:function(t,e,r){"use strict";var o=r(190);r.n(o).a},199:function(t,e,r){(e=r(30)(!1)).push([t.i,".works-list[data-v-2d4b292a]{padding-top:.2rem;height:100%}.works-list.is-mobile[data-v-2d4b292a]{margin:auto;width:95%}.works-list.is-desktop[data-v-2d4b292a]{overflow-y:auto;width:40%;min-width:260px;padding-right:1rem}.wrapper[data-v-2d4b292a],.wrapper .work-card[data-v-2d4b292a],.wrapper h3[data-v-2d4b292a]{width:100%}.wrapper h3[data-v-2d4b292a]{margin-top:0;padding:.5rem .7rem;border-bottom:2px dashed #ed729d;box-sizing:border-box}",""]),t.exports=e},200:function(t,e,r){var content=r(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("7fa05af0",content,!0,{sourceMap:!1})},202:function(t,e,r){"use strict";r(191);var o=r(42),n=r(46),c=r(44),d=r(43),l=r(45),f=r(9),m=r(22),data=r(192),w=function(t,e,r,desc){var o,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(n<3?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},k=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"isSelected",get:function(){return this.work.id===Number(this.$route.params.id)}}]),e}(m.c);w([Object(m.b)({type:Object,required:!0})],k.prototype,"work",void 0);var v=k=w([Object(m.a)({components:{}})],k),h=(r(196),r(15)),y=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"work-card is-clickable",class:{"is-selected":t.isSelected},attrs:{to:"/works/"+t.work.id}},[r("img",{staticClass:"image",attrs:{src:"/img/"+t.work.cardImage}}),r("div",{staticClass:"card-footer"},[r("div",{staticClass:"name"},[t._v(t._s(t.work.name))]),t.work.summary?r("div",{staticClass:"summary"},[t._v(t._s(t.work.summary))]):t._e()])])}),[],!1,null,"643644ce",null).exports,_=function(t,e,r,desc){var o,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(n<3?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"works",get:function(){return data.c}},{key:"workCategories",get:function(){return data.b}},{key:"categorizedWorks",get:function(){return data.a}}]),e}(m.c);_([Object(m.b)({type:Number})],x.prototype,"selectedIndex",void 0);var O=x=_([Object(m.a)({components:{WorkCard:y}})],x),j=(r(198),Object(h.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"works-list",class:t.$store.getters.getViewTypeClass},t._l(t.workCategories,(function(e){return r("div",{staticClass:"wrapper"},[r("h3",[t._v(t._s(e))]),t._l(t.categorizedWorks[e],(function(t,e){return r("WorkCard",{key:e,staticClass:"work-card",attrs:{work:t}})}))],2)})),0)}),[],!1,null,"2d4b292a",null));e.a=j.exports},205:function(t,e,r){"use strict";var o=r(200);r.n(o).a},206:function(t,e,r){(e=r(30)(!1)).push([t.i,".works-id[data-v-40b29a03]{width:100%}.works-list-wrapper[data-v-40b29a03]{height:100%;width:-webkit-min-content;width:-moz-min-content;width:min-content;float:left}.work-details-wrapper[data-v-40b29a03]{float:right;width:95%;text-align:center;padding-top:2rem;overflow-y:auto;height:calc(100% - 2rem)}.work-details-wrapper .work-details img.logo[data-v-40b29a03]{width:50%}.work-details-wrapper .work-details .description[data-v-40b29a03]{text-align:left}.work-details-wrapper .work-details .links[data-v-40b29a03]{margin-top:1rem;text-align:right}.work-details-wrapper .work-details .links .link[data-v-40b29a03]{color:#8e9898}.work-details-wrapper .work-details .sub-images[data-v-40b29a03]{margin-top:1.5rem}.work-details-wrapper .work-details .sub-images .image[data-v-40b29a03]{margin:1.3rem auto;width:90%;max-width:430px}.work-details-wrapper .work-details .sub-images .image img[data-v-40b29a03],.work-details-wrapper .work-details .sub-images .image video[data-v-40b29a03]{width:100%}.work-details-wrapper .work-details .sub-images .image .image-description[data-v-40b29a03]{font-size:.8rem;color:#8e9898;margin-top:.3rem}.is-desktop .works-list-wrapper[data-v-40b29a03]{padding-right:.2rem;border-right:3px solid #3b62b9}.is-desktop .work-details-wrapper[data-v-40b29a03]{width:62%;max-width:calc(100% - 276px - 3rem)}.is-desktop .work-details-wrapper .work-details[data-v-40b29a03]{width:90%;margin:auto}",""]),t.exports=e},213:function(t,e,r){"use strict";r.r(e);r(191);var o=r(42),n=r(46),c=r(44),d=r(43),l=r(45),f=r(9),m=r(22),data=r(192),w=r(202),k=function(t,e,r,desc){var o,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(n<3?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},v=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(n.a)(e,[{key:"id",get:function(){return Number(this.$route.params.id)}},{key:"work",get:function(){return data.c[this.id]}}]),e}(m.c),h=v=k([Object(m.a)({components:{WorksList:w.a},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)&&Number(e.id)<data.c.length}})],v),y=(r(205),r(15)),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"works-id",class:t.$store.getters.getViewTypeClass},[r("div",{staticClass:"works-list-wrapper"},["desktop"===t.$store.state.viewType?r("WorksList",{attrs:{selectedIndex:t.id}}):t._e()],1),r("div",{staticClass:"work-details-wrapper"},[r("div",{staticClass:"work-details"},[t.work.logo?r("img",{staticClass:"logo",attrs:{src:"/img/"+t.work.logo}}):t._e(),r("h3",[t._v(t._s(t.work.name))]),r("div",{staticClass:"description",domProps:{innerHTML:t._s(t.work.description)}}),t.work.links?r("div",{staticClass:"links"},t._l(t.work.links,(function(link){return r("span",{staticClass:"link"},[t._v(t._s(link.summary)),r("a",{attrs:{href:link.url,target:"_blank"}},[r("ion-icon",{attrs:{name:"open"}})],1)])})),0):t._e(),t.work.images?r("div",{staticClass:"sub-images"},t._l(t.work.images,(function(image){return r("div",{staticClass:"image"},["video"===image.type?r("video",{attrs:{src:"/img/"+image.url,controls:""}}):r("img",{attrs:{src:"/img/"+image.url}}),image.description?r("div",{staticClass:"image-description",domProps:{innerHTML:t._s(image.description)}}):t._e()])})),0):t._e()])])])}),[],!1,null,"40b29a03",null);e.default=component.exports}}]);