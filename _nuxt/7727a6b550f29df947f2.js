(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(e,t,r){"use strict";var o=r(3),n=r(20),c=r(29),l=r(119),d=r(67),f=r(11),m=r(47).f,v=r(68).f,k=r(10).f,h=r(195).trim,w=o.Number,_=w,y=w.prototype,O="Number"==c(r(84)(y)),x="trim"in String.prototype,j=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,o,n,c=(t=x?t.trim():h(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,o)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(O?f((function(){y.valueOf.call(r)})):"Number"!=c(r))?l(new _(j(t)),r,w):j(t)};for(var N,I=r(9)?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;I.length>C;C++)n(_,N=I[C])&&!n(w,N)&&k(w,N,v(_,N));w.prototype=y,y.constructor=w,r(12)(o,"Number",w)}},191:function(e,t,r){var content=r(198);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("2276d40d",content,!0,{sourceMap:!1})},192:function(e,t,r){var content=r(200);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("c168db1e",content,!0,{sourceMap:!1})},193:function(e){e.exports=JSON.parse('[{"name":"anke-to","category":"web","logo":"anke-to_logo.svg","summary":"部内向けアンケートツール","description":"所属しているサークル (traP) で制作した、部内向けアンケートツールです。<br />UIとロゴのデザイン、クライアントサイドの実装を担当しました。<br /><br />イベントへの参加募集や制作チームへの所属希望調査など、部内でアンケートを取る際、それまでは主に Google Forms を使用していました。しかし、部員が毎回名前を入力する必要があること、誰が回答済みかが把握しにくいこと、回答の共有手段が限られていることなど、不便な点が多いと感じていたため、これらの問題を解決するために一から開発を行うことにしました。<br />Ansibleによって管理された部のサーバーで運用しています。<br />初めてのWebアプリケーション開発だったため、進め方やコードの保守性など反省点も多くあり、現在はリファクタリングや部員からのフィードバックを反映した改善などを行っています。","labels":[{"key":"lang","name":"言語・フレームワーク","value":"Vue.js / JavaScript / SCSS"},{"key":"period","name":"開発期間","value":"2018.7 〜 2019.3 (現在も運用中)"}],"links":[{"summary":"Github Repository","url":"https://github.com/traPtitech/anke-to"}],"cardImage":"anke-to_0_respond.png","images":[{"url":"anke-to_0_respond.png","description":"回答画面"},{"url":"anke-to_1_information.png","description":"アンケートの情報を見られます"},{"url":"anke-to_2_results.png","description":"アンケートの結果です。公開範囲を設定したり、MarkdownやCSVでコピーやダウンロードを行うこともできます。"},{"url":"anke-to_3_modal.png","description":"ユーザー認証は部内SNSであるtraQによるOAuth認証を用いていて、ユーザーの中からアンケートの対象者や管理者を選ぶことができます。","width":"70%"},{"url":"anke-to_4_bot.png","description":"誰かがアンケートを作成すると、traQに自動で投稿されます。"}]},{"name":"hitonome","category":"web","logo":"hitonome_logo.svg","summary":"SNS共有・チャット機能つきTODOリスト","description":"SNS (Twitter) 共有と、グループ・チャット機能のついたTODOリストです。「人の目」を意識することで、タスクの消化を促します。<br />UIとロゴのデザイン、クライアントサイドの実装を担当しました。","cardImage":"hitonome_0.png","images":[{"url":"hitonome_1.mov","type":"video","description":"デモ動画 (音量注意)"}]},{"name":"ツンドク","category":"web","logo":"tsundoku_logo.svg","summary":"書籍管理ツール","description":"未読のままの「積ん読」本を管理するツールです。<br />クライアントサイドで関わっています。","links":[{"summary":"ツンドク","url":"https://tsun-doku.app/"}],"cardImage":"tsundoku_0.png","images":[{"url":"tsundoku_0.png"}]},{"name":"logo","category":"design","summary":"作ったロゴなど","description":"個人で作ったロゴなどのまとめです。","labels":[{"key":"tools","name":"使用ツール","value":"Figma, Adobe Illustrator"}],"cardImage":"logo_0.svg","images":[{"url":"logo_0.svg","description":"traP1logo 2019/12/18<br />お題: 白昼夢にさよならを"},{"url":"logo_191204.png","description":"traP1logo 2019/12/04<br />お題: 神様のメモ帳"},{"url":"logo_191203.png","description":"人生の目標"},{"url":"logo_191127.svg","description":"traP1logo 2019/11/27<br />お題: 春岡県"},{"url":"logo_191030.svg","description":"traP1design 2019/12/18<br />お題: 午後の緑茶"},{"url":"logo_190401.svg","description":"デザイン研究会 紙袋ステンシル用ロゴ<br />完成図<a href=\\"https://twitter.com/titechdesignlab/status/1111497677018021888\\" target=\\"_blank\\"><ion-icon name=\\"open\\" /></a>"},{"url":"logo_190320.svg","description":"traP1logo 2019/03/20<br />お題: in the rain"}]},{"name":"traP 新歓パンフレット2019","category":"design","description":"東工大デジタル創作同好会の2019年度新歓パンフレットです。サイバーな雰囲気を前面に押し出しながら、サークルの雰囲気や多岐にわたる活動内容が伝わるよう工夫しました。","labels":[{"key":"tools","name":"使用ツール","value":"Gravit Designer"},{"key":"term","name":"制作期間","value":"2019.2 〜 2019.3"}],"cardImage":"traPpamphlet_0_front.png","images":[{"url":"traPpamphlet_0_front.png","description":"表"},{"url":"traPpamphlet_1_back.png","description":"裏"}]}]')},195:function(e,t,r){var o=r(8),n=r(28),c=r(11),l=r(196),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(e,t,r){var n={},d=c((function(){return!!l[e]()||"​"!="​"[e]()})),f=n[e]=d?t(k):l[e];r&&(n[r]=f),o(o.P+o.F*d,"String",n)},k=v.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(m,"")),e};e.exports=v},196:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},197:function(e,t,r){"use strict";var o=r(191);r.n(o).a},198:function(e,t,r){(t=r(35)(!1)).push([e.i,".work-card[data-v-180a2ca1]{margin-bottom:1rem;border-radius:10px;overflow:hidden;display:-webkit-box;display:flex;position:relative;color:#515e5e;font-weight:400}.work-card[data-v-180a2ca1]:hover{box-shadow:5px 5px 10px #d4dbdb}.work-card.is-selected[data-v-180a2ca1]{border:3px solid #3b62b9;box-sizing:border-box}.card-footer[data-v-180a2ca1],.image[data-v-180a2ca1]{width:100%;height:35%}.image[data-v-180a2ca1]{z-index:0}.card-footer[data-v-180a2ca1]{z-index:1;left:0;bottom:0;position:absolute;padding:.5rem 1rem;box-sizing:border-box;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:rgba(200,239,251,.9)}.card-footer .name[data-v-180a2ca1]{font-weight:700;font-size:1rem;color:#3b62b9}.card-footer .summary[data-v-180a2ca1]{margin-top:.1rem;margin-left:1.5rem;font-size:.8rem}",""]),e.exports=t},199:function(e,t,r){"use strict";var o=r(192);r.n(o).a},200:function(e,t,r){(t=r(35)(!1)).push([e.i,".works-list[data-v-3192b3ad]{padding-top:.2rem;height:100%}.works-list.is-mobile[data-v-3192b3ad]{margin:auto;width:95%}.works-list.is-desktop[data-v-3192b3ad]{overflow-y:auto;width:40%;min-width:260px;padding-right:1rem}.wrapper[data-v-3192b3ad]{width:100%}.wrapper .work-card[data-v-3192b3ad],.wrapper h3[data-v-3192b3ad]{width:100%;height:auto}.wrapper h3[data-v-3192b3ad]{margin-top:0;padding:.5rem .7rem;border-bottom:2px dashed #ed729d;box-sizing:border-box}",""]),e.exports=t},202:function(e,t,r){var content=r(210);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("db626996",content,!0,{sourceMap:!1})},204:function(e,t,r){"use strict";r(190);var o=r(23),n=r(27),c=r(25),l=r(24),d=r(26),f=r(5),m=r(13),data=r(193),v=["web","design"],k=data,h=function(e){return k.map((function(e,t){var r=e;return r.id=t,r})).filter((function(t){return t.category===e}))},w={web:h("web"),design:h("design")},_=function(e,t,r,desc){var o,n=arguments.length,c=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(n.a)(t,[{key:"isSelected",get:function(){return this.work.id===Number(this.$route.params.id)}}]),t}(m.c);_([Object(m.b)({type:Object,required:!0})],y.prototype,"work",void 0);var O=y=_([Object(m.a)({components:{}})],y),x=(r(197),r(16)),j=Object(x.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"work-card is-clickable",class:{"is-selected":e.isSelected},attrs:{to:"/works/"+e.work.id+"/"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/"+e.work.cardImage,expression:"`/img/${work.cardImage}`"}],staticClass:"image"}),r("div",{staticClass:"card-footer"},[r("div",{staticClass:"name"},[e._v(e._s(e.work.name))]),e.work.summary?r("div",{staticClass:"summary"},[e._v(e._s(e.work.summary))]):e._e()])])}),[],!1,null,"180a2ca1",null).exports,N=function(e,t,r,desc){var o,n=arguments.length,c=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},I=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(n.a)(t,[{key:"works",get:function(){return data}},{key:"workCategories",get:function(){return v}},{key:"categorizedWorks",get:function(){return w}}]),t}(m.c);N([Object(m.b)({type:Number})],I.prototype,"selectedIndex",void 0);var C=I=N([Object(m.a)({components:{WorkCard:j}})],I),P=(r(199),Object(x.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"works-list",class:e.$store.getters.getViewTypeClass},e._l(e.workCategories,(function(t){return r("div",{staticClass:"wrapper"},[r("h3",[e._v(e._s(t))]),e._l(e.categorizedWorks[t],(function(e,t){return r("WorkCard",{key:t,staticClass:"work-card",attrs:{work:e}})}))],2)})),0)}),[],!1,null,"3192b3ad",null));t.a=P.exports},209:function(e,t,r){"use strict";var o=r(202);r.n(o).a},210:function(e,t,r){(t=r(35)(!1)).push([e.i,".work-details img.logo[data-v-1ff21406]{width:50%}.work-details .description[data-v-1ff21406],.work-details .labels[data-v-1ff21406]{text-align:left}.work-details .labels[data-v-1ff21406]{font-size:.9rem}.work-details .links[data-v-1ff21406]{margin-top:1rem;text-align:right}.work-details .links .link[data-v-1ff21406]{color:#8e9898}.work-details .sub-images[data-v-1ff21406]{margin-top:1.5rem}.work-details .sub-images .image[data-v-1ff21406]{margin:1.8rem auto;width:90%;max-width:430px}.work-details .sub-images .image img[data-v-1ff21406],.work-details .sub-images .image video[data-v-1ff21406]{width:100%}.work-details .sub-images .image .image-description[data-v-1ff21406]{font-size:.8rem;color:#8e9898;margin-top:.3rem}",""]),e.exports=t},218:function(e,t,r){"use strict";r.r(t);r(190);var o=r(23),n=r(27),c=r(25),l=r(24),d=r(26),f=r(5),m=r(13),data=r(193),v=r(204),k=function(e,t,r,desc){var o,n=arguments.length,c=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},h=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(n.a)(t,[{key:"id",get:function(){return Number(this.$route.params.id)}},{key:"work",get:function(){return data[this.id]}}]),t}(m.c),w=h=k([Object(m.a)({components:{WorksList:v.a},validate:function(e){var t=e.params;return/^\d+$/.test(t.id)&&Number(t.id)<data.length}})],h),_=(r(209),r(16)),component=Object(_.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"work-details"},[e.work.logo?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/"+e.work.logo,expression:"`/img/${work.logo}`"}],staticClass:"logo"}):e._e(),r("h3",[e._v(e._s(e.work.name))]),r("div",{staticClass:"description",domProps:{innerHTML:e._s(e.work.description)}}),e.work.labels?r("ul",{staticClass:"labels"},e._l(e.work.labels,(function(label){return r("li",[r("b",[e._v(e._s(label.name))]),e._v(": "+e._s(label.value))])})),0):e._e(),e.work.links?r("div",{staticClass:"links"},e._l(e.work.links,(function(link){return r("span",{staticClass:"link"},[r("a",{attrs:{href:link.url,target:"_blank"}},[e._v(e._s(link.summary)),r("ion-icon",{attrs:{name:"open"}})],1)])})),0):e._e(),e.work.images?r("div",{staticClass:"sub-images"},e._l(e.work.images,(function(image){return r("div",{staticClass:"image"},["video"===image.type?r("video",{attrs:{src:"/img/"+image.url,controls:""}}):r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/"+image.url,expression:"`/img/${image.url}`"}],style:"width: "+(image.width?image.width:"")+"; height: "+(image.height?image.height:"")+";"}),image.description?r("div",{staticClass:"image-description",domProps:{innerHTML:e._s(image.description)}}):e._e()])})),0):e._e()])}),[],!1,null,"1ff21406",null);t.default=component.exports}}]);