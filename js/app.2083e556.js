(function(){"use strict";var e={6835:function(e,n,t){var a=t(9242),o=t(3396),r=t(4870),i=t(678),c=t(2804),s=t(408),l=t(7139),u=t(7638);const v=(e,n,t,a)=>{const o=(0,r.iH)("");return o.value=t?a?"/brand-icons/"+e+"-"+n+"-"+a+"."+t:"/brand-icons/"+e+"-"+n+"."+t:"/brand-icons/"+e+"-"+n+".png",o};var m=v;const d=["icon","variant","format","src","alt"];var p={props:{icon:String,variant:String,format:String},setup(e){return(n,t)=>((0,o.wg)(),(0,o.iD)("img",{icon:e.icon,variant:e.variant,format:e.format,src:(0,r.SU)(m)(e.icon,e.variant,e.format).value,alt:e.icon,loading:"lazy",class:(0,l.C_)(e.variant)},null,10,d))}};const g=p;var w=g;const f={class:"category-list-item__title"},_={class:"category-list-item__count"};var h={props:{label:String,icon:String,count:Number,category:Object},setup(e){function n(){}return(t,a)=>{const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(r,{onClick:n,to:{name:"Category",params:{category:e.category.slug},query:{search:void 0}},class:"category-list-item__link","active-class":"category-list-item__link--active"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{icon:e.icon,variant:"two-color",class:"category-list-item__icon"},null,8,["icon"]),(0,o._)("div",f,(0,l.zw)(e.label),1),(0,o._)("div",_,(0,l.zw)(e.count),1)])),_:1},8,["to"])}}};const C=h;var y=C;const b={class:"category-list"},k={class:"category-list__list"},S={class:"category-list-item"},M=(0,o._)("div",{class:"category-list-item__title"},"All brand icons",-1),L={class:"category-list-item__count"};var H={props:{icon:String,currentCategory:String},emits:["clearCurrentCategory"],setup(e,{emit:n}){const t=u.b,a=s.c;return(e,n)=>{const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("ul",k,[(0,o._)("li",S,[(0,o.Wm)(i,{to:{name:"Home"},class:"category-list-item__link","active-class":"category-list-item__link--active"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{icon:"open-book",variant:"two-color",class:"category-list-item__icon"}),M,(0,o._)("div",L,(0,l.zw)((0,r.SU)(a).length),1)])),_:1})]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(t),(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.title,class:"category-list__item"},[(0,o.Wm)(y,{label:e.label,icon:e.icon,category:e,count:e.icons.length},null,8,["label","icon","category","count"])])))),128))])])}}};const T=H;var j=T;t(89);const V={class:"modal"},D={class:"modal__actions"},O=(0,o._)("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"},null,-1),U=[O],x={class:"modal__body"},B={class:"modal__icon-preview-wrapper"},W={class:"modal__preview-actions"},z={class:"modal__heading"},I=(0,o._)("p",{class:"text-center"},"Select a variant:",-1),E={class:"modal__icon-variants-wrapper"},A={class:"modal__icon-preview-wrapper"},q={class:"icon-preview__download"},F=["href"],N=(0,o._)("div",{class:"uids-button__inner"},[(0,o._)("span",null,"SVG"),(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},[(0,o._)("path",{d:"M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"})])],-1),P=[N],Y=["href"],K=(0,o._)("div",{class:"uids-button__inner"},[(0,o._)("span",null,"PNG (1:1)"),(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},[(0,o._)("path",{d:"M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"})])],-1),G=[K],Z=["href"],R=(0,o._)("div",{class:"uids-button__inner"},[(0,o._)("span",null,"PNG (16:9)"),(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},[(0,o._)("path",{d:"M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"})])],-1),J=[R],Q={class:"tags"};var X={props:{icon:Object,currentCategory:Object,variant:String},emits:["closeModal"],setup(e,{emit:n}){const t=e,i=(0,r.iH)(""),c=(0,r.iH)("white");i.value=t.variant,document.addEventListener("keydown",(function(e){"Escape"===e.key&&d()}));const s=[{variant:"one-color-black",formats:["svg","png"]},{variant:"two-color",formats:["svg","png"]},{variant:"one-color-gold",formats:["png"]},{variant:"one-color-white",formats:["png"]}];function u(e,n){let t=s.find((n=>n.variant==e));if(t)return!!t.formats.find((e=>e==n))}function v(e){c.value="one-color-white"==e?"icon-preview--one-color-white":"",i.value=e}function d(){n("closeModal")}return(n,t)=>{const p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:"modal__backdrop",onClick:t[2]||(t[2]=(0,a.iM)((e=>d()),["self"]))},[(0,o._)("div",V,[(0,o._)("div",D,[((0,o.wg)(),(0,o.iD)("svg",{onClick:t[0]||(t[0]=e=>d()),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},U))]),(0,o._)("div",x,[(0,o._)("div",B,[(0,o._)("div",null,[(0,o._)("div",{class:(0,l.C_)(["icon-preview",c.value])},[(0,o.Wm)(w,{icon:e.icon.name,variant:i.value,class:"icon-preview__img"},null,8,["icon","variant"])],2)]),(0,o._)("div",W,[(0,o._)("div",null,[(0,o._)("h1",z,(0,l.zw)(e.icon.name),1),I,(0,o._)("div",E,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(s,(n=>(0,o._)("div",{class:(0,l.C_)(["icon-preview icon-preview--small",[{"icon-preview--active":i.value==n.variant},"icon-preview--"+n.variant]]),key:n.variant},[(0,o.Wm)(w,{class:"icon-preview__img",icon:e.icon.name,variant:n.variant,onClick:e=>v(n.variant)},null,8,["icon","variant","onClick"])],2))),64))])])])]),(0,o._)("div",A,[(0,o._)("div",q,[u(i.value,"svg")?((0,o.wg)(),(0,o.iD)("a",{key:0,href:(0,r.SU)(m)(e.icon.name,i.value,"svg").value,class:"uids-button"},P,8,F)):(0,o.kq)("",!0),u(i.value,"png")?((0,o.wg)(),(0,o.iD)("a",{key:1,href:(0,r.SU)(m)(e.icon.name,i.value,"png","square").value,class:"uids-button",download:""},G,8,Y)):(0,o.kq)("",!0),u(i.value,"png")?((0,o.wg)(),(0,o.iD)("a",{key:2,href:(0,r.SU)(m)(e.icon.name,i.value,"png","wide").value,class:"uids-button",download:""},J,8,Z)):(0,o.kq)("",!0)])]),(0,o._)("div",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.icon.keywords,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e.id,onClick:t[1]||(t[1]=e=>d())},[(0,o.Wm)(p,{class:"uids-tag",to:{name:"Search",params:{term:e}}},{default:(0,o.w5)((()=>[(0,o.Uk)("#"+(0,l.zw)(e),1)])),_:2},1032,["to"])])))),128))])])])])}}};const $=X;var ee=$;const ne={key:0,class:"icon-list",id:"icon-list"},te={class:"icon-list__label"},ae={key:1,class:"content text-center"},oe=(0,o._)("p",null,"No icons found.",-1);var re={props:{icons:Object,variant:String},emits:["openModal"],setup(e,{emit:n}){function t(e){n("openModal",e)}return(n,a)=>{const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.icons?((0,o.wg)(),(0,o.iD)("div",ne,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.icons,(n=>((0,o.wg)(),(0,o.j4)(r,{tag:"button",class:"icon-list__button",key:n.id,to:{hash:"#"+n.name},onClick:e=>t(n)},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{icon:n.name,variant:e.variant},null,8,["icon","variant"]),(0,o._)("span",te,(0,l.zw)(n.name),1)])),_:2},1032,["to","onClick"])))),128))])):(0,o.kq)("",!0),0==e.icons.length?((0,o.wg)(),(0,o.iD)("div",ae,[(0,o.Wm)(w,{icon:"heart-break",format:"svg",variant:"two-color",class:"not-found-icon"}),oe])):(0,o.kq)("",!0)],64)}}};const ie=re;var ce=ie;const se={class:"search"},le=["value"],ue=(0,o._)("button",{class:"search__button"},[(0,o._)("svg",{id:"search","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 23"},[(0,o._)("title",null,"search"),(0,o._)("path",{d:"M19.82,16.38l-3.15-3.15a6.25,6.25,0,0,0,1.14-3.66,6.36,6.36,0,0,0-.51-2.51A6.68,6.68,0,0,0,15.93,5a6.45,6.45,0,0,0-2.07-1.37,6.41,6.41,0,0,0-5,0A6.29,6.29,0,0,0,6.79,5,6.54,6.54,0,0,0,5.41,7.06a6.43,6.43,0,0,0,0,5,6.47,6.47,0,0,0,5.95,4A6.24,6.24,0,0,0,15,14.89L18.16,18a1.08,1.08,0,0,0,.82.34,1.13,1.13,0,0,0,.83-.34,1.16,1.16,0,0,0,.35-.83A1.13,1.13,0,0,0,19.82,16.38Zm-5.56-3.91a3.94,3.94,0,0,1-2.9,1.21A4.11,4.11,0,0,1,7.25,9.57a4,4,0,0,1,1.2-2.9,4.09,4.09,0,0,1,5.81,0,4,4,0,0,1,1.2,2.9A4,4,0,0,1,14.26,12.47Z"})]),(0,o._)("span",{class:"sr-only"},"Search")],-1);var ve={props:{currentSearchTerm:String},emits:["setCurrentSearchTerm"],setup(e,{emit:n}){const t=(0,i.tv)();(0,i.yj)();function r(e){e?(c(e),t.push({name:"Search",params:{term:e}})):t.push({name:"Home"})}function c(e){n("setCurrentSearchTerm",e)}return(n,t)=>((0,o.wg)(),(0,o.iD)("div",se,[(0,o._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)((n=>r(e.currentSearchTerm)),["prevent"])),class:"search__form"},[(0,o._)("input",{type:"search",placeholder:"Examples: academics, accessibility, buildings, heart, iowa",class:"search__input",value:e.currentSearchTerm,onChange:t[0]||(t[0]=e=>c(e.target.value)),onFocus:t[1]||(t[1]=e=>e.target.select())},null,40,le),ue],32)]))}};const me=ve;var de=me,pe=t(6673);const ge={class:"settings__variant-selector"};var we={props:{currentVariant:String},emits:["toggleVariantColor"],setup(e,{emit:n}){function t(){n("toggleVariantColor")}return(e,n)=>((0,o.wg)(),(0,o.iD)("div",ge,[(0,o.Wm)((0,r.SU)(pe.Z),{activeColor:"#ffcd00",title:"Color",name:"vue-toggle",toggled:!0,onToggle:t})]))}};const fe=we;var _e=fe;const he={class:"site-name"},Ce=(0,o.Uk)("Brand Icon Browser"),ye={class:"wrapper"},be={class:"sticky"},ke=(0,o.uE)('<div class="download-section"><a href="https://github.com/uiowa/brand-icons/archive/refs/heads/main.zip" class="download-button"><span>Download all</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"></path></svg></a></div><p class="feedback"><a href="mailto:osc-brand@uiowa.edu?subject=Brand Icon Browser Feedback">Submit feedback</a></p>',2),Se={class:"toolbar sticky"};var Me={setup(e){const n=(0,r.iH)("two-color"),t=(0,i.tv)(),a=((0,i.yj)(),(0,r.iH)(!1)),l=(0,r.iH)(""),u=(0,r.iH)("");if(window.location.hash){let e=window.location.hash.replace("#",""),n=s.c.find((function(n){return n.name==e}));n&&(l.value=e,m(n))}function v(e){u.value=e}function m(e){a.value=!0,document.body.classList.add("modal-open"),l.value=e}function d(){setTimeout((()=>{"one-color-black"==n.value?n.value="two-color":n.value="one-color-black"}),300)}function p(){t.push({hash:""}),document.body.classList.remove("modal-open"),a.value=!1}return(e,t)=>{const i=(0,o.up)("router-link"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)((0,r.SU)(c.DM),{height:"narrow"},{default:(0,o.w5)((()=>[(0,o._)("h1",he,[(0,o.Wm)(i,{to:{name:"Home"}},{default:(0,o.w5)((()=>[Ce])),_:1})])])),_:1}),(0,o._)("div",ye,[(0,o._)("aside",null,[(0,o._)("div",be,[(0,o.Wm)(j),ke])]),(0,o._)("main",null,[(0,o._)("div",Se,[(0,o.Wm)(de,{id:"search",onSetCurrentSearchTerm:v,currentSearchTerm:u.value},null,8,["currentSearchTerm"]),(0,o.Wm)(_e,{onToggleVariantColor:d,currentVariant:n.value},null,8,["currentVariant"])]),(0,o.Wm)(s,{onOpenModal:m,onSetCurrentSearchTerm:v,currentVariant:n.value},null,8,["currentVariant"])])]),a.value?((0,o.wg)(),(0,o.j4)(o.lR,{key:0,to:".modals"},[(0,o.Wm)(ee,{onCloseModal:p,variant:n.value,icon:l.value},null,8,["variant","icon"])])):(0,o.kq)("",!0)],64)}}};const Le=Me;var He=Le,Te={props:{currentVariant:String},emits:["openModal"],setup(e,{emit:n}){(0,i.yj)();const t=(0,r.iH)(s.c);function a(e){n("openModal",e)}return(n,r)=>((0,o.wg)(),(0,o.j4)(ce,{icons:t.value,variant:e.currentVariant,onOpenModal:a},null,8,["icons","variant"]))}};const je=Te;var Ve=je,De={props:{currentVariant:String},emits:["openModal","setCurrentSearchTerm"],setup(e,{emit:n}){const t=(0,i.yj)(),a=(0,i.tv)(),c=(0,r.iH)(null);let l=u.b;t.params.category;const v=(0,o.Fl)((()=>{if(t.params.category){let e=t.params.category;c.value=l.find((n=>n.slug==e))}c.value||a.push({name:"NotFound"});let e={icons:[]},n=c.value.icons,o=new Set,r=[],i=[];return n.forEach((n=>e.icons.push(s.c.filter((function(e){return e.name.includes(n)}))))),r=e.icons.flat(),r.forEach((e=>{o.add(e)})),i=[...o],i}));function m(e){n("openModal",e)}return(n,t)=>((0,o.wg)(),(0,o.j4)(ce,{icons:(0,r.SU)(v),variant:e.currentVariant,onOpenModal:m},null,8,["icons","variant"]))}};const Oe=De;var Ue=Oe,xe={props:{currentVariant:String},emits:["openModal","setCurrentSearchTerm"],setup(e,{emit:n}){(0,r.iH)("");const t=(0,i.yj)(),a=(0,i.tv)(),c=(0,r.iH)(null);v(t.params.term);const l=(0,o.Fl)((()=>{if(t.params.term)return c.value=t.params.term,m(c.value)}));function u(e){n("openModal",e)}function v(e){n("setCurrentSearchTerm",e)}function m(e){let n=[],t=new Set,a=e.replace("#","").toLowerCase(),o=s.c.filter((function(e){return e.name.includes(a.replace(" ","-"))})),r=s.c.filter((function(e){return e.keywords.includes(a)}));n=n.concat(o,r),n.forEach((e=>{t.add(e)}));let i=[...t];return i}return a.beforeEach(((e,n)=>{"Search"==e.name?v(e.params.term):v("")})),(n,t)=>((0,o.wg)(),(0,o.j4)(ce,{icons:(0,r.SU)(l),variant:e.currentVariant,onOpenModal:u},null,8,["icons","variant"]))}};const Be=xe;var We=Be;const ze={class:"content text-center"},Ie=(0,o._)("h1",null,"404",-1),Ee=(0,o._)("p",null,"Page or icon not found.",-1);var Ae={setup(e){return(e,n)=>((0,o.wg)(),(0,o.iD)("div",ze,[(0,o.Wm)(w,{icon:"heart-break",variant:"two-color",class:"not-found-icon"}),Ie,Ee]))}};const qe=Ae;var Fe=qe;const Ne=u.b,Pe=s.c,Ye=[{path:"/",name:"Home",component:Ve,meta:{title:"All Icons",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/category/:category",name:"Category",component:Ue,meta:{title:"Category",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/search/:term",name:"Search",component:We,meta:{title:"Search",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Fe,meta:{title:"Page or Icon Not Found",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}}],Ke=(0,i.p7)({history:(0,i.PO)("/"),routes:Ye});Ke.beforeEach(((e,n,t)=>{let a="",o="Brand Icon Browser - The University of Iowa",r=null,i=null;const c=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),s=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),l=n.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(c){if(e.hash){let n=e.hash.replace("#","").toLowerCase();r=Pe.find((e=>e.name===n))}e.params.category&&(i=Ne.find((n=>n.slug===e.params.category))),a=r?r.name:i?i.label:c.meta.title}else a=l?l.meta.title:c.meta.title;if(document.title=a+" | "+o,Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!s)return t();s.meta.metaTags.map((e=>{const n=document.createElement("meta");return Object.keys(e).forEach((t=>{n.setAttribute(t,e[t])})),n.setAttribute("data-vue-router-controlled",""),n})).forEach((e=>document.head.appendChild(e))),t()}));var Ge=Ke;(0,a.ri)(He).use(Ge).mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var c=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[s])}))?a.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(u--,1);var l=o();void 0!==l&&(n=l)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,i=a[0],c=a[1],s=a[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(s)var u=s(t)}for(n&&n(a);l<i.length;l++)r=i[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},a=self["webpackChunkbrand_icon_browser"]=self["webpackChunkbrand_icon_browser"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(6835)}));a=t.O(a)})();
//# sourceMappingURL=app.2083e556.js.map